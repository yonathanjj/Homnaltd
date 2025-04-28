        // Sample data structure for partners, solutions, and products
        const partnersData = {
            sika: {
                name: "Sika",
                description: "World leader in construction chemicals and industrial manufacturing.",
                logo: "https://www.sika.com/content/dam/dms/sika/images-3/logo/sika-logo.png",
                solutions: {
                    waterproofing: {
                        name: "Waterproofing Solutions",
                        description: "Comprehensive waterproofing systems for all construction needs",
                        products: {
                            "sika-proof-membrane": {
                                name: "SikaProof® Membrane",
                                images: [
                                    "https://www.sika.com/content/dam/dms/si01/sika_proof_membrane_-a.png",
                                    "https://www.sika.com/content/dam/dms/si01/sika_proof_membrane_-b.png"
                                ],
                                description: "SikaProof® is a fully bonded, dual-side coated, reinforced waterproofing membrane with a non-woven fleece on both sides.",
                                features: [
                                    "Fully bonded waterproofing system",
                                    "Dual protection with coating on both sides",
                                    "High puncture resistance",
                                    "Excellent crack bridging capability"
                                ]
                            },
                            "sika-igolflex": {
                                name: "Sika® Igolflex",
                                images: [
                                    "https://www.sika.com/content/dam/dms/si01/sikalastic_-igolflex.png"
                                ],
                                description: "Sika® Igolflex is a high-performance, elastic, one-component polyurethane waterproofing membrane.",
                                features: [
                                    "Excellent UV resistance",
                                    "Highly elastic and durable",
                                    "Seamless application",
                                    "Suitable for foot traffic"
                                ]
                            },
                            "sika-trocal": {
                                name: "Sika®-Trocal",
                                images: [
                                    "https://www.sika.com/content/dam/dms/si01/sika_-trocal.png"
                                ],
                                description: "High-quality waterproofing membrane for roofs and terraces.",
                                features: [
                                    "Weather resistant",
                                    "Easy to install",
                                    "Long lifespan",
                                    "Various color options"
                                ]
                            }
                        }
                    },
                    concrete: {
                        name: "Concrete Solutions",
                        description: "Innovative products for concrete construction and repair",
                        products: {
                            "sika-visco-crete": {
                                name: "Sika® ViscoCrete",
                                images: [
                                    "https://www.sika.com/content/dam/dms/si01/sika_visco_crete.png"
                                ],
                                description: "Superplasticizer for high-performance concrete.",
                                features: [
                                    "High water reduction",
                                    "Excellent workability",
                                    "Improved strength development",
                                    "Reduced shrinkage"
                                ]
                            },
                            "sika-fiber": {
                                name: "SikaFiber®",
                                images: [
                                    "https://www.sika.com/content/dam/dms/si01/sikafiber.png"
                                ],
                                description: "Structural synthetic fibers for concrete reinforcement.",
                                features: [
                                    "Reduces plastic shrinkage cracking",
                                    "Improves impact resistance",
                                    "Easy to dose and mix",
                                    "Corrosion-free solution"
                                ]
                            },
                            "sika-antisol": {
                                name: "Sika® Antisol",
                                images: [
                                    "https://www.sika.com/content/dam/dms/si01/sika_antisol.png"
                                ],
                                description: "Evaporation retarder for fresh concrete.",
                                features: [
                                    "Reduces plastic shrinkage",
                                    "Prevents crust formation",
                                    "Easy to apply",
                                    "Does not affect setting time"
                                ]
                            }
                        }
                    },
                    flooring: {
                        name: "Flooring Systems",
                        description: "Durable and aesthetic flooring solutions for all environments",
                        products: {
                            "sika-floor": {
                                name: "Sikafloor®",
                                images: [
                                    "https://www.sika.com/content/dam/dms/si01/sikafloor.png"
                                ],
                                description: "High-performance flooring systems for industrial and commercial use.",
                                features: [
                                    "Excellent abrasion resistance",
                                    "Chemical resistant",
                                    "Seamless application",
                                    "Various finishes available"
                                ]
                            },
                            "sika-gard": {
                                name: "Sikagard®",
                                images: [
                                    "https://www.sika.com/content/dam/dms/si01/sikagard.png"
                                ],
                                description: "Protective coatings for floors and walls.",
                                features: [
                                    "Easy to clean surface",
                                    "Resistant to chemicals",
                                    "Decorative options",
                                    "Durable finish"
                                ]
                            },
                            "sika-level-125": {
                                name: "Sika® Level-125",
                                images: [
                                    "https://www.sika.com/content/dam/dms/si01/sika_level_125.png"
                                ],
                                description: "Self-leveling underlayment for floor coverings.",
                                features: [
                                    "Fast curing",
                                    "Excellent flow properties",
                                    "Smooth finish",
                                    "High compressive strength"
                                ]
                            }
                        }
                    },
                    // Additional solutions would be added here...
                    sealants: {
                        name: "Sealants & Adhesives",
                        description: "High-performance sealing and bonding solutions",
                        products: {
                            "sika-flex": {
                                name: "SikaFlex®",
                                images: [
                                    "https://www.sika.com/content/dam/dms/si01/sikaflex.png"
                                ],
                                description: "Premium polyurethane sealant for construction and industry.",
                                features: [
                                    "Excellent adhesion",
                                    "Highly elastic",
                                    "Weather resistant",
                                    "Paintable"
                                ]
                            },
                            "sika-bond": {
                                name: "SikaBond®",
                                images: [
                                    "https://www.sika.com/content/dam/dms/si01/sikabond.png"
                                ],
                                description: "Construction adhesives for various substrates.",
                                features: [
                                    "Strong bonding",
                                    "Versatile applications",
                                    "Easy to apply",
                                    "Durable results"
                                ]
                            }
                        }
                    },
                    repair: {
                        name: "Repair & Protection",
                        description: "Solutions for concrete repair and structural protection",
                        products: {
                            "sika-monotop": {
                                name: "SikaMonotop®",
                                images: [
                                    "https://www.sika.com/content/dam/dms/si01/sikamonotop.png"
                                ],
                                description: "Repair mortars for concrete structures.",
                                features: [
                                    "High strength",
                                    "Excellent adhesion",
                                    "Rapid hardening",
                                    "Durable repair"
                                ]
                            },
                            "sika-ferroguard": {
                                name: "SikaFerroguard®",
                                images: [
                                    "https://www.sika.com/content/dam/dms/si01/sikaferroguard.png"
                                ],
                                description: "Corrosion inhibitor for reinforced concrete.",
                                features: [
                                    "Penetrates concrete",
                                    "Protects reinforcement",
                                    "Easy application",
                                    "Long-term protection"
                                ]
                            }
                        }
                    }
                },
                // All products flattened for the products view
                allProducts: {
                    "sika-proof-membrane": {
                        name: "SikaProof® Membrane",
                        solution: "Waterproofing Solutions",
                        images: [
                            "https://www.sika.com/content/dam/dms/si01/sika_proof_membrane_-a.png",
                            "https://www.sika.com/content/dam/dms/si01/sika_proof_membrane_-b.png"
                        ],
                        description: "SikaProof® is a fully bonded, dual-side coated, reinforced waterproofing membrane with a non-woven fleece on both sides.",
                        features: [
                            "Fully bonded waterproofing system",
                            "Dual protection with coating on both sides",
                            "High puncture resistance",
                            "Excellent crack bridging capability"
                        ]
                    },
                    "sika-igolflex": {
                        name: "Sika® Igolflex",
                        solution: "Waterproofing Solutions",
                        images: [
                            "https://www.sika.com/content/dam/dms/si01/sikalastic_-igolflex.png"
                        ],
                        description: "Sika® Igolflex is a high-performance, elastic, one-component polyurethane waterproofing membrane.",
                        features: [
                            "Excellent UV resistance",
                            "Highly elastic and durable",
                            "Seamless application",
                            "Suitable for foot traffic"
                        ]
                    },
                    // More products would be listed here...
                }
            },
            simba: {
                name: "Simba",
                description: "Innovative building materials and construction solutions provider.",
                logo: "https://via.placeholder.com/200x80?text=Simba+Logo",
                solutions: {
                    masonry: {
                        name: "Masonry Products",
                        description: "High-quality masonry units for all construction needs",
                        products: {
                            "simba-blocks": {
                                name: "Simba Blocks",
                                images: [
                                    "https://via.placeholder.com/600x400?text=Simba+Blocks"
                                ],
                                description: "Premium concrete blocks for durable construction.",
                                features: [
                                    "Various sizes available",
                                    "High compressive strength",
                                    "Thermal insulation",
                                    "Fire resistant"
                                ]
                            },
                            "simba-bricks": {
                                name: "Simba Bricks",
                                images: [
                                    "https://via.placeholder.com/600x400?text=Simba+Bricks"
                                ],
                                description: "Clay bricks with excellent durability.",
                                features: [
                                    "Natural clay material",
                                    "Weather resistant",
                                    "Aesthetic appeal",
                                    "Long lifespan"
                                ]
                            }
                        }
                    },
                    // More solutions would be added here...
                },
                allProducts: {
                    // All Simba products would be listed here...
                }
            },
            aco: {
                name: "ACO",
                description: "Specialists in drainage and water management solutions.",
                logo: "https://www.aco.com/fileadmin/template/images/aco-logo.svg",
                solutions: {
                    drainage: {
                        name: "Drainage Systems",
                        description: "Comprehensive drainage solutions for all applications",
                        products: {
                            "aco-drain": {
                                name: "ACO Drain",
                                images: [
                                    "https://www.aco.com/fileadmin/_processed_/6/7/csm_aco-drain_1e8b0c1f1c.png"
                                ],
                                description: "Channel drainage system for surface water management.",
                                features: [
                                    "High load capacity",
                                    "Modular design",
                                    "Easy installation",
                                    "Durable materials"
                                ]
                            }
                        }
                    },
                    // More solutions would be added here...
                },
                allProducts: {
                    // All ACO products would be listed here...
                }
            }
        };

        // DOM Ready
        document.addEventListener('DOMContentLoaded', function() {
            // Initialize banner slider
            let currentSlide = 0;
            const slides = document.querySelectorAll('.slide');

            function showSlide(index) {
                slides.forEach(slide => slide.classList.remove('active'));
                slides[index].classList.add('active');
            }

            function nextSlide() {
                currentSlide = (currentSlide + 1) % slides.length;
                showSlide(currentSlide);
            }

            // Change slide every 5 seconds
            setInterval(nextSlide, 5000);

            // Get modal elements
            const solutionsModal = document.getElementById('solutions-modal');
            const solutionProductsModal = document.getElementById('solution-products-modal');
            const productsModal = document.getElementById('products-modal');
            const productModal = document.getElementById('product-modal');

            // Get content containers
            const solutionsModalContent = document.getElementById('solutions-modal-content');
            const solutionProductsModalContent = document.getElementById('solution-products-modal-content');
            const productsModalContent = document.getElementById('products-modal-content');
            const productModalContent = document.getElementById('product-modal-content');

            // Get title elements
            const solutionsModalTitle = document.getElementById('solutions-modal-title');
            const solutionProductsModalTitle = document.getElementById('solution-products-modal-title');
            const productsModalTitle = document.getElementById('products-modal-title');
            const productModalTitle = document.getElementById('product-modal-title');

            // Close buttons
            const closeButtons = document.querySelectorAll('.close-modal');

            // Current state variables
            let currentPartner = null;
            let currentSolution = null;

            // Close all modals function
            function closeAllModals() {
                solutionsModal.style.display = 'none';
                solutionProductsModal.style.display = 'none';
                productsModal.style.display = 'none';
                productModal.style.display = 'none';
            }

            // Add click event to close buttons
            closeButtons.forEach(btn => {
                btn.addEventListener('click', closeAllModals);
            });

            // Close modals when clicking outside
            window.addEventListener('click', function(e) {
                if (e.target.classList.contains('modal')) {
                    closeAllModals();
                }
            });

            // View solutions buttons
            const solutionsBtns = document.querySelectorAll('.solutions-btn');
            solutionsBtns.forEach(btn => {
                btn.addEventListener('click', function() {
                    const partnerId = this.getAttribute('data-partner');
                    currentPartner = partnerId;
                    loadSolutionsModal(partnerId);
                });
            });

            // View products buttons
            const productsBtns = document.querySelectorAll('.products-btn');
            productsBtns.forEach(btn => {
                btn.addEventListener('click', function() {
                    const partnerId = this.getAttribute('data-partner');
                    currentPartner = partnerId;
                    loadProductsModal(partnerId);
                });
            });

            // Load solutions modal
            function loadSolutionsModal(partnerId) {
                const partner = partnersData[partnerId];

                if (!partner) return;

                // Set modal title
                solutionsModalTitle.textContent = `${partner.name} Solutions`;

                // Build solutions list
                let html = '<div class="solutions-list">';

                for (const [solutionId, solution] of Object.entries(partner.solutions)) {
                    html += `
                        <div class="solution-item" data-solution="${solutionId}">
                            <h4>${solution.name}</h4>
                            <p>${solution.description}</p>
                        </div>
                    `;
                }

                html += '</div>';
                solutionsModalContent.innerHTML = html;

                // Show modal
                solutionsModal.style.display = 'block';

                // Add click event to solution items
                const solutionItems = document.querySelectorAll('.solution-item');
                solutionItems.forEach(item => {
                    item.addEventListener('click', function() {
                        const solutionId = this.getAttribute('data-solution');
                        currentSolution = solutionId;
                        loadSolutionProductsModal(partnerId, solutionId);
                    });
                });
            }

            // Load solution products modal
            function loadSolutionProductsModal(partnerId, solutionId) {
                const partner = partnersData[partnerId];
                const solution = partner.solutions[solutionId];

                if (!partner || !solution) return;

                // Set modal title
                solutionProductsModalTitle.textContent = `${partner.name} - ${solution.name}`;

                // Build products grid
                let html = `
                    <div class="solution-products-header">
                        <a href="#" class="back-to-solutions"><i class="fas fa-arrow-left"></i> Back to Solutions</a>
                        <span>${Object.keys(solution.products).length} Products</span>
                    </div>
                    <div class="products-grid">
                `;

                for (const [productId, product] of Object.entries(solution.products)) {
                    html += `
                        <div class="product-card" data-product="${productId}">
                            <div class="product-image">
                                <img src="${product.images[0]}" alt="${product.name}">
                            </div>
                            <div class="product-info">
                                <h5>${product.name}</h5>
                            </div>
                        </div>
                    `;
                }

                html += '</div>';
                solutionProductsModalContent.innerHTML = html;

                // Close solutions modal and open products modal
                solutionsModal.style.display = 'none';
                solutionProductsModal.style.display = 'block';

                // Add click event to back button
                const backBtn = document.querySelector('.back-to-solutions');
                backBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    solutionProductsModal.style.display = 'none';
                    solutionsModal.style.display = 'block';
                });

                // Add click event to product cards
                const productCards = document.querySelectorAll('.product-card');
                productCards.forEach(card => {
                    card.addEventListener('click', function() {
                        const productId = this.getAttribute('data-product');
                        loadProductModal(partnerId, solutionId, productId);
                    });
                });
            }

            // Load products modal
            function loadProductsModal(partnerId) {
                const partner = partnersData[partnerId];

                if (!partner) return;

                // Set modal title
                productsModalTitle.textContent = `${partner.name} Products`;

                // Build products grid
                let html = '<div class="products-grid">';

                for (const [productId, product] of Object.entries(partner.allProducts)) {
                    html += `
                        <div class="product-card" data-product="${productId}">
                            <div class="product-image">
                                <img src="${product.images[0]}" alt="${product.name}">
                            </div>
                            <div class="product-info">
                                <h5>${product.name}</h5>
                                <small>${product.solution}</small>
                            </div>
                        </div>
                    `;
                }

                html += '</div>';
                productsModalContent.innerHTML = html;

                // Show modal
                productsModal.style.display = 'block';

                // Add click event to product cards
                const productCards = document.querySelectorAll('.product-card');
                productCards.forEach(card => {
                    card.addEventListener('click', function() {
                        const productId = this.getAttribute('data-product');
                        // Find which solution this product belongs to
                        let solutionId = null;
                        for (const [solId, solution] of Object.entries(partner.solutions)) {
                            if (solution.products[productId]) {
                                solutionId = solId;
                                break;
                            }
                        }
                        loadProductModal(partnerId, solutionId, productId);
                    });
                });
            }

            // Load product detail modal
            function loadProductModal(partnerId, solutionId, productId) {
                const partner = partnersData[partnerId];
                let product = null;

                if (solutionId) {
                    const solution = partner.solutions[solutionId];
                    product = solution.products[productId];
                } else {
                    product = partner.allProducts[productId];
                }

                if (!product) return;

                // Set modal title
                productModalTitle.textContent = product.name;

                // Build product detail
                let html = `
                    <div class="product-detail">
                        <div class="product-gallery">
                            <div class="product-main-image">
                                <img src="${product.images[0]}" alt="${product.name}">
                            </div>
                            <div class="product-thumbnails">
                `;

                // Add thumbnails
                product.images.forEach((img, index) => {
                    html += `
                        <div class="product-thumbnail ${index === 0 ? 'active' : ''}" data-img="${img}">
                            <img src="${img}" alt="${product.name}">
                        </div>
                    `;
                });

                html += `
                            </div>
                        </div>
                        <div class="product-details">
                            <h4>${product.name}</h4>
                            <div class="product-meta">
                                <span><strong>Partner:</strong> ${partner.name}</span>
                `;

                if (solutionId) {
                    html += ` | <span><strong>Solution:</strong> ${partner.solutions[solutionId].name}</span>`;
                }

                html += `
                            </div>
                            <div class="product-description">
                                <p>${product.description}</p>
                            </div>
                            <div class="product-features">
                                <h5>Key Features:</h5>
                                <ul>
                `;

                // Add features
                product.features.forEach(feature => {
                    html += `<li>${feature}</li>`;
                });

                html += `
                                </ul>
                            </div>
                            <div class="product-actions">
                                <button class="action-btn primary-btn">Request Quote</button>
                                <button class="action-btn secondary-btn">Download Spec Sheet</button>
                            </div>
                        </div>
                    </div>
                `;

                productModalContent.innerHTML = html;

                // Close current modal and open product modal
                if (solutionId) {
                    solutionProductsModal.style.display = 'none';
                } else {
                    productsModal.style.display = 'none';
                }
                productModal.style.display = 'block';

                // Add click event to thumbnails
                const thumbnails = document.querySelectorAll('.product-thumbnail');
                const mainImage = document.querySelector('.product-main-image img');

                thumbnails.forEach(thumb => {
                    thumb.addEventListener('click', function() {
                        // Update main image
                        const imgSrc = this.getAttribute('data-img');
                        mainImage.src = imgSrc;

                        // Update active thumbnail
                        thumbnails.forEach(t => t.classList.remove('active'));
                        this.classList.add('active');
                    });
                });
            }
        });