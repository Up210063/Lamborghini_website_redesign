document.addEventListener('DOMContentLoaded', function () {
    const timelineItems = document.querySelectorAll('.timeline-item');
    const smallSlideLeft = document.querySelector('.small-slide-left .small-slide-content');
    const smallSlideRight = document.querySelector('.small-slide-right .small-slide-content');
    const timeLeftElement = document.getElementById('time-left');
    
    // Recuperar el índice actual del almacenamiento local o iniciar en 0
    let currentIndex = localStorage.getItem('currentIndex') ? parseInt(localStorage.getItem('currentIndex')) : 0;
    let timeLeft = 7; // Tiempo inicial para cada slide (en segundos)

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

        // Aplicar la animación "soft" a todos los contenedores
        smallSlideLeft.style.transition = 'transform 0.8s ease-in-out, opacity 0.8s ease-in-out';
        smallSlideRight.style.transition = 'transform 0.8s ease-in-out, opacity 0.8s ease-in-out';
        timelineItems[index].style.transition = 'transform 0.8s ease-in-out, opacity 0.8s ease-in-out';

        // Animar y actualizar el contenedor izquierdo
        smallSlideLeft.style.transform = 'scale(0.97)';
        smallSlideLeft.querySelector('.small-slide-image').src = timelineItems[prevIndex].querySelector('img').src;
        smallSlideLeft.querySelector('.small-slide-description').innerHTML = timelineItems[prevIndex].querySelector('p').innerHTML;
        setTimeout(() => {
            smallSlideLeft.style.transform = 'scale(1)';
        }, 800);

        // Animar y actualizar el contenedor derecho
        smallSlideRight.style.transform = 'scale(0.97)';
        smallSlideRight.querySelector('.small-slide-image').src = timelineItems[nextIndex].querySelector('img').src;
        smallSlideRight.querySelector('.small-slide-description').innerHTML = timelineItems[nextIndex].querySelector('p').innerHTML;
        setTimeout(() => {
            smallSlideRight.style.transform = 'scale(1)';
        }, 800);

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
                timeLeft = 7;
                countdown();
            }
        }, 1000);
    };

    // Inicializar la visualización
    showItems(currentIndex);
    countdown();
});
