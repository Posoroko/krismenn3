export {
    createBastardSlides
}


const slides = [
    {
        text: 'nouveau spectacle',
        classList: 'text'
    },
    {
        text: 'Bastard',
        classList: 'bastard'
    },
    {
        text: 'Première le 4 novembre 2025',
        classList: 'text'
    }
]

const slideContainer = document.getElementById('slideContainer')

function createBastardSlides() {
    const baseClassList = 'slide';
    const slideDuration = 2500; // How long each slide is visible
    const fadeTime = 500; // Fade in/out time (ms)
    
    // Clear existing content
    slideContainer.innerHTML = '';
    
    // Add CSS for animations
    if (!document.getElementById('slide-animation-styles')) {
        const style = document.createElement('style');
        style.id = 'slide-animation-styles';
        style.textContent = `
            .slide {
                opacity: 0;
                position: absolute;
                left: 0;
                right: 0;
                transition: opacity ${fadeTime}ms ease;
            }
        `;
        document.head.appendChild(style);
    }
    
    // Create and append all slides
    slides.forEach((slide, index) => {
        // Create slide element
        const slideElement = document.createElement('div');
        
        // Add classes
        slideElement.classList.add(baseClassList);
        if (slide.classList) {
            slideElement.classList.add(slide.classList);
        }
        
        // Add text content
        slideElement.textContent = slide.text;
        
        // Append to container
        slideContainer.appendChild(slideElement);
        
        // Calculate timings for this slide
        const showDelay = index * slideDuration;
        const hideDelay = showDelay + slideDuration - fadeTime;
        
        // Fade in after delay
        setTimeout(() => {
            slideElement.style.opacity = '1';
        }, showDelay);
        
        // Fade out after its duration
        setTimeout(() => {
            slideElement.style.opacity = '0';
        }, hideDelay);
    });
}