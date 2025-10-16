"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InvalidArgumentError = void 0;
var _TwilioError = require("./TwilioError");
/**
 * Error describing that an SDK function is invoked with an invalid argument.
 *
 * @public
 */
class InvalidArgumentError extends _TwilioError.TwilioError {
  description = 'Invalid argument error.';
  explanation = 'The SDK has encountered a situation where invalid arguments were passed.';
  constructor(message) {
    super(message);
    Object.setPrototypeOf(this, InvalidArgumentError.prototype);
    this.name = InvalidArgumentError.name;
  }
}
exports.InvalidArgumentError = InvalidArgumentError;
//# sourceMappingURL=InvalidArgumentError.js.map