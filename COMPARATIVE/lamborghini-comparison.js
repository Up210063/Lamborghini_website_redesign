document.addEventListener('DOMContentLoaded', function () {
    const timelineItems = document.querySelectorAll('.timeline-item');
    let currentIndex = 0;

    const showItem = (index) => {
        if (index > 0) {
            timelineItems[index - 1].classList.remove('show');
        }
        timelineItems[index].classList.add('show');

        setTimeout(() => {
            timelineItems[index].classList.remove('show');
            currentIndex++;
            if (currentIndex < timelineItems.length) {
                showItem(currentIndex);
            } else {
                currentIndex = 0; // Reinicia al primer elemento
                showItem(currentIndex);
            }
        }, 3000); // Tiempo de permanencia visible antes de desaparecer (3 segundos)
    };

    // Iniciar la secuencia
    showItem(currentIndex);
});
