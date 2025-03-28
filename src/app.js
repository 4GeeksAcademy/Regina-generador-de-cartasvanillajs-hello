const palos = ['spade', 'club', 'heart', 'diamond'];
const valores = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Rey', 'Reina', 'Jota', 'As'];

function generarCarta() {
    const paloAleatorio = palos[Math.floor(Math.random() * palos.length)];
    const valorAleatorio = valores[Math.floor(Math.random() * valores.length)];

    const carta = `
        <div class="card-top">${valorAleatorio}</div>
        <div class="card-value ${paloAleatorio}">
            <span class="card-suit">${getSimboloPalo(paloAleatorio)}</span>
        </div>
        <div class="card-bottom">${valorAleatorio}</div>
    `;
    
    return carta;
}

function getSimboloPalo(palo) {
    switch(palo) {
        case 'heart':
            return '♥';
        case 'spade':
            return '♠';
        case 'club':
            return '♣';
        case 'diamond':
            return '♦';
        default:
            return '';
    }
}

function mostrarCarta() {
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = generarCarta();
}

mostrarCarta();

setInterval(mostrarCarta, 10000);
