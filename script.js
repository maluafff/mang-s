let favoritos = [];

function adicionarFavorito(nome) {
    if (!favoritos.includes(nome)) {
        favoritos.push(nome);
        alert(`${nome} adicionado aos favoritos!`);
    } else {
        alert(`${nome} já está nos favoritos.`);
    }
    mostrarFavoritos();
}

function mostrarFavoritos() {
    const lista = document.getElementById('listaFavoritos');
    lista.innerHTML = ''; // Limpa a lista atual
    favoritos.forEach(favorito => {
        const li = document.createElement('li');
        li.textContent = favorito;
        lista.appendChild(li);
    });
    abrirPopup();
}

function abrirPopup() {
    document.getElementById('popupFavoritos').style.display = 'block';
}

function fecharPopup() {
    document.getElementById('popupFavoritos').style.display = 'none';
}
