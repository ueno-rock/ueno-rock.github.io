$(".slide-items").slick({
  autoplay: true,
  slidesToShow: 3,
  infinite: true,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768, // 768px以下の画面幅のときに適用
      settings: {
        slidesToShow: 1, // 表示するスライドの数を1に変更
        slidesToScroll: 1 // スクロールするスライドの数を1に設定
      }
    }
  ]
});

$(function() {
  $(window).on('scroll', function() {
    $('#header').toggleClass('fixed', $(this).scrollTop() > 10);
  });
});

