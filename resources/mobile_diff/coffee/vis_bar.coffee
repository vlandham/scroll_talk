
root = exports ? this


Fake = () ->
  width = 800
  height = 600
  data = []
  margin = {top: 80, right: 20, bottom: 20, left: 160}
  colors = {"normal scrolling":"#5AAF8C","special scrolling":"#399785", "swipe":"#008080"}
  x = d3.scale.linear()
    .rangeRound([0, width])

  y = d3.scale.ordinal()
    .rangeRoundBands([0,height], .1)

  xAxis = d3.svg.axis()
    .scale(x)
    .orient('bottom')

  transformData = (rawData) ->

    max = d3.sum(rawData, (d) -> +d.count)
    x.domain([0,max])

    # y.domain(rawData.map((d) -> d.type))
    y.domain([0,1])

    sum = 0
    rawData.forEach (d) ->
      d.count = +d.count
      d.sum = sum
      sum += d.count
      

    rawData

  chart = (selection) ->
    selection.each (rawData) ->
      data = transformData(rawData)
      svg = d3.select(this).selectAll("svg").data([data])
      gEnter = svg.enter().append("svg").append("g")
      
      svg.attr("width", width + margin.left + margin.right )
      svg.attr("height", height + margin.top + margin.bottom )

      g = svg.select("g")
        .attr("transform", "translate(#{margin.left},#{margin.top})")

      rowHeight = Math.round(height / data.length)
      buffer = 5

      g.append("text")
        .attr("class", "title")
        .text("Scrolling In MobileVis")
        .style("font-family", "Yanone Kaffeesatz")
        .style("font-size", "42px")
        .attr("dy", -1 * (margin.top / 3))


      boxes = g.selectAll(".box")
        .data(data)
        .enter()
        .append("rect")
        .attr('class', 'box')

      boxes
        .attr("fill", (d) -> colors[d.type])
        # .attr("height", rowHeight)
        .attr("height", y.rangeBand())
        .attr("x", (d,i) -> if i == 1 then x(d.sum) else 0)
        .attr("y", (d,i) -> if i < 2 then y(0) else y(1))
        .attr("width", (d) -> x(d.count))

        

  chart.height = (_) ->
    if !arguments.length
      return height
    height = _
    chart

  chart.width = (_) ->
    if !arguments.length
      return width
    width = _
    chart

  chart

Plot = () ->
  width = 600
  height = 600
  data = []
  points = null
  margin = {top: 20, right: 20, bottom: 20, left: 20}
  xScale = d3.scale.linear().domain([0,10]).range([0,width])
  yScale = d3.scale.linear().domain([0,10]).range([0,height])
  xValue = (d) -> parseFloat(d.x)
  yValue = (d) -> parseFloat(d.y)

  chart = (selection) ->
    selection.each (rawData) ->

      data = rawData

      svg = d3.select(this).selectAll("svg").data([data])
      gEnter = svg.enter().append("svg").append("g")
      
      svg.attr("width", width + margin.left + margin.right )
      svg.attr("height", height + margin.top + margin.bottom )

      g = svg.select("g")
        .attr("transform", "translate(#{margin.left},#{margin.top})")

      points = g.append("g").attr("id", "vis_points")
      update()

  update = () ->
    points.selectAll(".point")
      .data(data).enter()
      .append("circle")
      .attr("cx", (d) -> xScale(xValue(d)))
      .attr("cy", (d) -> yScale(yValue(d)))
      .attr("r", 4)
      .attr("fill", "steelblue")

  chart.height = (_) ->
    if !arguments.length
      return height
    height = _
    chart

  chart.width = (_) ->
    if !arguments.length
      return width
    width = _
    chart

  chart.margin = (_) ->
    if !arguments.length
      return margin
    margin = _
    chart

  chart.x = (_) ->
    if !arguments.length
      return xValue
    xValue = _
    chart

  chart.y = (_) ->
    if !arguments.length
      return yValue
    yValue = _
    chart

  return chart

root.plotData = (selector, data, plot) ->
  d3.select(selector)
    .datum(data)
    .call(plot)


$ ->

  plot = Fake()
  display = (error, data) ->
    plotData("#vis", data, plot)

  queue()
    .defer(d3.csv, "data/mobilevis_counts.csv")
    .await(display)

