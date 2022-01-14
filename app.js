//Carrousel 
// $(document).ready(function(){
//     $("button").click(function(){
//       $(".ville").fadeIn(4000, 0);
//     });
//   });

$(function(){
    var largeur = 800;
    var vitesseAnimation = 2500;
    var pause = 2000;
    var slideActuelle = 1;

    //Déclaration variable afin d'optimiser le code en appelant les éléments une seule fois
    var $carrousel = $('.carrousel') 
    var $carrouselConteneur = $carrousel.find('.slides'); //Récupère l'élément qui à la classe slides dans l'élément carrousel
    var $slides = $carrouselConteneur.find('.slide');

    setInterval(function(){ //Bascule l'image à gauche tous les 2 secondes 
        $carrouselConteneur.animate({'margin-left':'-=' + largeur}, vitesseAnimation, function(){ //-=permet d'appliquer la marge négative à chaque fois 
            slideActuelle++;
            if(slideActuelle == 2){
                // $('.slides').fadeOut().fadeIn();
            }
            if(slideActuelle === $slides.length){ //Condition remet margin à 0 si dernière slide
                slideActuelle = 1;
                console.log($slides.length);
                // $carrousel.css('opacity', 0);
                $carrouselConteneur.css('margin-left', 0);
                // $('.slides').fadeOut().fadeIn();
                // $carrousel.delay(1000).css('opacity', 1);
            }
        }); 
    }, pause);
});


//Récupérer les infos de l'API

function infoParis(){
    $.getJSON('https://api.openweathermap.org/data/2.5/weather?q=paris&appid=cb5ce2ce842d9fe8f624dca7e7d327c5&units=metric', function(data) {
        console.log(data);
        $("#nom").html(data["name"]);  //.htlm va permmettre de remplacer le contenu à l'intérieur de la balise 
        $("#temperature").html(Math.round(data["main"]["temp"]) + [" °C"]);
        $("#humidite").html(data["main"]["humidity"] + [" %"]);
        $("#vent").html(Math.round(data["wind"]["speed"]) + [ " km/h"]);
    });
}

function infoMetz(){
    $.getJSON('https://api.openweathermap.org/data/2.5/weather?q=metz&appid=cb5ce2ce842d9fe8f624dca7e7d327c5&units=metric', function(data) {
        console.log(data);
    $("#nom").html(data["name"]);
    $("#temperature").html(Math.round(data["main"]["temp"]) + [" °C"]);
    $("#humidite").html(data["main"]["humidity"] + [" %"]);
    $("#vent").html(Math.round(data["wind"]["speed"]) + [ " km/h"]);
    });
}

function infoIstanbul(){
    $.getJSON('https://api.openweathermap.org/data/2.5/weather?q=istanbul&appid=cb5ce2ce842d9fe8f624dca7e7d327c5&units=metric', function(data) {
        console.log(data);
    $("#nom").html(data["name"]);
    $("#temperature").html(Math.round(data["main"]["temp"]) + [" °C"]);
    $("#humidite").html(data["main"]["humidity"] + [" %"]);
    $("#vent").html(Math.round(data["wind"]["speed"]) + [ " km/h"]);
    });
}