"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UnsupportedPlatformError = void 0;
var _TwilioError = require("./TwilioError");
/**
 * Error describing that the an unsupported platform other than Android
 * or iOS has been detected.
 *
 * @public
 */
class UnsupportedPlatformError extends _TwilioError.TwilioError {
  description = 'Unsupported platform error.';
  explanation = 'An unsupported platform has been detected.';
  constructor(message) {
    super(message);
    Object.setPrototypeOf(this, UnsupportedPlatformError.prototype);
    this.name = UnsupportedPlatformError.name;
  }
}
exports.UnsupportedPlatformError = UnsupportedPlatformError;
//# sourceMappingURL=UnsupportedPlatformError.js.map