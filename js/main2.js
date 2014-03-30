var DoggieDash = {
	init: function() {
		// initialize all teh things
		this.click_events();
	},

	click_events: function() {
		var that = this;

		// Radio buttons
		$(".answer").click(function(e){
			e.stopPropagation();

			var $parent = $(this).closest(".question");

			// Make the radio button look like it's selected
			$parent.find(".answer").removeClass("answer-checked");
			$(this).addClass("answer-checked");

			// scroll to the next section
			that.scroll_to($parent.next(".image_group"), -20);
		});

		// Submit button
		$("#quiz_submit").click(function(){
			that.calculate();
		});
	},

	calculate: function() {
		var selected_group = null;

		var results = [
		{
			letter: "a",
			value: 0,
			url: "snuggler.html"
		},
		{
			letter: "b",
			value: 0,
			url: "bionicBark.html"
		},
		{
			letter: "c",
			value: 0,
			url: "enthusiastico.html"
		},
		{
			letter: "d",
			value: 0,
			url: "sniffer.html"
		},
		{
			letter: "e",
			value: 0,
			url: "wag.html"
		},
		{
			letter: "f",
			value: 0,
			url: "cautious.html"
		},
		{
			letter: "g",
			value: 0,
			url: "cat.html"
		}
		];

		// iterate through the letters above
		$.each(results, function(index, group){
			var $checked = $("input:checked");

			// iterate through the inputs that are checked
			$checked.each(function(){
				// compare the value of the checked inputs to the letters above
				if ($(this).val() === group.letter) {
					// increase the letter count by one
					group.value++;
				}
			});
		});

		selected_group = this.get_highest(results);
		window.location.href = selected_group.url;
	},

	get_highest: function(array) {
		var max = 0;
		var group = null;

		for (var i = 0; i < array.length; i++) {
			if (array[i].value > max) {
				max = array[i].value;
				group = array[i];
			}
		}
		
		return group;
	},

	scroll_to: function(to_elm, adjustment) {
		if (typeof adjustment == 'undefined') {
			// set the default adjustment
			adjustment = 0;
		}
	
		$('html, body').animate({
			scrollTop: $(to_elm).offset().top - adjustment
		}, 500);
	}
};


$(document).ready(function() {
	DoggieDash.init();
});