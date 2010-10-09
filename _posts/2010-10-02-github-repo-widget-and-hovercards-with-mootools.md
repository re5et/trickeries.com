---
layout: post
---
I wanted something like this but couldn't find it anywhere so I made a MooTools class for it. This uses Request.JSONP to make a remote call to the github api to grab information about a repo.

It can be used like so:

<div class="eval-example-code">
{% highlight js%}
var myRepoWidget = new GithubRepoWidget('mootools', 'mootools-more');
myRepoWidget.addEvent('complete', function(response, widget){
  $('myElement').grab(widget);
});
{% endhighlight %}
</div>

That should output something like this &darr;

<div id="myElement">
</div>

or you can:

{% highlight js %}
var myRepoWidget = new GithubRepoWidget('re5et', '.dotfiles', {
    'injectInto': $('myElement')
});
{% endhighlight %}

My favorite feature is the hovercards static method, which will automatically find links to github repos in your page and fix a hovercard to them.

[Hover this link for an example](http://github.com/mootools/mootools-core). All you have to do is:
{% highlight js %}
GithubRepoWidget.hovercards()
{% endhighlight %}

For more deftailed documentation and source code / images / css, head over to
[the repo for this on github](http://github.com/re5et/github-repo-widgets).
