$(document).ready(function(){
    $('.carousel').slick({
        dots: true, // Muestra puntos de navegación
        infinite: true, // Ciclo infinito
        speed: 2000,
        slidesToShow: 3, // Cuántos slides mostrar al mismo tiempo
        slidesToScroll: 2, // Cuántos slides desplazar por vez
        autoplay: true, // Auto-desplazamiento
        autoplaySpeed: 5000, // Velocidad de auto-desplazamiento en ms
    });
});
