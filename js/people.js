$(document).ready(function () {
    var $list = $(".filter_block_second .off-content-blocks .block_second").hide(),
      $curr;
      $('.LoadLess_second').hide();
   $(".button_second").on("click", function () {
    var $this = $(this);
    $this.addClass("active").siblings().removeClass("active");
    $curr = $list.filter("." + this.id).hide();
    $curr.slice(0, 6).show(1200);
    $list.not($curr).hide(1000);
    })
    .filter(".active")
      .click();
  
  
    $(".LoadMore_second").on("click", function () {
     $curr.filter(":hidden").slice(0, 6).slideDown("slow");
     $curr.filter(":hidden").length == 0 ? $('.LoadMore_second').hide() && $('.LoadLess_second').show() : $('.LoadMore_second').show() && $('.LoadLess_second').hide()
    })
    
    $(".LoadLess_second").on("click", function () {
      $curr.slice(6, $curr.length - 0).slideUp("slow");
      $('.LoadMore_second').show();
      $('.LoadLess_second').hide();
     })
    
  });
  