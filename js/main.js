

$(document).ready(function(){

    let home = $(".home")
    let card = $(".card")

    home.animate({
        width : "100%",
        height : "5px"
    }, 1000 ,function(){
        home.animate({
            height : "100vh"
        },1000,function(){
            $("h1").fadeIn(2000, function(){
                card.eq(0).slideDown(2000 , function(){
                    card.eq(1).slideDown(2000, function(){
                        card.eq(2).slideDown(2000 , function(){
                            card.slideUp(2000 , function(){
                                $("h1").slideUp(2000)
                            })
                        })
                    })
                })
            });
        })
    })















})
























