"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CallKit = void 0;
/**
 * @public
 * CallKit related types.
 */
let CallKit = exports.CallKit = void 0;
(function (_CallKit) {
  /**
   * @public
   * iOS CallKit configuration options.
   */
  /**
   * @public
   * Enumeration of all supported handle types by iOS CallKit.
   */
  let HandleType = /*#__PURE__*/function (HandleType) {
    /**
     * Generic handle.
     */
    HandleType[HandleType["Generic"] = 0] = "Generic";
    /**
     * Phone number handle.
     */
    HandleType[HandleType["PhoneNumber"] = 1] = "PhoneNumber";
    /**
     * Email address handle.
     */
    HandleType[HandleType["EmailAddress"] = 2] = "EmailAddress";
    return HandleType;
  }({});
  _CallKit.HandleType = HandleType;
})(CallKit || (exports.CallKit = CallKit = {}));
//# sourceMappingURL=CallKit.js.map