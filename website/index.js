$(".toggle-class").click(function(){

  var navigationHeight = String($(".navigation").innerHeight()) + "px";

  $(".navigation-items").css("top",navigationHeight);
  $(".navigation-items").toggle();

  $(window).resize(function(){
    let width = $(window).width();
    if(width >= 610){
      $(".navigation-items").removeAttr("style");
    }
  });

});
