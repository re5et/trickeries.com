---
layout: post
scripts: [http://github.com/re5et/Menuify/raw/master/Source/menuify.js]
stylesheets: [/assets/css/menuify.css]
---
[Menuify](http://github.com/re5et/Menuify) is a MooTools class that allows you to create keyboard navigable menus from groups of elements.  I made this because I hace a number of projects coming down the line that I want to be able to use well with my keyboard.

The main idea is to utilize existing brower features to achieve this, with a few added benefits.  Most everything is handled with the html attribute 'tabindex' and the css pseudo selector ':focus'.  The extras include adding arrow key navigation, as well as tabindex management so it doesn't screw with what is already there.  Checkout the demo below, or an extended demo here.

<div class="eval-example-code">
{% highlight js %}
new Menuify($$('#menu1 li'));
{% endhighlight %}
</div>

<ul id="menu1">
    <li>click to focus</li>
    <li>or tab here</li>
    <li>This</li>
    <li>is</li>
    <li>my</li>
    <li>simple</li>
    <li>menu</li>
</ul>

The menu below is a tad more complex. When focused the menu items will show the RGB value of the hexidecimal html color representation shown, and change the border-color.

<div class="eval-example-code">
{% highlight js %}
new Menuify($$('#menu2 li')).addEvents({
    'focus': function(item){
        item.set('text', item.get('text').hexToRgb())
        item.setStyle('border-color', item.get('text'));
    },
    'blur': function(item){
        item.set('text', item.get('text').rgbToHex())
    },
    'keypress': function(item, event){
        if(event.key == '+'){
            var width = item.getStyle('border-width');
            item.setStyle('border-width', width.replace('px', '').toInt() + 1 + 'px')
        }
    }
});
{% endhighlight %}
</div>

Pressing the '+' key will thicken the border.

<ul id="menu2">
    <li>#ff00ff</li>
    <li>#00ff00</li>
    <li>#0000ff</li>
    <li>#ffff00</li>
    <li>#ff6600</li>
    <li>#0066ff</li>
    <li>#6600ff</li>
    <li>#ff0066</li>
</ul>


Download or get more into it: [github repo is here.](http://github.com/re5et/Menuify)