window.addEvent('domready', function(){

    $$('footer a, #content a').each(function(a){
		a.addClass(['pink', 'red', 'orange', 'teal', 'green', 'yellow', 'blue'].getRandom())
    });

    var archive = $('archive');

    if(archive)
    {
		archive.getElements('li').each(function(li){
			li.addEvent('click', function(){
				window.location = li.getElement('a').get('href');
			});
		});
    }

    // if there code that needs run for demonstration run it
    $$('.eval-example-code code').get('text').each(function(code){eval(code)})

    $(document).addEvent('keypress', function(event){
		if(event.key == 'tab' && !$('prompt2').hasClass('open'))
		{
			if(!event.alt && !event.control && !event.shift)
			{
				new Event(event).stop();
				$('cursor').setStyle('display','none');
				$('prompt2').addClass('open');
				$('cursor').getParent().getElement('a').focus();
			}
		}
	});

	var projects = $('projects');

	if(projects)
	{
		projects.getElements('a').each(function(a){
			var chunks = a.get('href').split('/');
			new GithubRepoWidget('re5et', chunks[4]).addEvent('complete', function(response, html){
				var li = a.getParent();
				li.empty();
				li.grab(html);
			})
		});
	}

	GithubRepoWidget.hoverCards();

});