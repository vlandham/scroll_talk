
root = exports ? this


Fake = () ->
  width = 800
  height = 600
  data = []
  margin = {top: 80, right: 20, bottom: 20, left: 160}
  colors = {"same":"#999","static":"#008080"}

  transformData = (rawData) ->

    rawData = rawData.filter((d) -> d.show != "false")

    d3.nest()
      .key((d) -> d.type)
      .sortValues((d) -> if d.mobile == "same" then -1 else 1)
      .entries(rawData)
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
        .text("Scrolling Examples On Mobile")
        .style("font-family", "Yanone Kaffeesatz")
        .style("font-size", "42px")
        .attr("dy", -1 * (margin.top / 3))


      rows = g.selectAll(".row").data(data)
        .enter()
        .append("g")
        .attr("class", "row")
        .attr("transform", (d,i) -> "translate(#{0},#{i * (buffer + rowHeight)})")

      rows.append("text")
        .text((d) -> d.key.toUpperCase())
        .attr("dy", rowHeight / 2)
        .attr("x", -10)
        .style("font-family", "Yanone Kaffeesatz")
        .style("font-size", "26px")
        .attr("text-anchor", "end")

      boxes = rows.selectAll(".box")
        .data((d) -> d.values)
        .enter()
        .append("rect")
      boxes
        .attr("fill", (d) -> colors[d.mobile])
        .attr("width", rowHeight)
        .attr("height", rowHeight)
        .attr("transform", (d,i) -> "translate(#{(buffer + rowHeight) * i}, 0)")

      key = g.append('g')
      keyEntries = ["same", "static"]
      key.selectAll(".box").data(keyEntries)
        .enter()
        .append("rect")
        .attr("class", "box")
        .attr("width", rowHeight / 3)
        .attr("height", rowHeight / 3)
        .attr("fill", (d) -> colors[d])
        .attr("transform", (d,i) -> "translate(#{(rowHeight + buffer) * 5},#{((rowHeight / 3) + buffer) * i})")

      key.selectAll(".key").data(keyEntries)
        .enter()
        .append('text')
        .attr("transform", (d,i) -> "translate(#{(rowHeight + buffer) * 5},#{((rowHeight / 3) + buffer) * i})")
        .attr("x", ((rowHeight / 3) + buffer))
        .attr("dy", (d,i) -> ((rowHeight / 5)))
        .attr("dx", buffer)
        .style("font-family", "Yanone Kaffeesatz")
        .style("font-size", "20px")
        .text((d,i) -> if i == 0 then "Kept Scrolling" else "Simplified Scrolling")

        

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
    .defer(d3.csv, "data/examples.csv")
    .await(display)

