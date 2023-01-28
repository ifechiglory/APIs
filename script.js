var setup = document.querySelector('#setup');
var punchline = document.querySelector('#punchline');
var punchlineBtn = document.querySelector('#punchlinebtn');
var img = document.querySelector('.img');
var reset = document.querySelector('.reset');
var setupBtn = document.querySelector('#setupBtn');
var loader = document.querySelector('.loader');

var joke = {}


const tellajoke = () => {
    loader.style.display = 'inline-block';
    fetch('https://official-joke-api.appspot.com/random_joke')
    .then(response => response.json())
    .then(
        data => ( 
            loader.style.display = 'none',
            (setup.innerHTML = data.setup, punchlineBtn.style.display ='inline-block'), 
            (joke = data)
        )
    )
    setupBtn.setAttribute('style', 'display: none');
}

const droppunchline = () => {
    punchline.innerHTML = joke.punchline;
    img.setAttribute('src', 'https://i.pinimg.com/originals/af/f5/a7/aff5a72c04f0ede20844215f689f70e2.gif');
    punchlineBtn.style.display = 'none';
    setupBtn.style.display = 'none';
    reset.classList.remove('reset');
}

setupBtn.addEventListener('click', e =>{
    e.preventDefault();
    tellajoke();
});

punchlineBtn.addEventListener('click', e => {
    e.preventDefault();
    droppunchline();
})

reset.addEventListener('click', e => {
    e.preventDefault();
    punchline.innerHTML = '';
    setup.innerHTML = '';
    tellajoke();
    img.setAttribute('src', 'https://i.pinimg.com/originals/5d/da/3c/5dda3c4ddd44be94ffb984f88e74e23b.gif');
    punchlineBtn.style.display = 'none';
    setupBtn.setAttribute('style', 'display: none');
    reset.classList.add('reset');  
})
