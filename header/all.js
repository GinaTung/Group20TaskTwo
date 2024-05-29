$(".header-btn").click(function() {
    $(".header-menu").toggleClass("close");
    $(".header-close").toggleClass("close");
    $(".header-nav").toggleClass("open");
    // 如果列表是展開的，則使用slideDown方法緩慢展開
    if ($(".header-nav").hasClass("open")) {
        $(".header-nav").hide().slideDown(1000); // 5000毫秒即5秒
    } else {
        // 如果列表是收起的，則使用slideUp方法緩慢收起
        $(".header-nav").slideUp(1000); // 5000毫秒即5秒
    }
  });