"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var styles = function styles(theme) {
  var spacing = theme.miscellaneous.spacing;
  return {
    // offsetted value = (((OldValue - OldMin) * (NewMax - NewMin)) / (OldMax - OldMin)) + NewMin
    container: function container(_ref) {
      var value = _ref.value,
          color = _ref.color,
          itemsSize = _ref.itemsSize;
      return {
        height: "".concat((value - 0) * (100 - 22) / (100 - 0) + 22, "%"),
        width: Math.min(90, theme.components.cards.width * 0.7 / itemsSize),
        backgroundColor: color,
        color: '#fff',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        padding: [spacing * 3, spacing * 2]
      };
    },
    typography: {
      transform: 'rotate(-90deg)'
    }
  };
};

exports.styles = styles;