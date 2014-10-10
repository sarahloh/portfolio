$(document).ready(function() {
  console.log('ready!');


  $('.thumbnail').click(function() {
    $('.modal').modal('show');
  });

  $('html').click(function() {
    if($('.modal').is(':visible') && !$(event.target).parents('.modal').is('.modal')) {
      $('.modal').modal('hide');
    }
  });

});
