document.addEventListener('DOMContentLoaded', function() {
    // Mostrar ventana emergente al hacer clic en la imagen
    var images = document.querySelectorAll('.gallery-image');
    images.forEach(function(image) {
        image.addEventListener('click', function() {
            var popup = this.nextElementSibling;
            popup.style.display = 'block';

            // Cerrar ventana emergente al hacer clic en el botón de cierre o fuera de la ventana
            var closeButton = popup.querySelector('.close-popup');
            closeButton.addEventListener('click', function() {
                popup.style.display = 'none';
            });
            popup.addEventListener('click', function(e) {
                if (e.target === this) {
                    popup.style.display = 'none';
                }
            });
        });
    });

    // Mostrar y ocultar el panel desplegable
    var dropdown = document.querySelector('.dropdown');
    var dropdownContent = document.querySelector('.dropdown-content');
    dropdown.addEventListener('click', function() {
        dropdownContent.classList.toggle('show');
    });
    window.addEventListener('click', function(e) {
        if (!dropdown.contains(e.target)) {
            dropdownContent.classList.remove('show');
        }
    });

    // Generar el gráfico
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
            datasets: [{
                label: '# of Votes',
                data: [16, 17, 17, 18, 16, 19],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
 var ctxVentas = document.getElementById('ventasChart').getContext('2d');
    var ventasChart = new Chart(ctxVentas, {
        type: 'line',
        data: {
            labels: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
            datasets: [{
                label: 'Ventas',
                data: [11, 14, 12, 13, 15, 10],
                fill: false,
                borderColor: 'rgba(75, 192, 192, 1)',
                tension: 0.1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
