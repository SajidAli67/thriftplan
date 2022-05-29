$(document).ready(function(){
   
    $('#btn-menu').click(function(){
        $('.menu-mob').css('left','0px')
    })
    $('#close-menu').click(function(){
        $('.menu-mob').css('left','-500px')
    })
});

$(document).ready(function () {
    $('#step1').click(function () {
        $('#tab1').addClass('current')
        $('#tab2').removeClass('current');
        $('#tab3').removeClass('current');
        $('#tab4').removeClass('current');
        $('#step1').addClass('active')
        $('#step2').removeClass('active')
        $('#step3').removeClass('active')
        $('#step4').removeClass('active')
    })

    $('#step2').click(function () {
        $('#tab1').removeClass('current');
        $('#tab2').addClass('current')
        $('#tab3').removeClass('current');
        $('#tab4').removeClass('current');
        $('#step1').removeClass('active')
        $('#step2').addClass('active')
        $('#step3').removeClass('active')
        $('#step4').removeClass('active')
    })

    $('#step3').click(function () {
        $('#tab1').removeClass('current');
        $('#tab2').removeClass('current')
        $('#tab3').addClass('current');
        $('#tab4').removeClass('current');

        $('#step1').removeClass('active')
        $('#step2').removeClass('active')
        $('#step3').addClass('active')

        $('#step4').removeClass('active')
    })

    $('#step4').click(function () {
        $('#tab1').removeClass('current');
        $('#tab2').removeClass('current')
        $('#tab3').removeClass('current');
        $('#tab4').addClass('current');

        $('#step1').removeClass('active')
        $('#step2').removeClass('active')
        $('#step3').removeClass('active')
        $('#step4').addClass('active')

    })

    $("#toggle").change(function () {
        if ($(this).prop("checked") == true) {
            $('#monthly-bill').removeClass('font-active')
            $('#annual-bill').addClass('font-active')
            $('#annual_packeges').css('display', 'block')
            $('#monthly_packeges').css('display','none')
           

        } else {
        
            $('#monthly-bill').addClass('font-active')
            $('#annual-bill').removeClass('font-active')
            $('#monthly_packeges').css('display','block')
            $('#annual_packeges').css('display', 'none')
        }
    });

    $("#toggle2").change(function () {
        if ($(this).prop("checked") == true) {
            $('#monthly-bill2').removeClass('font-active')
            $('#annual-bill2').addClass('font-active')
            $('#annual_packeges2').css('display', 'block')
            $('#monthly_packeges2').css('display','none')
           

        } else {
        
            $('#monthly-bill2').addClass('font-active')
            $('#annual-bill2').removeClass('font-active')
            $('#monthly_packeges2').css('display','block')
            $('#annual_packeges2').css('display', 'none')
        }
    });

    $("#toggle4").change(function () {
        if ($(this).prop("checked") == true) {
            $('#monthly-bill4').removeClass('font-active')
            $('#annual-bill4').addClass('font-active')
            $('#annual_packeges4').css('display', 'block')
            $('#monthly_packeges4').css('display','none')
           

        } else {
        
            $('#monthly-bill4').addClass('font-active')
            $('#annual-bill4').removeClass('font-active')
            $('#monthly_packeges4').css('display','block')
            $('#annual_packeges4').css('display', 'none')
        }
    });


    $("#toggle3").change(function () {
        if ($(this).prop("checked") == true) {
            $('#monthly-bill3').removeClass('font-active')
            $('#annual-bill3').addClass('font-active')
            $('#annual_packeges3').css('display', 'block')
            $('#monthly_packeges3').css('display','none')
           

        } else {
        
            $('#monthly-bill3').addClass('font-active')
            $('#annual-bill3').removeClass('font-active')
            $('#monthly_packeges3').css('display','block')
            $('#annual_packeges3').css('display', 'none')
        }
    });
}) 

// nav on
window.addEventListener("scroll",function(){
    var header_nav = document.querySelector('.top-bar');
    header_nav.classList.toggle('sticky',window.scrollY> 200);
})