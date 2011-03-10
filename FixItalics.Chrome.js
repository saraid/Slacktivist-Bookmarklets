(function(){
var commentWrapper = document.getElementById("comments-content");
var comments = document.getElementsByClassName("comment");
for (var i = 0; i < comments.length - 1; i++)
{
  if (comments[i].parentNode.nodeName == 'I')
  {
    var commentClone = comments[i].cloneNode(true);
    var evilItalic = comments[i].parentNode;
    commentWrapper.insertBefore(commentClone, evilItalic);
    evilItalic.innerHTML = null;
  }

  var content = comments[i].getElementsByClassName("comment-content")[0];
  var span = content.getElementsByTagName("span")[0];
  var pList = span.childNodes;
  var cPList = [];
  for (var j = 0; j < pList.length; j++) { cPList.push(pList[j].cloneNode(true)); }
  span.innerHTML = null;
  for (var k = 0; k < cPList.length; k++) { span.appendChild(cPList[k]); }

  var footer = comments[i].getElementsByClassName("comment-footer")[0];
  if (footer.parentNode.nodeName == 'I')
  {
    var footerClone = footer.cloneNode(true);
    footer.parentNode.removeChild(footer);
    comments[i].appendChild(footerClone);
  }
}
})();
