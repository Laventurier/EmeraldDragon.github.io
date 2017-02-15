$(document).ready(function() {
  var nav = $('.navigation ul'),
      isSlided = false;

  $('.glyphicon-menu-hamburger').click(function () {
    if(isSlided===false){
      nav.slideDown(600);
      isSlided = true;
    }else{
      nav.slideUp(600);
      isSlided = false;
    }
  });
});
