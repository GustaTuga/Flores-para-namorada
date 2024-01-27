function criarEstrelas() {
    const estrelas = document.getElementById('estrelas');
    const qtdEstrelas = 200;

    for (let i = 0; i < qtdEstrelas; i++) {
        const estrela = document.createElement('div');
        estrela.classList.add('estrela');
        estrela.style.left = `${Math.random() * 100}%`;
        estrela.style.top = `${Math.random() * 100}%`;
        estrela.style.animationDelay = `${Math.random() * 2}s`;
        estrelas.appendChild(estrela);
    }
}

criarEstrelas();
