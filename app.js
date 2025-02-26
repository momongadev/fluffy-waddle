// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

document.addEventListener('DOMContentLoaded', (event) => {
    const buttonClear = document.querySelector('.button-clear');
    const clearClosed = document.getElementById('clearClosed');
    const clearOpen = document.getElementById('clearOpen');
    const addFriend = document.querySelector('.button-add');
    const raffleFriend = document.querySelector('.button-draw');
    let amigos = [];

    buttonClear.addEventListener('mouseover', () => {
        clearClosed.style.display = 'none';
        clearOpen.style.display = 'block';
    });

    buttonClear.addEventListener('mouseout', () => {
        clearClosed.style.display = 'block';
        clearOpen.style.display = 'none';
    });

    buttonClear.addEventListener('click', () => {
        amigos = [];
        const ul = document.getElementById('listaAmigos');
        ul.innerHTML = '';
    });

    addFriend.addEventListener('click', () => {
        const inputName = document.getElementById('amigo');
        if (!validateFriend(inputName)) {
            return;
        }
        amigos.push(inputName.value);
        const ul = document.getElementById('listaAmigos');
        const li = document.createElement('li');
        li.textContent = inputName.value;
        ul.appendChild(li);
        inputName.value = '';
    });

    raffleFriend.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * amigos.length);
        const randomFriend = amigos[randomIndex];
        alert(`Tu amigo secreto es: ${randomFriend}`);
    });

    function validateFriend(inputName) {
        if (inputName.value === '') {
            alert('Debes ingresar un nombre');
            return false;
        }
        return true;
    }
});



