$(function () {

    $(".loginFrom").Validform({
        tiptype:function(msg){
            showmsg(msg);
        },
        tipSweep:true
    });

    var showmsg=function(msg){
        $('.tips span').html('');
        $('.tips span').append(msg);
        $('.tips').fadeIn()

        setTimeout(function(){
            $('.tips').fadeOut();
        },2000)

    }

})