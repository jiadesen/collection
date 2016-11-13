/* ***********************************模拟轮播效果********************************************** */
var t = n = 0, count;
$(document).ready(function () {
  count = $("#banner_list a").length;
  $("#banner_list a:not(:first-child)").hide();
  //$("#banner_info").html($("#banner_list a:first-child").find("img").attr('alt'));
  //$("#banner_info").click(function () {
    //window.open($("#banner_list a:first-child").attr('href'), "_blank")
  //});
  $("#banner li").click(function () {
    var i = $(this).text() - 1;
    n = i;
    if (i >= count) return;
    //$("#banner_info").html($("#banner_list a").eq(i).find("img").attr('alt'));
    //$("#banner_info").unbind().click(function () {
      //window.open($("#banner_list a").eq(i).attr('href'), "_blank")
    //});
    $("#banner_list a").filter(":visible").fadeOut(500).parent().children().eq(i).fadeIn(1000);
    document.getElementById("banner").style.background = "";
    $(this).toggleClass("on");
    $(this).siblings().removeAttr("class");
  });
  t = setInterval("showAuto()", 4000);
  $("#banner").hover(function () {
    clearInterval(t)
  }, function () {
    t = setInterval("showAuto()", 4000);
  });
});

function showAuto() {
  n = n >= (count - 1) ? 0 : ++n;
  $("#banner li").eq(n).trigger('click');
}
/**************************************返回页面顶部******************************************/
$(function () {
  $(window).scroll(function () {  //只要窗口滚动,就触发下面代码
    var scrollt = document.documentElement.scrollTop + document.body.scrollTop; //获取滚动后的高度
    if (scrollt > 200) {  //判断滚动后高度超过200px,就显示
      $("#scrollUp").fadeIn(400); //淡出
    } else {
      $("#scrollUp").stop().fadeOut(400); //如果返回或者没有超过,就淡入.必须加上stop()停止之前动画,否则会出现闪动
    }
  });
  $("#scrollUp").click(function () { //当点击标签的时候,使用animate在200毫秒的时间内,滚到顶部
    $("html,body").animate({scrollTop: "0px"}, 200);
  });
});