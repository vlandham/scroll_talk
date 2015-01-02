$("#toc").remove();
$(".thumb").remove();
$(".infobox").remove();
var body = $('#content').html();
//body = body.replace(/(\r\n|\n|\r)/gm,"");
body = body.replace("h4","h3");

body = body.replace("h5","h3");
body = body.replace("</h3>","");
var arr = body.split("<p>");
var newBody = "<a><h2>";
arr.forEach(function(p) {
  var sentences = p.split(".");
	newBody = newBody + "<tr><td><h3>" + '<font color="#0033FF"><font face="arial">' + p + "</font color>" + "</td></tr>";
});
newBody += "</h3>" + "</h3></h2></a>";
$('#content').html(newBody);

//http://chriszarate.github.io/bookmarkleter/

