$(document).ready(function() {

counter();

function counter () {
	console.log("Hi I'm counting!");
	var counterA = 0;
	var counterB = 0;
	var counterC = 0;
	var counterD = 0;
	var counterE = 0;
	var counterF = 0;
	var counterG = 0;
/*
$("input:radio").click(function() {
    var $this = $(this);
    var value = $this.val();
    $this.closest('.answers')
        .find('input:radio[value="' + value + '"]')
        .attr("disabled","disabled"); 
});
*/

//maybe - if attr = disabled add class to change background?
	
	$(".answerA").click(function() {
		counterA = counterA + 1;
		console.log("Counter A: " + counterA); 
		return counterA;
	});

	$(".answerB").click(function() {
		counterB = counterB + 1;
		console.log("Counter B: " + counterB); 
		return counterB;	
	});

	$(".answerC").click(function() {
		counterC = counterC + 1;
		console.log("Counter C: " + counterC); 
		return counterC;	
	});

	$(".answerD").click(function() {
		counterD = counterD + 1;
		console.log("Counter D: " + counterD); 
		return counterD;	
	});

	$(".answerE").click(function() {
		counterE = counterE + 1;
		console.log("Counter E: " + counterE); 
		return counterE;	
	});

	$(".answerF").click(function() {
		counterF = counterF + 1;
		console.log("Counter F: " + counterF); 
		return counterF;	
	});

	$(".answerG").click(function() {
		counterG = counterG + 1;
		console.log("Counter G: " + counterG); 
		return counterG;	
	});

	$("#findResult").click(function() {
		if (counterA > counterB && counterA > counterC && counterA > counterD && counterA > counterE && counterA > counterF && counterA > counterG) {
			window.location.href = "../snuggler.html";
	} else if (counterB > counterA && counterB > counterC && counterB > counterD && counterB > 	counterE && counterB > counterF && counterB > counterG) {
			window.location.href = "../bionicBark.html";
	} else if (counterC > counterA && counterC > counterB && counterC > counterD && counterC > counterE && counterC > counterF && counterC > counterG) {
			window.location.href = "../enthusiastico.html";
	} else if (counterD > counterA && counterD > counterB && counterD > counterC && counterD > counterE && counterD > counterF && counterD > counterG) {
			window.location.href = "../sniffer.html";
	} else if (counterE > counterA && counterE > counterB && counterE > counterC && counterE > counterD && counterE > counterF && counterE > counterG) {
			window.location.href = "../wag.html";
	} else if (counterF > counterA && counterF > counterB && counterF > counterC && counterF > counterD && counterF > counterE && counterF > counterG) {
			window.location.href = "../cautious.html";
	} else if (counterG > counterA && counterG > counterB && counterG > counterC && counterG > counterD && counterG > counterE && counterG > counterF) {
			window.location.href = "../cat.html";
	}

	});

/*
	$(function() {
  $('.questions').click(function() {
		var value = $(this).closest('.questions').offset().top - 60;
		 $('html, body').animate({scrollTop: value}, 1000);


        
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500);
        event.preventDefault();
    });
	});

*/
};




});


