$(document).ready(function(){
  //add effect in design section
  $(".design").hover(function(){
    //trigger when mouse hover
    $(".design-img").fadeTo(1000, 0.2);
    $(".design-caption").show();
  }, function(){
    //trigger when mouse out
    $(".design-caption").hide();
    $(".design-img").fadeTo(1000, 1);
  });
  //add effect in development section
  $(".dev").hover(function(){
    //trigger when mouse hover
    $(".dev-img").fadeTo(1000, 0.2);
    $(".dev-caption").show();
  }, function(){
    //trigger when mouse out
    $(".dev-caption").hide();
    $(".dev-img").fadeTo(1000, 1);
  });
});
