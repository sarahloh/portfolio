$(document).ready(function() {
  console.log('ready!');
  $('.thumbnail').hover(function() {
    $(this).attr('style','background-color:red');
    },function() {
    $(this).attr('style','background-color:null');
  });    
});
