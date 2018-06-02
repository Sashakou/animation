
//склов вверх
  $(function() {
    $(window).scroll(function() {
      if($(this).scrollTop() != 0) {
    $('#top').fadeIn();
      } else {
    $('#top').fadeOut();
      }
    });
      $('#top').click(function() {
      $('body,html').animate({scrollTop:0},700);
    });
  });

/*var leftgear = document.getElementById("top_inner");
 
window.addEventListener("scroll", function() {
leftgear.style.transform = "rotate("+window.pageYOffset+"deg)";
});*/

/*$(window).scroll(function() {
var theta = $(window).scrollTop() % Math.PI;
$('#top_inner').css({ transform: 'rotate(' + theta + 'rad)' });
});
*/

$(window).scroll(function() {
    var theta = $(window).scrollTop() % Math.PI;
      $('#top_inner').css({ transform: "rotate("+window.pageYOffset+"deg)" });
      var top_inner =  $('#top_inner'); 
    if ($(this).scrollTop()> 50 ) {
      top_inner
        .animate({background:'red'},1000);
          /*$('.top_inner').style.transform = "rotate("+window.pageYOffset+"deg)";*/
      
    /*  var leftgear = document.getElementById("leftgear");
 
window.addEventListener("scroll", function() {
leftgear.style.transform = "rotate("+window.pageYOffset+"deg)";
rightgear.style.transform = "rotate(-"+window.pageYOffset+"deg)";
});*/
    }
    if ($(this).scrollTop() > 500) {
        $('.anim_line__inner').addClass('anime');
        $('.section_mark__line').css({'height':'40px','animation': 'line_down 0.3s linear'});
        $('.section_mark__number_container').css({'transform':'matrix(1, 0, 0, 1, 0, 0)'});
    
          setTimeout(function(){
            $('.section_mark__text').css({'opacity':'1'});
      }, 200);
          setTimeout(function(){
            $('.back_stage__subtitle,.back_stage__text').addClass('anim_finished');
      }, 700);
           
    }
     if ($(this).scrollTop() > 750) {
        setTimeout(function(){
            $('.black').addClass('anime_right_block');
      }, 200);
        setTimeout(function(){
             $('.anim_section_title__text').addClass('anim_finished');
        }, 750);
            setTimeout(function(){
             $('.backdrop__inner>div').css({'transform':'translate(0%, 100%)','animation': 'white_block 0.5s  linear'});
        }, 800);
          setTimeout(function(){
             $('.video_block__inner').css({'opacity':'1'});
        }, 800);
      }

     
      var main = $('.main');
       if ($(this).scrollTop() > 1400) {
       /* setTimeout(function(){
          $('.main p').css({'transform':'translate3d(0, 0%, 0)'});
          .addClass('anime_main_p');
            }, 50);*/
        setTimeout(function(){
          $('.main p:first-child').css({'transform':'translate3d(0, 0%, 0)'});
            }, 50);
        setTimeout(function(){
          $('.main p:nth-child(2)').css({'transform':'translate3d(0, 0%, 0)'});
            }, 300);
        setTimeout(function(){
          $('.main p:last-child').css({'transform':'translate3d(0, 0%, 0)'});
            }, 500);
       /* setTimeout(function(){
          $('.main').addClass('anime_main');
            }, 800);*/
        setTimeout(function(){
          $('.main').css({'box-shadow':'rgb(189, 187, 189) 0px 0px 10px 4px'});
            }, 3550);
      }

      if ($(this).scrollTop() > 1800) {
        var block1 = $('.block_1');
        setTimeout(function(){
          $('.block_1_inner')
          .css({'animation': ' block1 1s  linear'});
            }, 1);
          setTimeout(function(){
          $('.fourth').addClass('anime_fourth');
          /*.animate({opacity: '1'},1500)*/
          /*.css({'animation': 'fourth 1s  linear'})
          .animate({'transform': 'translate(0%, 0%)'});*/
            }, 850);
          setTimeout(function(){
          $('.content_item:nth-child(1)').addClass('content_anime');
            }, 850);
           setTimeout(function(){
          $('.content_item:nth-child(2)').addClass('content_anime');
            }, 1150);
            setTimeout(function(){
          $('.content_item:nth-child(3)').addClass('content_anime');
            }, 1350);
             setTimeout(function(){
          $('.content_item:nth-child(4)').addClass('content_anime');
            }, 1550);
          setTimeout(function(){
          $('.block_2').animate({opacity: 1},800);
            }, 2100);
      } 
      /*if ($(this).scrollTop() > 2100) {
        setTimeout(function(){
         var theta = $(window).scrollTop() % Math.PI;
      $('.content_main').css({ transform: "top("+window.pageYOffset+"px)" });
    });
      }*/
      if ($(this).scrollTop() > 2200) {
          var comm_main = $('.common_main');
          var con_main = $('.content_main');
           setTimeout(function(){
            con_main
            .animate({opacity: '0'},1500);
            
            comm_main
            .animate({opacity: '1'},1500)
            .css({'box-shadow':'rgb(201, 177, 214) 0px 9px 10px 4px'});
          }, 500);
          /*setTimeout(function(){
            comm_main
            .animate({opacity: '1'},1500);
          }, 1800); */
         
      }
});

/*$("#go").click(function(){
      $("#block").animate({
        width: "70%",
        opacity: 0.4,
      }, 1500 );
   });
   */


