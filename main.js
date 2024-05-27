const rutinaRealizada = JSON.parse(localStorage.getItem('rutinaRealizada')) || [];

const rutina = () => {
    const ejercicios = {
        calentamiento: document.getElementById("seriesCalentamiento").value,
        fuerza: document.getElementById("seriesFuerza").value,
        flexibilidad: document.getElementById("seriesFlexibilidad").value,
    };
    if (ejercicios.calentamiento && ejercicios.fuerza && ejercicios.flexibilidad) {
        rutinaRealizada.push(ejercicios);
        localStorage.setItem('rutinaRealizada', JSON.stringify(rutinaRealizada));
    } else {
        alert('Por favor, selecciona las opciones.');
    }
};

const verRutina = () => {
    const rutinaLista = document.getElementById('rutinaLista');
    rutinaLista.innerHTML = '';
    rutinaRealizada.forEach((ejercicios, e) => {
        const li = document.createElement('li');
        li.innerText = `Rutina ${e + 1}: Calentamiento: ${ejercicios.calentamiento}, Fuerza: ${ejercicios.fuerza}, Flexibilidad: ${ejercicios.flexibilidad}.`;
        const removerButton = document.createElement('button'); 
        removerButton.innerText = 'Remover';
        removerButton.className = 'botonCancelar';
        removerButton.onclick = () => removerRutina(e);
        li.append(removerButton); 
        rutinaLista.append(li);
    });
};

const removerRutina = (e) => {
    rutinaRealizada.splice(e, 1);
    localStorage.setItem('rutinaRealizada', JSON.stringify(rutinaRealizada));
    verRutina();
};

document.getElementById('crearButton').addEventListener('click', rutina);
document.getElementById('rutinaButton').addEventListener('click', verRutina);

