function afficherSection(id) {
    //appeler tous les balises portant la classe section
    let sections = document.querySelectorAll('.section');
    //la boucle pour mettre tous ses en display none qui veux dire faire disparaitre les contenus
    sections.forEach(section => section.style.display = 'none');
    //appeler la section de l' id selectionné
    document.getElementById(id).style.display = 'block';
}
