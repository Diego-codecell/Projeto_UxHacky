$(document).ready(function(){
    $(window).scroll(function(){
        //  script navbar fixa na rolagem
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // script botão de rolagem para cima mostrar / ocultar 
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // script deslizar
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removendo a rolagem suave no clique do botão deslizante
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // aplicando novamente a rolagem suave nos itens do menu, clique
        $('html').css("scrollBehavior", "smooth");
    });

    //  script da barra de navegação / menu de alternância 
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // digitando script de animação de texto
    var typed = new Typed(".typing", {
        strings: ["Digital", "Inovação", "Criatividade", "Desafio", "Resultado"],
        typeSpeed: 60,
        backSpeed: 30,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Produtividade", "Otimização de Tempo", "Estratégia", "Lealdade", "Vendas", "Satisfação"],
        typeSpeed: 60,
        backSpeed: 30,
        loop: true
    });

    // script de carrossel
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});