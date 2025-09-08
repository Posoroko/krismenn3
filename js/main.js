// main.js: Toggle introOverlay for development

// Create toggle button
// const btn = document.createElement('button');
// btn.textContent = 'Toggle Intro Overlay';
// btn.style.position = 'fixed';
// btn.style.top = '20px';
// btn.style.right = '20px';
// btn.style.zIndex = '9999';
// btn.style.padding = '10px 18px';
// btn.style.fontSize = '1rem';
// btn.style.background = '#55463f';
// btn.style.color = '#e6e2dc';
// btn.style.border = 'none';
// btn.style.borderRadius = '6px';
// btn.style.cursor = 'pointer';
// btn.style.boxShadow = '0 2px 8px rgba(0,0,0,0.15)';
// btn.style.userSelect = 'none';

// document.body.appendChild(btn);

// btn.addEventListener('click', function() {
// const overlay = document.getElementById('introOverlay');
// if (overlay) {
//     overlay.style.display = (overlay.style.display === 'none') ? '' : 'none';
// }
// });

// Fade out introOverlay after 2 seconds
setTimeout(function() {
  const overlay = document.getElementById('introOverlay');
  if (overlay) {
    overlay.style.transition = 'opacity 0.6s';
    overlay.style.opacity = '0';
    setTimeout(function() {
      overlay.style.display = 'none';
    }, 600);
  }
}, 2000);

const shows = [
  {
    date: "04/11/25",
    venue: "Théâtre de Cornouaille",
    location: "Scène Nationale de Quimper (29)",
    language: "français"
  },
  {
    date: "05/11/25",
    venue: "Théâtre de Cornouaille",
    location: "Scène Nationale de Quimper (29)",
    language: "français & LSF"
  },
  {
    date: "06/11/25",
    venue: "Théâtre de Cornouaille",
    location: "Scène Nationale de Quimper (29)",
    language: "breton"
  },
  {
    date: "13/11/25",
    venue: "La Passerelle",
    location: "Scène Nationale de Saint-Brieuc (22)",
    language: "français & LSF"
  },
  {
    date: "14/11/25",
    venue: "La Passerelle",
    location: "Scène Nationale de Saint-Brieuc (22)",
    language: "breton"
  },
  {
    date: "16/11/25",
    venue: "La Grande Boutique",
    location: "Kergrist-Moelou (22)",
    language: "français"
  },
  {
    date: "20/11/25",
    venue: "Le Sillon",
    location: "Pleubian (22)",
    language: "français"
  },
  {
    date: "10 et 11/12/25",
    venue: "Maison du Théâtre",
    location: "Brest (29)",
    language: "français"
  },
  {
    date: "15 et 16/01/25",
    venue: "La Paillette",
    location: "Rennes (35)",
    language: "français"
  },
  {
    date: "31/01/26",
    venue: "Festival Le Goût des Langues",
    location: "La Balise, Saint Hilaire de Riez (85)",
    language: "français & LSF"
  },
  {
    date: "05/02/26",
    venue: "L'Atelier Culturel",
    location: "Le Family, Landerneau (29)",
    language: "français & LSF"
  }
];

const showsList = document.getElementById('showsList');
shows.forEach(show => {
  const li = document.createElement('li');
  li.className = 'show-item';
  li.innerHTML = `
    <div class="line flex gap10">
        <div class="show-date">
            ${show.date}
        </div>
        <div class="show-venue">
            ${show.venue}
        </div>
    </div
    
    <div class="line flex gap10">
        <div class="show-location">
            ${show.location} (${show.postalCode})

            <div class="language-tag">
                ${show.language}
            </span>
        </div>

        
    </div>
  `;
  showsList.appendChild(li);
});