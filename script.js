// Animation simple lors du scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    
    // Ajoute ou retire la classe en fonction de la position de défilement
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
// Sélectionner le bouton avec l'ID 'myButton'
const myButton = document.getElementById('myButton');

// Ajouter un événement pour changer la couleur du bouton quand il est cliqué
myButton.addEventListener('click', () => {
    // Changer la couleur du bouton
    myButton.style.backgroundColor = '#FF9F00';
    
    // Changer le texte du bouton
    myButton.textContent = 'Merci d\'avoir cliqué !';
});
