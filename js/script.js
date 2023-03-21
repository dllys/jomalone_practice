$(function(){
    mainInit();
    $(document).on('click','a[href="#"]',function(e){ e.preventDefault() }) 
})

function mainInit(){
    gnb_menu()
    searching()
    all_menu()
}


function gnb_menu(){
    let $gnbli = $('#header .nav > .gnb > li');
    let $subul = $('#header .nav .gnb > li > ul');
    let $header = $('#header');
    let arr = [245,0,85];
    
    $subul.css({height:0});


    $gnbli.hover(function(){
        let idx = $(this).index();
        $subul.stop().animate({height:0},400);
        $(this).find('ul').stop().animate({height:arr[idx]},400);
    })

    $header.on('mouseleave', function(){
        $subul.stop().animate({height:0},400);
    })

}

function searching(){
    let $search = $('#header .top-menu .search');
    let $sc = $('#header .top-menu .sc');
    let $visual = $('#visual');
    let $con = $('#container');
    let $footer = $('#footer');

    $search.hide();

    $sc.on('click',function(){
        $search.show();
    })

    $visual.on('click',function(){
        $search.hide();
    })
    $con.on('click',function(){
        $search.hide();
    })
    $footer.on('click',function(){
        $search.hide();
    })
}


function all_menu(){
    let allMenu = document.querySelector('.all-menu');
        
        allMenu.addEventListener('click', function(e){
            e.target.classList.toggle('active');
        })
}