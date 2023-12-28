


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




  //for gallery slick slide//

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