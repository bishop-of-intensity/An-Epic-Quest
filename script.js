var stopLoad1 = 0;
var stopLoad2 = 0;
var stopLoad3 = 0;
var stopLoad4 = 0;

var stopLoad1_portrait = 0;
var stopLoad2_portrait = 0;
var stopLoad3_portrait = 0;
var stopLoad4_portrait = 0;
var main = $('#main');
var initScroll = 0;

$('#basic-training').click(function() {
    var win = window.open('https://bishop-of-intensity.github.io/Basic-Training/', '_blank');
    win.focus();
});
$('#github').click(function() {
    var win = window.open('https://github.com/bishop-of-intensity', '_blank');
    win.focus();
});
$('#youtube').click(function() {
    var win = window.open('https://www.youtube.com/watch?v=dHlEkDS2e3Y&list=PLsQAu16Tm0oeWber2C34rY2CPb9NAnA-z&index=1', '_blank');
    win.focus();
});
$('#contact-insta').click(function() {
    var win = window.open('https://www.instagram.com/bishop_of_intensity/', '_blank');
    win.focus();
});

$('body').scroll(function() {
    var top = $('body').scrollTop();
    if (top > 500 && initScroll === 0) {
        $('.scroll-element').addClass('fade-away')
        $('.scroll-element').removeClass('fade-in')
        $('#arm-wrestling_wrapper').addClass('loaded');
        console.warn('trigger')
        initScroll = 1;
    } 
    // else {
    //     $('.scroll-element').addClass('fade-in')
    //     $('.scroll-element').removeClass('fade-away')
    // }

    if (top > 100 && stopLoad1 === 0) {
        stopLoad1 = 1;
        //
        //
        //
        main.find('#intensity').attr('src', 'https://www.youtube.com/embed/dHlEkDS2e3Y');
        main.find('#just_doing').attr('src', 'https://www.youtube.com/embed/ecBGHYoRV64');
        main.find('#wrapping_it_up').attr('src', 'https://www.youtube.com/embed/WuxsjW-yvvU');
        main.find('#death').attr('src', 'https://www.youtube.com/embed/9LIxV2S9xLs');
        //
        //
        //
        //
        //
        //
        //
        main.find('#bench-press').attr('src', 'https://www.youtube.com/embed/o88t1mKfwSI');
        main.find('#barbell-shrugs').attr('src', 'https://www.youtube.com/embed/jUl3N4CRPHs');
        main.find('#barbell-shrugs-2').attr('src', 'https://www.youtube.com/embed/DUk71mh-FoI');
    }


    if ((window.matchMedia("(orientation: portrait)").matches) && (top > 800) && (stopLoad2_portrait === 0)) {
        stopLoad2_portrait = 1;
        main.find('#leg-press').attr('src', 'https://www.youtube.com/embed/_vJk2Zns1-c');
        main.find('#1-leg-press').attr('src', 'https://www.youtube.com/embed/hccnNlI4vVg');
        main.find('#1-arm-row').attr('src', 'https://www.youtube.com/embed/90Z6Fn_HWyA');
    }
    if ((!window.matchMedia("(orientation: portrait)").matches) && (top > 550) && (stopLoad2 === 0)) {
        stopLoad2 = 1;
        main.find('#leg-press').attr('src', 'https://www.youtube.com/embed/_vJk2Zns1-c');
        main.find('#1-leg-press').attr('src', 'https://www.youtube.com/embed/hccnNlI4vVg');
        main.find('#1-arm-row').attr('src', 'https://www.youtube.com/embed/90Z6Fn_HWyA');
    }


    if ((window.matchMedia("(orientation: portrait)").matches) && (top > 4000) && (stopLoad3_portrait === 0)) {
        stopLoad3_portrait = 1;
        main.find('#1-arm-row-machine').attr('src', 'https://www.youtube.com/embed/_nuYWkk2TrQ');
        main.find('#pullups').attr('src', 'https://www.youtube.com/embed/QRGbCCL26UI');
        main.find('#db-lat-raise').attr('src', 'https://www.youtube.com/embed/PpzYA87-nho');
        main.find('#db-lat-raise-2').attr('src', 'https://www.youtube.com/embed/WJkYcLXMlAM');
        main.find('#db-alt-curl').attr('src', 'https://www.youtube.com/embed/Xu2kWKmj3XE');
        main.find('#cable-hammer-curl').attr('src', 'https://www.youtube.com/embed/uEg-MrC2-LU');
        main.find('#upper-chest-machine-flies').attr('src', 'https://www.youtube.com/embed/t58_9Al3eKc');
    }
    if ((!window.matchMedia("(orientation: portrait)").matches) && (top > 2000) && (stopLoad3 === 0)) {
        stopLoad3 = 1;
        main.find('#1-arm-row-machine').attr('src', 'https://www.youtube.com/embed/_nuYWkk2TrQ');
        main.find('#pullups').attr('src', 'https://www.youtube.com/embed/QRGbCCL26UI');
        main.find('#db-lat-raise').attr('src', 'https://www.youtube.com/embed/PpzYA87-nho');
        main.find('#db-lat-raise-2').attr('src', 'https://www.youtube.com/embed/WJkYcLXMlAM');
        main.find('#db-alt-curl').attr('src', 'https://www.youtube.com/embed/Xu2kWKmj3XE');
        main.find('#cable-hammer-curl').attr('src', 'https://www.youtube.com/embed/uEg-MrC2-LU');
        main.find('#upper-chest-machine-flies').attr('src', 'https://www.youtube.com/embed/t58_9Al3eKc');
    }


    if ((window.matchMedia("(orientation: portrait)").matches) && (top > 5000) && (stopLoad4_portrait === 0)) {
        stopLoad4_portrait = 1;
        main.find('#cable-crossover').attr('src', 'https://www.youtube.com/embed/bPi61eUzYkM');
        main.find('#rope-triceps-pushdowns').attr('src', 'https://www.youtube.com/embed/aewoBhomOKM');
        main.find('#leg-extensions').attr('src', 'https://www.youtube.com/embed/gJGSNd1HnBA');
        main.find('#leg-curl').attr('src', 'https://www.youtube.com/embed/zbRNMG1EObA');
    }
    if ((!window.matchMedia("(orientation: portrait)").matches) && (top > 4000) && (stopLoad4 === 0)) {
        stopLoad4 = 1;
        main.find('#cable-crossover').attr('src', 'https://www.youtube.com/embed/bPi61eUzYkM');
        main.find('#rope-triceps-pushdowns').attr('src', 'https://www.youtube.com/embed/aewoBhomOKM');
        main.find('#leg-extensions').attr('src', 'https://www.youtube.com/embed/gJGSNd1HnBA');
        main.find('#leg-curl').attr('src', 'https://www.youtube.com/embed/zbRNMG1EObA');
    }
});

$('.scroll-to-top').click(function() {
    $("html, body").animate({ scrollTop: 0 }, 3000);
});

$(document).ready(function() {
    setTimeout(function() {
        main.find('#the-story-div').replaceWith('<iframe id="the-story" src="https://www.youtube.com/embed/mOaLeQXLuL4" rameborder="0"  llow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
    }, 6150);
});



// setTimeout(function() {
// }, 7000)

// $('.AW-Minimize').click(function() {
//     $(this).parent().parent().addClass('AW-closed');
//     $(this).parent().parent().removeClass('AW-expanded');
// });

// $('.AW-Maximize').click(function() {
//     $(this).parent().parent().removeClass('AW-closed');
//     $(this).parent().parent().addClass('AW-expanded');
// });

// $('.AW-link').click(function() {
//     window.open('https://andrei-pascu.github.io/Arm-Wrestling/', '_blank');
// })

