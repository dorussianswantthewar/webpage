$(document).ready(function () {
    var $list = $(".filter_block_donate .off-content-help .help").hide(),
      $curr;
      $('.LoadLess_donate').hide();
   $(".button_donate").on("click", function () {
    var $this = $(this);
    $this.addClass("active").siblings().removeClass("active");
    $curr = $list.filter("." + this.id).hide();
    $curr.slice(0, 6).show(800);
    $list.not($curr).hide(800);
    })
    .filter(".active")
      .click();
  
  
    $(".LoadMore_donate").on("click", function () {
     $curr.filter(":hidden").slice(0, 9).slideDown("slow");
     $curr.filter(":hidden").length == 0 ? $('.LoadMore_donate').hide() && $('.LoadLess_donate').show() : $('.LoadMore_donate').show() && $('.LoadLess_donate').hide()
    })
    
    $(".LoadLess_donate").on("click", function () {
      $curr.slice(6, $curr.length - 0).slideUp("slow");
      $('.LoadMore_donate').show();
      $('.LoadLess_donate').hide();
     })
    
  });
  