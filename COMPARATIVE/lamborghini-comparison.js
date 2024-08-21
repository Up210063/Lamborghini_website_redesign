document.addEventListener('DOMContentLoaded', function () {
    const timelineItems = document.querySelectorAll('.timeline-item');
    const smallSlideLeft = document.querySelector('.small-slide-left .small-slide-content');
    const smallSlideRight = document.querySelector('.small-slide-right .small-slide-content');
    const timeLeftElement = document.getElementById('time-left');
    
    // Recuperar el índice actual del almacenamiento local o iniciar en 0
    let currentIndex = localStorage.getItem('currentIndex') ? parseInt(localStorage.getItem('currentIndex')) : 0;
    let timeLeft = 5; // Tiempo inicial para cada slide (en segundos)

    const showItems = (index) => {
        timelineItems.forEach((item, i) => {
            item.classList.remove('active');
            if (i === index) {
                item.classList.add('active');
            }
        });

        // Actualizar las imágenes y descripciones en los contenedores de la izquierda y derecha
        const prevIndex = (index - 1 + timelineItems.length) % timelineItems.length;
        const nextIndex = (index + 1) % timelineItems.length;

        // Actualizar el contenedor izquierdo
        smallSlideLeft.querySelector('.small-slide-image').src = timelineItems[prevIndex].querySelector('img').src;
        smallSlideLeft.querySelector('.small-slide-description').innerHTML = timelineItems[prevIndex].querySelector('p').innerHTML;

        // Actualizar el contenedor derecho
        smallSlideRight.querySelector('.small-slide-image').src = timelineItems[nextIndex].querySelector('img').src;
        smallSlideRight.querySelector('.small-slide-description').innerHTML = timelineItems[nextIndex].querySelector('p').innerHTML;

        // Actualizar el índice en localStorage
        localStorage.setItem('currentIndex', currentIndex);
    };

    const countdown = () => {
        const interval = setInterval(() => {
            timeLeft--;
            timeLeftElement.textContent = timeLeft;

            if (timeLeft <= 0) {
                clearInterval(interval);
                currentIndex = (currentIndex + 1) % timelineItems.length;
                showItems(currentIndex);
                timeLeft = 5;
                countdown();
            }
        }, 1000);
    };

    // Inicializar la visualización
    showItems(currentIndex);
    countdown();
});
