$(document).ready(function(){
  //add effect in design section
  $(".design").hover(function(){
    //trigger when mouse hover
    $(".design-img").fadeTo(500, 0.2);
    $(".design-caption").show();
  }, function(){
    //trigger when mouse out
    $(".design-caption").hide();
    $(".design-img").fadeTo(500, 1);
  });
  //add effect in development section
  $(".dev").hover(function(){
    //trigger when mouse hover
    $(".dev-img").fadeTo(500, 0.2);
    $(".dev-caption").show();
  }, function(){
    //trigger when mouse out
    $(".dev-caption").hide();
    $(".dev-img").fadeTo(500, 1);
  });
  //add effect in development section
  $(".product").hover(function(){
    //trigger when mouse hover
    $(".product-img").fadeTo(500, 0.2);
    $(".product-caption").show();
  }, function(){
    //trigger when mouse out
    $(".product-caption").hide();
    $(".product-img").fadeTo(500, 1);
  });
});

//Form Validations
function clearForm() {
  document.getElementById("mc-embedded-subscribe-form").reset();
}
