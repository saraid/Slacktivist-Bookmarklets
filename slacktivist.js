(function(YAHOO){
  var SlacktivistBookmarklet = function()
  {
    var $byId = document.getElementById;
    var $byClass = YAHOO.util.Dom.getElementsByClassName;

    var Comment = function(domNode)
    {
      this.id = domNode.id;

      var rawFooter = $byClass("comment-footer", "p", domNode)[0].innerHTML;
      rawFooter = rawFooter.split('\n')
      if (rawFooter[2].match(/<a/))
      {
        this.authorURL = rawFooter[2].match(/href="(.*)"/)[1];
        this.author = rawFooter[2].match(/>(.*)/)[1];
      }
      else
      { this.author = rawFooter[2].match(/\w+|/)[0]; }

      var bodyTags = $byId(this.id + "-content").getElementsByTagName("p");
      this.body = '';
      for (var i = 0; i < bodyTags.length; i++)
      { this.body += bodyTags[i].innerHTML; }
    }

    Comment.create = function(domNode)
    { comments.push(new Comment(domNode)); }

    var comments = [];
    $byClass("comment", "div", document, Comment.create);
    /* for (var i = 0; i < comments.length; i++) { comments[i] = new Comment(comments[i]); } */
  };
})(YAHOO);
