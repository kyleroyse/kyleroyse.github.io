$(document).ready(() => {

    // H1 typed.js effect

    $(function(){
	$(".typed").typed({
		strings: ["Websites.", "User Interfaces.", "Web Applications.", "SQlite Databases."],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 30,
		// time before typing starts
		startDelay: 1200,
		// backspacing speed
		backSpeed: 20,
		// time before backspacing
		backDelay: 600,
		// loop
		loop: true,
		// false = infinite
		loopCount: 10,
		// show cursor
		showCursor: false,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
		// call when done callback function
		callback: function() {},
		// starting callback function before each string
		preStringTyped: function() {},
		//callback for every typed string
		onStringTyped: function() {},
		// callback for reset
		resetCallback: function() {}
	});
});

// Animated Scrolling Navbar

    $(window).scroll(function() {
        if($(document).scrollTop() > 80) {
            $('#navContainer').addClass('shrink');
        } else {
            $('#navContainer').removeClass('shrink');
        }
    })

// Animated Scrolling Navbar FadeIN

   $(window).scroll(function() {
// 100 = The point you would like to fade the nav in.
  
	if ($(window).scrollTop() > 100 ){
    
 		$('#navContainer').addClass('show');
    
  } else {
    
    $('#navContainer').removeClass('show');
    
 	};   	
});

$('.scroll').on('click', function(e){		
		e.preventDefault()
    
  $('html, body').animate({
      scrollTop : $(this.hash).offset().top
    }, 1500);
});

    
    
});


