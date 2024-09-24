$(document).ready(function(){
    $('.carousel').slick({
        dots: true, // Muestra puntos de navegación
        infinite: true, // Ciclo infinito
        speed: 1250,
        slidesToShow: 3, // Cuántos slides mostrar al mismo tiempo
        slidesToScroll: 2, // Cuántos slides desplazar por vez
        autoplay: true, // Auto-desplazamiento
        autoplaySpeed: 3000, // Velocidad de auto-desplazamiento en ms
    });

    // Animación para agrandar la imagen y expandir la descripción hacia abajo
    $('.vehicle-card').hover(
        function() {
            // Al pasar el mouse
            var description = $(this).find('.vehicle-description');
            var originalHeight = description[0].scrollHeight; // Obtiene la altura real del contenido

            $(this).find('img').animate({ transform: 'scale(1.1)' }, 250); // Ajusta la duración de la animación a 250ms
            description.animate({ height: originalHeight + 'px' }, 250); // Expande la altura para mostrar el contenido lentamente
            description.find('p').css('visibility', 'visible').animate({ opacity: 1 }, 250); // Muestra el texto lentamente
        }, function() {
            // Al salir el mouse
            var description = $(this).find('.vehicle-description');

            $(this).find('img').animate({ transform: 'scale(1)' }, 250); // Restaura el tamaño de la imagen lentamente
            description.animate({ height: '0px' }, 250); // Contrae la altura para ocultar el contenido lentamente
            description.find('p').animate({ opacity: 0 }, 250, function() {
                $(this).css('visibility', 'hidden'); // Oculta el texto después de la animación
            });
        }
    );
});
