"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styles_1 = require("./styles");
class Button extends React.Component {
    render() {
        const _a = this.props, { children, isHero } = _a, rest = __rest(_a, ["children", "isHero"]);
        if (isHero) {
            return (React.createElement(styles_1.HeroButton, Object.assign({}, rest),
                React.createElement("span", null, children)));
        }
        return (React.createElement(styles_1.BaseButton, Object.assign({}, rest),
            React.createElement("span", null, children)));
    }
}
Button.defaultProps = {
    color: '#fefefe',
    backgroundColor: '#c05b4d',
    borderColor: '#732419',
    fontSize: 'medium',
    isHero: false,
    disabled: false,
    shadow: false,
    iconName: false,
    iconSize: 12,
    theme: {}
};
exports.default = Button;
//# sourceMappingURL=index.js.map