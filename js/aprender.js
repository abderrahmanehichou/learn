document.addEventListener('DOMContentLoaded', () => {
    // Función para mostrar las conjugaciones del verbo
    function mostrarConjugacion(verbo) {
        fetch('verbos.json')
            .then(response => response.json())
            .then(data => {
                const verboData = data.verbos.find(v => v.infinitivo === verbo);
                if (verboData) {
                    const conjugaciones = verboData.conjugaciones;
                    let html = `<h2>Conjugaciones de ${verbo}</h2>`;
                    for (let tiempo in conjugaciones) {
                        html += `<h3>${tiempo.charAt(0).toUpperCase() + tiempo.slice(1)}</h3><ul>`;
                        for (let pronombre in conjugaciones[tiempo]) {
                            html += `<li>${pronombre}: ${conjugaciones[tiempo][pronombre]}</li>`;
                        }
                        html += '</ul>';
                    }
                    document.getElementById('conjugaciones').innerHTML = html;
                } else {
                    document.getElementById('conjugaciones').innerHTML = `<p>No se encontraron conjugaciones para el verbo ${verbo}</p>`;
                }
            })
            .catch(error => console.error('Error:', error));
    }

    // Hacer la función accesible globalmente
    window.mostrarConjugacion = mostrarConjugacion;
});
