const displayQuestion = document.getElementsByClassName('faq-container');
console.log(displayQuestion);

for(const displays of displayQuestion){
    displays.addEventListener('click', () => {
        displays.classList.toggle('active');
    });
}