(function(){
var footers = YAHOO.util.Dom.getElementsByClassName("entry-footer-info");
for (var i = 0; i < footers.length; i++)
{
  var comments = YAHOO.util.Dom.getElementsByClassName("entry-comments", "a", footers[i])[0];
  var numComments = parseInt(comments.textContent.match(/\d+/)[0]);
  var lastPage = Math.ceil(numComments / 50);
  var sep = document.createElement("span");
  YAHOO.util.Dom.addClass(sep, "seperator");
  sep.innerHTML = " | ";
  var href = comments.href;
  var lastPageLink = document.createElement("a");
  lastPageLink.setAttribute("href", href.replace(/.html(?:#comments)/, "/comments/page/"+lastPage+"#comments"));
  lastPageLink.innerHTML = "Last Page";

  YAHOO.util.Dom.insertAfter(sep, comments);
  YAHOO.util.Dom.insertAfter(lastPageLink, sep);
}
})();