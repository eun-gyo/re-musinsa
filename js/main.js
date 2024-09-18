$(document).ready(function(){


    // 모바일 메뉴
    $('.m_menu').on('click',function(){
        $('.mobile_menu').animate({'right':0});
        $('.cover').fadeIn();
        // 밑 스크롤바 안나오게
        $('body,html').css({'overflow':'hidden'})
    })
    // 커버를 클릭하면 모바일 메뉴 다시 들어가게
    $('.m_cover,.btn_close').on('click',function(){
        $('.mobile_menu').animate({'right':'-100%'});
        $('.cover').fadeOut();
        // 스크롤바 다시 나오게
        $('body,html').css({'overflow':'auto'})
    })

    // 아코디언 메뉴
    // 모바일 2차메뉴 숨기기
    $('.m_gnb>li>.m_depth2').hide()
    // 모바일 메뉴 1차 메뉴 클릭하면 2단메뉴 나오게하기(아코디언)
    $('.mobile_menu .m_gnb>li>a').on('click',function(){
        $(this).next().slideToggle().parent().siblings().find('.m_depth2').slideUp();
    })


    $('.slider').slick({
    autoplay:true,
    dots:true,
    arrows:false
    });
    // header > gnb
    // pc gnb hover시 2차메뉴 내려오게하기
    $('.gnb li').on('mouseenter',function(){
        $(this).stop().find('.depth2').fadeIn(200)
    })
    $('.gnb li').on('mouseleave',function(){
        $(this).stop().find('.depth2').fadeOut(300)
    })
    
    // top button을 누르면 화면 최상단으로 이동
    $('header button').on('click',function(){
        $('body,html').animate({'scrollTop':0},500)
    })

    // 스크롤바의 위치를 알려주는 함수
    $(window).on('scroll',function(){
        let num = $(window).scrollTop()
        console.log(num)
        // num=스크롤바의 위치 기억
        if(num > 1200){
            $('header button').show()
        }else{
            $('header button').hide()
        }
    })

    
    // 화면 resize , load 시 모바일/PC화면
    $(window).on('resize',function(){
        // 현재 창의 크기가 얼마인지 알기
        let num = $(this).width()
        console.log(num)
        // 창의 가로 사이즈가 767보다 작거나 같으면
        // 모바일이미지로 교체
        if(num<=767){
            // 모바일이미지로 교체
            $('header button').hide()
            $('main .slider .slide1 img').attr('src','./images/m_athlet_day.jpg')
            $('main .slider .slide2 img').attr('src','./images/m_banner.jpg')
            $('main .slider .slide3 img').attr('src','./images/m_pants_day.jpg')
            $('.top7 .top7_list .box1 img').attr('src','./images/m_top5-1.png')
            $('.top7 .top7_list .box2 img').attr('src','./images/m_top5-2.png')
            $('.top7 .top7_list .box3 img').attr('src','./images/m_top5-3.png')
            $('.top7 .top7_list .box4 img').attr('src','./images/m_top5-4.png')
            }else{
            $('main .slider .slide1 img').attr('src','./images/athlet_day.jpg')
            $('main .slider .slide2 img').attr('src','./images/banner.jpg')
            $('main .slider .slide3 img').attr('src','./images/pants_day.jpg')
            $('.top7 .top7_list .box1 img').attr('src','./images/t7_list1.png')
            $('.top7 .top7_list .box2 img').attr('src','./images/t7_list2.png')
            $('.top7 .top7_list .box3 img').attr('src','./images/t7_list3.png')
            $('.top7 .top7_list .box4 img').attr('src','./images/t7_list4.png')
            }
        })  
        // 해당페이지가 로드되자마자 창의 사이즈를 확인하고
        // 반응형발생(모바일과 pc를 판단하기)
        let num = $(window).width()
        if(num<=767){
            // 모바일이미지로 교체
            $('header button').hide()
            $('main .slider .slide1 img').attr('src','./images/m_athlet_day.jpg')
            $('main .slider .slide2 img').attr('src','./images/m_banner.jpg')
            $('main .slider .slide3 img').attr('src','./images/m_pants_day.jpg')
            $('.top7 .top7_list .box1 img').attr('src','./images/m_top5-1.png')
            $('.top7 .top7_list .box2 img').attr('src','./images/m_top5-2.png')
            $('.top7 .top7_list .box3 img').attr('src','./images/m_top5-3.png')
            $('.top7 .top7_list .box4 img').attr('src','./images/m_top5-4.png')
            }else{
            $('main .slider .slide1 img').attr('src','./images/athlet_day.jpg')
            $('main .slider .slide2 img').attr('src','./images/banner.jpg')
            $('main .slider .slide3 img').attr('src','./images/pants_day.jpg')
            $('.top7 .top7_list .box1 img').attr('src','./images/t7_list1.png')
            $('.top7 .top7_list .box2 img').attr('src','./images/t7_list2.png')
            $('.top7 .top7_list .box3 img').attr('src','./images/t7_list3.png')
            $('.top7 .top7_list .box4 img').attr('src','./images/t7_list4.png')
        }



});
