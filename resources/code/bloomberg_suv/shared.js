function loadData(cb){
  queue()
    .defer(d3.csv, 'data/data.csv')
    .defer(d3.csv, 'data/positions.csv')
    .await(function(err, responce, positions){
  	  data = responce

      data.forEach(function(d){
        d.t2014 = +d['2014 Sales'].replace(/,/g, '')
        d.t2013 = +d['2013 Sales'].replace(/,/g, '')
        d.model = d.Model.trim()

  	    d.percentChange = (d.t2014 - d.t2013)/(d.t2014 + d.t2013)

        d.t2014Str = d3.format(',')(d.t2014)
        d.percentChangeStr = d3.format('+%')(d.percentChange)
  	  })

      //remove cars without sales in both years
      //TODO check w/ ingold to make sure this is correct
  	  data = data.filter(function(d){
  	    return d.t2014 > 0 || d.t2013 > 0 && d.t2014 > 0 })


      data.forEach(function(d, i){
        //copy over position data
        d3.range(18).forEach(function(num){
          d['x' + num] = +positions[i]['x' + num]
          d['y' + num] = +positions[i]['y' + num]
        })
      })
  	  cb(data)
	  })
}

var red    = '#FF433D',
    blue   = '#2800D7',
    green  = '#1DCC92',
    yellow = '#FAD506',
    orange = '#FB8B1E',
    purple = '#B547F1',
    lblue = 'rgb(164,222,223)'


//grouping for explore view
var groupings = [
  { str: 'Truck/Car',
    groups: [
      {str: 'Truck',    x: 115, c: red, fn: R.propEq('Type', 'Pickup')},
      {str: 'Car',      x: 340, c: yellow, fn: R.propEq('Car/Truck', 'Car')},
      {str: 'SUV, Crossovers, and Vans', x: 615, c: green, fn: function(){ return true } },
  ]},
  { str: 'Origin',
    groups: [
      {str: 'Asian',    x: 218, c: red, fn: R.propEq('Locale', 'Asian')},
      {str: 'European', c: yellow, fn: R.propEq('Locale', 'European')},
      {str: 'Domestic (includes Fiat Chrysler)', x: 605, c: green, fn: R.propEq('Locale', 'Traditional Domestic')},
  ]},
  // { str: 'Top Seller',
  //   groups: [
  //     {str: 'Top 25',  c: 'rgb(245,169,148)', fn: function(d){ return d.t2014 > 100000 } },
  //     {str: 'Other',   c: 'rgb(164,222,223)', fn: function(d){ return true } },
  // ]},
  { str: 'Major Brand',
    groups: [
      {str: 'Ford',           x: 102, y: 506, c: red, fn: R.propEq('Corp.', 'Ford Motor Company')},
      {str: 'GM',             x: 59,  y: 251, c: blue, fn: R.propEq('Corp.', 'General Motors Corp.')},
      {str: 'Toyota',         x: 425, y: 380, c: green, fn: R.propEq('Corp.', 'Toyota Motor Sales U.S.A. Inc.')},
      {str: 'Fiat Chrysler',  x: 306, y: 558, c: yellow, fn: R.propEq('Corp.', 'Chrysler LLC')},
      {str: 'Nissan',         x: 525, y: 58, c: orange, fn: R.propEq('Corp.', 'Nissan North America Inc.')},
      {str: 'Honda',          x: 284, y: 49, c: purple, fn: R.propEq('Corp.', 'American Honda Motor Co. Inc.')},
      {str: 'Hyundai/Kia',    x: 688, y: 87, c: '#6488FF', fn: function(d){ return d['Corp.'] == 'Hyundai Motor America' || d['Corp.'] == 'Kia Motors America Inc.' } },
      {str: 'Other',          x: 696, y: 558, c: 'lightgray', fn: function(){ return true } },
  ]},
  { str: 'Gainers/Losers',
    groups: [
      {str: 'Lost 1% or more',    x: 168, c: red,       fn: function(d){ return d.percentChange < -.01} },
      {str: '+/- less than 1%',   x: 334, c: 'lightgray', fn: function(d){ return d.percentChange < .01} },
      {str: 'Gained 1% or more',  x: 575, c: green,     fn: function(d){ return d.percentChange >= .01} },
  ]},
]


var ƒ = R.prop



//tooltip
var lastShow = new Date();
function ttDisplay(d){
  var tt = d3.select('.tooltip')
  if (isIE9 || !tt.size()) return
	tt.classed('tooltip-hidden', false);

  d3.select(this).style('stroke-width', 3)
  window.setTimeout(function(){
    tt.classed('tooltip-hidden', false);
  }, 0)
  lastShow = new Date();

  [ {id: 'model',      prop: 'Model'},
    {id: 'company',    prop: 'Brand'},
    {id: 'type',       prop: 'Segment'},
    {id: 'sales',      prop: 't2014Str'},
    {id: 'delta',      prop: 'percentChangeStr'}
  ].forEach(function(obj){
      d3.select('#' + obj.id).text(d[obj.prop])
    })

  d3.select('#best-seller')
      .style('display', d.rank < 11 ? 'block' : 'none')
      .html('<b> #' + d.rank + '</b> seller in 2014')
}

function ttMove(d){
  var tt = d3.select('.tooltip')
  if (isIE9 || !tt.size()) return
  var e = d3.event,
      x = e.clientX,
      y = e.clientY,
      doctop = (window.scrollY)? window.scrollY : (document.documentElement && document.documentElement.scrollTop)? document.documentElement.scrollTop : document.body.scrollTop;
      tt = d3.select('.tooltip'),
      n = tt.node(),
      nBB = n.getBoundingClientRect()

  tt.style('top', (y+doctop-nBB.height-18)+"px");
  tt.style('left', Math.min(Math.max(0, (x-nBB.width/2)), window.innerWidth - nBB.width)+"px");
}

function ttHide(d){
  var tt = d3.select('.tooltip')
  if (isIE9 || !tt.size()) return
  //d3.event.stopPropagation();
  var tt = d3.select('.tooltip');
  d3.select(this).style('stroke-width', 1)
  if (new Date() - lastShow > 10){
    tt.classed('tooltip-hidden', true);
  }
}

d3.select(window).on("scroll.tooltip", function(d,i){
  // d3.select('.tooltip').classed('tooltip-hidden', false);
})

//IE 9 console fix
var isIE9 = false
if (!window.console) {
  var console = {log: function() {}};
  isIE9 = true
}


//used to create positions array the first time
function genPosData(){
  positions = d3.selectAll('circle').data().map(function(d){
    var rv = {model: d.model}
    d.position = rv
    return rv
  })
}


//turn on dragging
function activateDrag(){
  forceOn = false
  var drag = d3.behavior.drag()
      .on('drag', function(d){
        d3.select(this)
            .attr('cx', d.x = d3.event.x)
            .attr('cy', d.y = d3.event.y)
      })
  d3.selectAll('circle').call(drag)

  d3.select('.tooltip').style({display: 'none', opacity: 0})
}


//search for type ahead
function searchStr(str){
  return data.filter(function(d){
    var valuesStr = ['model', 'Brand', 'Type', 'Locale'].map(function(vStr){
      return d[vStr].toLowerCase() }).join(' ')

    return str.toLowerCase().split(' ').every(function(word){
      return ~valuesStr.indexOf(word)
      })
    })
}

function freezeData(){
  d3.selectAll('circle').each(function(d){
        d.position['x' + curPosStr] = Math.round(d.x*100)/100
        d.position['y' + curPosStr] = Math.round(d.y*100)/100
      })
}

var darker2 = R.memoize(function(color){
  return d3.rgb(color).darker(1)
})


function sortAndColorForIngold(){
  var color = d3.scale.category20()

  nest = d3.nest().key(ƒ('Brand')).entries(data)

  nest.forEach(function(d){
      d.total = d3.sum(d.values, ƒ('t2014'))
      d.values = _.sortBy(d.values, ƒ('t2014')).reverse()
  })

  _.sortBy(nest, ƒ('total')).reverse().forEach(function(d, i){
      d.values.forEach(function(e, j){
          e.x = j*55
          e.y = i*35
      })
  })

  d3.selectAll('circle')
      .attr('cx', ƒ('x'))
      .attr('cy', ƒ('y'))
      .style('fill', function(d){ return color(d.Brand) })
}


function getCarType(){
  // var outTakes = data
  //     .filter(function(d){
  //       return d.Brand == 'Audi' })
  //     .map(ƒ('model')).map(function(d){
  //       return {model: d, pos: 'r'} })
  // var str = JSON.stringify(outTakes, null, 2)
  // console.log(str)

  var outTakes = data
      .filter(function(d){
        return ~'Bentley, Rolls Royce, Maserati, Lamborghini, Porsche, and Ferrari'.indexOf(d.Brand) })
      .map(ƒ('model')).map(function(d){
        return {model: d, pos: 'r'} })
  var str = JSON.stringify(outTakes, null, 2)
  console.log(str)

  var modelStr = ['Corvette',
  '911 Carrera / GT3',
  'Nissan 350Z / 370Z',
  'Mercedes-Benz "SL" Class',
  'Mercedes-Benz "SLK" Class',
  'F-Type',
  'Boxster',
  'Cayman',
  '911 Turbo / GT2',
  'Z4 / M Roadster',
  'TT Roadster / Coupe',
  'Coupe / Spyder / Conv',
  'GT-R',
  'Ferrari',
  'XK',
  'Viper',
  'R8',
  'XKR',
  'i8',
  'Mercedes-Benz "SLS" Class',
  '918',
  '4C',
  'M3 Conv',
  'LFA',
  'XKR-S',
  'S2000']


  var modelStr = [
    '3 Series Sdn/Cpe/Wgn',
    'Mercedes-Benz "C" Class',
    'ES 350 / 330 / 300h',
    'Avalon',
    '300',
    'IS 250 / 350 / F',
    '4 Series',
    'Q50 Sedan',
    'A4 / S4 / Avant',
    'CTS',
    'Genesis',
    'ATS',
    'S60',
    'TLX',
    'CT 200h',
    'G Sedan',
    'TL',
    'A5 / S5 Coupe',
    'Cadenza',
    'G / Q60 Cpe/Conv',
    '2 Series',
    'A5 / S5 Cabriolet',
    'TSX',
    'V60',
    'Allroad',
    'RC',
    'C70',
    'TSX SportWagon',
    '1 Series',
    'HS 250h',
    'Tesla',
    'ELR',
    'Mercedes-Benz "CL" Class',
    '5 Series',
    'A6 / S6',
    'GS 350 / 300',
    'MKS',
    'XF Series',
    'M / Q70',
    'RLX',
    'S80',
    'M / Q70 Hybrid',
    'RL',
    'DTS',
    'STS',
    'Bentley',
    'Rolls Royce',
    'Lamborghini',
    'Maybach',
    'Mercedes-Benz "E" Class',
    'Mercedes-Benz "S" Class',
    'XTS',
    '7 Series',
    '6 Series',
    'LS 460',
    'Ghibli',
    'A7 / S7',
    'Mercedes-Benz "CLS" Class',
    'A8 / S8',
    'Panamera',
    'XJ Sedan',
    'Equus',
    'Quattroporte',
    'K900',
    'GS 430 / 460 / 450h',
    'LS 600h',
    'Mercedes-Benz ML Class',
    'Mercedes-Benz GL Class',
    'GX 460 / 470',
    'Escalade',
    'Range Rover Sport',
    'QX / QX80',
    'Range Rover',
    'Escalade ESV',
    'Navigator',
    'LR4 / LR3',
    'LX 470 / LX 570'
  ]

  var modelStr = [
    'Prius C',
    'Prius Plug-In',
    'Prius Plug-In ',
    'Prius (excl V/C/N) ',
    'Leaf',
    'Model S',
    'i3',
    'i8',
    'Spark',
    'Volt',
    'ELR',
    'Insight'
  ]


  var outTakes = modelStr.map(function(d){ return {model: d, pos: 'r'} })
  var str = JSON.stringify(outTakes, null, 2)
  console.log(str)


  var outTakes = data
      .filter(function(d){
        return d['Car/Truck'] == 'Light Duty' })
      .map(ƒ('model')).map(function(d){
        return {model: d, pos: 'r'} })
  var str = JSON.stringify(outTakes, null, 2)
  console.log(str)


  d3.select('svg').append('rect')
      .attr({width: 800, height: 600})
      .style('opacity', 0)
      .on('mousemove', function(){
        var pos = d3.mouse(this)
        d3.selectAll('text')
            .attr('x', pos[0])
            .attr('y', pos[1])
        console.log(pos)
      })
}


d3.select('.scroll').on('click', function(){
  d3.select(window).on('keydown.gscroll')(true)
})