---
layout: post
---
Another thing I wanted for a project that I didn't see out there so I made it.  [UserKeyboardShortcuts](http://github.com/re5et/UserKeyboardShortcuts) is a refactor of the [Keyboard](http://mootools.net/docs/more/Interface/Keyboard) class provided by mootools-more. It makes it easy for you to provide local user-customizable keyboard shortcuts for your users that you don't have to care about.

You just use [Keyboard.addShortcuts](http://mootools.net/docs/more/Interface/Keyboard.Extras#Keyboard:addShortcut) (provided by [Keyboard.Extras](http://mootools.net/docs/more/Interface/Keyboard.Extras)) as you usually would, then the user can change the keys to their liking.  The assignments they make will be stored using localStorage (failing that a cookie) and will be restored on each subsequent page load.

#### [Demonstration](http://re5et.github.com/projects/userKeyboardShortcuts/demo/)

#### How to use

Create a new UserKeyboardShortcuts instance:

{% highlight js %}
var myKeyboard = new UserKeyboardShortcuts();
{% endhighlight %}

Add some shortcuts:

{% highlight js %}
myKeyboard.addShortcuts({
	'logSomething': {
		'keys': 'ctrl+alt+l',
		'description': 'logs "something".',
		'handler': function(){
			console.log('something');
		}
	},
	'alertSomething': {
		'keys': 'a',
		'description': 'alerts "something"',
		'handler': function(){
			alert('something');
		}
	}
});
{% endhighlight %}

If you want an easy way for users to show and change the shortcuts, you can run:

{% highlight js %}
myKeyboard.showAndChange();
{% endhighlight %}

You can restore the default shortcuts with this:

{% highlight js %}
myKeyboard.restoreDefaults();
{% endhighlight %}

You can also just add the two above methods as shortcuts for users to use:

{% highlight js %}
myKeyboard.addShortcut('showAndChangeShortcuts', {
	'keys': 'm',
	'description': 'Toggle this menu.',
	'handler': myKeyboard.showAndChange
});
{% endhighlight %}

and

{% highlight js %}
myKeyboard.addShortcut('restoreDefaults', {
	'keys': 'd',
	'description': 'Restore default shortcuts.',
	'handler': myKeyboard.restoreDefaults
});
{% endhighlight %}

Since this is a refactor of [Keyboard](http://mootools.net/docs/more/Interface/Keyboard), knowing how to use [Keyboard](http://mootools.net/docs/more/Interface/Keyboard) and [Keyboard.Extras](http://mootools.net/docs/more/Interface/Keyboard.Extras) will help quite a bit.
