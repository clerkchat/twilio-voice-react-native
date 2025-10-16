"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InvalidStateError = void 0;
var _TwilioError = require("./TwilioError");
/**
 * Error describing that the SDK has entered or is attempting to enter an
 * invalid state.
 *
 * @public
 */
class InvalidStateError extends _TwilioError.TwilioError {
  description = 'Invalid state error.';
  explanation = 'The SDK has entered an invalid state.';
  constructor(message) {
    super(message);
    Object.setPrototypeOf(this, InvalidStateError.prototype);
    this.name = InvalidStateError.name;
  }
}
exports.InvalidStateError = InvalidStateError;
//# sourceMappingURL=InvalidStateError.js.map