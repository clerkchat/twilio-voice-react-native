"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.errorsByCode = exports.UserMediaErrors = exports.TwiMLErrors = exports.SignalingErrors = exports.ServerErrors = exports.SIPServerErrors = exports.RegistrationErrors = exports.MediaErrors = exports.MalformedRequestErrors = exports.GeneralErrors = exports.ForbiddenErrors = exports.ClientErrors = exports.AuthorizationErrors = void 0;
var _TwilioError = require("./TwilioError");
/**
 * This is a generated file. Any modifications here will be overwritten.
 * See scripts/errors.js.
 */
/**
 * @public
 * Authorization errors.
 */
let AuthorizationErrors = exports.AuthorizationErrors = void 0;
(function (_AuthorizationErrors) {
  class AccessTokenInvalid extends _TwilioError.TwilioError {
    /**
     * Not applicable.
     */
    causes = [];
    /**
     * Invalid access token
     */
    description = 'Invalid access token';
    /**
     * Twilio was unable to validate your Access Token
     */
    explanation = 'Twilio was unable to validate your Access Token';
    /**
     * AccessTokenInvalid
     */
    name = 'AccessTokenInvalid';
    /**
     * Not applicable.
     */
    solutions = [];
    constructor(message) {
      super(message, 20101);
      Object.setPrototypeOf(this, AuthorizationErrors.AccessTokenInvalid.prototype);
      const msg = typeof message === 'string' ? message : this.explanation;
      this.message = `${this.name} (${this.code}): ${msg}`;
    }
  }
  _AuthorizationErrors.AccessTokenInvalid = AccessTokenInvalid;
  class AccessTokenHeaderInvalid extends _TwilioError.TwilioError {
    /**
     * Not applicable.
     */
    causes = [];
    /**
     * Invalid access token header
     */
    description = 'Invalid access token header';
    /**
     * The header of the Access Token provided to the Twilio API was invalid
     */
    explanation = 'The header of the Access Token provided to the Twilio API was invalid';
    /**
     * AccessTokenHeaderInvalid
     */
    name = 'AccessTokenHeaderInvalid';
    /**
     * Not applicable.
     */
    solutions = [];
    constructor(message) {
      super(message, 20102);
      Object.setPrototypeOf(this, AuthorizationErrors.AccessTokenHeaderInvalid.prototype);
      const msg = typeof message === 'string' ? message : this.explanation;
      this.message = `${this.name} (${this.code}): ${msg}`;
    }
  }
  _AuthorizationErrors.AccessTokenHeaderInvalid = AccessTokenHeaderInvalid;
  class AccessTokenIssuerInvalid extends _TwilioError.TwilioError {
    /**
     * Not applicable.
     */
    causes = [];
    /**
     * Invalid access token issuer/subject
     */
    description = 'Invalid access token issuer/subject';
    /**
     * The issuer or subject of the Access Token provided to the Twilio API was invalid
     */
    explanation = 'The issuer or subject of the Access Token provided to the Twilio API was invalid';
    /**
     * AccessTokenIssuerInvalid
     */
    name = 'AccessTokenIssuerInvalid';
    /**
     * Not applicable.
     */
    solutions = [];
    constructor(message) {
      super(message, 20103);
      Object.setPrototypeOf(this, AuthorizationErrors.AccessTokenIssuerInvalid.prototype);
      const msg = typeof message === 'string' ? message : this.explanation;
      this.message = `${this.name} (${this.code}): ${msg}`;
    }
  }
  _AuthorizationErrors.AccessTokenIssuerInvalid = AccessTokenIssuerInvalid;
  class AccessTokenExpired extends _TwilioError.TwilioError {
    /**
     * Not applicable.
     */
    causes = [];
    /**
     * Access token expired or expiration date invalid
     */
    description = 'Access token expired or expiration date invalid';
    /**
     * The Access Token provided to the Twilio API has expired, the expiration time specified in the token was invalid, or the expiration time specified was too far in the future
     */
    explanation = 'The Access Token provided to the Twilio API has expired, the expiration time specified in the token was invalid, or the expiration time specified was too far in the future';
    /**
     * AccessTokenExpired
     */
    name = 'AccessTokenExpired';
    /**
     * Not applicable.
     */
    solutions = [];
    constructor(message) {
      super(message, 20104);
      Object.setPrototypeOf(this, AuthorizationErrors.AccessTokenExpired.prototype);
      const msg = typeof message === 'string' ? message : this.explanation;
      this.message = `${this.name} (${this.code}): ${msg}`;
    }
  }
  _AuthorizationErrors.AccessTokenExpired = AccessTokenExpired;
  class AccessTokenNotYetValid extends _TwilioError.TwilioError {
    /**
     * Not applicable.
     */
    causes = [];
    /**
     * Access token not yet valid
     */
    description = 'Access token not yet valid';
    /**
     * The Access Token provided to the Twilio API is not yet valid
     */
    explanation = 'The Access Token provided to the Twilio API is not yet valid';
    /**
     * AccessTokenNotYetValid
     */
    name = 'AccessTokenNotYetValid';
    /**
     * Not applicable.
     */
    solutions = [];
    constructor(message) {
      super(message, 20105);
      Object.setPrototypeOf(this, AuthorizationErrors.AccessTokenNotYetValid.prototype);
      const msg = typeof message === 'string' ? message : this.explanation;
      this.message = `${this.name} (${this.code}): ${msg}`;
    }
  }
  _AuthorizationErrors.AccessTokenNotYetValid = AccessTokenNotYetValid;
  class AccessTokenGrantsInvalid extends _TwilioError.TwilioError {
    /**
     * Not applicable.
     */
    causes = [];
    /**
     * Invalid access token grants
     */
    description = 'Invalid access token grants';
    /**
     * The Access Token signature and issuer were valid, but the grants specified in the token were invalid, unparseable, or did not authorize the action being requested
     */
    explanation = 'The Access Token signature and issuer were valid, but the grants specified in the token were invalid, unparseable, or did not authorize the action being requested';
    /**
     * AccessTokenGrantsInvalid
     */
    name = 'AccessTokenGrantsInvalid';
    /**
     * Not applicable.
     */
    solutions = [];
    constructor(message) {
      super(message, 20106);
      Object.setPrototypeOf(this, AuthorizationErrors.AccessTokenGrantsInvalid.prototype);
      const msg = typeof message === 'string' ? message : this.explanation;
      this.message = `${this.name} (${this.code}): ${msg}`;
    }
  }
  _AuthorizationErrors.AccessTokenGrantsInvalid = AccessTokenGrantsInvalid;
  class AccessTokenSignatureInvalid extends _TwilioError.TwilioError {
    /**
     * Not applicable.
     */
    causes = [];
    /**
     * Invalid access token signature
     */
    description = 'Invalid access token signature';
    /**
     * The signature for the Access Token provided was invalid.
     */
    explanation = 'The signature for the Access Token provided was invalid.';
    /**
     * AccessTokenSignatureInvalid
     */
    name = 'AccessTokenSignatureInvalid';
    /**
     * Not applicable.
     */
    solutions = [];
    constructor(message) {
      super(message, 20107);
      Object.setPrototypeOf(this, AuthorizationErrors.AccessTokenSignatureInvalid.prototype);
      const msg = typeof message === 'string' ? message : this.explanation;
      this.message = `${this.name} (${this.code}): ${msg}`;
    }
  }
  _AuthorizationErrors.AccessTokenSignatureInvalid = AccessTokenSignatureInvalid;
  class AuthenticationFailed extends _TwilioError.TwilioError {
    /**
     * Not applicable.
     */
    causes = [];
    /**
     * Authentication Failed
     */
    description = 'Authentication Failed';
    /**
     * The Authentication with the provided JWT failed
     */
    explanation = 'The Authentication with the provided JWT failed';
    /**
     * AuthenticationFailed
     */
    name = 'AuthenticationFailed';
    /**
     * Not applicable.
     */
    solutions = [];
    constructor(message) {
      super(message, 20151);
      Object.setPrototypeOf(this, AuthorizationErrors.AuthenticationFailed.prototype);
      const msg = typeof message === 'string' ? message : this.explanation;
      this.message = `${this.name} (${this.code}): ${msg}`;
    }
  }
  _AuthorizationErrors.AuthenticationFailed = AuthenticationFailed;
  class ExpirationTimeExceedsMaxTimeAllowed extends _TwilioError.TwilioError {
    /**
     * Not applicable.
     */
    causes = [];
    /**
     * Expiration Time Exceeds Maximum Time Allowed
     */
    description = 'Expiration Time Exceeds Maximum Time Allowed';
    /**
     * The expiration time provided when creating the JWT exceeds the maximum duration allowed
     */
    explanation = 'The expiration time provided when creating the JWT exceeds the maximum duration allowed';
    /**
     * ExpirationTimeExceedsMaxTimeAllowed
     */
    name = 'ExpirationTimeExceedsMaxTimeAllowed';
    /**
     * Not applicable.
     */
    solutions = [];
    constructor(message) {
      super(message, 20157);
      Object.setPrototypeOf(this, AuthorizationErrors.ExpirationTimeExceedsMaxTimeAllowed.prototype);
      const msg = typeof message === 'string' ? message : this.explanation;
      this.message = `${this.name} (${this.code}): ${msg}`;
    }
  }
  _AuthorizationErrors.ExpirationTimeExceedsMaxTimeAllowed = ExpirationTimeExceedsMaxTimeAllowed;
  class AuthorizationError extends _TwilioError.TwilioError {
    /**
     * Not applicable.
     */
    causes = [];
    /**
     * Authorization error
     */
    description = 'Authorization error';
    /**
     * The request requires user authentication. The server understood the request, but is refusing to fulfill it.
     */
    explanation = 'The request requires user authentication. The server understood the request, but is refusing to fulfill it.';
    /**
     * AuthorizationError
     */
    name = 'AuthorizationError';
    /**
     * Not applicable.
     */
    solutions = [];
    constructor(message) {
      super(message, 31201);
      Object.setPrototypeOf(this, AuthorizationErrors.AuthorizationError.prototype);
      const msg = typeof message === 'string' ? message : this.explanation;
      this.message = `${this.name} (${this.code}): ${msg}`;
    }
  }
  _AuthorizationErrors.AuthorizationError = AuthorizationError;
  class RateExceededError extends _TwilioError.TwilioError {
    /**
     * Rate limit exceeded.
     */
    causes = ['Rate limit exceeded.'];
    /**
     * Rate exceeded authorized limit.
     */
    description = 'Rate exceeded authorized limit.';
    /**
     * The request performed exceeds the authorized limit.
     */
    explanation = 'The request performed exceeds the authorized limit.';
    /**
     * RateExceededError
     */
    name = 'RateExceededError';
    /**
     * Ensure message send rate does not exceed authorized limits.
     */
    solutions = ['Ensure message send rate does not exceed authorized limits.'];
    constructor(message) {
      super(message, 31206);
      Object.setPrototypeOf(this, AuthorizationErrors.RateExceededError.prototype);
      const msg = typeof message === 'string' ? message : this.explanation;
      this.message = `${this.name} (${this.code}): ${msg}`;
    }
  }
  _AuthorizationErrors.RateExceededError = RateExceededError;
  class CallMessageEventTypeInvalidError extends _TwilioError.TwilioError {
    /**
     * The Call Message Event Type is invalid and is not understood by Twilio Voice.
     */
    causes = ['The Call Message Event Type is invalid and is not understood by Twilio Voice.'];
    /**
     * Call Message Event Type is invalid.
     */
    description = 'Call Message Event Type is invalid.';
    /**
     * The Call Message Event Type is invalid and is not understood by Twilio Voice.
     */
    explanation = 'The Call Message Event Type is invalid and is not understood by Twilio Voice.';
    /**
     * CallMessageEventTypeInvalidError
     */
    name = 'CallMessageEventTypeInvalidError';
    /**
     * Ensure the Call Message Event Type is Valid and understood by Twilio Voice and try again.
     */
    solutions = ['Ensure the Call Message Event Type is Valid and understood by Twilio Voice and try again.'];
    constructor(message) {
      super(message, 31210);
      Object.setPrototypeOf(this, AuthorizationErrors.CallMessageEventTypeInvalidError.prototype);
      const msg = typeof message === 'string' ? message : this.explanation;
      this.message = `${this.name} (${this.code}): ${msg}`;
    }
  }
  _AuthorizationErrors.CallMessageEventTypeInvalidError = CallMessageEventTypeInvalidError;
  class CallMessageUnexpectedStateError extends _TwilioError.TwilioError {
    /**
     * The Call should be at least in the ringing state to subscribe and send Call Message.
     */
    causes = ['The Call should be at least in the ringing state to subscribe and send Call Message.'];
    /**
     * Call is not in the expected state.
     */
    description = 'Call is not in the expected state.';
    /**
     * The Call should be at least in the ringing state to send Call Message.
     */
    explanation = 'The Call should be at least in the ringing state to send Call Message.';
    /**
     * CallMessageUnexpectedStateError
     */
    name = 'CallMessageUnexpectedStateError';
    /**
     * Ensure the Call is at least in the ringing state and the subscription is successful and try again.
     */
    solutions = ['Ensure the Call is at least in the ringing state and the subscription is successful and try again.'];
    constructor(message) {
      super(message, 31211);
      Object.setPrototypeOf(this, AuthorizationErrors.CallMessageUnexpectedStateError.prototype);
      const msg = typeof message === 'string' ? message : this.explanation;
      this.message = `${this.name} (${this.code}): ${msg}`;
    }
  }
  _AuthorizationErrors.CallMessageUnexpectedStateError = CallMessageUnexpectedStateError;
  class PayloadSizeExceededError extends _TwilioError.TwilioError {
    /**
     * The payload size of Call Message Event exceeds the authorized limit.
     */
    causes = ['The payload size of Call Message Event exceeds the authorized limit.'];
    /**
     * Call Message Event Payload size exceeded authorized limit.
     */
    description = 'Call Message Event Payload size exceeded authorized limit.';
    /**
     * The request performed to send a Call Message Event exceeds the payload size authorized limit
     */
    explanation = 'The request performed to send a Call Message Event exceeds the payload size authorized limit';
    /**
     * PayloadSizeExceededError
     */
    name = 'PayloadSizeExceededError';
    /**
     * Reduce payload size of Call Message Event to be within the authorized limit and try again.
     */
    solutions = ['Reduce payload size of Call Message Event to be within the authorized limit and try again.'];
    constructor(message) {
      super(message, 31212);
      Object.setPrototypeOf(this, AuthorizationErrors.PayloadSizeExceededError.prototype);
      const msg = typeof message === 'string' ? message : this.explanation;
      this.message = `${this.name} (${this.code}): ${msg}`;
    }
  }
  _AuthorizationErrors.PayloadSizeExceededError = PayloadSizeExceededError;
  class AccessTokenRejected extends _TwilioError.TwilioError {
    /**
     * Not applicable.
     */
    causes = [];
    /**
     * Token authentication is rejected by authentication service
     */
    description = 'Token authentication is rejected by authentication service';
    /**
     * The authentication service has rejected the provided Access Token. To check whether the Access Token is structurally correct, you can use the tools available at https://jwt.io. For the details of Twilio's specific Access Token implementation including the grant format, check https://www.twilio.com/docs/iam/access-tokens.
     */
    explanation = 'The authentication service has rejected the provided Access Token. To check whether the Access Token is structurally correct, you can use the tools available at https://jwt.io. For the details of Twilio\'s specific Access Token implementation including the grant format, check https://www.twilio.com/docs/iam/access-tokens.';
    /**
     * AccessTokenRejected
     */
    name = 'AccessTokenRejected';
    /**
     * Not applicable.
     */
    solutions = [];
    constructor(message) {
      super(message, 51007);
      Object.setPrototypeOf(this, AuthorizationErrors.AccessTokenRejected.prototype);
      const msg = typeof message === 'string' ? message : this.explanation;
      this.message = `${this.name} (${this.code}): ${msg}`;
    }
  }
  _AuthorizationErrors.AccessTokenRejected = AccessTokenRejected;
})(AuthorizationErrors || (exports.AuthorizationErrors = AuthorizationErrors = {}));
/**
 * @public
 * Forbidden errors.
 */
let ForbiddenErrors = exports.ForbiddenErrors = void 0;
(function (_ForbiddenErrors) {
  class Forbidden extends _TwilioError.TwilioError {
    /**
     * Not applicable.
     */
    causes = [];
    /**
     * 403 Forbidden
     */
    description = '403 Forbidden';
    /**
     * The account lacks permission to access the Twilio API. Typically this means the account has been suspended or closed. For assistance, please contact support
     */
    explanation = 'The account lacks permission to access the Twilio API. Typically this means the account has been suspended or closed. For assistance, please contact support';
    /**
     * Forbidden
     */
    name = 'Forbidden';
    /**
     * Not applicable.
     */
    solutions = [];
    constructor(message) {
      super(message, 20403);
      Object.setPrototypeOf(this, ForbiddenErrors.Forbidden.prototype);
      const msg = typeof message === 'string' ? message : this.explanation;
      this.message = `${this.name} (${this.code}): ${msg}`;
    }
  }
  _ForbiddenErrors.Forbidden = Forbidden;
})(ForbiddenErrors || (exports.ForbiddenErrors = ForbiddenErrors = {}));
/**
 * @public
 * Client errors.
 */
let ClientErrors = exports.ClientErrors = void 0;
(function (_ClientErrors) {
  class BadRequest extends _TwilioError.TwilioError {
    /**
     * Not applicable.
     */
    causes = [];
    /**
     * Bad Request (HTTP/SIP)
     */
    description = 'Bad Request (HTTP/SIP)';
    /**
     * The request could not be understood due to malformed syntax.
     */
    explanation = 'The request could not be understood due to malformed syntax.';
    /**
     * BadRequest
     */
    name = 'BadRequest';
    /**
     * Not applicable.
     */
    solutions = [];
    constructor(message) {
      super(message, 31400);
      Object.setPrototypeOf(this, ClientErrors.BadRequest.prototype);
      const msg = typeof message === 'string' ? message : this.explanation;
      this.message = `${this.name} (${this.code}): ${msg}`;
    }
  }
  _ClientErrors.BadRequest = BadRequest;
  class Forbidden extends _TwilioError.TwilioError {
    /**
     * Not applicable.
     */
    causes = [];
    /**
     * Forbidden (HTTP/SIP)
     */
    description = 'Forbidden (HTTP/SIP)';
    /**
     * The server understood the request, but is refusing to fulfill it.
     */
    explanation = 'The server understood the request, but is refusing to fulfill it.';
    /**
     * Forbidden
     */
    name = 'Forbidden';
    /**
     * Not applicable.
     */
    solutions = [];
    constructor(message) {
      super(message, 31403);
      Object.setPrototypeOf(this, ClientErrors.Forbidden.prototype);
      const msg = typeof message === 'string' ? message : this.explanation;
      this.message = `${this.name} (${this.code}): ${msg}`;
    }
  }
  _ClientErrors.Forbidden = Forbidden;
  class NotFound extends _TwilioError.TwilioError {
    /**
     * The outbound call was made to an invalid phone number.
     * The TwiML application sid is missing a Voice URL.
     */
    causes = ['The outbound call was made to an invalid phone number.', 'The TwiML application sid is missing a Voice URL.'];
    /**
     * Not Found (HTTP/SIP)
     */
    description = 'Not Found (HTTP/SIP)';
    /**
     * The server has not found anything matching the request.
     */
    explanation = 'The server has not found anything matching the request.';
    /**
     * NotFound
     */
    name = 'NotFound';
    /**
     * Ensure the phone number dialed is valid.
     * Ensure the TwiML application is configured correctly with a Voice URL link.
     */
    solutions = ['Ensure the phone number dialed is valid.', 'Ensure the TwiML application is configured correctly with a Voice URL link.'];
    constructor(message) {
      super(message, 31404);
      Object.setPrototypeOf(this, ClientErrors.NotFound.prototype);
      const msg = typeof message === 'string' ? message : this.explanation;
      this.message = `${this.name} (${this.code}): ${msg}`;
    }
  }
  _ClientErrors.NotFound = NotFound;
  class RequestTimeout extends _TwilioError.TwilioError {
    /**
     * Not applicable.
     */
    causes = [];
    /**
     * Request Timeout (HTTP/SIP)
     */
    description = 'Request Timeout (HTTP/SIP)';
    /**
     * A request timeout occurred.
     */
    explanation = 'A request timeout occurred.';
    /**
     * RequestTimeout
     */
    name = 'RequestTimeout';
    /**
     * Not applicable.
     */
    solutions = [];
    constructor(message) {
      super(message, 31408);
      Object.setPrototypeOf(this, ClientErrors.RequestTimeout.prototype);
      const msg = typeof message === 'string' ? message : this.explanation;
      this.message = `${this.name} (${this.code}): ${msg}`;
    }
  }
  _ClientErrors.RequestTimeout = RequestTimeout;
  class Conflict extends _TwilioError.TwilioError {
    /**
     * Not applicable.
     */
    causes = [];
    /**
     * Conflict (HTTP)
     */
    description = 'Conflict (HTTP)';
    /**
     * The request could not be processed because of a conflict in the current state of the resource. Another request may be in progress.
     */
    explanation = 'The request could not be processed because of a conflict in the current state of the resource. Another request may be in progress.';
    /**
     * Conflict
     */
    name = 'Conflict';
    /**
     * Not applicable.
     */
    solutions = [];
    constructor(message) {
      super(message, 31409);
      Object.setPrototypeOf(this, ClientErrors.Conflict.prototype);
      const msg = typeof message === 'string' ? message : this.explanation;
      this.message = `${this.name} (${this.code}): ${msg}`;
    }
  }
  _ClientErrors.Conflict = Conflict;
  class UpgradeRequired extends _TwilioError.TwilioError {
    /**
     * Not applicable.
     */
    causes = [];
    /**
     * Upgrade Required (HTTP)
     */
    description = 'Upgrade Required (HTTP)';
    /**
     * This error is raised when an HTTP 426 response is received. The reason for this is most likely because of an incompatible TLS version. To mitigate this, you may need to upgrade the OS or download a more recent version of the SDK.
     */
    explanation = 'This error is raised when an HTTP 426 response is received. The reason for this is most likely because of an incompatible TLS version. To mitigate this, you may need to upgrade the OS or download a more recent version of the SDK.';
    /**
     * UpgradeRequired
     */
    name = 'UpgradeRequired';
    /**
     * Not applicable.
     */
    solutions = [];
    constructor(message) {
      super(message, 31426);
      Object.setPrototypeOf(this, ClientErrors.UpgradeRequired.prototype);
      const msg = typeof message === 'string' ? message : this.explanation;
      this.message = `${this.name} (${this.code}): ${msg}`;
    }
  }
  _ClientErrors.UpgradeRequired = UpgradeRequired;
  class TooManyRequests extends _TwilioError.TwilioError {
    /**
     * Not applicable.
     */
    causes = [];
    /**
     * Too Many Requests (HTTP)
     */
    description = 'Too Many Requests (HTTP)';
    /**
     * Too many requests were sent in a given amount of time.
     */
    explanation = 'Too many requests were sent in a given amount of time.';
    /**
     * TooManyRequests
     */
    name = 'TooManyRequests';
    /**
     * Not applicable.
     */
    solutions = [];
    constructor(message) {
      super(message, 31429);
      Object.setPrototypeOf(this, ClientErrors.TooManyRequests.prototype);
      const msg = typeof message === 'string' ? message : this.explanation;
      this.message = `${this.name} (${this.code}): ${msg}`;
    }
  }
  _ClientErrors.TooManyRequests = TooManyRequests;
  class TemporarilyUnavailable extends _TwilioError.TwilioError {
    /**
     * Not applicable.
     */
    causes = [];
    /**
     * Temporarily Unavailable (SIP)
     */
    description = 'Temporarily Unavailable (SIP)';
    /**
     * The callee is currently unavailable.
     */
    explanation = 'The callee is currently unavailable.';
    /**
     * TemporarilyUnavailable
     */
    name = 'TemporarilyUnavailable';
    /**
     * Not applicable.
     */
    solutions = [];
    constructor(message) {
      super(message, 31480);
      Object.setPrototypeOf(this, ClientErrors.TemporarilyUnavailable.prototype);
      const msg = typeof message === 'string' ? message : this.explanation;
      this.message = `${this.name} (${this.code}): ${msg}`;
    }
  }
  _ClientErrors.TemporarilyUnavailable = TemporarilyUnavailable;
  class CallTransactionDoesNotExist extends _TwilioError.TwilioError {
    /**
     * Not applicable.
     */
    causes = [];
    /**
     * Call/Transaction Does Not Exist (SIP)
     */
    description = 'Call/Transaction Does Not Exist (SIP)';
    /**
     * The call no longer exists.
     */
    explanation = 'The call no longer exists.';
    /**
     * CallTransactionDoesNotExist
     */
    name = 'CallTransactionDoesNotExist';
    /**
     * Not applicable.
     */
    solutions = [];
    constructor(message) {
      super(message, 31481);
      Object.setPrototypeOf(this, ClientErrors.CallTransactionDoesNotExist.prototype);
      const msg = typeof message === 'string' ? message : this.explanation;
      this.message = `${this.name} (${this.code}): ${msg}`;
    }
  }
  _ClientErrors.CallTransactionDoesNotExist = CallTransactionDoesNotExist;
  class AddressIncomplete extends _TwilioError.TwilioError {
    /**
     * The outbound call was made with a phone number that has an invalid format.
     */
    causes = ['The outbound call was made with a phone number that has an invalid format.'];
    /**
     * Address Incomplete (SIP)
     */
    description = 'Address Incomplete (SIP)';
    /**
     * The provided phone number is malformed.
     */
    explanation = 'The provided phone number is malformed.';
    /**
     * AddressIncomplete
     */
    name = 'AddressIncomplete';
    /**
     * Ensure the phone number dialed is formatted correctly.
     */
    solutions = ['Ensure the phone number dialed is formatted correctly.'];
    constructor(message) {
      super(message, 31484);
      Object.setPrototypeOf(this, ClientErrors.AddressIncomplete.prototype);
      const msg = typeof message === 'string' ? message : this.explanation;
      this.message = `${this.name} (${this.code}): ${msg}`;
    }
  }
  _ClientErrors.AddressIncomplete = AddressIncomplete;
  class BusyHere extends _TwilioError.TwilioError {
    /**
     * Not applicable.
     */
    causes = [];
    /**
     * Busy Here (SIP)
     */
    description = 'Busy Here (SIP)';
    /**
     * The callee is busy.
     */
    explanation = 'The callee is busy.';
    /**
     * BusyHere
     */
    name = 'BusyHere';
    /**
     * Not applicable.
     */
    solutions = [];
    constructor(message) {
      super(message, 31486);
      Object.setPrototypeOf(this, ClientErrors.BusyHere.prototype);
      const msg = typeof message === 'string' ? message : this.explanation;
      this.message = `${this.name} (${this.code}): ${msg}`;
    }
  }
  _ClientErrors.BusyHere = BusyHere;
  class RequestTerminated extends _TwilioError.TwilioError {
    /**
     * Not applicable.
     */
    causes = [];
    /**
     * Request Terminated (SIP)
     */
    description = 'Request Terminated (SIP)';
    /**
     * The request has terminated as a result of a bye or cancel.
     */
    explanation = 'The request has terminated as a result of a bye or cancel.';
    /**
     * RequestTerminated
     */
    name = 'RequestTerminated';
    /**
     * Not applicable.
     */
    solutions = [];
    constructor(message) {
      super(message, 31487);
      Object.setPrototypeOf(this, ClientErrors.RequestTerminated.prototype);
      const msg = typeof message === 'string' ? message : this.explanation;
      this.message = `${this.name} (${this.code}): ${msg}`;
    }
  }
  _ClientErrors.RequestTerminated = RequestTerminated;
})(ClientErrors || (exports.ClientErrors = ClientErrors = {}));
/**
 * @public
 * Server errors.
 */
let ServerErrors = exports.ServerErrors = void 0;
(function (_ServerErrors) {
  class InternalServerError extends _TwilioError.TwilioError {
    /**
     * Not applicable.
     */
    causes = [];
    /**
     * Internal Server Error (HTTP/SIP)
     */
    description = 'Internal Server Error (HTTP/SIP)';
    /**
     * The server could not fulfill the request due to some unexpected condition.
     */
    explanation = 'The server could not fulfill the request due to some unexpected condition.';
    /**
     * InternalServerError
     */
    name = 'InternalServerError';
    /**
     * Not applicable.
     */
    solutions = [];
    constructor(message) {
      super(message, 31500);
      Object.setPrototypeOf(this, ServerErrors.InternalServerError.prototype);
      const msg = typeof message === 'string' ? message : this.explanation;
      this.message = `${this.name} (${this.code}): ${msg}`;
    }
  }
  _ServerErrors.InternalServerError = InternalServerError;
  class BadGateway extends _TwilioError.TwilioError {
    /**
     * Not applicable.
     */
    causes = [];
    /**
     * Bad Gateway (HTTP/SIP)
     */
    description = 'Bad Gateway (HTTP/SIP)';
    /**
     * The server is acting as a gateway or proxy, and received an invalid response from a downstream server while attempting to fulfill the request.
     */
    explanation = 'The server is acting as a gateway or proxy, and received an invalid response from a downstream server while attempting to fulfill the request.';
    /**
     * BadGateway
     */
    name = 'BadGateway';
    /**
     * Not applicable.
     */
    solutions = [];
    constructor(message) {
      super(message, 31502);
      Object.setPrototypeOf(this, ServerErrors.BadGateway.prototype);
      const msg = typeof message === 'string' ? message : this.explanation;
      this.message = `${this.name} (${this.code}): ${msg}`;
    }
  }
  _ServerErrors.BadGateway = BadGateway;
  class ServiceUnavailable extends _TwilioError.TwilioError {
    /**
     * Not applicable.
     */
    causes = [];
    /**
     * Service Unavailable (HTTP/SIP)
     */
    description = 'Service Unavailable (HTTP/SIP)';
    /**
     * The server is currently unable to handle the request due to a temporary overloading or maintenance of the server. This error can also be caused by the Application SID provided in the access token pointing to an inaccessible URL.
     */
    explanation = 'The server is currently unable to handle the request due to a temporary overloading or maintenance of the server. This error can also be caused by the Application SID provided in the access token pointing to an inaccessible URL.';
    /**
     * ServiceUnavailable
     */
    name = 'ServiceUnavailable';
    /**
     * Not applicable.
     */
    solutions = [];
    constructor(message) {
      super(message, 31503);
      Object.setPrototypeOf(this, ServerErrors.ServiceUnavailable.prototype);
      const msg = typeof message === 'string' ? message : this.explanation;
      this.message = `${this.name} (${this.code}): ${msg}`;
    }
  }
  _ServerErrors.ServiceUnavailable = ServiceUnavailable;
  class GatewayTimeout extends _TwilioError.TwilioError {
    /**
     * Not applicable.
     */
    causes = [];
    /**
     * Gateway Timeout (HTTP/SIP)
     */
    description = 'Gateway Timeout (HTTP/SIP)';
    /**
     * The server, while acting as a gateway or proxy, did not receive a timely response from an upstream server.
     */
    explanation = 'The server, while acting as a gateway or proxy, did not receive a timely response from an upstream server.';
    /**
     * GatewayTimeout
     */
    name = 'GatewayTimeout';
    /**
     * Not applicable.
     */
    solutions = [];
    constructor(message) {
      super(message, 31504);
      Object.setPrototypeOf(this, ServerErrors.GatewayTimeout.prototype);
      const msg = typeof message === 'string' ? message : this.explanation;
      this.message = `${this.name} (${this.code}): ${msg}`;
    }
  }
  _ServerErrors.GatewayTimeout = GatewayTimeout;
  class DNSResolutionError extends _TwilioError.TwilioError {
    /**
     * Not applicable.
     */
    causes = [];
    /**
     * DNS Resolution Error (HTTP/SIP)
     */
    description = 'DNS Resolution Error (HTTP/SIP)';
    /**
     * Could not connect to the server.
     */
    explanation = 'Could not connect to the server.';
    /**
     * DNSResolutionError
     */
    name = 'DNSResolutionError';
    /**
     * Not applicable.
     */
    solutions = [];
    constructor(message) {
      super(message, 31530);
      Object.setPrototypeOf(this, ServerErrors.DNSResolutionError.prototype);
      const msg = typeof message === 'string' ? message : this.explanation;
      this.message = `${this.name} (${this.code}): ${msg}`;
    }
  }
  _ServerErrors.DNSResolutionError = DNSResolutionError;
})(ServerErrors || (exports.ServerErrors = ServerErrors = {}));
/**
 * @public
 * SIPServer errors.
 */
let SIPServerErrors = exports.SIPServerErrors = void 0;
(function (_SIPServerErrors) {
  class BusyEverywhere extends _TwilioError.TwilioError {
    /**
     * Not applicable.
     */
    causes = [];
    /**
     * Busy Everywhere (SIP)
     */
    description = 'Busy Everywhere (SIP)';
    /**
     * All possible destinations are busy.
     */
    explanation = 'All possible destinations are busy.';
    /**
     * BusyEverywhere
     */
    name = 'BusyEverywhere';
    /**
     * Not applicable.
     */
    solutions = [];
    constructor(message) {
      super(message, 31600);
      Object.setPrototypeOf(this, SIPServerErrors.BusyEverywhere.prototype);
      const msg = typeof message === 'string' ? message : this.explanation;
      this.message = `${this.name} (${this.code}): ${msg}`;
    }
  }
  _SIPServerErrors.BusyEverywhere = BusyEverywhere;
  class Decline extends _TwilioError.TwilioError {
    /**
     * Not applicable.
     */
    causes = [];
    /**
     * Decline (SIP)
     */
    description = 'Decline (SIP)';
    /**
     * The callee does not wish to participate in the call.
     */
    explanation = 'The callee does not wish to participate in the call.';
    /**
     * Decline
     */
    name = 'Decline';
    /**
     * Not applicable.
     */
    solutions = [];
    constructor(message) {
      super(message, 31603);
      Object.setPrototypeOf(this, SIPServerErrors.Decline.prototype);
      const msg = typeof message === 'string' ? message : this.explanation;
      this.message = `${this.name} (${this.code}): ${msg}`;
    }
  }
  _SIPServerErrors.Decline = Decline;
  class DoesNotExistAnywhere extends _TwilioError.TwilioError {
    /**
     * Not applicable.
     */
    causes = [];
    /**
     * Does Not Exist Anywhere (SIP)
     */
    description = 'Does Not Exist Anywhere (SIP)';
    /**
     * The requested callee does not exist anywhere.
     */
    explanation = 'The requested callee does not exist anywhere.';
    /**
     * DoesNotExistAnywhere
     */
    name = 'DoesNotExistAnywhere';
    /**
     * Not applicable.
     */
    solutions = [];
    constructor(message) {
      super(message, 31604);
      Object.setPrototypeOf(this, SIPServerErrors.DoesNotExistAnywhere.prototype);
      const msg = typeof message === 'string' ? message : this.explanation;
      this.message = `${this.name} (${this.code}): ${msg}`;
    }
  }
  _SIPServerErrors.DoesNotExistAnywhere = DoesNotExistAnywhere;
})(SIPServerErrors || (exports.SIPServerErrors = SIPServerErrors = {}));
/**
 * @public
 * TwiML errors.
 */
let TwiMLErrors = exports.TwiMLErrors = void 0;
(function (_TwiMLErrors) {
  class InvalidApplicationSid extends _TwilioError.TwilioError {
    /**
     * Not applicable.
     */
    causes = [];
    /**
     * Invalid ApplicationSid
     */
    description = 'Invalid ApplicationSid';
    /**
     * You attempted to initiate an outbound phone call with an invalid ApplicationSid. The application may not exist anymore or may not be available within your account
     */
    explanation = 'You attempted to initiate an outbound phone call with an invalid ApplicationSid. The application may not exist anymore or may not be available within your account';
    /**
     * InvalidApplicationSid
     */
    name = 'InvalidApplicationSid';
    /**
     * Not applicable.
     */
    solutions = [];
    constructor(message) {
      super(message, 21218);
      Object.setPrototypeOf(this, TwiMLErrors.InvalidApplicationSid.prototype);
      const msg = typeof message === 'string' ? message : this.explanation;
      this.message = `${this.name} (${this.code}): ${msg}`;
    }
  }
  _TwiMLErrors.InvalidApplicationSid = InvalidApplicationSid;
})(TwiMLErrors || (exports.TwiMLErrors = TwiMLErrors = {}));
/**
 * @public
 * General errors.
 */
let GeneralErrors = exports.GeneralErrors = void 0;
(function (_GeneralErrors) {
  class ConnectionError extends _TwilioError.TwilioError {
    /**
     * Not applicable.
     */
    causes = [];
    /**
     * Connection error
     */
    description = 'Connection error';
    /**
     * A connection error occurred during the call
     */
    explanation = 'A connection error occurred during the call';
    /**
     * ConnectionError
     */
    name = 'ConnectionError';
    /**
     * Not applicable.
     */
    solutions = [];
    constructor(message) {
      super(message, 31005);
      Object.setPrototypeOf(this, GeneralErrors.ConnectionError.prototype);
      const msg = typeof message === 'string' ? message : this.explanation;
      this.message = `${this.name} (${this.code}): ${msg}`;
    }
  }
  _GeneralErrors.ConnectionError = ConnectionError;
  class CallCancelledError extends _TwilioError.TwilioError {
    /**
     * The incoming call was cancelled because it was not answered in time or it was accepted/rejected by another application instance registered with the same identity.
     */
    causes = ['The incoming call was cancelled because it was not answered in time or it was accepted/rejected by another application instance registered with the same identity.'];
    /**
     * Call cancelled
     */
    description = 'Call cancelled';
    /**
     * Unable to answer because the call has ended
     */
    explanation = 'Unable to answer because the call has ended';
    /**
     * CallCancelledError
     */
    name = 'CallCancelledError';
    /**
     * Not applicable.
     */
    solutions = [];
    constructor(message) {
      super(message, 31008);
      Object.setPrototypeOf(this, GeneralErrors.CallCancelledError.prototype);
      const msg = typeof message === 'string' ? message : this.explanation;
      this.message = `${this.name} (${this.code}): ${msg}`;
    }
  }
  _GeneralErrors.CallCancelledError = CallCancelledError;
  class TransportError extends _TwilioError.TwilioError {
    /**
     * Not applicable.
     */
    causes = [];
    /**
     * Transport error
     */
    description = 'Transport error';
    /**
     * No transport available to send or receive messages
     */
    explanation = 'No transport available to send or receive messages';
    /**
     * TransportError
     */
    name = 'TransportError';
    /**
     * Not applicable.
     */
    solutions = [];
    constructor(message) {
      super(message, 31009);
      Object.setPrototypeOf(this, GeneralErrors.TransportError.prototype);
      const msg = typeof message === 'string' ? message : this.explanation;
      this.message = `${this.name} (${this.code}): ${msg}`;
    }
  }
  _GeneralErrors.TransportError = TransportError;
})(GeneralErrors || (exports.GeneralErrors = GeneralErrors = {}));
/**
 * @public
 * MalformedRequest errors.
 */
let MalformedRequestErrors = exports.MalformedRequestErrors = void 0;
(function (_MalformedRequestErrors) {
  class MalformedRequestError extends _TwilioError.TwilioError {
    /**
     * Invalid content or MessageType passed to sendMessage method.
     */
    causes = ['Invalid content or MessageType passed to sendMessage method.'];
    /**
     * The request had malformed syntax.
     */
    description = 'The request had malformed syntax.';
    /**
     * The request could not be understood due to malformed syntax.
     */
    explanation = 'The request could not be understood due to malformed syntax.';
    /**
     * MalformedRequestError
     */
    name = 'MalformedRequestError';
    /**
     * Ensure content and MessageType passed to sendMessage method are valid.
     */
    solutions = ['Ensure content and MessageType passed to sendMessage method are valid.'];
    constructor(message) {
      super(message, 31100);
      Object.setPrototypeOf(this, MalformedRequestErrors.MalformedRequestError.prototype);
      const msg = typeof message === 'string' ? message : this.explanation;
      this.message = `${this.name} (${this.code}): ${msg}`;
    }
  }
  _MalformedRequestErrors.MalformedRequestError = MalformedRequestError;
})(MalformedRequestErrors || (exports.MalformedRequestErrors = MalformedRequestErrors = {}));
/**
 * @public
 * Registration errors.
 */
let RegistrationErrors = exports.RegistrationErrors = void 0;
(function (_RegistrationErrors) {
  class RegistrationError extends _TwilioError.TwilioError {
    /**
     * Not applicable.
     */
    causes = [];
    /**
     * Registration error
     */
    description = 'Registration error';
    /**
     * 
     */
    explanation = '';
    /**
     * RegistrationError
     */
    name = 'RegistrationError';
    /**
     * Not applicable.
     */
    solutions = [];
    constructor(message) {
      super(message, 31301);
      Object.setPrototypeOf(this, RegistrationErrors.RegistrationError.prototype);
      const msg = typeof message === 'string' ? message : this.explanation;
      this.message = `${this.name} (${this.code}): ${msg}`;
    }
  }
  _RegistrationErrors.RegistrationError = RegistrationError;
  class UnsupportedCancelMessageError extends _TwilioError.TwilioError {
    /**
     * The identity associated with the Twilio Voice SDK is still registered to receive cancel push notification messages.
     */
    causes = ['The identity associated with the Twilio Voice SDK is still registered to receive cancel push notification messages.'];
    /**
     * Unsupported Cancel Message Error
     */
    description = 'Unsupported Cancel Message Error';
    /**
     * This version of the SDK no longer supports processing cancel push notification messages. You must register via Voice.register(...) on Android or [TwilioVoice registerWithAccessToken:deviceToken:completion:] on iOS with this version of the SDK to stop receiving cancel push notification messages. Cancellations are now handled internally and reported to you on behalf of the SDK.
     */
    explanation = 'This version of the SDK no longer supports processing cancel push notification messages. You must register via Voice.register(...) on Android or [TwilioVoice registerWithAccessToken:deviceToken:completion:] on iOS with this version of the SDK to stop receiving cancel push notification messages. Cancellations are now handled internally and reported to you on behalf of the SDK.';
    /**
     * UnsupportedCancelMessageError
     */
    name = 'UnsupportedCancelMessageError';
    /**
     * The application must register via Voice.register(...) on Android or [TwilioVoice registerWithAccessToken:deviceToken:completion:] on iOS to stop receiving cancel push notification messages.
     */
    solutions = ['The application must register via Voice.register(...) on Android or [TwilioVoice registerWithAccessToken:deviceToken:completion:] on iOS to stop receiving cancel push notification messages.'];
    constructor(message) {
      super(message, 31302);
      Object.setPrototypeOf(this, RegistrationErrors.UnsupportedCancelMessageError.prototype);
      const msg = typeof message === 'string' ? message : this.explanation;
      this.message = `${this.name} (${this.code}): ${msg}`;
    }
  }
  _RegistrationErrors.UnsupportedCancelMessageError = UnsupportedCancelMessageError;
})(RegistrationErrors || (exports.RegistrationErrors = RegistrationErrors = {}));
/**
 * @public
 * UserMedia errors.
 */
let UserMediaErrors = exports.UserMediaErrors = void 0;
(function (_UserMediaErrors) {
  class PermissionDeniedError extends _TwilioError.TwilioError {
    /**
     * The user denied the getUserMedia request.
     * The browser denied the getUserMedia request.
     * The application has not been configured with the proper permissions.
     */
    causes = ['The user denied the getUserMedia request.', 'The browser denied the getUserMedia request.', 'The application has not been configured with the proper permissions.'];
    /**
     * UserMedia Permission Denied Error
     */
    description = 'UserMedia Permission Denied Error';
    /**
     * The browser or end-user denied permissions to user media. Therefore we were unable to acquire input audio.
     */
    explanation = 'The browser or end-user denied permissions to user media. Therefore we were unable to acquire input audio.';
    /**
     * PermissionDeniedError
     */
    name = 'PermissionDeniedError';
    /**
     * The user should accept the request next time prompted. If the browser saved the deny, the user should change that permission in their browser.
     * The user should to verify that the browser has permission to access the microphone at this address.
     * The user should ensure that the proper permissions have been granted in the mobile device OS.
     */
    solutions = ['The user should accept the request next time prompted. If the browser saved the deny, the user should change that permission in their browser.', 'The user should to verify that the browser has permission to access the microphone at this address.', 'The user should ensure that the proper permissions have been granted in the mobile device OS.'];
    constructor(message) {
      super(message, 31401);
      Object.setPrototypeOf(this, UserMediaErrors.PermissionDeniedError.prototype);
      const msg = typeof message === 'string' ? message : this.explanation;
      this.message = `${this.name} (${this.code}): ${msg}`;
    }
  }
  _UserMediaErrors.PermissionDeniedError = PermissionDeniedError;
})(UserMediaErrors || (exports.UserMediaErrors = UserMediaErrors = {}));
/**
 * @public
 * Signaling errors.
 */
let SignalingErrors = exports.SignalingErrors = void 0;
(function (_SignalingErrors) {
  class ConnectionDisconnected extends _TwilioError.TwilioError {
    /**
     * The device running your application lost its Internet connection.
     */
    causes = ['The device running your application lost its Internet connection.'];
    /**
     * Signaling connection disconnected
     */
    description = 'Signaling connection disconnected';
    /**
     * Raised whenever the signaling connection is unexpectedly disconnected.
     */
    explanation = 'Raised whenever the signaling connection is unexpectedly disconnected.';
    /**
     * ConnectionDisconnected
     */
    name = 'ConnectionDisconnected';
    /**
     * Ensure the device running your application has access to a stable Internet connection.
     */
    solutions = ['Ensure the device running your application has access to a stable Internet connection.'];
    constructor(message) {
      super(message, 53001);
      Object.setPrototypeOf(this, SignalingErrors.ConnectionDisconnected.prototype);
      const msg = typeof message === 'string' ? message : this.explanation;
      this.message = `${this.name} (${this.code}): ${msg}`;
    }
  }
  _SignalingErrors.ConnectionDisconnected = ConnectionDisconnected;
})(SignalingErrors || (exports.SignalingErrors = SignalingErrors = {}));
/**
 * @public
 * Media errors.
 */
let MediaErrors = exports.MediaErrors = void 0;
(function (_MediaErrors) {
  class ClientLocalDescFailed extends _TwilioError.TwilioError {
    /**
     * The Client may not be using a supported WebRTC implementation.
     * The Client may not have the necessary resources to create or apply a new media description.
     */
    causes = ['The Client may not be using a supported WebRTC implementation.', 'The Client may not have the necessary resources to create or apply a new media description.'];
    /**
     * Client is unable to create or apply a local media description
     */
    description = 'Client is unable to create or apply a local media description';
    /**
     * Raised whenever a Client is unable to create or apply a local media description.
     */
    explanation = 'Raised whenever a Client is unable to create or apply a local media description.';
    /**
     * ClientLocalDescFailed
     */
    name = 'ClientLocalDescFailed';
    /**
     * If you are experiencing this error using the JavaScript SDK, ensure you are running it with a supported WebRTC implementation.
     */
    solutions = ['If you are experiencing this error using the JavaScript SDK, ensure you are running it with a supported WebRTC implementation.'];
    constructor(message) {
      super(message, 53400);
      Object.setPrototypeOf(this, MediaErrors.ClientLocalDescFailed.prototype);
      const msg = typeof message === 'string' ? message : this.explanation;
      this.message = `${this.name} (${this.code}): ${msg}`;
    }
  }
  _MediaErrors.ClientLocalDescFailed = ClientLocalDescFailed;
  class ServerLocalDescFailed extends _TwilioError.TwilioError {
    /**
     * A server-side error has occurred.
     */
    causes = ['A server-side error has occurred.'];
    /**
     * Server is unable to create or apply a local media description
     */
    description = 'Server is unable to create or apply a local media description';
    /**
     * Raised whenever the Server is unable to create or apply a local media description.
     */
    explanation = 'Raised whenever the Server is unable to create or apply a local media description.';
    /**
     * ServerLocalDescFailed
     */
    name = 'ServerLocalDescFailed';
    /**
     * If the problem persists, try connecting to another region.
     */
    solutions = ['If the problem persists, try connecting to another region.'];
    constructor(message) {
      super(message, 53401);
      Object.setPrototypeOf(this, MediaErrors.ServerLocalDescFailed.prototype);
      const msg = typeof message === 'string' ? message : this.explanation;
      this.message = `${this.name} (${this.code}): ${msg}`;
    }
  }
  _MediaErrors.ServerLocalDescFailed = ServerLocalDescFailed;
  class ClientRemoteDescFailed extends _TwilioError.TwilioError {
    /**
     * The Client may not be using a supported WebRTC implementation.
     * The Client may be connecting peer-to-peer with another Participant that is not using a supported WebRTC implementation.
     * The Client may not have the necessary resources to apply a new media description.
     */
    causes = ['The Client may not be using a supported WebRTC implementation.', 'The Client may be connecting peer-to-peer with another Participant that is not using a supported WebRTC implementation.', 'The Client may not have the necessary resources to apply a new media description.'];
    /**
     * Client is unable to apply a remote media description
     */
    description = 'Client is unable to apply a remote media description';
    /**
     * Raised whenever the Client receives a remote media description but is unable to apply it.
     */
    explanation = 'Raised whenever the Client receives a remote media description but is unable to apply it.';
    /**
     * ClientRemoteDescFailed
     */
    name = 'ClientRemoteDescFailed';
    /**
     * If you are experiencing this error using the JavaScript SDK, ensure you are running it with a supported WebRTC implementation.
     */
    solutions = ['If you are experiencing this error using the JavaScript SDK, ensure you are running it with a supported WebRTC implementation.'];
    constructor(message) {
      super(message, 53402);
      Object.setPrototypeOf(this, MediaErrors.ClientRemoteDescFailed.prototype);
      const msg = typeof message === 'string' ? message : this.explanation;
      this.message = `${this.name} (${this.code}): ${msg}`;
    }
  }
  _MediaErrors.ClientRemoteDescFailed = ClientRemoteDescFailed;
  class ServerRemoteDescFailed extends _TwilioError.TwilioError {
    /**
     * The Client may not be using a supported WebRTC implementation.
     * The Client may not have the necessary resources to apply a new media description.
     * A Server-side error may have caused the Server to generate an invalid media description.
     */
    causes = ['The Client may not be using a supported WebRTC implementation.', 'The Client may not have the necessary resources to apply a new media description.', 'A Server-side error may have caused the Server to generate an invalid media description.'];
    /**
     * Server is unable to apply a remote media description
     */
    description = 'Server is unable to apply a remote media description';
    /**
     * Raised whenever the Server receives a remote media description but is unable to apply it.
     */
    explanation = 'Raised whenever the Server receives a remote media description but is unable to apply it.';
    /**
     * ServerRemoteDescFailed
     */
    name = 'ServerRemoteDescFailed';
    /**
     * If you are experiencing this error using the JavaScript SDK, ensure you are running it with a supported WebRTC implementation.
     * If the problem persists, try connecting to another region.
     */
    solutions = ['If you are experiencing this error using the JavaScript SDK, ensure you are running it with a supported WebRTC implementation.', 'If the problem persists, try connecting to another region.'];
    constructor(message) {
      super(message, 53403);
      Object.setPrototypeOf(this, MediaErrors.ServerRemoteDescFailed.prototype);
      const msg = typeof message === 'string' ? message : this.explanation;
      this.message = `${this.name} (${this.code}): ${msg}`;
    }
  }
  _MediaErrors.ServerRemoteDescFailed = ServerRemoteDescFailed;
  class NoSupportedCodec extends _TwilioError.TwilioError {
    /**
     * The C++ SDK was built without the recommended set of codecs.
     * The JavaScript SDK is running in a browser that does not implement the recommended set of codecs.
     */
    causes = ['The C++ SDK was built without the recommended set of codecs.', 'The JavaScript SDK is running in a browser that does not implement the recommended set of codecs.'];
    /**
     * No supported codec
     */
    description = 'No supported codec';
    /**
     * Raised whenever the intersection of codecs supported by the Client and the Server (or, in peer-to-peer, the Client and another Participant) is empty.
     */
    explanation = 'Raised whenever the intersection of codecs supported by the Client and the Server (or, in peer-to-peer, the Client and another Participant) is empty.';
    /**
     * NoSupportedCodec
     */
    name = 'NoSupportedCodec';
    /**
     * If you are experiencing this error using the C++ SDK, ensure you build it with the recommended set of codecs.
     * If you are experiencing this error using the JavaScript SDK, ensure you are using a compatible browser.
     */
    solutions = ['If you are experiencing this error using the C++ SDK, ensure you build it with the recommended set of codecs.', 'If you are experiencing this error using the JavaScript SDK, ensure you are using a compatible browser.'];
    constructor(message) {
      super(message, 53404);
      Object.setPrototypeOf(this, MediaErrors.NoSupportedCodec.prototype);
      const msg = typeof message === 'string' ? message : this.explanation;
      this.message = `${this.name} (${this.code}): ${msg}`;
    }
  }
  _MediaErrors.NoSupportedCodec = NoSupportedCodec;
  class ConnectionError extends _TwilioError.TwilioError {
    /**
     * The Client was unable to establish a media connection.
     * A media connection which was active failed liveliness checks.
     */
    causes = ['The Client was unable to establish a media connection.', 'A media connection which was active failed liveliness checks.'];
    /**
     * Media connection failed
     */
    description = 'Media connection failed';
    /**
     * Raised by the Client or Server whenever a media connection fails.
     */
    explanation = 'Raised by the Client or Server whenever a media connection fails.';
    /**
     * ConnectionError
     */
    name = 'ConnectionError';
    /**
     * If the problem persists, try connecting to another region.
     * Check your Client's network connectivity.
     * If you've provided custom ICE Servers then ensure that the URLs and credentials are valid.
     */
    solutions = ['If the problem persists, try connecting to another region.', 'Check your Client\'s network connectivity.', 'If you\'ve provided custom ICE Servers then ensure that the URLs and credentials are valid.'];
    constructor(message) {
      super(message, 53405);
      Object.setPrototypeOf(this, MediaErrors.ConnectionError.prototype);
      const msg = typeof message === 'string' ? message : this.explanation;
      this.message = `${this.name} (${this.code}): ${msg}`;
    }
  }
  _MediaErrors.ConnectionError = ConnectionError;
  class MediaDtlsTransportFailedError extends _TwilioError.TwilioError {
    /**
     * One or both of the DTLS peers have an invalid certificate.
     * One or both of the DTLS peers have an outdated version of DTLS.
     * One or both of the DTLS peers lost internet connectivity while performing a DTLS handshake.
     */
    causes = ['One or both of the DTLS peers have an invalid certificate.', 'One or both of the DTLS peers have an outdated version of DTLS.', 'One or both of the DTLS peers lost internet connectivity while performing a DTLS handshake.'];
    /**
     * The media connection failed due to DTLS handshake failure
     */
    description = 'The media connection failed due to DTLS handshake failure';
    /**
     * There was a problem while negotiating with the remote DTLS peer. Therefore the Client will not be able to establish the media connection.
     */
    explanation = 'There was a problem while negotiating with the remote DTLS peer. Therefore the Client will not be able to establish the media connection.';
    /**
     * MediaDtlsTransportFailedError
     */
    name = 'MediaDtlsTransportFailedError';
    /**
     * Ensure that your certificate is valid.
     * Ensure that you have a stable internet connection.
     * Ensure that the browser or the Mobile SDK supports newer versions of DTLS.
     */
    solutions = ['Ensure that your certificate is valid.', 'Ensure that you have a stable internet connection.', 'Ensure that the browser or the Mobile SDK supports newer versions of DTLS.'];
    constructor(message) {
      super(message, 53407);
      Object.setPrototypeOf(this, MediaErrors.MediaDtlsTransportFailedError.prototype);
      const msg = typeof message === 'string' ? message : this.explanation;
      this.message = `${this.name} (${this.code}): ${msg}`;
    }
  }
  _MediaErrors.MediaDtlsTransportFailedError = MediaDtlsTransportFailedError;
})(MediaErrors || (exports.MediaErrors = MediaErrors = {}));
/**
 * @internal
 */
const errorsByCode = exports.errorsByCode = new Map([[20101, AuthorizationErrors.AccessTokenInvalid], [20102, AuthorizationErrors.AccessTokenHeaderInvalid], [20103, AuthorizationErrors.AccessTokenIssuerInvalid], [20104, AuthorizationErrors.AccessTokenExpired], [20105, AuthorizationErrors.AccessTokenNotYetValid], [20106, AuthorizationErrors.AccessTokenGrantsInvalid], [20107, AuthorizationErrors.AccessTokenSignatureInvalid], [20151, AuthorizationErrors.AuthenticationFailed], [20157, AuthorizationErrors.ExpirationTimeExceedsMaxTimeAllowed], [20403, ForbiddenErrors.Forbidden], [21218, TwiMLErrors.InvalidApplicationSid], [31005, GeneralErrors.ConnectionError], [31008, GeneralErrors.CallCancelledError], [31009, GeneralErrors.TransportError], [31100, MalformedRequestErrors.MalformedRequestError], [31201, AuthorizationErrors.AuthorizationError], [31206, AuthorizationErrors.RateExceededError], [31210, AuthorizationErrors.CallMessageEventTypeInvalidError], [31211, AuthorizationErrors.CallMessageUnexpectedStateError], [31212, AuthorizationErrors.PayloadSizeExceededError], [31301, RegistrationErrors.RegistrationError], [31302, RegistrationErrors.UnsupportedCancelMessageError], [31400, ClientErrors.BadRequest], [31401, UserMediaErrors.PermissionDeniedError], [31403, ClientErrors.Forbidden], [31404, ClientErrors.NotFound], [31408, ClientErrors.RequestTimeout], [31409, ClientErrors.Conflict], [31426, ClientErrors.UpgradeRequired], [31429, ClientErrors.TooManyRequests], [31480, ClientErrors.TemporarilyUnavailable], [31481, ClientErrors.CallTransactionDoesNotExist], [31484, ClientErrors.AddressIncomplete], [31486, ClientErrors.BusyHere], [31487, ClientErrors.RequestTerminated], [31500, ServerErrors.InternalServerError], [31502, ServerErrors.BadGateway], [31503, ServerErrors.ServiceUnavailable], [31504, ServerErrors.GatewayTimeout], [31530, ServerErrors.DNSResolutionError], [31600, SIPServerErrors.BusyEverywhere], [31603, SIPServerErrors.Decline], [31604, SIPServerErrors.DoesNotExistAnywhere], [51007, AuthorizationErrors.AccessTokenRejected], [53001, SignalingErrors.ConnectionDisconnected], [53400, MediaErrors.ClientLocalDescFailed], [53401, MediaErrors.ServerLocalDescFailed], [53402, MediaErrors.ClientRemoteDescFailed], [53403, MediaErrors.ServerRemoteDescFailed], [53404, MediaErrors.NoSupportedCodec], [53405, MediaErrors.ConnectionError], [53407, MediaErrors.MediaDtlsTransportFailedError]]);
Object.freeze(errorsByCode);
//# sourceMappingURL=generated.js.map