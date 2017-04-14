"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styles_1 = require("../Input/styles");
var BaseControl_1 = require("../BaseControl/BaseControl");
var TypeStringControl_1 = require("../Validation/TypeStringControl");
var Phone = (function (_super) {
    __extends(Phone, _super);
    function Phone(p, c) {
        var _this = _super.call(this, p, c) || this;
        var pattern = /^(0|\+33)[1-9]([-. ]?[0-9]{2}){4}$/;
        var patternErrorMessage = "Doit être un numéro de téléphone";
        _this._validationManager.addControl(new TypeStringControl_1.default(pattern, patternErrorMessage));
        return _this;
    }
    Phone.prototype.onChange = function (event) {
        return event.target.value;
    };
    Phone.prototype.renderControl = function () {
        return (React.createElement(styles_1.InputStyled, { type: "text", iconName: this.props.iconName, style: this.props.style, borderColor: this.props.borderColor, onClick: this.props.onClick, color: this.props.color, backgroundColor: this.props.backgroundColor, width: this.props.width, hasError: this.hasError(), height: this.props.height, readOnly: this.props.readOnly, disabled: this.props.disabled, onChange: this.handleChangeEvent }, this.props.children));
    };
    return Phone;
}(BaseControl_1.BaseControl));
Phone.defaultProps = {
    color: '#000000',
    backgroundColor: '#ffffff',
    borderColor: '#732419',
    hasError: false
};
exports.default = Phone;
//# sourceMappingURL=Phone.js.map