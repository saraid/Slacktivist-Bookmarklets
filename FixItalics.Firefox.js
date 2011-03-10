(function(){
var comments = document.getElementsByClassName("comment");
for (var i = 0; i < comments.length - 1; i++)
{
  var buggyComment = false;
  var content = comments[i].getElementsByClassName("comment-content")[0];
  if (content.children[0].nodeName == 'I')
  {
    var spanClone = content.children[0].children[0];
    content.insertBefore(spanClone, content.children[0]);
  }
  else { buggyComment = true; }
  var footer = comments[i].getElementsByClassName("comment-footer")[0];
  if (footer.children[0].nodeName == 'I')
  {
    footer.innerHTML = footer.children[0].innerHTML;
    if (buggyComment) { footer.innerHTML += " (post has italics bug)"; }
  }
}
})();
