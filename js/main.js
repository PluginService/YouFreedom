$(document).ready(function() {
      $(".promo").hide();
      $(".training").hide();
      $(".streaming").hide();
      $(".associated").hide();

   $(".one").click(function() {
      $(".general").slideToggle("slow");
   });
   $(".two").click(function() {
      $(".promo").slideToggle("slow");
   });
   $(".three").click(function() {
      $(".training").slideToggle("slow");
   });
   $(".four").click(function() {
      $(".streaming").slideToggle("slow");
   });
   $(".five").click(function() {
      $(".associated").slideToggle("slow");
   });
});