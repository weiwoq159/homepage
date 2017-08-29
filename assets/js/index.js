/*
 * @Author: 马强 
 * @Date: 2017-08-15 14:25:22 
 * @Last Modified by: 马强
 * @Last Modified time: 2017-08-28 17:54:04
 */
// 轮播图
var arry = [];
var num = 1;
$(document).ready(function () {
    var Wwidth = $(window).width()
    $('.app_banner_child ul li').each(function(){
        arry.push($(this))
    })
    console.log(arry)
    var int = setInterval(function(){
        if(num >= arry.length){
            $('.app_banner_child ul').animate({left:'0'},Wwidth)
            num = 1
        }
        else{
             $('.app_banner_child ul').animate({left:num * -Wwidth},2000)
             num++
            
        }
       
    },8000)
});

// 验证码倒计时按钮
var wait = 60
function time(event){
    var _this = $('#sub')
    _this.removeAttr('onclick').attr('disabled','disabled')
    var timeout = setInterval(function(){
        _this.html(wait+'s')
        wait--;
        if(wait<0){
            _this.html('获取验证码');
            _this.removeAttr('disabled').attr('onclick','time(event)')
            clearInterval(timeout)
            wait = 60
        }
    },1000)
}
// question and anwser
var b = true;
$('.FandA_box').on('click', function () {

    var display = $(this).find('.anwser').css('display')
    
    if(display === 'none'){
        $(this).find('.anwser').show();
        $(this).find('.question img').hide();
        $(this).find('.top').show();
    }
    else{
        $(this).find('.anwser').hide();
        $(this).find('.question img').show();
        $(this).find('.top').hide();
    }
});
/*导航颜色*/ 
$('.app_header_ul_right li').hover(function(){
    $(this).addClass('active1')
},function(){
    $(this).removeClass('active1')
})
/*二级导航 */
$('.main').hover(function () {
        $('.secondNav').show()
    }, function () {
        // out
    }
);
$('.secondNav').hover(function () {
        // over
    }, function () {
        // out
        $(this).hide()
    }
);

/**/
$(document).ready(function () {
    console.log('---------------------------')
    console.log($('.main').offset().left);
    console.log('---------------------------')
    $('.secondNav').css('padding-left', $('.main').offset().left)

});