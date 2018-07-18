$(document).ready(function(){

    var controller = new ScrollMagic.Controller();

    //Build a scene for #work
    var ourScene = new ScrollMagic.Scene({
        triggerElement: '#work',
        triggerHook: 0.9,
        })
    .setClassToggle('#work', 'fade-in')

    .addTo(controller);

    //Build a scene for #services
    var ourScene = new ScrollMagic.Scene({
        triggerElement: '#services',
        triggerHook: 0.9,
        })
    .setClassToggle('#services', 'fade-in')

    .addTo(controller);

    //Build a scene for #contact
    var ourScene = new ScrollMagic.Scene({
        triggerElement: '#contact',
        triggerHook: 0.9,
        })
    .setClassToggle('#contact', 'fade-in')

    .addTo(controller);

});

$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      if (this.hash !== "") {

        event.preventDefault();
  
        var hash = this.hash;
  
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 250, function(){
     
          window.location.hash = hash;
        });
      }
    });
  });

  $(document).ready(function(){
    var btt = $('.up');

    btt.on('click', function(){
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });

    $(window).on('scroll', function(){
        var self = $(this), 
            height = self.height(),
            top = self.scrollTop();
    })
  });