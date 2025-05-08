// Fonction pour afficher la popup
function afficherPopupEmail() {
    // Créer les éléments de la popup
    const overlay = document.createElement('div');
    const popup = document.createElement('div');
    const contenu = document.createElement('div');
    const boutonFermer = document.createElement('button');
    
    // Configurer l'overlay (fond sombre)
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    overlay.style.display = 'flex';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';
    overlay.style.zIndex = '1000';
    
    // Configurer la popup
    popup.style.backgroundColor = 'white';
    popup.style.padding = '20px';
    popup.style.borderRadius = '5px';
    popup.style.maxWidth = '400px';
    popup.style.width = '90%';
    popup.style.position = 'relative';
    
    // Configurer le contenu
    contenu.innerHTML = '<h3>Contactez-nous</h3><p>Notre adresse email: <strong>contact@exemple.com</strong></p>';
    
    // Configurer le bouton de fermeture
    boutonFermer.textContent = 'Fermer';
    boutonFermer.style.padding = '8px 16px';
    boutonFermer.style.marginTop = '15px';
    boutonFermer.style.backgroundColor = '#4CAF50';
    boutonFermer.style.color = 'white';
    boutonFermer.style.border = 'none';
    boutonFermer.style.borderRadius = '4px';
    boutonFermer.style.cursor = 'pointer';
    
    // Ajouter un événement au bouton de fermeture
    boutonFermer.addEventListener('click', function() {
        document.body.removeChild(overlay);
    });
    
    // Assembler les éléments
    popup.appendChild(contenu);
    popup.appendChild(boutonFermer);
    overlay.appendChild(popup);
    
    // Ajouter la popup au document
    document.body.appendChild(overlay);
}

// Exemple d'utilisation avec un bouton
document.addEventListener('DOMContentLoaded', function() {
    // Créer un bouton pour déclencher la popup
    const bouton = document.createElement('button');
    bouton.textContent = 'Afficher Email';
    bouton.style.padding = '10px 20px';
    bouton.style.cursor = 'pointer';
    
    // Ajouter l'événement au clic
    bouton.addEventListener('click', afficherPopupEmail);
    
    // Ajouter le bouton à la page
    document.body.appendChild(bouton);
});


document.addEventListener('DOMContentLoaded', function() {
    // Sélectionner un élément existant par son ID
    const monElement = document.getElementById('monBoutonEmail');
    
    // Ajouter l'événement au clic
    if (monElement) {
        monElement.addEventListener('click', afficherPopupEmail);
    }
});