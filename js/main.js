var scrollBehavior = function (elementString, controller) {
  var workScene = new window.ScrollMagic.Scene({
    triggerElement: elementString,
    triggerHook: 0.9
  })
  workScene.setClassToggle(elementString, 'fade-in').addTo(controller)
}

$(document).ready(function () {
  var ScrollMagic = window.ScrollMagic
  var controller = new ScrollMagic.Controller()

  // Build a scene for #work
  scrollBehavior('#work', controller)

  // Build a scene for #services
  scrollBehavior('#services', controller)

  // Build a scene for #contact
  scrollBehavior('#contact', controller)
})

$(document).ready(function () {
  // Add smooth scrolling to all links
  $('a').on('click', function (event) {
    if (this.hash !== '') {
      event.preventDefault()

      var hash = this.hash

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 250, function () {
        window.location.hash = hash
      })
    }
  })
})

$(document).ready(function () {
  var btt = $('.up')

  btt.on('click', function () {
    $('html, body').animate({
      scrollTop: 0
    }, 500)
  })
})
