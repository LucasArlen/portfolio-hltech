class Carousel {
    constructor() {
        this.carousel = document.querySelector('.carousel');
        this.track = this.carousel.querySelector('.carousel-track');
        this.slides = this.carousel.querySelectorAll('.carousel-slide');
        this.prevButton = this.carousel.querySelector('.carousel-prev');
        this.nextButton = this.carousel.querySelector('.carousel-next');
        this.indicators = this.carousel.querySelectorAll('.carousel-indicators button');
        
        this.currentSlide = 0;
        this.slideCount = this.slides.length;
        
        this.init();
    }

    init() {
        // Configurar eventos
        this.prevButton.addEventListener('click', () => this.prev());
        this.nextButton.addEventListener('click', () => this.next());
        
        // Indicadores
        this.indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => this.goToSlide(index));
        });

        // Touch events para mobile
        let touchStartX = 0;
        let touchEndX = 0;

        this.track.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });

        this.track.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            if (touchStartX - touchEndX > 50) {
                this.next();
            } else if (touchEndX - touchStartX > 50) {
                this.prev();
            }
        });

        // Atualizar indicador inicial
        this.updateIndicators();

        // Auto play opcional
        this.startAutoPlay();
    }

    prev() {
        this.currentSlide = (this.currentSlide - 1 + this.slideCount) % this.slideCount;
        this.updateSlide();
    }

    next() {
        this.currentSlide = (this.currentSlide + 1) % this.slideCount;
        this.updateSlide();
    }

    goToSlide(index) {
        this.currentSlide = index;
        this.updateSlide();
    }

    updateSlide() {
        const offset = -this.currentSlide * 100;
        this.track.style.transform = `translateX(${offset}%)`;
        this.updateIndicators();
    }

    updateIndicators() {
        this.indicators.forEach((indicator, index) => {
            if (index === this.currentSlide) {
                indicator.classList.add('bg-white');
                indicator.classList.remove('bg-white/30');
            } else {
                indicator.classList.remove('bg-white');
                indicator.classList.add('bg-white/30');
            }
        });
    }

    startAutoPlay() {
        setInterval(() => this.next(), 5000); // Muda slide a cada 5 segundos
    }
}

// Inicializar quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    new Carousel();
}); 