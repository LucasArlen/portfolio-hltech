class CountdownTimer {
    constructor(eventDate, selectors) {
        this.eventDate = new Date(eventDate).getTime();
        this.selectors = selectors;
        this.interval = null;
        this.init();
    }

    init() {
        // Tentar inicializar várias vezes até encontrar os elementos
        const initInterval = setInterval(() => {
            this.elements = this.getElements();
            if (this.elements.days && 
                this.elements.hours && 
                this.elements.minutes && 
                this.elements.seconds) {
                clearInterval(initInterval);
                this.start();
            }
        }, 100);
    }

    getElements() {
        return {
            days: document.querySelector(this.selectors.days),
            hours: document.querySelector(this.selectors.hours),
            minutes: document.querySelector(this.selectors.minutes),
            seconds: document.querySelector(this.selectors.seconds)
        };
    }

    calculateTimeLeft() {
        const now = new Date().getTime();
        const timeLeft = this.eventDate - now;

        if (timeLeft < 0) {
            this.stop();
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        return {
            days: Math.floor(timeLeft / (1000 * 60 * 60 * 24)),
            hours: Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((timeLeft % (1000 * 60)) / 1000)
        };
    }

    formatNumber(number) {
        return String(number).padStart(2, '0');
    }

    update() {
        if (!this.elements) return;
        
        const time = this.calculateTimeLeft();
        
        if (this.elements.days) this.elements.days.textContent = this.formatNumber(time.days);
        if (this.elements.hours) this.elements.hours.textContent = this.formatNumber(time.hours);
        if (this.elements.minutes) this.elements.minutes.textContent = this.formatNumber(time.minutes);
        if (this.elements.seconds) this.elements.seconds.textContent = this.formatNumber(time.seconds);
    }

    start() {
        this.update();
        if (!this.interval) {
            this.interval = setInterval(() => this.update(), 1000);
        }
    }

    stop() {
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
        }
    }
}

// Criar o contador imediatamente
new CountdownTimer('2077-07-07T12:00:00', {
    days: '.countdown-days',
    hours: '.countdown-hours',
    minutes: '.countdown-minutes',
    seconds: '.countdown-seconds'
}); 