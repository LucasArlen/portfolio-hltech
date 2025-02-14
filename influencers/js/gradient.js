class Gradient {
    constructor() {
        this.canvas = document.getElementById('gradient-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.colors = [
            [255, 51, 102],  // #FF3366
            [255, 107, 77],  // #FF6B4D
            [255, 184, 77],  // #FFB84D
            [255, 51, 102]   // #FF3366
        ];
        this.init();
    }

    init() {
        this.particles = [];
        this.mousePosition = { x: 0, y: 0 };
        this.resize();
        this.createParticles();
        this.animate();
        this.setupEventListeners();
    }

    // ... resto dos métodos da classe ...
}

// Inicialização
window.addEventListener('load', () => {
    new Gradient();
}); 