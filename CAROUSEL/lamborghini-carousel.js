$(document).ready(function(){
    $('.carousel').slick({
        dots: true, // Muestra puntos de navegación
        infinite: true, // Ciclo infinito
        speed: 500,
        slidesToShow: 1, // Cuántos slides mostrar al mismo tiempo
        slidesToScroll: 1, // Cuántos slides desplazar por vez
        autoplay: true, // Auto-desplazamiento
        autoplaySpeed: 3000, // Velocidad de auto-desplazamiento en ms
    });
});
