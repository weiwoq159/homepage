/*
 * @Author: 马强 
 * @Date: 2017-08-15 14:25:22 
 * @Last Modified by: jerry
 * @Last Modified time: 2017-08-16 18:02:34
 */
// 轮播图
var arry = [];
var num = 0;
$(document).ready(function () {
    $('.app_banner_child ul li').each(function(){
        arry.push($(this))
    })
    var int = setInterval(function(){
        if(num >= arry.length-1){
            $('.app_banner_child ul').animate({left:'0'},2000)
            num = 0
        }
        else{
            $('.app_banner_child ul').animate({left:(num+1)*-1920},2000)
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