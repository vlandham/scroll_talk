//push scroll button down the page
(function(){
  var diff = d3.select('#inner-content').node().offsetTop+d3.select('#infographic').node().offsetTop
  var scrollPad = window.innerHeight-diff-.15*window.innerHeight
  d3.select('#scroll-pad').style('height', scrollPad +'px')  
})()

var curPosStr,
    exploring,        //true if we're on the last slide
    noGrouping,       //true if we're on the first slide
    forceOn = false,   //turn on to use force layout instead of static
    force = d3.layout.force();   

loadData(function(data){
  data = R.sortBy(ƒ('t2014'), data).reverse()
  data.forEach(function(d, i){ d.rank = i + 1 })

  var margin = {top: 0, right: 0, bottom: 0, left: 0},
      width = 800 - margin.left - margin.right,
      height = 600 - margin.top - margin.bottom;

  var xPos = {'l': width/4, 'm': width/2, 'r': width*.75}

  var rScale = d3.scale.sqrt()
      .domain(d3.extent(data, ƒ('t2014')))
      .range([2, 50])

  var svg = d3.select("#svg-container").append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)

  var stepDivs = d3.select('#steps').selectAll('.step')
      .data(steps).enter()


  force
      .nodes(data)
      .size([width, height])
      .gravity(0.05)
      .charge(function(d){ return -Math.pow(d.radius, 2)*2/5 })
      .chargeDistance(10000) 
      .on("tick", function(e){
        if (!forceOn) return
        var k = .2* e.alpha;

        // Push nodes toward their designated focus.
        data.forEach(function(d, i){
          if (d.outtakePos){
            d.x += (d.outtakePos -d.x) *k;
            d.y += ((exploring ? height*1/2 : height*3.7/6)+ -d.y) *k;
          } else{
            d.x += (width/2  + -d.x) * k;
            d.y += ((noGrouping ? height*1/2 : height*2.5/6) -d.y) * 1.5 *k;
          }
        })

        node
          .attr('transform', function(d){
            return 'translate(' + d.x + ',' + d.y + ')'
          })
      });

  var node = svg.append('g').attr('id', 'm-group').selectAll("g")
      .data(data).enter()
    .append("g")
      .each(function(d){
        d.radius = rScale(d.t2014);
        d.y = 0;
      })
      .attr("class", "node")
      .attr('transform', function(d){
        return 'translate(' + (d.x0 + Math.random()*0) + ',' + (d.y0 + Math.random()*0) + ')'
      })
      .style('fill', 'rgba(0,0,0,0)')
      .attr('id', function(d, i){ return 'a' + i + 'zz' + d.model })
      .on('click', function(d){ console.log(d) })
      .on('mouseover', ttDisplay)
      .on('mousemove', ttMove)
      .on('mouseout',  ttHide)

  node.append('circle')
      .attr("r", ƒ('radius'))


  var images = node.filter(ƒ('img')).filter(function(d, i){ return i < 10 })
      .append('image')
      .attr('xlink:href', function(d, i){ return 'img/autos/' + d.img })
      .attr('x', function(d){ return -d.radius })
      .attr('y', function(d){ return -d.radius })
      .attr('width',  function(d){ return d.radius*2 })
      .attr('height', function(d){ return d.radius*2 })
      .attr('clip-path', function(d, i){ return "url(#clip" + i + ')'})


  d3.select('svg').append('defs').selectAll('clipPath')
      .data(images.data()).enter()
    .append('clipPath')
      .attr('id', function(d, i){ return 'clip' + i })
    .append('circle')
      .attr('r', ƒ('radius'))

  var drag = d3.behavior.drag()
      .on('drag', function(d){
        d3.select(this)
            .attr('x', d.x = d3.event.x)
            .attr('y', d.y = d3.event.y)
      })
  if (!forceOn && false){ node.call(drag) }

  updateExploreColor(0) //set initial coloring to car

  var labels = svg.append('g').classed('label-container', true)

  var gs = gscroll()
      .container(d3.select('#graphic'))
      .fixed(d3.selectAll('#graph, #graph-space, .sticky-share'))

  gs(d3.selectAll('section.step'))

  gs.on('active', function(index){
    curPosStr = index

    d3.selectAll('section.step')
      .transition().duration(function(d, i){ return i == index ? 0 : 200 })
        .style('opacity', function(d, i){
          return i == index ? 1 : i == index + 1 ? .1 : .001 })

    var step = steps[index]
    exploring = index == steps.length - 1
    noGrouping = !index
    if (!exploring){
      if (forceOn){
        data.forEach(function(d){
          var outtakeMatch = R.find(R.propEq('model', d.model), step.outTakes)
          d.outtakePos = !outtakeMatch ? null : xPos[outtakeMatch.pos]
        })
        force.start()
      } else{
        node.transition().duration(500)
            .delay(function(d){
              d.x = d['x' + curPosStr]
              d.y = d['y' + curPosStr]
              return Math.abs(400 - d.x) + Math.abs(300 - d.y) })
            .attr('transform', function(d){
              return 'translate(' + d.x + ',' + d.y + ')' })
      }

      labels.selectAll('text').remove()
      labels.html('').selectAll('text')
          .data(step.outText).enter()
        .append('text')
          .text(ƒ('text'))
          .attr('x', function(d){ return d.x ? d.x : xPos[d.pos]})
          .attr('y', function(d){ return d.y ? d.y : height - 3 })
          .attr('text-anchor', 'middle')
          .style('opacity', 0.0001)
        .transition().duration(500).delay(750).ease('ease-in')
          .style('opacity', 1)
    }
    else{
      updateExploreGroup(selectedGroupByIndex)
      updateExploreColor(selectedColorByIndex)
    }

  })


  //explore code - might not need
  var exploreSel = d3.selectAll('section').filter(function(d, i){
    return i == steps.length })

  var groupSel = exploreSel.select('#group-select')

  groupSel.classed('graphic-button-container',true)
    .selectAll('div')
    .data(groupings).enter()
      .append('div')
        .text(ƒ('str'))
        .classed('graphic-button',true)
        .on('click', function(d,i){ updateExploreGroup(i) })

  var colorSel = exploreSel.select('#color-select')

  colorSel.classed('graphic-button-container',true)
    .selectAll('div')
    .data(groupings).enter()
      .append('div')
        .text(ƒ('str'))
        .classed('graphic-button',true)
        .on('click', function(d,i){ updateExploreColor(i) })

  exploreSel.select("#type-ahead").on('keyup', function(e){
    var result = searchStr(this.value)
    var resultDiv = exploreSel.select('#results').html('')
    d3.select('label[for="type-ahead"]').style({opacity:0})

    if(result.length>0){
      d3.selectAll('.node')
        .style('opacity',function(d,i){
          return (result.indexOf(d)>-1)?1:.2
        })

      resultDiv.classed('show',false)
    }else{
      d3.select('label[for="type-ahead"]').style({opacity:1})
      d3.selectAll('circle').style('opacity',1)
      resultDiv.classed('show',true)
    }

    var menuVisible = d3.select('.tt-dropdown-menu').node().style.display == 'block'
    if(this.value=='' || menuVisible)
      resultDiv.classed('show',false)

    if(d3.event.keyIdentifier == "Enter")
      $('.typeahead').typeahead('close')

  })

  var makeModel = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    local: $.map(data, function(d) { return { value: d.model +' - '+d.Brand }; })
  });

  makeModel.initialize();

  var locale = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    local: $.map(data, function(d) {return { value: (d.Locale=="Traditional Domestic")?'Domestic':d.Locale }; })
  });

  locale.initialize();

  var type = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    local: $.map(data, function(d) { return { value: d.Type +' - '+d.Brand }; })
  });

  type.initialize();

  $('#type-ahead').typeahead({
    hint: true,
    highlight: true,
    minLength:1
  },
  {
    name: 'makeModel',
    displayKey: 'value',
    // `ttAdapter` wraps the suggestion engine in an adapter that
    // is compatible with the typeahead jQuery plugin
    source: makeModel.ttAdapter(),
    templates: {
      header: '<h3 class="ta-header">Make / Model</h3>'
    }
  },
  {
    name: 'locale',
    displayKey: 'value',
    // `ttAdapter` wraps the suggestion engine in an adapter that
    // is compatible with the typeahead jQuery plugin
    source: locale.ttAdapter(),
    templates: {
      header: '<h3 class="ta-header">Locale</h3>'
    }
  },
  {
    name: 'type',
    displayKey: 'value',
    // `ttAdapter` wraps the suggestion engine in an adapter that
    // is compatible with the typeahead jQuery plugin
    source: type.ttAdapter(),
    templates: {
      header: '<h3 class="ta-header">Type</h3>'
    }
  });

  var selectedGroupByIndex = 1
  var groupBy = groupings[selectedGroupByIndex]
  function updateExploreGroup(i){
    curPosStr = (steps.length - 1) + i

    selectedGroupByIndex = i
    groupBy = groupings[i]

    groupSel.selectAll('.graphic-button')
      .classed('graphic-button-active', function(d, i){
        return i === selectedGroupByIndex })

    var xScale = d3.scale.linear()
        .domain([0, groupBy.groups.length - 1])
        .range([300, width -300])
    
    var txScale = d3.scale.linear()
        .domain([0, groupBy.groups.length - 1])
        .range([100, width - 100])

    if (forceOn){
      data.forEach(function(d){
        d.outtakePos = null
        groupBy.groups.some(function(g, i){
          if (g.fn(d)) return d.outtakePos = xScale(i)
        })
      })
      force.start()
    } else{
      node.transition().duration(500)
          .delay(function(d){
            d.x = d['x' + curPosStr]
            d.y = d['y' + curPosStr]
            return Math.abs(400 - d.x) + Math.abs(300 - d.y) })
          .attr('transform', function(d){
            return 'translate(' + d.x + ',' + d.y + ')' })
    }


    labels.selectAll('text').remove()
    labels.html('').selectAll('text')
        .data(groupBy.groups).enter()
      .append('text')
        .text(ƒ('str'))
        .attr('y', function(d){ return d.y ? d.y : height - 3 })
        .attr('x', function(d, i){ return d.x ? d.x : txScale(i) })
        .attr('text-anchor', 'middle')

    //debugger
  }

  var selectedColorByIndex = 0
  var colorBy = groupings[selectedColorByIndex]
  function updateExploreColor(i){
    selectedColorByIndex = i

    d3.select('#color-select').selectAll('.graphic-button')
      .classed('graphic-button-active', function(d, i){
        return i === selectedColorByIndex })

    // d3.xml('svg/legend' + i + '.svg', function(xml){
    //   // document.body.appendChild(xml.documentElement)
    //   d3.select('#legend').html('').node().appendChild(xml.documentElement)

    //   d3.select('#legend').selectAll('text').attr('font-family', '')
    // })
    d3.select('#legend').select('img').attr('src', 'img/legend' + i + '.png')


    colorBy = groupings[i]

    var colorMap = {}
    colorBy.groups.forEach(function(d){
      colorMap[d.str] = d.c
    })

    data.forEach(function(d){
      colorBy.groups.some(function(g, i){
        if (g.fn(d)) return d.color = colorMap[g.str]
      })

    })

    node.selectAll('circle')
      .transition()
        .style('fill', ƒ('color'))
        .style("stroke", function(d){
          return darker2(d.color); })
  }


});
