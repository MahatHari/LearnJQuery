(function ($) {
  $.sum = function (array) {
    let total = 0;
    $.each(array, function (index, value) {
      value = $.trim(value);
      value = parseFloat(value) || 0;
      total += value;
    });
    return total;
  };
  $.average = function (array) {
    if ($.isArray(array)) {
      return $.sum(array) / array.length;
    }
    return "";
  };
})(jQuery);

/* IsoLting Function within Namespaces */
// (function ($) {
//   $.mathUtils = {
//     sum: function (array) {
//       let total = 0;
//       $.each(array, function (index, value) {
//         value = $.trim(value);
//         value = parseFloat(value) || 0;
//         total += value;
//       });
//       return total;
//     },
//     average: function (array) {
//       if ($.isArray(array)) {
//         return $.sum(array) / array.length;
//       }
//       return "";
//     },
//   };
// })(jQuery);
// Can be called as $.mathUtils.sum(array)

/* Enabling method chaining by returning this */
(function ($) {
  $.fn.swapClass = function (class1, class2) {
    return this.each(function () {
      let element = $(this);
      if (element.hasClass(class1)) {
        element.removeClass(class1);
        element.addClass(class2);
      } else if (element.hasClass(class2)) {
        element.removeClass(class2);
        element.addClass(class1);
      }
    });
  };
})(jQuery);

(function ($) {
  // Adding options object

  $.fn.shadow = function (opts) {
    let options = $.extend({}, $.fn.shadow.defaults, opts);
    return this.each(function () {
      let originalElement = $(this);
      for (let i = 0; i < options.copies; i++) {
        let offset = options.copyOffset(i);
        originalElement
          .clone()
          .css({
            position: "absolute",
            left: originalElement.offset().left + offset.x,
            top: originalElement.offset().top + offset.y,
            margin: 0,
            zindex: -1,
            opacity: options.opacity,
          })
          .appendTo("body");
      }
    });
  };
  $.fn.shadow.defaults = {
    copies: 5,
    opacity: 0.1,

    copyOffset: function (index) {
      return { x: index, y: index };
    },
  };
})(jQuery);

/* Wudget Creation, jQueryUI widget */
(function ($) {
  $.widget("ljq.tooltip", {
    _create: function () {
      this._tooltipDiv = $("<div></div>")
        .addClass(
          "ljq-tooltip-text " + "ui-widget ui-state-highlight ui-corner-all"
        )
        .hide()
        .appendTo("body");
      this.element
        .addClass("ljq-tooltip-trigger")
        .on("mouseenter.ljq-tooltip", $.proxy(this._open, this))
        .on("mouseleave.ljq-tooptip", $.proxy(this._close, this));
    },
    destroy: function () {
      this._tooltipDiv.remove();
      this.element.removeClass("ljq-tooltip-trigger").off("ljq-tooltip");
      $.Widget.prototype.destroy.apply(this, arguments);
    },
    _open: function () {
      let elementOffset = this.element.offset();
      this._tooltipDiv
        .css({
          position: "absolute",
          left: elementOffset.left,
          top: elementOffset.top + this.element.height(),
        })
        .text(this.element.data("tooltip-text"));
      this._tooltipDiv.show();
    },
    _close: function () {
      this._tooltipDiv.hide();
    },
  });
})(jQuery);
