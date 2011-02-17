---
layout: post
title: pretty diff rubygem
stylesheets: [/assets/css/pretty-diff.css]
---

I was looking for a gem that would allow diffing two multiline-strings and generate a pretty looking html diff ala github, but didn't find anything so I made [this gem](http://rubygems.org/gems/pretty-diffhttp://rubygems.org/gems/pretty-diff), [taking inspiration from this post](http://markmcb.com/2008/11/04/ruby-on-rails-diff-text-to-html-ins-and-del/).  You can use it like so:

## You can install like usual:
{% highlight sh %}
gem install pretty-diff
{% endhighlight %}

## And use like so:
{% highlight ruby %}
# for comparing two files
myDiff = PrettyDiff::files('/path/to/first/file', '/path/to/second/file')

# for comparing two strings

string1 = "Some
Big
Long
string
with
a
bunch
of
lines
that
wasn't
very
well
thought
out."

string2 = "A
Big
Long
string
that
has
been
revised
and
is
now
well
thought
out."

myDiff = PrettyDiff::strings(string1, string2).to_html

# you can  then do
myDiff.to_s # to output the normal diff

# or what I made it for
myDiff.to_html
{% endhighlight %}

## The html output will look something like this:
{% highlight html %}
<ul>
<li>--- /tmp/fileone20110217-26623-aci0rq	2011-02-17 09:29:38.343173000 -0800</li>
<li>+++ /tmp/filetwo20110217-26623-zto770	2011-02-17 09:29:38.343173000 -0800</li>
<li>@@ -1,15 +1,14 @@</li>
<li class="del"><del>-Some</del></li>
<li class="ins"><ins>+A</ins></li>
<li> Big</li>
<li> Long</li>
<li> string</li>
<li class="del"><del>-with</del></li>
<li class="del"><del>-a</del></li>
<li class="del"><del>-bunch</del></li>
<li class="del"><del>-of</del></li>
<li class="del"><del>-lines</del></li>
<li> that</li>
<li class="del"><del>-wasn't</del></li>
<li class="del"><del>-very</del></li>
<li class="ins"><ins>+has</ins></li>
<li class="ins"><ins>+been</ins></li>
<li class="ins"><ins>+revised</ins></li>
<li class="ins"><ins>+and</ins></li>
<li class="ins"><ins>+is</ins></li>
<li class="ins"><ins>+now</ins></li>
<li> well</li>
<li> thought</li>
<li> out.</li>
</ul>
{% endhighlight %}

The ul, li, .del and .ins classes and del and ins tags are there to allow for nice styling, so you can put out something like the following:

<ul class="pretty-diff">
<li>--- /tmp/fileone20110217-26623-aci0rq	2011-02-17 09:29:38.343173000 -0800</li>
<li>+++ /tmp/filetwo20110217-26623-zto770	2011-02-17 09:29:38.343173000 -0800</li>
<li>@@ -1,15 +1,14 @@</li>
<li class="del"><del>-Some</del></li>
<li class="ins"><ins>+A</ins></li>
<li> Big</li>
<li> Long</li>
<li> string</li>
<li class="del"><del>-with</del></li>
<li class="del"><del>-a</del></li>
<li class="del"><del>-bunch</del></li>
<li class="del"><del>-of</del></li>
<li class="del"><del>-lines</del></li>
<li> that</li>
<li class="del"><del>-wasn't</del></li>
<li class="del"><del>-very</del></li>
<li class="ins"><ins>+has</ins></li>
<li class="ins"><ins>+been</ins></li>
<li class="ins"><ins>+revised</ins></li>
<li class="ins"><ins>+and</ins></li>
<li class="ins"><ins>+is</ins></li>
<li class="ins"><ins>+now</ins></li>
<li> well</li>
<li> thought</li>
<li> out.</li>
</ul>

# the css for the above if you want it
{% highlight css %}
.pretty-diff{
    list-style:none;
    padding:0;
    margin:0;
    background:#FFF;
    font-family:monospace;
    color:#333;
    font-size:12px;
}

.pretty-diff li{
    padding:2px 5px;
    margin:0;
}

.pretty-diff ins, .pretty-diff del{
    text-decoration:none;
}

.pretty-diff li.ins{
    background:#CFC;
    color:#070;
}

.pretty-diff li.del{
    background:#FCC;
    color:#700;
}
{% endhighlight %}

If you have any issues with anything, or have ideas for how to improve this, feel free to leave a comment or [open an issue on the github repo for this project](https://github.com/re5et/pretty-diff/issues)