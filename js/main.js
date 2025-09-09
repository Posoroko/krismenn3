const config = {
    autoScrollDelay: 22000,
    autoScrollDuration: 1500
}

const overlay = document.getElementById('introOverlay');
const pageScrollContainer = document.getElementById('scrollContainer')

const bottomSection = document.querySelector('#bottomFullScreen');
let userHasSeenBottomSection = false;

window.onload = function() {
    
    setTimeout(() => {
        overlay.style.transition = 'opacity 0.6s';
        overlay.style.opacity = '0';
        overlay.style.pointerEvents = 'none'

        pageScrollContainer.addEventListener('scroll', checkBottomSectionVisibility);
        autoScroll();
        createBastardSlides()
    }, 2000);
    
    
};

function checkBottomSectionVisibility() {
    console.log('scroll detected')

    if (isVisible(bottomSection)) {
        userHasSeenBottomSection = true;
        console.log('User has seen bottom section');
        pageScrollContainer.removeEventListener('scroll', checkBottomSectionVisibility);
    }
}

function isVisible(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top < window.innerHeight &&
        rect.bottom > 0
    );
}

function smoothScrollTo(element, duration = 12000) { // Default 12 seconds
    console.log('smooth scrolling activated! Duration:', duration);
    
    // Get the container that should be scrolled
    const start = pageScrollContainer.scrollTop;
    const target = element.offsetTop;
    const distance = target - start;
    const startTime = performance.now();
    
    // Temporarily disable snap scrolling during the animation
    const originalSnapType = pageScrollContainer.style.scrollSnapType;
    pageScrollContainer.style.scrollSnapType = 'none';
    
    function scrollAnimation(currentTime) {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        
        // Log progress occasionally to debug
        // if (progress % 0.1 < 0.01) {
        //     console.log(`Scroll progress: ${Math.round(progress * 100)}%`);
        // }
        
        // Using a gentler easing function
        const easeInOutCubic = progress < 0.5
            ? 4 * progress * progress * progress
            : 1 - Math.pow(-2 * progress + 2, 3) / 2;
        
        pageScrollContainer.scrollTop = start + (distance * easeInOutCubic);
        
        if (progress < 1) {
            requestAnimationFrame(scrollAnimation);
        } else {
            // Restore snap scrolling after animation completes
            pageScrollContainer.style.scrollSnapType = originalSnapType;
            // console.log('Scroll animation completed');
        }
    }
    
    requestAnimationFrame(scrollAnimation);
}

// Then replace your scrollIntoView call with:
function autoScroll() {
    setTimeout(() => {
        if (!userHasSeenBottomSection) {
            console.log('lets scrolll');
            smoothScrollTo(bottomSection, config.autoScrollDuration);
        } else {
            console.log('User has already seen bottom section, not auto-scrolling');
        }
    }, config.autoScrollDelay);
}

// function autoScroll() {

//     setTimeout(() => {
//         if (!userHasSeenBottomSection) {
//             console.log('lets scrolll')
//             bottomSection.scrollIntoView({
//                 behavior: 'smooth',
//                 block: 'start' // 'start', 'center', 'end', or 'nearest'
//             });
//         } else {
//             console.log('User has already seen bottom section, not auto-scrolling');
//         }
//     }, 25000)

    
// }


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
  li.className = 'showsItem';
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
            ${show.location}

            <div class="language-tag">
                ${show.language}
            </span>
        </div>

        
    </div>
  `;
  showsList.appendChild(li);
});