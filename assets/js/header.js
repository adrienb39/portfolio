// Charger le contenu du menu depuis header.html
fetch('/src/header.html')
.then(response => response.text())
.then(data => {
  // Insérer le contenu dans l'élément avec l'id 'navmenu'
  document.getElementById('navmenu').innerHTML = data;
})
.catch(error => {
  console.error('Erreur de chargement du menu:', error);
});