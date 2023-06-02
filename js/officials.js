$(document).ready(function () {
  var $list = $(".filter_block .off-content-blocks .block").hide(),
    $curr;
    $('.LoadLess').hide();
 $(".button").on("click", function () {
  var $this = $(this);
  $this.addClass("active").siblings().removeClass("active");
  $curr = $list.filter("." + this.id).hide();
  $curr.slice(0, 6).show(1200);
  $list.not($curr).hide(1000);
  })
  .filter(".active")
    .click();


  $(".LoadMore").on("click", function () {
   $curr.filter(":hidden").slice(0, 6).slideDown("slow");
   $curr.filter(":hidden").length == 0 ? $('.LoadMore').hide() && $('.LoadLess').show() : $('.LoadMore').show() && $('.LoadLess').hide()
  })
  
  $(".LoadLess").on("click", function () {
    $curr.slice(6, $curr.length - 0).slideUp("slow");
    $('.LoadMore').show();
    $('.LoadLess').hide();
   })
  
});
