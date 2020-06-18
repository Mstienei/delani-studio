$(document).ready(function(){
  $(".design").hover(function(){
    //trigger when mouse hover
    $(".design-img").fadeTo(1000, 0.2);
    $(".design-caption").show();
  }, function(){
    //trigger when mouse out
    $(".design-caption").hide();
    $(".design-img").fadeTo(1000, 1);
  });
});
