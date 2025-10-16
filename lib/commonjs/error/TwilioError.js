"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TwilioError = void 0;
/**
 * Generic Twilio error that the SDK will raise when encountering an error. Can
 * be used to describe backend errors.
 *
 * @public
 */
class TwilioError extends Error {
  causes = [];
  description = 'Generic Twilio error.';
  explanation = 'The SDK has encountered an unexpected error.';
  solutions = [];
  constructor(message, code) {
    super(message);
    this.code = code;
    Object.setPrototypeOf(this, TwilioError.prototype);
    this.name = TwilioError.name;
  }
}
exports.TwilioError = TwilioError;
//# sourceMappingURL=TwilioError.js.map