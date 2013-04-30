$ ->
	$("#sign_in").on "click", ->
	  alertify.alert "Message"

$('.stuff').backstretch('/assets/backstretch.jpg',
	fade: 1500,
	centeredY: true	
)
	
$ ->
  $("a[href^=\"#\"]").on "click", (e) ->
    e.preventDefault()
    target = @hash
    $target = $(target)
    $("html, body").stop().animate
      scrollTop: $target.offset().top
    , 900, "swing", ->
      window.location.hash = target