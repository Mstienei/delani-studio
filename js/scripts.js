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

//Clear Form
function clearForm() {
  document.getElementById("mc-embedded-subscribe-form").reset();
}
//Form Validations
function submitForm() {
  var name=document.getElementById("mce-NAME").value;
  var email=document.getElementById("mce-EMAIL").value;
  if (name==null || name==""){
  alert("Please enter your name");
  return false;
    }
    alert("Hi "+name + "!We have received your message. Thank you for reaching out to us.Our customer care will get in touch with you soon.");
  }
