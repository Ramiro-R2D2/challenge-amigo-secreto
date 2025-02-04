let friends = [];
let shuffledFriends = [];
let currentIndex = 0;
let pares = new Map();
let paresFormatado = [];

function adicionarAmigo() {
    const input = document.getElementById('amigo');
    let nome = input.value.trim();
    
    if (nome === '') {
        alert('Por favor, insira um nome válido!');
        return;        
    }

    friends.push(nome);
    input.value = '';
    atualizarLista('listaAmigos', friends);
}

function sortearAmigo() {
    if (friends.length < 2) {
        alert('Adicione mais pessoas');
        return; 
    }

    if (currentIndex >= friends.length) {
        alert('Todos os pares foram sorteados! Reiniciando...');
        shuffledFriends = [];
        currentIndex = 0;
        pares.clear();
    }

    if (shuffledFriends.length === 0) {
        shuffledFriends = [...friends].sort(() => Math.random() - 0.5);
        

        if (shuffledFriends[shuffledFriends.length-1] === friends[0]) {
            [shuffledFriends[0], shuffledFriends[1]] = [shuffledFriends[1], shuffledFriends[0]];
        }
    }

    const current = shuffledFriends[currentIndex];
    const next = shuffledFriends[(currentIndex + 1) % shuffledFriends.length];
    
    pares.set(current, next);
    paresFormatado = Array.from(pares).map(([chave, valor]) => `${chave} >> ${valor}`);
    
    currentIndex++;
    atualizarLista('resultado', paresFormatado);
}

function atualizarLista(elementId, lista) {
    const listaElement = document.getElementById(elementId);
    listaElement.innerHTML = '';
    
    lista.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        listaElement.appendChild(li);
    });
}