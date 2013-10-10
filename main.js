$(document).ready(function() {
	

	
//HTML Rendering

	var nextday = 0;

	var getNextDay = function() {
		var now = new Date();
		now.setDate(now.getDate()+nextday);
		nextday ++;
		var x = now;
		var y = x.toString();
		return y.slice(0,15);
	}	
	

	var createDateList = function() {
		var list = $('<ul class="list-unstyled">');
		$('.infinite-agenda').append(list);
	};


	var createDate = function() { //Raine says this could/should be split into separate functions, but I'm not sure how. 
		var item = $('<li class = "day"><div class = "upper"><a href="#" class = "date">'+getNextDay()+'</a> <button type="button" class="addbtn btn btn-default">Add</button><button type="button" class="editbtn btn btn-default">Edit</button></div></li>');
		$('.list-unstyled').append(item);
    	$('li').find('a').each(function (i) {
    		$(this).attr('data', i);			
		});

			createEditText(item);

	};

	var createEditText = function(newitem) {
		var item = $('<div class = "edittext"><textarea class = "edittext">Editable Stuff!</textarea></div>');
		var fakesubmit = $('<button type="button" class="fakesubmit btn btn-default">Submit</button></div>');
		var itemcontainer = $('<div class = "agendaitem"></div>');
		var statictext = $('<div class = "statictext">Static Stuff!</div>');
		
		newitem.append(itemcontainer);
		itemcontainer.append(item);
		item.append(fakesubmit);
		itemcontainer.append(statictext);
	}


	var createWeek = function() {
		for (i=0;i<7; i++) {
			createDate();
		}
	}

	

//EVENTS
	
	$(window).scroll(function() {
		if ($(window).scrollTop() + $(window).height() > $(document).height() * .75) {
			createWeek();
		}
	});

	//Let's make some event handlers to deal with clicking on the date elements that are being created. Yeeeah.

	$(document).on('click','.addbtn',function(){
		$(this).parent().parent().find(".edittext").show();
		
	});	 	



	$(document).on('click','.fakesubmit',function(){
		 var dayelement = $(this).closest('.day')
		 dayelement.find(".statictext").text(dayelement.find(".edittext textarea").val());
		 dayelement.find(".statictext").css("display","block");
	 	 dayelement.find(".edittext").css("display","none");
	 	 $(".statictext").append("<div class = 'edittext'> beep </div>"); //this is where we left off!
	 	 $(".statictext").append("<div class = 'itemcontainer'> blah </div>");



	});



//MAIN

	createDateList();
	createWeek();
	
	

}); //this closes document ready

///On FakeSubmit:
//append new Static Text
//Add new Edit Text

//newitem 
//itemcontainer
//edittext statictext
//fakesubmit

