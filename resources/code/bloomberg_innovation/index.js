
(function(){
  var animations = {};
  var metrics = [];
  metrics["total_score"] = "Overall rank";
  metrics["factor_1_total"] = "R&D";
  metrics["factor_2_total"] = "Manufacturing";
  metrics["factor_3_total"] = "Hi-tech Companies";
  metrics["factor_4_total"] = "Education";
  metrics["factor_5_total"] = "Research Personnel"; //Researcher concentration
  metrics["factor_6_total"] = "Patents";
  metrics["factor_1"] = "R&D intensity: R&D expenditure as % GDP";
  metrics["factor_2"] = "Productivity: manufacturing value-added per capita";
  metrics["factor_3"] = "Hi-tech density: domestically-domiciled high tech cos as a share of world total hi-tech cos (per 1,000)";
  metrics["factor_4_enrollment_ratio"] = "Tertiary efficiency 1: gross tertiary enrollment ratio";
  metrics["factor_4_labor_force"] = "Tertiary efficiency 2: % of labor force w tertiary degrees";
  metrics["factor_4_new_graduates"] = "Tertiary efficiency 3: annual new science & engineering graduates per thousand of labor force";
  metrics["factor_4_new_graduates_pct"] = "Tertiary efficiency 4: annual new science & engineering as % total tertiary graduates";
  metrics["factor_5"] = "Researcher concentration, R&D Researchers per million people";
  metrics["factor_6_apps_per_pop"] = "Patent activity 1: resident utility patent applications per million population";
  metrics["factor_6_apps_per_mil"] = "Patent activity 2: resident utility patent application per million $ R&D expenditure";
  metrics["factor_6_granted"] = "Patent activity 3: Utility patent granted, per 1000 of world total";

  var flds = [];
  flds["Overall rank"] = "total_score";
  flds["R&D"] = "factor_1_total";
  flds["Manufacturing"] = "factor_2_total";
  flds["Hi-tech Companies"] = "factor_3_total";
  flds["Education"] = "factor_4_total";
  flds["Research Personnel"] = "factor_5_total";
  flds["Patents"] = "factor_6_total";

  var totals = ["total_score","factor_1_total","factor_2_total","factor_3_total","factor_4_total","factor_5_total","factor_6_total"];

  var metadata = {
    0:{svg:false, data:metric1, init:build1},
    1:{svg:false, data:metric2, init:build2},
    2:{svg:false, data:metric3, init:build3},
    3:{svg:false, data:metric4, init:build4},
    4:{svg:false, data:metric5, init:build5},
    5:{svg:false, data:metric6, init:build6}
  }

  function commafy(value){
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }


  var pline = d3.svg.line()
      .x(function(d){ return d.x; })
      .y(function(d){ return d.y; });

  var dura = 777
  function build1(masked){
    var xscale = d3.scale.linear().domain([0,3]).range([winW*0.2, winW-(winW*0.2)])
    var yscale = d3.scale.linear().domain([0,d3.max(metric1, function(d) { return d.billions; })]).range([winH-(winH*0.1), metadata[0].topmargin+(winH*0.1)])
    var radius = winW*0.06

    metadata[0].circs = metadata[0].g2.selectAll("circle").data(metric1) 
    metadata[0].circs.enter().append("circle")
    metadata[0].circs
      .attr("r", radius)
      .attr("fill", color("factor_1_total"))
      .attr("cx", function(d,i){return xscale(i)+"px"})
      .transition()
      .delay(function(d,i){return (masked)? 0 : dura*(i+1)*0.2})
      .duration(function(d){return (masked)? dura : dura})
      .attr("cy", function(d){return (masked)? -200+"px" : yscale(d.billions)+"px"})

    metadata[0].bills = metadata[0].g2.selectAll("text").data(metric1) 
    metadata[0].bills.enter().append("text")
    metadata[0].bills
      .text(function(d){return "$"+d.billions+"b"})
      .attr("class", "tiemposbold")
      .attr("font-size", radius*0.5)
      .attr("x", function(d,i){return xscale(i)+"px"})
      .attr("y", function(d){return yscale(d.billions)+((radius*0.5)*0.35)+"px"})
      .transition()
      .delay(function(d,i){return (masked)? 0 : dura*(i+1.25)*0.85})
      .duration(function(d){return (masked)? dura*0.2 : dura*0.5})
      .attr("fill-opacity", function(d){return (masked)? 0 : 1})

    metadata[0].lines = metadata[0].g1.selectAll("path").data(metric1.map(function(d,i){
      return (i>=1)? [{x: xscale(i-1), y: yscale(metric1[parseInt(i)-1].billions)}, {x: xscale(i), y: yscale(d.billions)}] : null; 
    }).slice(1))
    metadata[0].lines.enter().append("path")
    metadata[0].lines
      .attr("d", pline)
      .attr("stroke-dasharray", "1000,1000")
      .attr("stroke-dashoffset", 1000)
      .classed("pline", true)
      .transition()
      .delay(function(d,i){return (masked)? 0 : dura*(i+1.5)*0.85})
      .duration(function(d){return (masked)? dura*0.5 : dura})
      .attr("ease", "ease-in")
      .attr("stroke-dashoffset", function(){return (masked)? 1000 : 0});

    metadata[0].years  = metadata[0].g1.selectAll("text").data(metric1) 
    metadata[0].years.enter().append("text")
    metadata[0].years
      .text(function(d){return d.year})
      .attr("class", "ylabel")
      .attr("fill", "#333")
      .attr("font-size", radius*0.3)
      .attr("x", function(d,i){return xscale(i)+"px"})
      .attr("y", function(d){return  yscale(d.billions)+(radius*1.6)+"px"})
      .transition().duration(dura)
      .attr("fill-opacity", function(d){return (masked)? 0 : 1})
  }

  function build2(masked){
    metric2.forEach(function(d){
      d.dollars = +d.francs*1.14;
    });

    metric2.sort(function(a,b){ return +b.dollars - +a.dollars });

    var pctOfScreen = (winW >= 1850) ? 1 : winW/1850;

    var newLength = (pctOfScreen < 1) ? Math.floor(metric2.length*pctOfScreen) : metric2.length;

    var metric2Revised = [];
    metric2.forEach(function(d,i){
      if (i+1 <= newLength) metric2Revised.push(d);
    });

    var svg = metadata[1].svg;

    svg.attr("id","factor-2-svg");
    var container = $("#factor-2-svg").parent().attr("id","factor-2-container");

    var offset = 0;
    var textHeight = d3.select('[data-panel="2"] .phead').node().getBoundingClientRect().height

    var barScale = d3.scale.linear()
      .domain(d3.extent(metric2Revised,function(d){ return +d.dollars }))
      .range([10, Math.max(winHr - textHeight - 200, 0)]);

    var xscale = d3.scale.linear().domain([0,metric2Revised.length]).range([winW*0.1, winW-(winW*0.1)])
    var barWidth = ((winW*0.8)/metric2Revised.length)-4;

    metadata[1].rects = metadata[1].g1.selectAll(".factor-2-rects").data(metric2Revised);
    metadata[1].rects.enter().append("rect")
    metadata[1].rects
        .attr("class","factor-2-rects")
        .style("fill",color("factor_2_total"))
        .attr("x",function(d,i){ return xscale(i) })
        .attr("width",barWidth)
      .transition()
      .delay(function(d,i){ return (masked)? 0 : (i+1)*50 })
      .duration(1000)
        .attr("height",function(d){ return (masked) ? 5 : barScale(d.dollars) })
        .attr("y",function(d,i){ return (masked)? -winHr : winHr-(winHr*0.1) - barScale(d.dollars); })
        .style("opacity", function(d){ return (masked)? 0 : .9; })

    metadata[1].txt = metadata[1].g2.selectAll(".factor-2-num-labels").data(metric2Revised);
    metadata[1].txt.enter().append("text")
    metadata[1].txt
        .attr("class","factor-2-num-labels tiemposbold")
        .style("fill",function(d){ return (barScale(d.dollars) > 40) ? "#fff" : color("factor_2_total") })
        .style("opacity",0)
        .attr("x",function(d,i){ return xscale(i)+(barWidth*0.5) })
        .text(function(d){ return "$"+(d.dollars/1000).toFixed(2)+"b" })
      .transition()
      .delay(function(d,i){ return (masked)? 0 : (i+1)*50 })
      .duration(1000)
        .attr("y",function(d,i){ 
          var padding = (barScale(d.dollars) > 40) ? 25 : -5;
          return (masked)? -500 : winHr-(winHr*0.1) - barScale(d.dollars) + padding; 
        })
        .style("opacity", function(d){ return (masked)? 0 : 1; })

    var labels = d3.select("#factor-2-container")
      .selectAll(".factor-2-labels")
      .data(metric2Revised)
      .enter().append("div")
        .attr("class","factor-2-labels")
        .style("opacity",0)
        .style("left",function(d,i){ return xscale(i)+"px" })
        .style("top",winHr-(winHr*0.1)+10+"px")
        .style("width",barWidth+"px")
        .html(function(d){ return d.desc; })
      .transition()
      .delay(1800)
      .duration(1000)
        .style("opacity",1)
  }

  function build3(masked){
    metadata[2].svg = d3.select("#tech-companies");
    var textHeight = d3.select('[data-panel="3"] .phead').node().getBoundingClientRect().height

    var scaleF = winW > 1100 ? 1 : winW > 850 ? .7 : winW > 500 ? .4 : .25
    var g = d3.select("#tech-companies-elements")
      .attr("transform", "translate(" + winW*0.22*scaleF + "," + (textHeight + 100) + ") scale(" + scaleF + ")");

    var cos = d3.selectAll("#tech-companies-elements rect").data(metadata[2].shapeCoordinates);

    cos.transition()
      .delay(function(d,i){ return (masked)? 0 : (i+1)*(Math.random()*100) })
      .duration(function(d,i){ return (masked)? 700 : Math.floor(Math.random() * 1400) + 600})
      .attr("y",function(d){ return (masked)? d.y-1400 : d.y; });

    d3.selectAll("#tech-companies-elements text")
      .style("opacity",0);

    d3.selectAll("#tech-companies-elements text")
      .transition()
      .delay(1200)
      .duration(750)
      .style("opacity",function(d){ return (masked)? 0 : 1; });
  }

  function build4(masked){
    d3.selectAll('.eblock').transition()
      .delay(function(d,i){return (i+1)*222})
      .duration(750)
      .style("top",function(d){ return (masked)? -1600+"px" : 0+"px"; })
      .transition().duration(555)
        .style("color",function(d){ return (masked)? "#2800D7" : "#fff"; })
    
    var offset = $(".defined").offset()
    $(".definer").css({top: offset.top - $("#post_ed").offset().top , left: offset.left - 40 })
  }

  function build5(masked){
    var xscale = d3.scale.linear().domain([0,2]).range([winW*0.2, winW-(winW*0.15)])
    var yscale = d3.scale.linear().domain([0,d3.max(metric1, function(d) { return d.billions; })]).range([winH-(winH*0.2), metadata[4].topmargin+(winH*0.2)])
    var radius = d3.scale.linear().domain([0,Math.sqrt(7482.3434)]).range([0, winW-(winW*0.86)])

    metadata[4].circs = metadata[4].g1.selectAll("circle").data(metric5) 
    metadata[4].circs.enter().append("circle")
    metadata[4].circs
      .attr("r", function(d){return radius(Math.sqrt(d.value))})
      .attr("fill", color("factor_5_total"))
      .attr("cx", function(d,i){return (i==1)? xscale(i)+(xscale(i)*0.1) : xscale(i)})
      .transition()
      .delay(function(d,i){return (masked)? 0 : dura*(i+1)*0.2})
      .duration(function(d){return (masked)? dura : dura})
      .attr("cy", function(d){return (masked)? -600 : metadata[4].topmargin+(winH*0.26)})

    metadata[4].vals = metadata[4].g1.selectAll("text").data(metric5) 
    metadata[4].vals.enter().append("text")
    metadata[4].vals
      .text(function(d){return commafy(d.value)})
      .attr("class", "tiemposbold")
      .attr("font-size", function(d){return radius(Math.sqrt(d.value))*0.6})
      .attr("x", function(d,i){return (i==1)? xscale(i)+(xscale(i)*0.1) : xscale(i)})
      .attr("y", function(d){return metadata[4].topmargin+(winH*0.26)})
      //.attr("dx", function(d){return (radius(Math.sqrt(d.value))*-0.12)})
      .attr("dy", function(d){return (radius(Math.sqrt(d.value))*0.6)*0.4})
      .transition()
      .delay(function(d,i){return (masked)? 0 : dura*(i+2)*0.45})
      .duration(function(d){return (masked)? dura*0.2 : dura*0.5})
      .attr("fill-opacity", function(d){return (masked)? 0 : 1})

    // metadata[4].signs = metadata[4].g3.selectAll("text").data(metric5) 
    // metadata[4].signs.enter().append("text")
    // metadata[4].signs
    //   .text("%")
    //   .attr("class", "tiempos")
    //   .attr("text-anchor", "left")
    //   .attr("fill", "#fff")
    //   .attr("font-size", function(d){return radius(Math.sqrt(d.value))*0.4})
    //   .attr("x", function(d,i){return xscale(i)+(metadata[4].percents[0][i].getBBox().width*0.5)})
    //   .attr("y", function(d){return metadata[4].topmargin+(winH*0.28)})
    //   .attr("dx", function(d){return (radius(Math.sqrt(d.value))*-0.1)})
    //   .attr("dy", function(d,i){return  ((radius(Math.sqrt(d.value))*0.6)*-0.06)})//(metadata[4].percents[0][i].getBBox().height*-1)+(radius(Math.sqrt(d.value))*0.2)
    //   .transition()
    //   .delay(function(d,i){return (masked)? 0 : dura*(i+2)*0.45})
    //   .duration(function(d){return (masked)? dura*0.2 : dura*0.5})
    //   .attr("fill-opacity", function(d){return (masked)? 0 : 1})

    metadata[4].countries = metadata[4].g2.selectAll("text").data(metric5) 
    metadata[4].countries.enter().append("text")
    metadata[4].countries
      .text(function(d){return d.country})
      .attr("class", "ylabel")
      .attr("fill", "#333")
      .attr("font-size", function(d){return (winW*0.018>12)? winW*0.018 : 12})
      .attr("x", function(d,i){return (i==1)? xscale(i)+(xscale(i)*0.1) : xscale(i)})
      .attr("y", function(d){return (metadata[4].topmargin+(winH*0.31))+(radius(Math.sqrt(d.value))) })
      // .transition()
      // .delay(function(d,i){return (masked)? 0 : dura*(i+2)*0.45})
      // .duration(function(d){return (masked)? dura*0.2 : dura*0.5})
      .attr("fill-opacity", function(d){return (masked)? 0 : 1})    
  }


  function build6(masked){

    var xscale = d3.scale.linear().domain([0,3]).range([winW*0.2, winW-(winW*0.2)])
    var yscale = d3.scale.linear().domain([0,d3.max(metric6, function(d) { return d.val; })]).range([winH-(winH*0.1), metadata[5].topmargin+(winH*0.1)])
    var radius = winW*0.06;

    metadata[5].circs = metadata[5].g2.selectAll("rect").data(metric6) 
    metadata[5].circs.enter().append("rect")
    metadata[5].circs
      .attr("width", radius*2)
      .attr("height", radius*2)
      .attr("fill", color("factor_6_total"))
      .attr("x", function(d,i){ return xscale(i)-radius+"px"})
      .transition()
      .delay(function(d,i){ return (masked)? 0 : dura*(i+1)*0.2})
      .duration(function(d){ return (masked)? dura : dura})
      .attr("y", function(d){ return (masked)? -winH+"px" : yscale(d.val)-radius+"px"})

    metadata[5].bills = metadata[5].g2.selectAll("text").data(metric6) 
    metadata[5].bills.enter().append("text")
    metadata[5].bills
      .text(function(d){return commafy(d.val)})
      .attr("class", "tiemposbold")
      .attr("font-size", radius*0.5)
      .attr("x", function(d,i){return xscale(i)+"px"})
      .attr("y", function(d){return yscale(d.val)+(radius*0.2)+"px"})
      .transition()
      .delay(function(d,i){return (masked)? 0 : dura*(i+1.25)*0.85})
      .duration(function(d){return (masked)? dura*0.2 : dura*0.5})
      .attr("fill-opacity", function(d){return (masked)? 0 : 1})

    metadata[5].lines = metadata[5].g1.selectAll("path").data(metric6.map(function(d,i){
      return (i>=1)? [{x: xscale(i-1), y: yscale(metric6[parseInt(i)-1].val)}, {x: xscale(i), y: yscale(d.val)}] : null; 
    }).slice(1))
    metadata[5].lines.enter().append("path")
    metadata[5].lines
      .attr("d", pline)
      .attr("stroke-dasharray", "1000,1000")
      .attr("stroke-dashoffset", 1000)
      .classed("pline factor-6-line", true)
      .style("stroke","#000")
      .transition()
      .delay(function(d,i){return (masked)? 0 : dura*(i+1.5)*0.85})
      .duration(function(d){return (masked)? dura*0.5 : dura})
      .attr("ease", "ease-in")
      .attr("stroke-dashoffset", function(){return (masked)? 1000 : 0});

    metadata[5].years  = metadata[5].g1.selectAll("text").data(metric6) 
    metadata[5].years.enter().append("text")
    metadata[5].years
      .text(function(d){return d.year})
      .attr("class", "ylabel")
      .attr("fill", "#333")
      .attr("font-size", radius*0.3)
      .attr("x", function(d,i){return xscale(i)+"px"})
      .attr("y", function(d){return  yscale(d.val)+(radius*1.6)+"px"})
      .transition().duration(dura)
      .attr("fill-opacity", function(d){return (masked)? 0 : 1})

    // d3.select(".patent-annotation")
    //   .style("position","absolute")
    //   .style("width",radius*2+"px")
    //   .style("left",xscale(3)-radius+"px")
    //   .style("top", yscale(7000)-(radius*0.2)+"px")
    //   .html("U.S. Supreme Court rulings making it easier to invalidate patents, and greater scrutiny by the U.S. Patent and Trademark Office, had a chilling effect on lawsuits last year")
  
  }

  var color = d3.scale.ordinal()
    .domain(totals)
    .range(["#000","#6488FF","#FB8B1E","#1DCC92","#2800D7","#B547F1","#FF433D"]);

  // intro animation
  // adjust viewport
  var introWidth = d3.select('.bizborder').node().getBoundingClientRect().width
  introWidth = introWidth == 850 ? 903 : introWidth
  var introHeight = (656/903)*introWidth
  d3.select('#svg-intro').attr({
    width: introWidth,
    height: introHeight,
    // viewBox: [0, 83, introWidth, introHeight].join(' ')
  })
  var shapeCoordinates = [];
  d3.selectAll("#intro-shapes *")
    .each(function(){
      var el = d3.select(this);
      shapeCoordinates.push({"x": +el.attr("x"),"y": +el.attr("y"),"cx": +el.attr("cx"),"cy": +el.attr("cy"),"points": +el.attr("points") });
    });
  d3.selectAll("#intro-shapes *").data(shapeCoordinates);
  d3.selectAll("#intro-shapes rect")
    .attr("y",-200)
    .transition()
    .delay(function(d,i){ return i*(Math.random()*100) })
    .duration(Math.floor(Math.random() * 2000) + 1000)
    .attr("y",function(d){ return d.y; })
  d3.selectAll("#intro-shapes circle")
    .attr("cy",-200)
    .transition()
    .delay(function(d,i){ return i*(Math.random()*100) })
    .duration(Math.floor(Math.random() * 2000) + 1000)
    .attr("cy",function(d){ return d.cy })
  d3.selectAll("#intro-shapes polygon")
    .style("opacity",0)
    .transition()
    .delay(2000)
    .duration(500)
    .style("opacity",1);
  d3.selectAll("#intro-title path")
    .transition()
    .delay(function(d,i){ return (i+1)*100 })
    .duration(2000)
    .style("fill",function(d,i){ 
      i = i + 1;
      var ind = Math.floor(Math.random() * 6) + 1;
      return color(totals[ind]) 
    });

  // section bar colors
  d3.selectAll(".section-color").style("color",function(){
    var fld = d3.select(this).attr("id");
    return color(fld);
  });

  // top five color
  d3.selectAll(".top5")
    .each(function(d,i){
      d3.select(this)
        .style("color",color(totals[i+1]))
        .style("border-color",color(totals[i+1]))
    });
  d3.selectAll(".top5-title")
    .each(function(d,i){
      d3.select(this)
        .style("border-bottom","3px solid "+color(totals[i+1]))
    });

  $("#scroll-to-ranking").on("click",function(){
    $('html, body').animate({
          scrollTop: $("#overall-ranking").offset().top
    }, 1500);
  });


  $(".panelbox").scrollpage({
    snap: true,
    stepper: true,
  })

  var winH = $(window).height()
  var winW = $(window).width()

  if (winW < 1441) {
    d3.selectAll(".charthead").classed("charthead-20-40",false).style("left","0px").style("margin-top","20px");
    d3.selectAll(".charthead").classed("charthead-20-30",false).style("left","0px").style("margin-top","20px");
    d3.selectAll(".charthead").classed("charthead-20-25",false).style("left","0px").style("margin-top","20px");
    d3.selectAll(".charthead").classed("charthead-20-27",false).style("left","0px").style("margin-top","20px");
  }

  winHr = winH;
  winH = (winH<=1000 || winW<=1000)? (winH > winW)? winH*1.45 : winW*1.5: winH;
  //MAKE SURE YOU INCLUDE $.fn.scrollpage.resizePage() ON WINDOW.RESIZE
  window.onresize = _.debounce(function(){
    winH = $(window).height()
    winW = $(window).width()
    winHr = winH;
    winH = (winH<=1000 || winW<=1000)? (winH > winW)? winH*1.45 : winW*1.5: winH;
    $.fn.scrollpage.resizePage();
    d3.selectAll(".panel.stacked.peter").each(function(d,i){ buildMetric(this,i) })
    if( metadata.hasOwnProperty($.fn.scrollpage.currentp-1) )metadata[$.fn.scrollpage.currentp-1].init(false)
  },250)


  d3.selectAll(".panel.stacked.peter").on("focused", function(e,i){
    metadata[i].init(false)
  })
  d3.selectAll(".panel.stacked.peter").on("blurred", function(e,i){
    metadata[i].init(true)
  })

  d3.selectAll(".panel.stacked.peter").each(function(d,i){ buildMetric(this,i) })

  d3.selectAll(".panelstepper .step").each(function(d,i){
    var el =  d3.select(this),
      step = d3.select(this).attr("data-step")
    if(step>=1 && step<=6) el.style("background-color" , color("factor_"+step+"_total"))
  })

  function buildMetric(element,i){
    metadata[i].topmargin =  $(element).find(".panel-inner").outerHeight()
    if(!metadata[i].svg){
      metadata[i].fullchart = d3.select(element).select(".fullchart")
      if (i !== 2 && i !== 3) {
        metadata[i].svg = metadata[i].fullchart.append("svg").classed("chart",true)
        metadata[i].g1 = metadata[i].svg.append("g")
        metadata[i].g2 = metadata[i].svg.append("g")
        metadata[i].g3 = metadata[i].svg.append("g")      
      } else {
        if(!metadata[i].hasOwnProperty("shapeCoordinates")){
          metadata[i].shapeCoordinates = [];
          d3.selectAll("#tech-companies-elements rect").each(function(){
            var el = d3.select(this);
            metadata[i].shapeCoordinates.push({"x": +el.attr("x"),"y": +el.attr("y") });
            el.attr("y", -1000)
          });
        }
      }
      metadata[i].init(true)
    }
    if (i !== 2 && i !== 3) metadata[i].svg.attr("height", winH)
  }




  d3.csv("data/data3.csv",function(error,data){

    var fields = Object.keys(data[0]);

    //
    // overall chart
    //

    var widthPct = (winW < 1240) ? winW/1240 : 1;
    var graphicSettings = {
      primaryWidth: 1140*widthPct, 
      barChartHeight: 190*widthPct, 
      lgHeight: 1400*widthPct, 
      barHeight: 30*widthPct,
      barOffsetLabelY: 20*widthPct,
      barOffsetNumberX: -5*widthPct,
      barOffset: 150*widthPct,
      yOffset: 25*widthPct,
      countryOffset: -8*widthPct
    };

    function loadOverall() {
      var margin = {top: 90, right: 0, bottom: 0, left: 0},
        width = graphicSettings.primaryWidth - margin.left - margin.right,
        height = graphicSettings.lgHeight - margin.top - margin.bottom;

      var dataByCountry = d3.nest()
        .key(function(d){ return d.country })
        .map(data);

      var countries = Object.keys(dataByCountry);

      var offset = 0;

      var x = d3.scale.ordinal()
        .domain(totals)
        .rangeRoundBands([0, width-offset], 0);

      var y = d3.scale.ordinal()
        .domain(countries)
        .rangeRoundBands([0, height], 0);

      var band = (width-offset)/7
      var barScale = d3.scale.linear()
        .domain([0, 100])
        .range([1, band-2]);

      var flat = [];
      data.forEach(function(d){
        var score_total = 0;
        totals.forEach(function(total){
          var completeness = 1;
          if (total == "factor_4_total") {
            completeness = d.factor_4_complete;
          } else if (total == "factor_6_total") {
            completeness = d.factor_6_complete;
          }
          flat.push({"field":total,"score":+d[total],"country":d.country,"completeness":+completeness,"score_so_far":score_total})
          score_total += barScale(d[total]);
        });
      });

      // field-labels
      var firstseven = [];
      flat.forEach(function(d,i){
        if (i <= 6) {
          firstseven.push(d);
        }
      });

      d3.select("#main-index").append("div")
      .attr("class","field-label-container")
      .selectAll(".field-labels")
        .data(firstseven)
      .enter().append("div")
        .attr("class","field-labels")
        .style("left",function(d) { return x(d.field)+offset+2+"px" })
        .style("top","10px")
        .style("width",(band-2)+"px")
        .style("color",function(d){ return color(d.field) })
        .html(function(d){ return metrics[d.field] });

      // rand numbers
      d3.select("#main-index").append("div").classed("rankbox",true)
        .selectAll("p")
        .data(countries)
      .enter().append("p")
        .classed("ranknum",true)
        .style("left",-22+"px")
        .style("top",function(d) { return (57+y(d))+"px"; })
        .text(function(d,i){ return (i+1) });

      var svg = d3.select("#main-index").append("svg:svg")
        .attr("id","ranking-svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

      // bars
      svg.append("g")
      .selectAll(".sqs-val")
        .data(flat)
      .enter().append("rect")
        .attr("class",function(d){ return (d.field == "total_score") ? "sqs-val sqs-overall" : "sqs-val sqs"; })
        .attr("x",function(d) { return x(d.field)+offset })
        .attr("y",function(d) { return y(d.country)-graphicSettings.yOffset })
        .attr("width",0)
        .attr("height",graphicSettings.yOffset)
        .style("fill",function(d){ return color(d.field) })
        .style("fill-opacity",function(d){ return d.completeness });

      d3.select("#overall-ranking").on("focused", function(e,i){
        // animate in
        d3.selectAll(".sqs-val")
          .transition()
          .delay(function(d,i){ return i*10 })
          .duration(750)
          .attr("width", function(d) { return barScale(d.score) })
      })

      // lines
      svg.append("g")
      .selectAll(".lines")
        .data(countries)
      .enter().append("line")
        .attr("class","lines")
        .attr("x1",0)
        .attr("y1",function(d) { return y(d); })
        .attr("x2",width)
        .attr("y2",function(d) { return y(d); });

      // country-labels
      svg.append("g")
      .selectAll(".country-labels")
        .data(countries)
      .enter().append("text")
        .attr("class","country-labels")
        .attr("x",10)
        .attr("y",function(d) { return y(d)+graphicSettings.countryOffset; })
        .style("fill","#ddd")
        .text(function(d,i){ 
          var ind = countries.indexOf(d)+1;
          var withrank = "#"+ind+" "+d;
          return d;
        });
      
      // interaction

      d3.selectAll(".field-labels")
      .on("mouseover",function(){
        var selectedField = d3.select(this).text();
        var fld = flds[selectedField];
        d3.select(this).style("border-bottom","5px solid "+color(fld));
      })
      .on("mouseout",function(){
        var selectedField = d3.select(this).text();
        var fld = flds[selectedField];
        if (!this.classList.contains("selected")) {
          d3.select(this).style("border-bottom","none")
        }
      })
      .on("mousedown",function(){
        var selectedField = d3.select(this).text();
        var fld = flds[selectedField];
        var rnkfld = fld.replace("_total","_rank");

        d3.selectAll(".field-labels")
          .classed("selected",false)
          .style("border-bottom","none")
        d3.select(this)
          .classed("selected",true)
          .style("border-bottom","5px solid "+color(fld))

        var sortedByFld = data.slice().sort(function(a,b){
          return +b[fld] - +a[fld];
        });

        var dataByCountryFactor = d3.nest()
          .key(function(d){ return d.country })
          .map(sortedByFld);
        var countries1 = Object.keys(dataByCountryFactor);
        var y1 = d3.scale.ordinal()
          .domain(countries1)
          .rangeRoundBands([0, height], 0);

        var flat2 = [];
        sortedByFld.forEach(function(d){
          var score_total = 0;
          totals.forEach(function(total){
            var completeness = 1;
            if (total == "factor_4_total") {
              completeness = d.factor_4_complete;
            } else if (total == "factor_6_total") {
              completeness = d.factor_6_complete;
            }
            flat2.push({"field":total,"score":+d[total],"country":d.country,"completeness":+completeness,"score_so_far":score_total})
            score_total += barScale(d[total]);
          });
        });

        d3.selectAll(".ranknum").html(function(d,i){
          rnkfld = (fld == "total_score") ? "rank" : rnkfld;
          return sortedByFld[i][rnkfld];
        });

        d3.selectAll(".sqs-val").data(flat2);
        d3.selectAll(".sqs").transition().duration(1000)
          .attr("width", function(d) { return barScale(d.score) })
          // .style("fill-opacity",function(d){ return d.completeness });
        d3.selectAll(".sqs-overall").transition().duration(1000)
          .attr("y",function(d) { return y(d.country)-graphicSettings.yOffset });
        d3.selectAll(".country-labels")
          .transition().duration(1000)
          .attr("y",function(d) { return y1(d)+graphicSettings.countryOffset })
      });
    }

    loadOverall();



  });

})()