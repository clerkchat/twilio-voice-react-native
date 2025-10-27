const {
  AndroidConfig,
  withAndroidManifest,
  withMainApplication,
  withMainActivity,
} = require('@expo/config-plugins');
const {
  findFunctionIndexes,
  appendToClass,
  prependToClass,
  prependToFunction,
  appendToFunction,
} = require('./kotlinUtils.cjs');

const modApplicationImports = [
  'com.twiliovoicereactnative.VoiceApplicationProxy',
];
const modApplicationValDeclaration = 'private val voiceApplicationProxy';
const modApplicationVal = `
  ${modApplicationValDeclaration}: VoiceApplicationProxy = VoiceApplicationProxy(this)
`;
const modApplicationOnCreateProxyCall = `
    voiceApplicationProxy.onCreate()
`;
const modApplicationOnCreateFn = `
  override fun onCreate() {
    super.onCreate()
    ${modApplicationOnCreateProxyCall}
  }
`;
const modApplicationOnTerminateProxyCall = `
    voiceApplicationProxy.onTerminate()
`;
const modApplicationOnTerminateFn = `
  override fun onTerminate() {
    ${modApplicationOnTerminateProxyCall}
    super.onTerminate()
  }
`;

const modActivityImports = [
  'com.twiliovoicereactnative.VoiceActivityProxy',
  'android.Manifest',
  'android.content.Intent',
  'android.os.Bundle',
  'android.widget.Toast',
];
const modActivityValDeclaration = 'private val activityProxy';
const modActivityVal = `
  ${modActivityValDeclaration} = VoiceActivityProxy(
      this
  ) { permission: String ->
      if (Manifest.permission.RECORD_AUDIO == permission) {
          Toast.makeText(this@MainActivity, "Microphone permissions needed", Toast.LENGTH_LONG).show()
      }
  }
`;
const modActivityOnCreateProxyCall = `
    activityProxy.onCreate(savedInstanceState)
`;
const modActivityOnCreateFn = `
  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(null)
    ${modActivityOnCreateProxyCall}
  }
`;
const modActivityOnDestroyProxyCall = `
    activityProxy.onDestroy()
`;
const modActivityOnDestroyFn = `
  override fun onDestroy() {
    ${modActivityOnDestroyProxyCall}
    super.onDestroy()
  }
`;
const modActivityOnNewIntentProxyCall = `
    activityProxy.onNewIntent(intent)
`;
const modActivityOnNewIntentFn = `
  override fun onNewIntent(intent: Intent) {
    super.onNewIntent(intent)
    ${modActivityOnNewIntentProxyCall}
  }
`;

function withTwilioVoiceAndroid(config) {
  // Add required permissions
  config = AndroidConfig.Permissions.withPermissions(config, [
    'android.permission.RECORD_AUDIO',
    'android.permission.MODIFY_AUDIO_SETTINGS',
    'android.permission.ACCESS_NETWORK_STATE',
    'android.permission.ACCESS_WIFI_STATE',
    'android.permission.BLUETOOTH',
    'android.permission.BLUETOOTH_CONNECT',
    'android.permission.FOREGROUND_SERVICE',
    'android.permission.FOREGROUND_SERVICE_MICROPHONE',
    'android.permission.FOREGROUND_SERVICE_PHONE_CALL',
    'android.permission.POST_NOTIFICATIONS',
    'android.permission.VIBRATE',
    'android.permission.WAKE_LOCK',
  ]);

  // Add services to AndroidManifest.xml
  config = withAndroidManifest(config, (config) => {
    const androidManifest = config.modResults;
    const mainApplication =
      AndroidConfig.Manifest.getMainApplicationOrThrow(androidManifest);

    // Add VoiceFirebaseMessagingService
    if (
      !mainApplication.service?.some(
        (service) =>
          service.$?.['android:name'] ===
          'com.twiliovoicereactnative.VoiceFirebaseMessagingService'
      )
    ) {
      if (!mainApplication.service) {
        mainApplication.service = [];
      }

      mainApplication.service.push({
        '$': {
          'android:name':
            'com.twiliovoicereactnative.VoiceFirebaseMessagingService',
          'android:exported': 'false',
        },
        'intent-filter': [
          {
            action: [
              {
                $: {
                  'android:name': 'com.google.firebase.MESSAGING_EVENT',
                },
              },
            ],
          },
        ],
      });
    }

    // Add VoiceService
    if (
      !mainApplication.service?.some(
        (service) =>
          service.$?.['android:name'] ===
          'com.twiliovoicereactnative.VoiceService'
      )
    ) {
      if (!mainApplication.service) {
        mainApplication.service = [];
      }

      mainApplication.service.push({
        $: {
          'android:name': 'com.twiliovoicereactnative.VoiceService',
          'android:exported': 'false',
          'android:stopWithTask': 'false',
          'android:foregroundServiceType': 'phoneCall',
        },
      });
    }

    return config;
  });

  config = withMainApplication(config, (config) => {
    const mainApplication = config.modResults;

    let contents = addImports(
      mainApplication.contents,
      modApplicationImports,
      false
    );

    if (!contents.includes(modApplicationValDeclaration)) {
      contents = prependToClass(contents, 'MainApplication', modApplicationVal);
    }

    const createFunIndexes = findFunctionIndexes(contents, 'onCreate');
    const skipCreateFun =
      !!createFunIndexes &&
      contents
        .substring(
          createFunIndexes.openingBraceIndex,
          createFunIndexes.closingBraceIndex
        )
        .includes(modApplicationOnCreateProxyCall);
    if (!skipCreateFun) {
      contents = createFunIndexes
        ? appendToFunction(
            contents,
            'onCreate',
            modApplicationOnCreateProxyCall
          )
        : appendToClass(contents, 'MainApplication', modApplicationOnCreateFn);
    }

    const terminateFunIndexes = findFunctionIndexes(contents, 'onTerminate');
    const skipTerminateFun =
      !!terminateFunIndexes &&
      contents
        .substring(
          terminateFunIndexes.openingBraceIndex,
          terminateFunIndexes.closingBraceIndex
        )
        .includes(modApplicationOnTerminateProxyCall);
    if (!skipTerminateFun) {
      contents = terminateFunIndexes
        ? prependToFunction(
            contents,
            'onTerminate',
            modApplicationOnTerminateProxyCall
          )
        : appendToClass(
            contents,
            'MainApplication',
            modApplicationOnTerminateFn
          );
    }

    return {
      ...config,
      modResults: {
        ...config.modResults,
        contents: contents,
      },
    };
  });

  config = withMainActivity(config, (config) => {
    const mainActivity = config.modResults;

    let contents = addImports(mainActivity.contents, modActivityImports, false);

    if (!contents.includes(modActivityValDeclaration)) {
      contents = prependToClass(contents, 'MainActivity', modActivityVal);
    }

    const createFunIndexes = findFunctionIndexes(contents, 'onCreate');
    const skipCreateFun =
      !!createFunIndexes &&
      contents
        .substring(
          createFunIndexes.openingBraceIndex,
          createFunIndexes.closingBraceIndex
        )
        .includes(modActivityOnCreateProxyCall);
    if (!skipCreateFun) {
      contents = createFunIndexes
        ? appendToFunction(contents, 'onCreate', modActivityOnCreateProxyCall)
        : appendToClass(contents, 'MainActivity', modActivityOnCreateFn);
    }

    const destroyFunIndexes = findFunctionIndexes(contents, 'onDestroy');
    const skipDestroyFun =
      !!destroyFunIndexes &&
      contents
        .substring(
          destroyFunIndexes.openingBraceIndex,
          destroyFunIndexes.closingBraceIndex
        )
        .includes(modActivityOnDestroyProxyCall);
    if (!skipDestroyFun) {
      contents = destroyFunIndexes
        ? prependToFunction(
            contents,
            'onDestroy',
            modActivityOnDestroyProxyCall
          )
        : appendToClass(contents, 'MainActivity', modActivityOnDestroyFn);
    }

    const newIntentFunIndexes = findFunctionIndexes(contents, 'onNewIntent');
    const skipNewIntentFun =
      !!newIntentFunIndexes &&
      contents
        .substring(
          newIntentFunIndexes.openingBraceIndex,
          newIntentFunIndexes.closingBraceIndex
        )
        .includes(modActivityOnNewIntentProxyCall);
    if (!skipNewIntentFun) {
      contents = newIntentFunIndexes
        ? appendToFunction(
            contents,
            'onNewIntent',
            modActivityOnNewIntentProxyCall
          )
        : appendToClass(contents, 'MainActivity', modActivityOnNewIntentFn);
    }

    return {
      ...config,
      modResults: {
        ...config.modResults,
        contents: contents,
      },
    };
  });

  return config;
}

function addImports(source, imports, isJava) {
  const lines = source.split('\n');
  const lineIndexWithPackageDeclaration = lines.findIndex((line) =>
    line.match(/^package .*;?$/)
  );
  for (const javaImport of imports) {
    if (!source.includes(javaImport)) {
      const importStatement = `import ${javaImport}${isJava ? ';' : ''}`;
      lines.splice(lineIndexWithPackageDeclaration + 2, 0, importStatement);
    }
  }
  return lines.join('\n');
}

module.exports = withTwilioVoiceAndroid;
