$(document).ready(function(){
   
    $('#btn-menu').click(function(){
        $('.menu-mob').css('left','0px')
    })
    $('#close-menu').click(function(){
        $('.menu-mob').css('left','-500px')
    })
});