//REVEAL
const ratio = 0.5;
  const options = {
    //L'élément qui est utilisé comme zone d'affichage au moment d'évaluer la visibilité de la cible. si null, root = viewport
    root: null,
    rootMargin: '0px',
    //indique à quel pourcentage de la visibilité de la cible la fonction handleIntersect de la cible doit être exécuté.
    threshold: ratio
  }
  const handleIntersect = function (entries, observer) {
    entries.forEach(function (entry) {
      if (entry.intersectionRatio > ratio) {
        entry.target.classList.add('reveal-visible');
        observer.unobserve(entry.target);
      }
    }); 
  }
  const observer = new IntersectionObserver(handleIntersect, options);
  document.querySelectorAll('.reveal').forEach(function (r) {
    observer.observe(r);
  });
  //FLECHE
  var arrow = document.getElementById("retourTop");
  document.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
      arrow.className = ("visible");
    }else {
      arrow.className = ("invisible");
    }
  })