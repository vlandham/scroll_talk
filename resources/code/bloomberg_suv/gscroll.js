function gscroll() {
  var windowHeight,
      dispatch = d3.dispatch("scroll", "active"),
      sections = d3.select('null'),
      i = NaN,
      sectionPos = [],
      n;
      fixed = d3.select('null'),
      isFixed = null,
      container = d3.select('body'),
      containerStart = 0;

  //start emiting events on
  function rv(els){
    sections = els
    n = sections.size()

    d3.select(window)
        .on("scroll.gscroll", reposition)
        .on('resize.gscroll', resize)
        .on('keydown.gscroll', keydown)

    resize()
    d3.timer(function() {
      reposition();
      return true;
    });
  }


  function reposition(){
    var i1 = d3.bisect(sectionPos, pageYOffset - 10 - containerStart)
    i1 = Math.min(n - 1, i1)
    if (i != i1){
      sections.classed('gscroll-active', function(d, i){ return i === i1 })
      dispatch.active(i1)
      i = i1

      if(i%3==0 || i==14) tracker('load', i);
    }

    var isFixed1 = pageYOffset > containerStart
    if (isFixed != isFixed1){
      isFixed = isFixed1

      fixed.classed('gscroll-fixed', isFixed)
      d3.select('#graph').style('margin-left',(isFixed)?'0px':'-140px')

      //god awfull
      setTimeout(function() { 
        d3.select('#legend').style({
          'opacity':(isFixed)?1:0,
          'margin-left':(window.innerHeight<1050)?'-30px':'10px'
        })
        d3.select('#svg-container').classed('zoom',!isFixed)
        d3.select('#steps').style('background-color',(isFixed && window.innerHeight<1050)?'rgba(255,255,255,.7)':'transparent')
      },10)

    }
  }

  function resize(){
    sectionPos = []
    var startPos
    sections.each(function(d, i){
      if (!i) startPos = this.getBoundingClientRect().top
      sectionPos.push(this.getBoundingClientRect().top -  startPos + 0) })

    containerStart = container.node().getBoundingClientRect().top + pageYOffset
  }


  function keydown(forceDown) {
    //sorry for this
    if(d3.select('.gscroll-active').classed('explore'))return

    var delta;
    if (d3.event && !forceDown){
      switch (d3.event.keyCode) {
        case 39: // right arrow
        if (d3.event.metaKey) return;
        case 40: // down arrow
        case 34: // page down
        delta = d3.event.metaKey ? Infinity : 1; break;
        case 37: // left arrow
        if (d3.event.metaKey) return;
        case 38: // up arrow
        case 33: // page up
        delta = d3.event.metaKey ? -Infinity : -1; break;
        case 32: // space
        delta = d3.event.shiftKey ? -1 : 1;
        break;
        default: return;
      }      
    }
    if (forceDown) delta = 1


    var i1 = Math.max(0, Math.min(i + delta, n - 1))
    d3.select(document.documentElement)
        .interrupt()
      .transition()
        .duration(700)
        .tween("scroll", function() {
          var i = d3.interpolateNumber(pageYOffset, sectionPos[i1] + containerStart);
          return function(t) { scrollTo(0, i(t)); };
        })

    d3.event.preventDefault();
  }


  rv.container = function(_x){
    if (!_x) return container

    container = _x
    return rv
  }

  rv.fixed = function(_x){
    if (!_x) return fixed

    fixed = _x
    return rv
  }

  d3.rebind(rv, dispatch, "on");

  return rv;
}