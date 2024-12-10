const navEl=document.querySelector('.navbar-container')
window.addEventListener('scroll' ,( ) =>{
if(window.scrollY >= 56){
  navEl.classList.add('navbar-scrolled');
}
else if(window.scrollY <=56){
  navEl.classList.remove('navbar-scrolled');
}
})
alert("This website is created by sreenathselva")

document.addEventListener('DOMContentLoaded', function () {
    var navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            // Remove active class from all links
            navLinks.forEach(function (navLink) {
                navLink.classList.remove('navActive');
            });

            // Add active class to the clicked link
            link.classList.add('navActive');
        });
    });
});

// COUNTDOWN
 // Set the date we're counting down to
 var countDownDate = new Date("2024-06-10T07:59:59+04:00").getTime();
  
 // Update the count down every 1 second
 var x = setInterval(function() {
 
   // Get today's date and time
   var now = new Date().getTime();
 
   // Find the distance between now and the count down date
   var distance = countDownDate - now;
 
   // Time calculations for days, hours, minutes and seconds
   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
   var seconds = Math.floor((distance % (1000 * 60)) / 1000);
 
   // Display the result in the element with id="demo"
   document.getElementById("d").innerHTML = days;
   document.getElementById("h").innerHTML =hours;
   document.getElementById("m").innerHTML = minutes;
   document.getElementById("s").innerHTML = seconds;
     // If the count down is finished, write some text
     if (distance < 0) {
       clearInterval(x);
       document.getElementById("demo").innerHTML = "EXPIRED";
     }
   }, 1000);
 


document.addEventListener("DOMContentLoaded", function() {
    // Get all the <a> tags in the navigation
    const navLinks = document.querySelectorAll("nav a");
  
    // Add a click event listener to each <a> tag
    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent the default link behavior
            
            // Get the target <div> element's id from the href attribute
            const targetId = this.getAttribute("href").substring(1);
  
            // Find the target <div> by its id
            const targetElement = document.getElementById(targetId);
  
            // Scroll to the target <div> smoothly
            targetElement.scrollIntoView({
                behavior: "smooth"
            });
        });
    });
  });




  //for gallery slider//

  $(document).ready(function(){
    $('.gallery').slick({
    slidesToShow: 6, // Number of slides to show at a time
    slidesToScroll: 1, // Number of slides to scroll at a time
    autoplay: true, // Autoplay the slider
    autoplaySpeed: 1001, // Autoplay speed in milliseconds (2 seconds in this case)
    responsive: [
    {
    breakpoint: 768,
    settings: {
    slidesToShow: 2,
    slidesToScroll: 1
    }
    },
    {
    breakpoint: 480,
    settings: {
    slidesToShow: 1,
    slidesToScroll: 1
    }
    }
    ]
    });
    lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true
    });
    });

    // Agenda Slider//

    $(document).ready(function(){
        $('.agenda-logos').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay:true,
            autoplaySpeed: 1500,
            arrows: false,
            dots: false,
            pauseOnHover: false,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1
                }
            }, {
                breakpoint: 520,
                settings: {
                    slidesToShow: 1
                }
            }]
        });
      });
