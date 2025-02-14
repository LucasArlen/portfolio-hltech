class Store {
    constructor() {
        this.initializeElements();
        this.setupEventListeners();
        this.setupIntersectionObserver();
        this.setupSearchDebounce();
    }

    initializeElements() {
        // Menu Elements
        this.menuButton = document.querySelector('[data-menu-button]');
        this.mobileMenu = document.querySelector('[data-mobile-menu]');
        this.overlay = document.querySelector('[data-overlay]');
        
        // Search Elements
        this.searchButton = document.querySelector('[data-search-button]');
        this.searchContainer = document.querySelector('[data-search-container]');
        this.searchInput = document.querySelector('[data-search-input]');
        
        // Filter Elements
        this.filterButton = document.querySelector('[data-filter-button]');
        this.filtersDrawer = document.querySelector('[data-filters-drawer]');
        
        // Product Grid
        this.productGrid = document.querySelector('[data-product-grid]');
        this.products = document.querySelectorAll('[data-product]');
    }

    setupEventListeners() {
        // Menu Toggle
        this.menuButton?.addEventListener('click', () => this.toggleMenu());
        
        // Search Toggle
        this.searchButton?.addEventListener('click', () => this.toggleSearch());
        
        // Filter Toggle
        this.filterButton?.addEventListener('click', () => this.toggleFilters());
        
        // Overlay Click
        this.overlay?.addEventListener('click', () => this.closeAllMenus());
        
        // Close on ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') this.closeAllMenus();
        });

        // Price Filter
        document.querySelectorAll('[data-price-filter]').forEach(checkbox => {
            checkbox.addEventListener('change', () => this.filterProducts());
        });

        // Category Filter
        document.querySelectorAll('[data-category-filter]').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                this.filterByCategory(link.dataset.category);
            });
        });
    }

    setupIntersectionObserver() {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                    observer.unobserve(entry.target);
                }
            });
        }, options);

        this.products.forEach(product => observer.observe(product));
    }

    setupSearchDebounce() {
        let timeout;
        this.searchInput?.addEventListener('input', (e) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => this.searchProducts(e.target.value), 300);
        });
    }

    toggleMenu() {
        this.mobileMenu?.classList.toggle('active');
        this.overlay?.classList.toggle('active');
        document.body.style.overflow = this.mobileMenu?.classList.contains('active') ? 'hidden' : '';
    }

    toggleSearch() {
        this.searchContainer?.classList.toggle('active');
        if (this.searchContainer?.classList.contains('active')) {
            this.searchInput?.focus();
        }
    }

    toggleFilters() {
        this.filtersDrawer?.classList.toggle('active');
        this.overlay?.classList.toggle('active');
    }

    closeAllMenus() {
        this.mobileMenu?.classList.remove('active');
        this.filtersDrawer?.classList.remove('active');
        this.searchContainer?.classList.remove('active');
        this.overlay?.classList.remove('active');
        document.body.style.overflow = '';
    }

    filterProducts() {
        // Implementar lógica de filtro de preços
    }

    filterByCategory(category) {
        // Implementar lógica de filtro por categoria
    }

    searchProducts(query) {
        // Implementar lógica de busca
    }
}

// Inicializar quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    new Store();
}); 