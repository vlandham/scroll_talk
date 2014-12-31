(function() {
  var count = 0,
      overshoot = 300;

  function whenBoundsVisible(computeBounds, callback) {
    var id = ".visible-" + ++count,
        self = d3.select(window),
        bounds;

    if (document.readyState === "loading") self.on("load" + id, loaded);
    else loaded();

    function loaded() {
      self
          .on("resize" + id, resized)
          .on("scroll" + id, scrolled)
          .each(resized);
    }

    function resized() {
      bounds = computeBounds();
      if (bounds[1] < bounds[0]) bounds.reverse();
      scrolled();
    }

    function scrolled() {
      if (bounds[0] <= pageYOffset && pageYOffset <= bounds[1]) {
        callback(null);
        self.on(id, null);
      }
    }
  }

  beforeVisible = function(element, callback) {
    return whenBoundsVisible(function() {
      var rect = element.getBoundingClientRect();
      return [
        rect.top + pageYOffset - innerHeight - overshoot,
        rect.bottom + pageYOffset + overshoot
      ];
    }, callback);
  };

  whenFullyVisible = function(element, callback) {
    return whenBoundsVisible(function() {
      var rect = element.getBoundingClientRect();
      return [
        rect.bottom + pageYOffset - innerHeight,
        rect.top + pageYOffset
      ];
    }, callback);
  };
})();

