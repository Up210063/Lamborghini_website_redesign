// Espera a que el DOM esté listo
$(document).ready(function() {
    // Maneja la animación de mostrar/ocultar submenús
    $('nav ul li').hover(
        function() {
            // Mostrar el submenú con una animación suave
            $(this).find('ul').stop(true, true).slideDown(300);
        },
        function() {
            // Ocultar el submenú con una animación suave
            $(this).find('ul').stop(true, true).slideUp(300);
        }
    );
    
    // Maneja la animación del subrayado en los enlaces
    $('nav ul li a').hover(
        function() {
            $(this).find('::after').css({
                'width': '100%',
                'transition': 'width 0.3s ease'
            });
        },
        function() {
            $(this).find('::after').css({
                'width': '0',
                'transition': 'width 0.3s ease'
            });
        }
    );
});
