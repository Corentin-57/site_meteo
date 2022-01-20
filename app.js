//Carrousel 

document.addEventListener('DOMContentLoaded', function(){
    var slideIndex = 0;
    afficheSlides();

    function afficheSlides() {
    var i;
    var slides = document.getElementsByClassName("slide");
    var puces = document.getElementsByClassName("puce");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < puces.length; i++) {
        puces[i].className = puces[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    puces[slideIndex-1].className += " active";
    setTimeout(afficheSlides, 2000); // Change les images toutes les 2 secondes 
    }
});



//Récupérer les infos de l'API

function infoParis(){
    $.getJSON('https://api.openweathermap.org/data/2.5/weather?q=paris&appid=cb5ce2ce842d9fe8f624dca7e7d327c5&units=metric', function(data) {
        console.log(data);
        $("#nom").html(data["name"]);  //.htlm va permmettre de remplacer le contenu à l'intérieur de la balise 
        $("#temperature").html(Math.round(data["main"]["temp"]) + [" °C"]);
        $("#humidite").html(data["main"]["humidity"] + [" %"]);
        $("#vent").html(Math.round(data["wind"]["speed"]) + [ " km/h"]);
        $('#nom').hide().fadeToggle(2000);              // hide permet d'afficher le contenu en cacher 
        $('#temperature').hide().fadeToggle(2000);
        $('#humidite').hide().fadeToggle(2000);
        $('#vent').hide().fadeToggle(2000);
    });
}

function infoMetz(){
    $.getJSON('https://api.openweathermap.org/data/2.5/weather?q=metz&appid=cb5ce2ce842d9fe8f624dca7e7d327c5&units=metric', function(data) {
        console.log(data);
        $("#nom").html(data["name"]);
        $("#temperature").html(Math.round(data["main"]["temp"]) + [" °C"]);
        $("#humidite").html(data["main"]["humidity"] + [" %"]);
        $("#vent").html(Math.round(data["wind"]["speed"]) + [ " km/h"]);
        $('#nom').hide().fadeToggle(2000);
        $('#temperature').hide().fadeToggle(2000);
        $('#humidite').hide().fadeToggle(2000);
        $('#vent').hide().fadeToggle(2000);
    });
}

function infoIstanbul(){
    $.getJSON('https://api.openweathermap.org/data/2.5/weather?q=istanbul&appid=cb5ce2ce842d9fe8f624dca7e7d327c5&units=metric', function(data) {
        console.log(data);
        $("#nom").html(data["name"]);
        $("#temperature").html(Math.round(data["main"]["temp"]) + [" °C"]);
        $("#humidite").html(data["main"]["humidity"] + [" %"]);
        $("#vent").html(Math.round(data["wind"]["speed"]) + [ " km/h"]);
        $('#nom').hide().fadeToggle(2000);
        $('#temperature').hide().fadeToggle(2000);
        $('#humidite').hide().fadeToggle(2000);
        $('#vent').hide().fadeToggle(2000);
    });
}