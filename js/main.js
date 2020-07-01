$(function(){
    /*팝업창닫기*/
    $('.pop_close').click(function(){
        $('.popup').fadeOut(300);   
    });
    /*팝업창열기*/
    $('.pop_open').click(function(){
        $('.popup').fadeIn(300);
    });

    /*전체보기 열기*/
    $('.sitemap').click(function(){
        $('.all_box').show();
    });

     /*전체보기 닫기*/
    $('.menu_close').click(function(){
        $('.all_box').fadeOut(300);
    });
    /*section1 슬라이더*/



    /*section2 슬라이더*/
    $(".lazy").slick({
        dots: true,
        lazyLoad: 'ondemand', // ondemand progressive anticipated
        infinite: true
      });

    /*section3 슬라이더*/ 
    $(".regular").slick({
      dots: true,
      infinite: true,
      centerMode: false,
      slidesToShow: 2,
      slidesToScroll: 2
    }); 

    $(".center").slick({
        dots: false,
        infinite: true,
        centerMode: true,
        slidesToShow: 4,
        slidesToScroll: 2
      }); 

      $('.rolling').vTicker({   
        // 스크롤 속도(default: 700)  
        speed: 500,  
        // 스크롤 사이의 대기시간(default: 4000)  
        pause: 2000,  
        // 스크롤 애니메이션  
        animation: 'fade',  
        // 마우스 over 일때 멈출 설정  
        mousePause: false,  
        // 한번에 보일 리스트수(default: 2)  
        showItems: 4,  
        // 스크롤 컨테이너 높이(default: 0)  
        height: 0,  
        // 아이템이 움직이는 방향, up/down (default: up)  
        direction: 'up'  

      });  
      $('.rolling2').vTicker({   
        // 스크롤 속도(default: 700)  
        speed: 500,  
        // 스크롤 사이의 대기시간(default: 4000)  
        pause: 2000,  
        // 스크롤 애니메이션  
        animation: 'fade',  
        // 마우스 over 일때 멈출 설정  
        mousePause: false,  
        // 한번에 보일 리스트수(default: 2)  
        showItems: 4,  
        // 스크롤 컨테이너 높이(default: 0)  
        height: 0,  
        // 아이템이 움직이는 방향, up/down (default: up)  
        direction: 'up'  

      });  

      $(window).scroll(function(){
        if($(document).scrollTop()>=300){
          $('#quick').stop().animate({top:300},500);
          // $('#quick').show();
        }else{
          // $('#quick').fadeOut();
           $('#quick').stop().animate({top:600},500);
        }
      })

      $(".event_box img").mouseover(function(){
 
        $(this).removeClass("smaller");
     
        $(this).addClass("scale");
      })
 
      $(".event_box img").mouseleave(function(){
     
        $(this).removeClass("scale");
     
        $(this).addClass("smaller");
     
      })


})