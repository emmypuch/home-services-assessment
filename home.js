// $(document).ready(function () {
//   (function ($) {
//     $(".tab-container ul.tabs")
//       .addClass("active")
//       .find("> li:eq(0)")
//       .addClass("current");
//     $(".tab-container ul.tabs li a").click(function (g) {
//       var tab = $(this).closest(".tab"),
//         index = $(this).closest("li").index();
//       tab.find("ul.tabs > li").removeClass("current");
//       $(this).closest("li").addClass("current");

//       tab
//         .find(".tab-content")
//         .find("div.tab-item")
//         .not("div.tab-item:eq(" + index + ")")
//         .slideUp();
//       tab
//         .find(".tab-content")
//         .find("div.tab-item:eq(" + index + ")")
//         .slideDown();
//       g.preventDefault();
//     });
//   })(jQuery);
// });
