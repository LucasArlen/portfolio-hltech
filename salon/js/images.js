const salonImages = {
    // Imagens de fundo
    backgrounds: {
        main: "https://images.unsplash.com/photo-1560066984-138dadb4c035", // Salão elegante
        secondary: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f", // Interior sofisticado
    },
    
    // Serviços
    services: {
        haircut: "https://images.unsplash.com/photo-1634449571010-02389ed0f9b0",
        coloring: "https://images.unsplash.com/photo-1620331311520-246422fd82f9",
        treatment: "https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3",
        styling: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1",
        manicure: "https://images.unsplash.com/photo-1632345031435-8727f6897d53",
        makeup: "https://images.unsplash.com/photo-1487412912498-0447578fcca8",
    },
    
    // Galeria
    gallery: [
        "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e",
        "https://images.unsplash.com/photo-1562322140-8baeececf3df",
        "https://images.unsplash.com/photo-1595475884562-073c30d45670",
        "https://images.unsplash.com/photo-1600948836101-f9ffda59d250",
        "https://images.unsplash.com/photo-1605497788044-5a32c7078486",
        "https://images.unsplash.com/photo-1601597111158-2fceff292cdc",
    ],
    
    // Equipe
    team: [
        "https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8",
        "https://images.unsplash.com/photo-1580618672591-eb180b1a973f",
        "https://images.unsplash.com/photo-1586297098710-0382a496c814",
        "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11",
    ],
    
    // Ambiente
    ambiente: [
        "https://images.unsplash.com/photo-1633681926035-ec1ac984418a",
        "https://images.unsplash.com/photo-1633681926787-7c3d300be2e5",
        "https://images.unsplash.com/photo-1600948836101-f9ffda59d250",
        "https://images.unsplash.com/photo-1633681926787-7c3d300be2e5",
    ],
    
    // Produtos
    products: [
        "https://images.unsplash.com/photo-1631730359585-38a4935cbec4",
        "https://images.unsplash.com/photo-1596178065887-1198b6148b2b",
        "https://images.unsplash.com/photo-1571875257727-256c39da42af",
        "https://images.unsplash.com/photo-1612817288484-6f916006741a",
    ]
};

// Função helper para adicionar parâmetros de qualidade à URL
function getOptimizedImage(url, width = 800) {
    return `${url}?auto=format,compress&q=80&w=${width}&fit=crop`;
} 