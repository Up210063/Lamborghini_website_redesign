// Selecciona el elemento que contiene el submenú
const submenu = document.querySelector('.submenu');

// Añade un evento al pasar el mouse por el menú principal
submenu.parentElement.addEventListener('mouseenter', () => {
    submenu.style.height = submenu.scrollHeight + 'px';
});

// Añade un evento al salir del menú principal
submenu.parentElement.addEventListener('mouseleave', () => {
    submenu.style.height = '0';
});

// Inicialmente, el submenú debe estar colapsado
submenu.style.height = '0';
submenu.style.overflow = 'hidden';
submenu.style.transition = 'height 0.3s ease';
