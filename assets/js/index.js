/*
 * @Author: 马强 
 * @Date: 2017-08-15 14:25:22 
 * @Last Modified by:   jerry 
 * @Last Modified time: 2017-08-15 14:25:22 
 */

var arry = [];
var num = 0;
$(document).ready(function () {
    $('.app_banner_child ul li').each(function(){
        arry.push($(this))
    })
    var int = setInterval(function(){
        if(num == arry.length-1){
            $('.app_banner_child ul').animate({left:'0'},2000)
            num = 0
        }
        else{
            $('.app_banner_child ul').animate({left:(num+1)*-1920},2000)
            num++
        }
       
    },8000)
});