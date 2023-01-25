var setup = document.querySelector('#setup');
var punchline = document.querySelector('#punchline');
var punchlineBtn = document.querySelector('#punchlinebtn');
var img = document.querySelector('.img');
var reset = document.querySelector('.reset');
var setupBtn = document.querySelector('#setupBtn');

var joke = {}


const tellajoke = () => {
    fetch('https://official-joke-api.appspot.com/random_joke')
    .then(response => response.json())
    .then(
        data => ( 
            (setup.innerHTML = data.setup, punchlineBtn.style.display ='inline-block'), 
            (joke = data)
        )
    )
    .catch(error => console.log(error));
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
    tellajoke();
    img.setAttribute('src', 'https://monophy.com/media/hVn3MCkffhr9ZqyFie/monophy.gif');
    punchlineBtn.style.display = 'none';
    setupBtn.setAttribute('style', 'display: none');  
})
