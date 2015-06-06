// create some elements and append them to the page
;( function ($, _) {

  var ul = document.createElement('ul');
  ul.id = 'result';
  var li = document.createElement('li');
  var second = document.createElement('li');
  second.className = 'results'
  var secondText = document.createElement('p');
  secondText.innerHTML = 'is declared but since there is no value assigned,<br> it\'s value is <b>undefined</b>';
  li.className = 'results';
  second.appendChild(secondText);
  var result = li;
  var p  = document.createElement('p');
  p.innerHTML += 'var message;';
  li.appendChild(p);
  var main = document.getElementById('main-article');
  var output = document.getElementsByTagName('p')[1];
  output.appendChild(ul);
  ul.appendChild(result);
  ul.appendChild(second);

}(jQuery, _));

// set up the event handler
$('a[href^="#"]').on('click', function(e) {
  var target = $( $(this).attr('href')  );

  if( target.length  ) {
    e.preventDefault();

    $('html, body').animate({
      scrollTop: target.offset().top
    }, 1000);
  }
});

// set up the 'to top' event
$(function() {

  $(window).scroll(function() {
    if ( $(this).scrollTop() > 300 ) {
      $('.go-top').fadeIn(300);
    } else {
      $('.go-top').fadeOut(300);
    }
  });

  $('.go-top').on('click', function(e) {
    e.preventDefault();
    $('html').velocity('scroll', {
        duration: 700,
        easing: 'swing'
    });
  });

});
