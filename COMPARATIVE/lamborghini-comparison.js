document.addEventListener('DOMContentLoaded', function () {
    const timelineItems = document.querySelectorAll('.timeline-item');
    const timeLeftElement = document.getElementById('time-left');
    
    // Recuperar el índice actual del almacenamiento local o iniciar en 0
    let currentIndex = localStorage.getItem('currentIndex') ? parseInt(localStorage.getItem('currentIndex')) : 0;
    let timeLeft = 5; // Tiempo inicial para cada slide (en segundos)

    const showItem = (index) => {
        if (index > 0) {
            timelineItems[index - 1].classList.remove('show');
        }
        timelineItems[index].classList.add('show');

        timeLeft = 5; // Reinicia el tiempo para el nuevo slide

        const countdownInterval = setInterval(() => {
            timeLeft--;
            timeLeftElement.textContent = timeLeft;

            if (timeLeft <= 0) {
                clearInterval(countdownInterval);
                timelineItems[index].classList.remove('show');
                currentIndex++;
                if (currentIndex < timelineItems.length) {
                    showItem(currentIndex);
                } else {
                    currentIndex = 0; // Reinicia al primer elemento para hacer la secuencia infinita
                    showItem(currentIndex);
                }
                // Guardar el índice actual en el almacenamiento local
                localStorage.setItem('currentIndex', currentIndex);
            }
        }, 1000); // Actualiza cada segundo
    };

    // Iniciar la secuencia desde el índice guardado
    showItem(currentIndex);

    // Actualización continua del contador para que se vea en tiempo real
    setInterval(() => {
        if (timeLeft > 0) {
            timeLeftElement.textContent = timeLeft;
        }
    }, 1000); // Actualiza cada segundo para mantener el tiempo real
});
