$(document).ready(() => {

    /* When the user clicks on the button, 
    toggle between hiding and showing the dropdown content */

    function myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
    }

    // Close the dropdown menu if the user clicks outside of it
    window.onclick = function (event) {
        if (!event.target.matches('.dropbtn')) {

            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }

    
    // H1 typed.js effect

    $(function(){
	$(".typed").typed({
		strings: ["Websites.", "User Interfaces.", "Web Applications.", "SQL Databases."],
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

    $(window).scroll(function () {
        if ($(document).scrollTop() > 80) {
            $('#navContainer').addClass('shrink');
        } else {
            $('#navContainer').removeClass('shrink');
        }
    })

});