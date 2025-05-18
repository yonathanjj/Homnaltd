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
                        ],
                        specSheet: "pdf/sika-proof-membrane-spec-sheet.pdf" // Added PDF spec sheet
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
                        ],
                        specSheet: "pdf/sika-igolflex-spec-sheet.pdf" // Added PDF spec sheet
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
                        ],
                        specSheet: "pdf/sika-trocal-spec-sheet.pdf" // Added PDF spec sheet
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
                        ],
                        specSheet: "pdf/sika-visco-crete-spec-sheet.pdf" // Added PDF spec sheet
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
                        ],
                        specSheet: "pdf/sika-fiber-spec-sheet.pdf" // Added PDF spec sheet
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
                        ],
                        specSheet: "pdf/sika-antisol-spec-sheet.pdf" // Added PDF spec sheet
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
                        ],
                        specSheet: "pdf/sika-floor-spec-sheet.pdf" // Added PDF spec sheet
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
                        ],
                        specSheet: "pdf/sika-gard-spec-sheet.pdf" // Added PDF spec sheet
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
                        ],
                        specSheet: "pdf/sika-level-125-spec-sheet.pdf" // Added PDF spec sheet
                    }
                }
            },
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
                        ],
                        specSheet: "pdf/sika-flex-spec-sheet.pdf" // Added PDF spec sheet
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
                        ],
                        specSheet: "pdf/sika-bond-spec-sheet.pdf" // Added PDF spec sheet
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
                        ],
                        specSheet: "pdf/sika-monotop-spec-sheet.pdf" // Added PDF spec sheet
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
                        ],
                        specSheet: "pdf/sika-ferroguard-spec-sheet.pdf" // Added PDF spec sheet
                    }
                }
            }
        },
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
                ],
                specSheet: "pdf/sika-proof-membrane-spec-sheet.pdf" // Added PDF spec sheet
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
                ],
                specSheet: "pdf/sika-igolflex-spec-sheet.pdf" // Added PDF spec sheet
            }
        }
    },
    kingspan: {
        name: "Kingspan",
        description: "Global leader in high-performance insulation and building envelope solutions.",
        logo: "assets/image/king.png",
        solutions: {
            DaylightingSolutions: {
                name: "DaylightingSolutions",
                description: "Access to natural light is vital to our health, sense of wellbeing and productivity. Kingspan daylighting solutions work to illuminate indoor spaces, creating brighter and more efficient buildings and interior spaces.",
                products: {
                    "Arcade Plus Rooflight": {
                        name: "Arcade Plus Rooflight",
                        images: [
                            "assets/kingspan/DaylightingSolutions/day1.png"
                        ],
                        description: "The Arcade Plus Rooflight has been designed with thermally broken sections to offer enhanced thermal performance for projects with higher energy efficiency requirements. Available in any length with spans between 1 - 6 m, the modular rooflight system is made to measure and can run for infinite lengths. It is particularly suitable for more demanding installations with respect to heat insulation, sealing, and protection against condensation.",
                        features: [
                            "Thermally separated profile",
                            "Thermally broken flap systems",
                            "Modular design allows design flexibility",
                            "Available in any length, in spans from 1 – 6 metres "
                        ],
                        specSheet: "assets/kingspan/Decks&Liners/day1.pdf" // Added PDF spec sheet
                    },
                    "Arcade Rooflight": {
                        name: "Arcade Rooflight",
                        images: [
                            "assets/kingspan/DaylightingSolutions/day2.png"
                        ],
                        description: "The modular design of the Arcade Rooflight makes it an ideal solution for industrial roofs and long spans to provide daylighting and smoke and heat ventilation. It is designed with thermally broken sections with a variety of glazing options available",
                        features: [
                            "Modular solution allows design flexibility and infinite runs",
                            "Available in any length, in spans from 1 – 6 metres ",
                            "Different glazing options to meet project requirements "
                        ],
                        specSheet: "pdf/kingspan-kooltherm-k8-spec-sheet.pdf" // Added PDF spec sheet
                    },
                    "Classic Skylight Dome": {
                        name: "Classic Skylight Dome",
                        images: [
                            "assets/kingspan/DaylightingSolutions/day3.png"
                        ],
                        description: "The Classic Skylight Dome is a flexible option for enhancing daylight in a building, with a wide range of sizes & accessories available. The domes can be installed with an opening base, allowing them to be used for ventilation and/or smoke exhaust",
                        features: [
                            "High quality, double-skin or triple-skin glazing dome",
                            "Sturdy PVC upstand",
                            "Wide range of sizes to suit all project requirement"
                        ],
                        specSheet: "pdf/kingspan-kooltherm-k5-spec-sheet.pdf" // Added PDF spec sheet
                    },
                    "Ecolux Fixed Skylight": {
                        name: "Ecolux Fixed Skylight",
                        images: [
                            "assets/kingspan/DaylightingSolutions/day4.png"
                        ],
                        description: "The Ecolux Fixe skylight is a one-off device designed to equip waterproofing support type roofs. This skylight is composed of a galvanised sheet steel upstand and a honeycomb polycarbonate cover.",
                        features: [
                            "Wide range of dimensions to suit all project requirements",
                            "Variety of material options available including polycarbonate, polyester, aluminium and/or PMMA dome",
                            "Solar protection: Ecosun Brise Soleil integrates perfectly with the Ecolux Fixe skylight"
                        ],
                        specSheet: "pdf/kingspan-kooltherm-k3-spec-sheet.pdf" // Added PDF spec sheet
                    },
                    "Ecovision": {
                        name: "Ecovision",
                        images: [
                            "assets/kingspan/DaylightingSolutions/day5.png"
                        ],
                        description: "The Ecovision ventilation window is designed to provide daily ventilation at no extra cost and also acts as a smoke and heat exhaust vent (SHEV)",
                        features: [
                            "Flexible, adaptable ventilation option which can be used across a wide range of building façade types",
                            "Available with Single, double or triple glazing, sandwich panel or multiwall polycarbonate (MWPC)",
                            "Available with electric or pneumatic control"
                        ],
                        specSheet: "pdf/kingspan-kooltherm-k3-spec-sheet.pdf" // Added PDF spec sheet
                    },
                    "LiteVault": {
                        name: "LiteVault",
                        images: [
                            "assets/kingspan/DaylightingSolutions/day6.png"
                        ],
                        description: "Installing the LiteVault skylight brings an ideal insulating and weatherproofing performance, therefore reducing the demand for artificial lighting and promoting reduced usage of heating and cooling systems.",
                        features: [
                            "Unlimited length",
                            "Easy installation",
                            "No fixings through polycarbonate sheets"
                        ],
                        specSheet: "pdf/kingspan-kooltherm-k7-spec-sheet.pdf" // Added PDF spec sheet
                    }
                }
            },
            sandwichPanels: {
                name: "Sandwich Panels",
                description: "The complete high-performance, low-energy building envelope. Kingspan insulated panels are single-component, factory pre-engineered systems. Our technology has led the industry in thermal-efficiency, fire safety and lifetime durability.",
                products: {
                    "QuadCore KS100BMSF Evolution Wall Panel": {
                        name: "QuadCore KS100BMSF Evolution Wall Panel",
                        images: [
                            "assets/kingspan/SandwichPanels/sa1.png"
                        ],
                        description: "QuadCore KS100BMSF Evolution Wall Panel is a simple and effective single component solution that delivers aesthetically pleasing finishes with exceptionally fast install time.",
                        features: [
                            "High-performance QuadCore insulation core",
                            "Cover width: 1000 mm",
                            "Core thickness: 80 mm and 100 mm"
                        ],
                        specSheet: "assets/kingspan/SandwichPanels/sa1.pdf" // Added PDF spec sheet
                    },
                    "QuadCore KS100ERO T-Dek Flat Roof Panel": {
                        name: "QuadCore KS100ERO T-Dek Flat Roof Panel",
                        images: [
                            "assets/kingspan/SandwichPanels/sa2.png"
                        ],
                        description: "An energy efficient high performance insulated single-ply membrane roof deck system suitable for flat and pitched roofs above 0.5° (1%) after deflection, and curved roofs with a convex curve of 45 m radius / concave curve 50 m radius.",
                        features: [
                            "High performance QuadCore insulation core",
                            "Cover width: 1000 mm",
                            "Profile: Flat single - ply PVC/TPO membrane"
                        ],
                        specSheet: "assets/kingspan/SandwichPanels/sa2.pdf" // Added PDF spec sheet
                    },
                    "QuadCore KS100ERO T-Dek Longspan Flat Roof Panel": {
                        name: "QuadCore KS100ERO T-Dek Longspan Flat Roof Panel",
                        images: [
                            "assets/kingspan/SandwichPanels/sa3.png"
                        ],
                        description: "QuadCore KS100ERO T-DEK Longspan Flat Roof Panel is an insulated flat roof system combining a structural deck QuadCore insulation and a metal top sheet into one product.",
                        features: [
                            "High Performance QuadCore insulation core",
                            "Cover width: 825 mm",
                            "Fixing Method: through-fixed"
                        ],
                        specSheet: "assets/kingspan/SandwichPanels/sa3.pdf" // Added PDF spec sheet
                    },
                    "QuadCore KS100PRW Roof Panel": {
                        name: "QuadCore KS100PRW Roof Panel",
                        images: [
                            "assets/kingspan/SandwichPanels/sa4.png"
                        ],
                        description: "QuadCore KS100PRW Roof Panel is a through-fixed trapezoidal roof panel suitable for pitched roof application of 4˚ or more after deflection.",
                        features: [
                            "High Performance QuadCore insulation core",
                            "Cover width: 1000 mm",
                            "Profile: 42 mm deep trapezoidal"
                        ],
                        specSheet: "assets/kingspan/SandwichPanels/sa4.pdf" // Added PDF spec sheet
                    },
                    "QuadCore KS100PRW Wall Panel": {
                        name: "QuadCore KS100PRW Wall Panel",
                        images: [
                            "assets/kingspan/SandwichPanels/sa5.png"
                        ],
                        description: "QuadCore KS100PRW Wall Panel.",
                        features: [
                            "High performance QuadCore insulation core",
                            "Cover width: 1000 mm",
                            "Profile: 42 mm deep trapezoidal"
                        ],
                        specSheet: "assets/kingspan/SandwichPanels/sa5.pdf" // Added PDF spec sheet
                    },
                    "QuadCore KS103MSF AWP Wall Panel": {
                        name: "QuadCore KS103MSF AWP Wall Panel",
                        images: [
                            "assets/kingspan/SandwichPanels/sa6.png"
                        ],
                        description: "Structural wall panel for industrial and commercial buildings.",
                        features: [
                            "High performance QuadCore insulation core",
                            "Cover width: 1030 mm",
                            "Profile: Megalambri"
                        ],
                        specSheet: "assets/kingspan/SandwichPanels/sa6.pdf" // Added PDF spec sheet
                    },
                    "QuadCore KS103SSF AWP Wall Panel": {
                        name: "QuadCore KS103SSF AWP Wall Panel",
                        images: [
                            "assets/kingspan/SandwichPanels/sa7.png"
                        ],
                        description: "Our QuadCore KS103SSF panel range is available in 3 profiles. They can be installed both vertically and horizontally and available in a wide range of colors for maximum visual impact.",
                        features: [
                            "High performance QuadCore insulation core",
                            "Cover width: 1030 mm",
                            "Profiles: Microlambri, Superlambri and Smoothlambri"
                        ],
                        specSheet: "assets/kingspan/SandwichPanels/sa7.pdf" // Added PDF spec sheet
                    },
                    "QuadCore KS110CTF Coldstore Panel": {
                        name: "QuadCore KS110CTF Coldstore Panel",
                        images: [
                            "assets/kingspan/SandwichPanels/sa8.png"
                        ],
                        description: "QuadCore KS110CTF Coldstore Panels are designed for use within temperature controlled and hygiene safe environments, such as food processing, freezers, pharmaceutical, cold/chill store and clean rooms.",
                        features: [
                            "High performance QuadCore insulation core",
                            "Cover width: 1100 mm",
                            "Profiles: Box (Izocold), CS Flat (Pharmacold), Micro-Rib (MicroCold), Mega-Box (MegaCold) and Smart Panel"
                        ],
                        specSheet: "assets/kingspan/SandwichPanels/sa8.pdf" // Added PDF spec sheet
                    },
                    "QuadCore KS110NCTF Coldstore Panel": {
                        name: "QuadCore KS110NCTF Coldstore Panel",
                        images: [
                            "assets/kingspan/SandwichPanels/sa9.png"
                        ],
                        description: "Kingspan KS110NCTF cold store panels are designed for use within temperature controlled and hygiene safe environments, such as food processing, freezers, pharmaceutical, cold/chill store and clean rooms",
                        features: [
                            "High-performance QuadCore Insulation Core",
                            "Cover width: 1100 mm",
                            "Profile: Box (Izocold), CS Flat (Pharmacold) and Micro-Rib (MicroCold)"
                        ],
                        specSheet: "assets/kingspan/SandwichPanels/sa9.pdf" // Added PDF spec sheet
                    },
                    "QuadCore KSD1000/1100CS Coldstore Panel": {
                        name: "QuadCore KSD1000/1100CS Coldstore Panel",
                        images: [
                            "assets/kingspan/SandwichPanels/sa10.png"
                        ],
                        description: "QuadCore KSD1000/1100CS Coldstore Panel is designed for use within temperature controlled and hygiene safe environments, such as food processing, freezers, pharmaceutical, cold/chill store and cleanrooms.",
                        features: [
                            "High performance QuadCore insulation core",
                            "Suitable for internal walls and ceiling applications, including Box-in-a-Box",
                            "The choice for safe keeping of pharmaceuticals, chemicals, vaccines, food storage & processing, distribution"
                        ],
                        specSheet: "assets/kingspan/SandwichPanels/sa10.pdf" // Added PDF spec sheet
                    },
                    "QuadCore KSD1000RW Roof Panel": {
                        name: "QuadCore KSD1000RW Roof Panel",
                        images: [
                            "assets/kingspan/SandwichPanels/sa11.png"
                        ],
                        description: "QuadCore KSD1000RW Roof Panel is a through-fix and trapezoidal profiled panel with a high performance QuadCore insulation core. The panel is available in a width of 1000 mm.",
                        features: [
                            "High Performance QuadCore Insulation Core",
                            "Pitch (°): suitable for pitched roof applications of 4˚ or more after steel deflection",
                            "Cover width: 1000 mm"
                        ],
                        specSheet: "assets/kingspan/SandwichPanels/sa11.pdf" // Added PDF spec sheet
                    },
                    "QuadCore KSD1000RW Wall Panel": {
                        name: "QuadCore KSD1000RW Wall Panel",
                        images: [
                            "assets/kingspan/SandwichPanels/sa12.png"
                        ],
                        description: "QuadCore KSD1000RW Wall Panel is a through-fix and trapezoidal profiled panel with a high performance QuadCore insulation core. The panel is available in 1000 mm width.",
                        features: [
                            "High Performance QuadCore Insulation Core",
                            "Cover width: 1000 mm",
                            "Profile: trapezoidal 35 mm height"
                        ],
                        specSheet: "assets/kingspan/SandwichPanels/sa12.pdf" // Added PDF spec sheet
                    },
                    "QuadCore KSD600/900/1000 AWP Wall Panel": {
                        name: "QuadCore KSD600/900/1000 AWP Wall Panel",
                        images: [
                            "assets/kingspan/SandwichPanels/sa13.png"
                        ],
                        description: "QuadCore KSD600/900/1000 AWP Wall Panel is a secret-fix wall panel available in 4 distinct profiles and a variety of panel widths offering freedom of design and high performance.",
                        features: [
                            "High Performance Quadcore Insulation Core",
                            "Quick installationCover width: 600/900/1000 mm",
                            "Profiles: Flat, Flat-Stucco, Micro-Rib and Mini-Micro"
                        ],
                        specSheet: "assets/kingspan/SandwichPanels/sa13.pdf" // Added PDF spec sheet
                    },
                    "Quadcore KS103LMSF Clad Rack Warehouses Panels": {
                        name: "Quadcore KS103LMSF Clad Rack Warehouses Panels",
                        images: [
                            "assets/kingspan/SandwichPanels/sa14.png"
                        ],
                        description: "QuadCore KS103LMSF Clad Rack Warehouses Panel is a secret-fix system available with a 200 mm insulation depth, offering economical but aesthetic solutions to designers, contractors and clients alike.",
                        features: [
                            "High-performance QuadCore Insulation Core",
                            "Cover width: 1030 mm",
                            "Core thickness: 200 mm"
                        ],
                        specSheet: "assets/kingspan/SandwichPanels/sa14.pdf" // Added PDF spec sheet
                    },
                    "Quadcore KS103LSSF Clad Rack Warehouses Panels": {
                        name: "Quadcore KS103LSSF Clad Rack Warehouses Panels",
                        images: [
                            "assets/kingspan/SandwichPanels/sa15.png"
                        ],
                        description: "QuadCore KS103LSSF Clad Rack Warehouses Panel is a secret-fix system available with a 200 mm insulation depth, offering economical but aesthetic solutions to designers, contractors and clients alike.",
                        features: [
                            "High-performance QuadCore insulation core",
                            "Cover width: 1030 mm",
                            "Core thickness: 200 mm"
                        ],
                        specSheet: "assets/kingspan/SandwichPanels/sa15.pdf" // Added PDF spec sheet
                    },
                    "Quadcore KS110CTF Camlock Coldstore Panels": {
                        name: "Quadcore KS110CTF Camlock Coldstore Panels",
                        images: [
                            "assets/kingspan/SandwichPanels/sa16.png"
                        ],
                        description: "QuadCore KS110CTF Camlock Coldstore Panel is designed for use within temperature-controlled and hygienesafe environments such as food processing, freezers, pharmaceuticals, cold/chill stores and cleanrooms.",
                        features: [
                            "High-performance QuadCore insulation core",
                            "Profile: Box (Izocold)",
                            "Cover width: 1100 mm"
                        ],
                        specSheet: "assets/kingspan/SandwichPanels/sa16.pdf" // Added PDF spec sheet
                    },
                    "Quadcore KS110IZF Insulation Boards": {
                        name: "Quadcore KS110IZF Insulation Boards",
                        images: [
                            "assets/kingspan/SandwichPanels/sa17.png"
                        ],
                        description: "QuadCore KS110IZF Insulation Board is a high compressive strength insulation board.",
                        features: [
                            "High-performance QuadCore Insulation core",
                            "Cover width: 1100mm",
                            "Core thickness: 50, 60 and 100 mm"
                        ],
                        specSheet: "assets/kingspan/SandwichPanels/sa17.pdf" // Added PDF spec sheet
                    },
                    "Fabricated Flashing": {
                        name: "Fabricated Flashing",
                        images: [
                            "assets/kingspan/SandwichPanels/sa18.png"
                        ],
                        description: "With a wide selection of materials, gauges and finishes available, the possibilities for fabricated flashings are endless. Material options include pre-coated steel, galvanized steel and aluminum. Suitable for roof and wall applications.",
                        features: [
                            "Profiles: drip/eave, verge and ridge",
                            "Fixing detail: welded or laminated",
                            "Metal type: steel or aluminium"
                        ],
                        specSheet: "assets/kingspan/SandwichPanels/sa18.pdf" // Added PDF spec sheet
                    },
                    "Highline Gutter": {
                        name: "Highline Gutter",
                        images: [
                            "assets/kingspan/SandwichPanels/sa19.png"
                        ],
                        description: "Our pre-coated highline gutter systems are available in a range of finishes, and offer a lightweight solution that is quick and efficient to install",
                        features: [
                            "Metal type: steel or aluminium",
                            "Available length: up to 3 m",
                            "Colours: variety of colours and mill finish"
                        ],
                        specSheet: "assets/kingspan/SandwichPanels/sa19.pdf" // Added PDF spec sheet
                    },
                    "KSD1000/1100CS Coldstore Panel": {
                        name: "KSD1000/1100CS Coldstore Panel",
                        images: [
                            "assets/kingspan/SandwichPanels/sa20.png"
                        ],
                        description: "KSD1000/1100CS Coldstore Panel is designed for use within temperature controlled and hygiene safe environments, such as food processing, freezers, pharmaceutical, cold/chill store and clean rooms.",
                        features: [
                            "Cover width: 1000/1100 mm",
                            "Profiles: Equi-Bead, Mini-Micro, CS Flat, Micro-Rib and Mini-Bead",
                            "Internal temperature range: from -70°C to ambient"
                        ],
                        specSheet: "assets/kingspan/SandwichPanels/sa20.pdf" // Added PDF spec sheet
                    },
                    "KSD1000RW Roof Panel": {
                        name: "KSD1000RW Roof Panel",
                        images: [
                            "assets/kingspan/SandwichPanels/sa21.png"
                        ],
                        description: "KSD1000RW Roof Panel is a through-fix and trapezoidal profiled panel available in a width of 1000 mm.",
                        features: [
                            "Kingspan PIR Core Insulation",
                            "Cover width: 1000 mm",
                            "Pitch (°): suitable for pitched roof applications of 4˚ or more after steel deflection"
                        ],
                        specSheet: "assets/kingspan/SandwichPanels/sa21.pdf" // Added PDF spec sheet
                    },
                    "Preformed Corner Panel": {
                        name: "Preformed Corner Panel",
                        images: [
                            "assets/kingspan/SandwichPanels/sa22.png"
                        ],
                        description: "Our range of insulated pre-formed corners combine insulation continuity with aesthetic design to offer an alternative solution to traditional corner flashings",
                        features: [
                            "Panel Corner: folded and curved corners",
                            "Metal type: steel or aluminium",
                            "Application: suitable for horizontal, vertical, internal and external applications"
                        ],
                        specSheet: "assets/kingspan/SandwichPanels/sa22.pdf" // Added PDF spec sheet
                    }
                }
            },
            facadeSystems: {
                name: "Facade Systems",
                description: "We offer a comprehensive portfolio of single-skin cladding products suitable for a multitude architectural styles.",
                products: {
                    "HC35/800MR Profile": {
                        name: "HC35/800MR Profile",
                        images: [
                            "assets/kingspan/FaçadeSystems/fa1.png"
                        ],
                        description: "HC35/800MR provides a neat and aesthetically pleasing look in horizontal cladding applications and offers flexible performance with a wide range of acoustic and thermal options.",
                        features: [
                            "Cover width: 800 mm",
                            "Material: Aluminium",
                            "Available Thickness: 0.9/1.0/1.2 mm"
                        ],
                        specSheet: "assets/kingspan/FaçadeSystems/s22.pdf" // Added PDF spec sheet
                    },
                    "PL300 Wall and Soffit Cladding": {
                        name: "PL300 Wall and Soffit Cladding",
                        images: [
                            "assets/kingspan/FaçadeSystems/fa2.png"
                        ],
                        description: "Secret-fix single skin wall and soffit cladding with flat surface finish. PL 300 can be applied vertically or horizontally and is designed to be fixed directly to a bespoke carrier system where the sheets will snap into place.",
                        features: [
                            "Material: 0.9 mm Aluminium",
                            "Available Lengths: 1.5 - 11.8 m",
                            "Cover width: 300 mm"
                        ],
                        specSheet: "pdf/kingspan-urban-spec-sheet.pdf" // Added PDF spec sheet
                    },
                    "Sinusoidal S Profile": {
                        name: "Sinusoidal S Profile",
                        images: [
                            "assets/kingspan/FaçadeSystems/fa3.png"
                        ],
                        description: "Featuring a very shallow profile, Sinusoidal S-Profile is is intended for use on relatively steep roof pitches with closely spaced purlins. Being a symmetrical profile, it is suitable for forming into smooth curves.",
                        features: [
                            "Available in Steel or Aluminium Options",
                            "Thickness: 0.7/0.9/1.0 mm",
                            "Can be smooth curved"
                        ],
                        specSheet: "pdf/kingspan-urban-spec-sheet.pdf" // Added PDF spec sheet
                    },
                    "TKS1000-4 Profile": {
                        name: "TKS1000-4 Profile",
                        images: [
                            "assets/kingspan/FaçadeSystems/fa4.png"
                        ],
                        description: "Through-fix single skin metal profile for horizontal or vertical applications",
                        features: [
                            "Material: Steel",
                            "Cover Width: 1000 mm",
                            "Thickness: 0.5/0.6/0.7 mm"
                        ],
                        specSheet: "pdf/kingspan-urban-spec-sheet.pdf" // Added PDF spec sheet
                    },
                    "TKS1000-6 Profile": {
                        name: "TKS1000-6 Profile",
                        images: [
                            "assets/kingspan/FaçadeSystems/fa5.png"
                        ],
                        description: "Through-fix single skin metal profile for horizontal or vertical applications",
                        features: [
                            "Material: Steel",
                            "Cover Width: 1030 mm",
                            "Thickness: 0.5/0.6/0.7 mm"
                        ],
                        specSheet: "pdf/kingspan-tektura-spec-sheet.pdf" // Added PDF spec sheet
                    }
                }
            },
            ductwork: {
                name: "Ductwork",
                description: "Insulated ductwork solutions for HVAC systems",
                products: {
                    "KDuct Pre-Clad PIR": {
                        name: "KDuct Pre-Clad PIR",
                        images: [
                            "assets/kingspan/Ductwork/du1.jpeg"
                        ],
                        description: "Kingspan KDuct Pre-Clad PIR panels comprise of a fibre-free rigid thermoset foil faced polyisocyanurate (PIR) insulation with a outer composite aluminium laminated facing.",
                        features: [
                            "Ultra-strength and rigidness",
                            "Traditional exterior ductwork",
                            "Easy to clean."
                        ],
                        specSheet: "assets/kingspan/Ductwork/du1.pdf" // Added PDF spec sheet
                    },
                    "KDuct Pre-Clad Phenolic": {
                        name: "KDuct Pre-Clad Phenolic",
                        images: [
                            "assets/kingspan/Ductwork/du2.png"
                        ],
                        description: "Kingspan KDuct Pre-Clad Phenolic Duct System has a rigid thermoset insulation core. It has a fibre-free and closed cell insulation core.",
                        features: [
                            "Easy to clean.",
                            "Fast–track single–fix installation.",
                            "Fibre–free insulation core.."
                        ],
                        specSheet: "assets/kingspan/Ductwork/du2.pdf" // Added PDF spec sheet
                    },
                    "PalDuct PIR": {
                        name: "PalDuct PIR",
                        images: [
                            "assets/kingspan/Ductwork/du3.png"
                        ],
                        description: "Kingspan PalDuct PIR Panels comprise a rigid thermoset polyisocyanurate (PIR) insulation core.",
                        features: [
                            "Fibre–free insulation core",
                            "Low weight fabricated ductwork, quick installation",
                            "Space saving: flush-fitting installation possible."
                        ],
                        specSheet: "assets/kingspan/Ductwork/du3.pdf" // Added PDF spec sheet
                    },
                    "PalDuct Phenolic": {
                        name: "PalDuct Phenolic",
                        images: [
                            "assets/kingspan/Ductwork/du4.png"
                        ],
                        description: "Kingspan PalDuct Phenolic Panels have a rigid thermoset phenolic insulation core.",
                        features: [
                            "UL Listed as a Class 1 Air Duct, to Standard for Safety UL 181 (Factory Made Air Ducts & Air Connectors)",
                            "Fibre–free insulation core",
                            "Low weight fabricated ductwork, quick installation"
                        ],
                        specSheet: "assets/kingspan/Ductwork/du4.pdf" // Added PDF spec sheet
                    }
                }
            },
            standingSeam: {
                name: "Standing Seam System",
                description: "Our KingZip standing seam roof systems provide advanced structural, thermal, acoustic and fire performance combined with exceptional long-term weatherproofing and durability.",
                products: {
                    "KingZip SF": {
                        name: "KingZip SF",
                        images: [
                            "assets/kingspan/StandingSeamSystems/st1.png"
                        ],
                        description: "KingZip SF is an external metal sheet used as a part of Kingspan's Standing Seam Systems for insulated roof, wall & ceiling applications. It offers an integrated architectural building envelope solution especially for complex and 3D geometry designs.",
                        features: [
                            "System Build-Up:  two types of standing seams systems are available",
                            "KingZip SF Linea Standing Seam: for 2D designs (Standard Geometry)",
                            "KingZip SF Infiniti Standing Seam: for 3D designs (Complex Geometry)"
                        ],
                        specSheet: "assets/kingspan/StandingSeamSystems/st1.pdf" // Added PDF spec sheet
                    }
                }
            },
            roofDecks: {
                name: "Roof Decks & Liners",
                description: "A wide range of liners and decks for standing seam roof applications.",
                products: {
                    "35 333 Liner": {
                        name: "35 333 Liner",
                        images: [
                            "assets/kingspan/Decks&Liners/de1.png"
                        ],
                        description: "35/333 Liner is a versatile product used in roof and wall construction. Its primary application is in double skin systems, where it is commonly combined with other trapezoidal liner sheets or the KingZip SF secret-fixed profile system.",
                        features: [
                            "Metal type: Steel or Aluminium",
                            "Available lengths: from 0.50 m to 11.80 m (non-standard lengths are available & subject to transportation restrictions)",
                            "Profile depth: 35 mm"
                        ],
                        specSheet: "pdf/kingspan-dek-spec-sheet.pdf" // Added PDF spec sheet
                    },
                    "WA200 Liner": {
                        name: "WA200 Liner",
                        images: [
                            "assets/kingspan/Decks&Liners/de2.png"
                        ],
                        description: "WA200 Liner is a profiled liner used as part of any build-up system and single skin sheet solutions requiring purlins or side grits due to a lesser spanning capability.",
                        features: [
                            "Metal type: Steel or Aluminium",
                            "Available Lengths: from 0.50 m to 11.80 m (non-standard lengths are available & subject to transportation restrictions)",
                            "Profile depth: 38.10 mm"
                        ],
                        specSheet: "assets/kingspan/Decks&Liners/de2.pdf" // Added PDF spec sheet
                    },
                    "45/250 Liner": {
                        name: "45/250 Liner",
                        images: [
                            "assets/kingspan/Decks&Liners/de3.png"
                        ],
                        description: "45/250 Liner is a profiled liner used as part of any build-up system and single skin sheet solutions requiring purlins or side grits due to a lesser spanning capability.",
                        features: [
                            "Metal type: Steel or Aluminium",
                            "Available lengths: from 0.50 m to 11.80 m (non-standard lengths are available & subject to transportation restrictions)",
                            "Profile depth: 45 mm"
                        ],
                        specSheet: "assets/kingspan/Decks&Liners/de3.pdf" // Added PDF spec sheet
                    },
                    "WA900 Liner": {
                        name: "WA900 Liner",
                        images: [
                            "assets/kingspan/Decks&Liners/de4.png"
                        ],
                        description: "WA900 Liner is a profiled liner used as part of any build-up system and single skin sheet solutions requiring purlins or side grits due to a lesser spanning capability.",
                        features: [
                            "Metal type: Steel or Aluminium",
                            "Available lengths: from 0.50 m to 11.80 m (non-standard lengths are available & subject to transportation restrictions)",
                            "Profile depth: 38.10 mm"
                        ],
                        specSheet: "assets/kingspan/Decks&Liners/de4.pdf" // Added PDF spec sheet
                    },
                    "WB6 Liner": {
                        name: "WB6 Liner",
                        images: [
                            "assets/kingspan/Decks&Liners/de5.png"
                        ],
                        description: "WB6 Liner is a profiled liner used as part of any build-up system and single skin sheet solutions requiring purlins or side grits due to a lesser spanning capability.",
                        features: [
                            "Metal type: Steel or Aluminium",
                            "Available lengths: from 0.50 m to 11.80 m (non-standard lengths are available & subject to transportation restrictions)",
                            "Profile Depth: 45 mm"
                        ],
                        specSheet: "assets/kingspan/Decks&Liners/de5.pdf" // Added PDF spec sheet
                    },
                    "WA6 Liner": {
                        name: "WA6 Liner",
                        images: [
                            "assets/kingspan/Decks&Liners/de6.png"
                        ],
                        description: "WA6 Liner is a profiled liner used as part of any build-up system and single skin sheet solutions requiring purlins or side grits due to a lesser spanning capability. In a traditional standing seam build-up purlin system.",
                        features: [
                            "Metal type: Steel or Aluminium",
                            "Available lengths: from 0.50 m to 11.80 m (non-standard lengths are available & subject to transportation restrictions)",
                            "Profile depth: 38.10 mm"
                        ],
                        specSheet: "assets/kingspan/Decks&Liners/de6.pdf" // Added PDF spec sheet
                    },
                    "RD100/825 Deck": {
                        name: "RD100/825 Deck",
                        images: [
                            "assets/kingspan/Decks&Liners/de7.png"
                        ],
                        description: "RD100/825 Deck is a profiled deck that is used as part of any build-up system that offers more spanning capabilities than traditional liner systems.",
                        features: [
                            "Metal type: Steel or Aluminium",
                            "Available lengths: from 0.50 m to 11.80 m (non-standard lengths are available & subject to transportation restrictions)",
                            "Profile Depth: 100 mm"
                        ],
                        specSheet: "assets/kingspan/Decks&Liners/de7.pdf" // Added PDF spec sheet
                    },
                    "RD200/750 Deck": {
                        name: "RD200/750 Deck",
                        images: [
                            "assets/kingspan/Decks&Liners/de8.png"
                        ],
                        description: "RD200/750 Deck is a profiled deck that is used as part of any build-up system that offers more spanning capabilities than traditional liner systems.",
                        features: [
                            "Metal Type: Steel or Aluminium",
                            "Available lengths: from 0.50 m to 11.80 m (non-standard lengths are available and subject to transportation restriction)",
                            "Profile depth: 205 mm"
                        ],
                        specSheet: "assets/kingspan/Decks&Liners/de8.pdf" // Added PDF spec sheet
                    },
                    "RD75/300 Deck": {
                        name: "RD75/300 Deck",
                        images: [
                            "assets/kingspan/Decks&Liners/de9.png"
                        ],
                        description: "RD75/300 Deck is a profiled deck that is used as part of any build-up system that offers more spanning capabilities than traditional liner systems.",
                        features: [
                            "Metal type: Steel or Aluminium",
                            "Available lengths: from 0.50 m to 11.80 m (non-standard lengths are available & subject to transportation restrictions)",
                            "Profile depth: 205 mm"
                        ],
                        specSheet: "assets/kingspan/Decks&Liners/de9.pdf" // Added PDF spec sheet
                    }
                }
            },
            safetySystems: {
                name: "Safety & Protection Systems",
                description: "Discover our proven and discreet, personal and collective man-safe systems for fall protection systems.",
                products: {
                    "KingZip Expanded Mesh Walkway": {
                        name: "KingZip Expanded Mesh Walkway",
                        images: [
                            "assets/kingspan/Safety&ProtectionSystems/saf1.png"
                        ],
                        description: "The KingZip expanded mesh walkway system is designed to complement KingZip standing seam system. The walkway mesh provides superb grip underfoot and offer a highly effective solution for walkway gantries, trailer ramps and stair treads",
                        features: [
                            "Walkways are fixed to the roof profile without penetration of the sheeting, maintaining the KingZip system integrity",
                            "Plank is made of 4mm thick mild steel expanded metal mesh with Z275 galvanization",
                            "Excellent anti-skid performance, slip resistance surface and high bearing capacity"
                        ],
                        specSheet: "assets/kingspan/Safety&ProtectionSystems/saf2.pdf" // Added PDF spec sheet
                    },
                    "KingZip Serrated Walkway": {
                        name: "KingZip Serrated Walkway",
                        images: [
                            "assets/kingspan/Safety&ProtectionSystems/saf2.png"
                        ],
                        description: "The Kingspan serrated walkway system is designed to complement KingZip standing seam system. The walkways are fixed to the roof profile without penetration of the sheeting, maintaining the KingZip system integrity",
                        features: [
                            "Walkways are fixed to the roof profile without penetration of the sheeting, maintaining the KingZip system integrity",
                            "Slip resistant surface",
                            "Aluminum grating extruded from 6063-T6 alloy flat bar with serrated surface and round cross bars with separator tubes"
                        ],
                        specSheet: "assets/kingspan/Safety&ProtectionSystems/saf2.pdf" // Added PDF spec sheet
                    }
                }
            },
            doorSystems: {
                name: "Door & Loading Systems",
                description: "A wide range of door and loading technology solutions for industrial warehouses and coldstores.",
                products: {
                    "Cleanroom Door": {
                        name: "Cleanroom Door",
                        images: [
                            "assets/kingspan/Doors&LoadingSystems/do1.png"
                        ],
                        description: "Airtight, foodsafe doors that combine contemporary design and aesthetics with high acoustic and thermal performance.",
                        features: [
                            "Single section (mono block) door",
                            "Easy and silent opening and closing mechanism",
                            "Door Dimensions Single Leaf: Min: 700 x 1700 mm, Max: 1500 x 2400 mm"
                        ],
                        specSheet: "pdf/kingspan-speedor-spec-sheet.pdf" // Added PDF spec sheet
                    },
                    "Controlled Atmosphere Door": {
                        name: "Controlled Atmosphere Door",
                        images: [
                            "assets/kingspan/Doors&LoadingSystems/do2.png"
                        ],
                        description: "Sliding doors with guaranteed hermetic sealing, specially designed for temperature and humidity controlled environments with absolute gas tightness requirements",
                        features: [
                            "Foodsafe in accordance with HACCP standards",
                            "Heavy duty angle shaped frame, reinforced with marine plywood and PVC",
                            "Exceptional sliding mechanism design with soft closing and easy disengagement"
                        ],
                        specSheet: "pdf/kingspan-speedor-spec-sheet.pdf" // Added PDF spec sheet
                    },
                    "Fire Rated Cold Store Hinged Door": {
                        name: "Fire Rated Cold Store Hinged Door",
                        images: [
                            "assets/kingspan/Doors&LoadingSystems/do3.png"
                        ],
                        description: "Insulated and airtight elements which play a critical role in maintaining consistent temperatures in cold rooms",
                        features: [
                            "Foodsafe in accordance with HACCP standards",
                            "Door Dimensions Single Leaf: Min: 800 x 2000 mm, Max: 1300 x 2300 mm",
                            "Coatings/Finishes: Plastisol and INOX 304"
                        ],
                        specSheet: "pdf/kingspan-speedor-spec-sheet.pdf" // Added PDF spec sheet
                    },
                    "Fire Rated Cold Store Sliding Door": {
                        name: "Fire Rated Cold Store Sliding Door",
                        images: [
                            "assets/kingspan/Doors&LoadingSystems/do4.png"
                        ],
                        description: "Fire Rated sliding doors for passageways with opening widths > 1200 mm to save space",
                        features: [
                            "Fire Rating: E90, EI2 90, EI1 60 classification options as per EN13501-2",
                            "Foodsafe in accordance with HACCP standards",
                            "Door Dimensions: Min: 1200 x 2000 mm, Max: 3000 x 3000 mm"
                        ],
                        specSheet: "pdf/kingspan-speedor-spec-sheet.pdf" // Added PDF spec sheet
                    },
                    "Hinged Doorr": {
                        name: "Hinged Door",
                        images: [
                            "assets/kingspan/Doors&LoadingSystems/do5.png"
                        ],
                        description: "Hinged doors are insulated and airtight elements which play a critical role in maintaining consistent temperatures in cold rooms",
                        features: [
                            "Foodsafe in accordance with HACCP standards",
                            "Door Dimensions Single Leaf: Min: 700 x 1700 mm, Max: 1500 x 2500 mm",
                            "Door Dimensions Double Leaf: Min: 1400 x 2000 mm, Max: 2400 x 3000 mm"
                        ],
                        specSheet: "pdf/kingspan-speedor-spec-sheet.pdf" // Added PDF spec sheet
                    },
                    "Insulated Rapid Speed PVC Door": {
                        name: "Insulated Rapid Speed PVC Door",
                        images: [
                            "assets/kingspan/Doors&LoadingSystems/do6.png"
                        ],
                        description: "Ideal for interior passage ways of heavy traffic cold stores. Prevents heat loss by minimizing the time that the passage is open during the transit of goods coming in and out of the cold stores providing substantial savings in energy consumption.",
                        features: [
                            "Prevents the build-up of ice on components and walk-through areas with low maintenance requirement",
                            "Temperature Range: -30º / ambient",
                            "Door Dimensions: Min: 800 x 2000 mm, Max: 4000 x 4000 mm - custom sizes available upon request"
                        ],
                        specSheet: "pdf/kingspan-speedor-spec-sheet.pdf" // Added PDF spec sheet
                    },
                    "Sliding Door": {
                        name: "Sliding Door",
                        images: [
                            "assets/kingspan/Doors&LoadingSystems/do7.png"
                        ],
                        description: "Ideal for environments where temperature control is needed and when opening width of 1200 mm or more is required in order to save space. They open offset to the wall, occupying minimum corridor / room area when opened",
                        features: [
                            "Temperature Range: -40º / ambient",
                            "Door Dimensions: Min: 800 x 2000mm, Max: 3000 x 6000 mm",
                            "Door Thickness: 90/100/120/140 mm"
                        ],
                        specSheet: "pdf/kingspan-speedor-spec-sheet.pdf" // Added PDF spec sheet
                    },
                    "Vertical Sliding Door": {
                        name: "Vertical Sliding Door",
                        images: [
                            "assets/kingspan/Doors&LoadingSystems/do8.png"
                        ],
                        description: "Vertical sliding doors are equipped with EN13241-1 certified anti-fall safety systems and are generally used in controlled environment passageways where installation of regular sliding doors are not possible due to side space restrictions",
                        features: [
                            "EN13241-1 certified anti-fall safety system",
                            "Foodsafe in accordance with HACCP standards",
                            "Heavy duty angle shaped frame, reinforced with marine plywood and PVC"
                        ],
                        specSheet: "pdf/kingspan-thermadoor-spec-sheet.pdf" // Added PDF spec sheet
                    }
                }
            },
            daylighting: {
                name: "Daylighting Solutions",
                description: "Access to natural light is vital to our health, sense of wellbeing and productivity. Kingspan daylighting solutions work to illuminate indoor spaces, creating brighter and more efficient buildings and interior spaces.",
                products: {
                    "Arcade Plus Rooflight": {
                        name: "Arcade Plus Rooflight",
                        images: [
                            "assets/kingspan/DaylightingSolutions/day1.png"
                        ],
                        description: "The Arcade Plus Vaulted Rooflight is a high quality, made-to-measure rooflight, which has been designed to offer enhanced thermal performance for projects with higher energy efficiency requirements.",
                        features: [
                            "Thermally separated profile",
                            "Thermally broken flap systems",
                            "Modular design allows design flexibility"
                        ],
                        specSheet: "pdf/kingspan-sunscoop-spec-sheet.pdf" // Added PDF spec sheet
                    },
                    "Arcade Rooflight": {
                        name: "Arcade Rooflight",
                        images: [
                            "assets/kingspan/DaylightingSolutions/day2.png"
                        ],
                        description: "The modular design of the Arcade Rooflight makes it an ideal solution for industrial roofs and long spans to provide daylighting and smoke and heat ventilation. It is designed with thermally broken sections with a variety of glazing options available",
                        features: [
                            "Modular solution allows design flexibility and infinite runs",
                            "Available in any length, in spans from 1 – 6 metres ",
                            "Different glazing options to meet project requirements "
                        ],
                        specSheet: "pdf/kingspan-sunscoop-spec-sheet.pdf" // Added PDF spec sheet
                    },
                    "Classic Skylight Dome": {
                        name: "Classic Skylight Dome",
                        images: [
                            "assets/kingspan/DaylightingSolutions/day3.png"
                        ],
                        description: "The Classic Skylight Dome is a flexible option for enhancing daylight in a building, with a wide range of sizes & accessories available. The domes can be installed with an opening base, allowing them to be used for ventilation and/or smoke exhaust",
                        features: [
                            "High quality, double-skin or triple-skin glazing dome ",
                            "Sturdy PVC upstand ",
                            "Wide range of sizes to suit all project requirements"
                        ],
                        specSheet: "pdf/kingspan-sunscoop-spec-sheet.pdf" // Added PDF spec sheet
                    },
                    "Ecolux Fixed Skylight": {
                        name: "Ecolux Fixed Skylight",
                        images: [
                            "assets/kingspan/DaylightingSolutions/day4.png"
                        ],
                        description: "The Ecolux Fixe skylight is a one-off device designed to equip waterproofing support type roofs. This skylight is composed of a galvanised sheet steel upstand and a honeycomb polycarbonate cover.",
                        features: [
                            "Wide range of dimensions to suit all project requirements",
                            "Variety of material options available including polycarbonate, polyester, aluminium and/or PMMA dome",
                            "Solar protection: Ecosun Brise Soleil integrates perfectly with the Ecolux Fixe skylight"
                        ],
                        specSheet: "pdf/kingspan-sunscoop-spec-sheet.pdf" // Added PDF spec sheet
                    },
                    "Ecovision": {
                        name: "Ecovision",
                        images: [
                            "assets/kingspan/DaylightingSolutions/day5.png"
                        ],
                        description: "The Ecovision ventilation window is designed to provide daily ventilation at no extra cost and also acts as a smoke and heat exhaust vent (SHEV)",
                        features: [
                            "Flexible, adaptable ventilation option which can be used across a wide range of building façade types",
                            "Available with Single, double or triple glazing, sandwich panel or multiwall polycarbonate (MWPC)",
                            "Available with electric or pneumatic control"
                        ],
                        specSheet: "pdf/kingspan-sunscoop-spec-sheet.pdf" // Added PDF spec sheet
                    },
                    "LiteVault": {
                        name: "LiteVault",
                        images: [
                            "assets/kingspan/DaylightingSolutions/day6.png"
                        ],
                        description: "Installing the LiteVault skylight brings an ideal insulating and weatherproofing performance, therefore reducing the demand for artificial lighting and promoting reduced usage of heating and cooling systems.",
                        features: [
                            "Unlimited length",
                            "Easy installation",
                            "No fixings through polycarbonate sheets"
                        ],
                        specSheet: "pdf/kingspan-skyline-spec-sheet.pdf" // Added PDF spec sheet
                    }
                }
            },
            naturalVentilation: {
                name: "Natural Ventilation",
                description: "Natural ventilation solutions use natural air dynamics to circulate warm stale air out of a building and draw fresh inside, creating a healthier, more comfortable environment for occupants without relying on powered systems.",
                products: {
                    "Eura": {
                        name: "Eura",
                        images: [
                            "assets/kingspan/NaturalVentilation/na1.png"
                        ],
                        description: "Suitable for roof or facade application, the Eura louvred vent has been designed to remove large amounts of warm air or smoke from internal spaces, making it ideal for both natural ventilation and also as a smoke and heat exhaust vent (SHEV).",
                        features: [
                            "Extracts large volumes of smoke & warm air with a geometrical surface of up to 9.37 sq. m",
                            "Tested and certified in accordance with EN 12101-2 for use as a natural smoke and heat exhaust vent (SHEV)",
                            "Can be installed at any angle from horizontal through to 90° vertical enabling roof and façade application"
                        ],
                        specSheet: "pdf/kingspan-windcatcher-spec-sheet.pdf" // Added PDF spec sheet
                    },
                    "Estra": {
                        name: "Estra",
                        images: [
                            "assets/kingspan/NaturalVentilation/na2.png"
                        ],
                        description: "The Estra is a glazed louvred vent which has a highly aesthetic appearance and can be used for daily ventilation or smoke and heat extraction.",
                        features: [
                            "Suitable for application to glazed facades",
                            "Thermally insulated profile sections and is designed with both insulated glass and single glazed glass",
                            "Choice of louvers available includes point-fixed, circumferentially framed and (semi-)structural glazing"
                        ],
                        specSheet: "assets/kingspan/NaturalVentilation/na2.pdf" // Added PDF spec sheet
                    },
                    "Eura R": {
                        name: "Eura R",
                        images: [
                            "assets/kingspan/NaturalVentilation/na3.png"
                        ],
                        description: "The Eura-R is a natural louvred vent that is designed to remove large amounts of warm air even in poor weather via rainproof side dampers or smoke from internal spaces, making it ideal for both natural ventilation and also for smoke and heat exhaust.",
                        features: [
                            "Designed for all-weather ventilation with rainproof side dampers",
                            "EN 12101-2 certified smoke and heat exhaust vent (SHEV)",
                            "Integrated water drainage"
                        ],
                        specSheet: "assets/kingspan/NaturalVentilation/na3.pdf" // Added PDF spec sheet
                    },
                    "Inova": {
                        name: "Inova",
                        images: [
                            "assets/kingspan/NaturalVentilation/na4.png"
                        ],
                        description: "The Inova is a stylish ventilation window with concealed controls, suitable for daily natural ventilation and is specially designed for use in facades.",
                        features: [
                            "Suitable for natural ventilation",
                            "Available in a rectangular shape in different sizes",
                            "Concealed operating system embedded in the frame"
                        ],
                        specSheet: "assets/kingspan/NaturalVentilation/na4.pdf" // Added PDF spec sheet
                    },
                    "Lumera": {
                        name: "Lumera",
                        images: [
                            "assets/kingspan/NaturalVentilation/na5.png"
                        ],
                        description: "The Lumera is an aesthetic casement window used for natural ventilation and also smoke exhaust. With its slim profile, hidden controls, and versatile shape options, the Lumera is ideal for projects aiming to achieve a high architectural impact.",
                        features: [
                            "Designed for structural glass roofs",
                            "Slim profiles and concealed controls embedded within frame ",
                            "Available in a variety of sizes and shapes (rectangular, triangular, trapezium etc.) "
                        ],
                        specSheet: "assets/kingspan/NaturalVentilation/na5.pdf" // Added PDF spec sheet
                    },
                    "Optima": {
                        name: "Optima",
                        images: [
                            "assets/kingspan/NaturalVentilation/na6.png"
                        ],
                        description: "The Optima is a thermally separated louvred vent used for smoke control and daily ventilation, as well as daylighting. It is the ideal solution for buildings looking to achieve high levels of thermal performance and sustainability.",
                        features: [
                            "Highly energy efficient design with optional glass louvres available",
                            "CE marked, certified according EN 12101-2 and tested according to EN 14351-1",
                            "Designed to achieve superior thermal performance (contact our technical team for more details on U-values)"
                        ],
                        specSheet: "assets/kingspan/NaturalVentilation/na6.pdf" // Added PDF spec sheet
                    },
                    "Ventria": {
                        name: "Ventria",
                        images: [
                            "assets/kingspan/NaturalVentilation/na7.png"
                        ],
                        description: "Ventria ventilation windows provide a versatile, attractive glazed solution suitable for glazed roofs and facades to provide natural ventilation and smoke and heat exhaust.",
                        features: [
                            "Designed for glass facades and roofs to provide natural ventilation and smoke and heat exhaust",
                            "Bespoke dimensions, panels and shapes can be requested",
                            "Geometric surface of up to 6.12 m2 depending on length:width ratio and choice of controls"
                        ],
                        specSheet: "assets/kingspan/NaturalVentilation/na7.pdf" // Added PDF spec sheet
                    }
                }
            },

        },
        allProducts: {
        // Daylighting Solutions Products
        "Arcade Plus Rooflight": {
            name: "Arcade Plus Rooflight",
            solution: "Daylighting Solutions",
            images: ["assets/kingspan/DaylightingSolutions/day1.png"],
            description: "The Arcade Plus Rooflight has been designed with thermally broken sections to offer enhanced thermal performance for projects with higher energy efficiency requirements. Available in any length with spans between 1 - 6 m, the modular rooflight system is made to measure and can run for infinite lengths. It is particularly suitable for more demanding installations with respect to heat insulation, sealing, and protection against condensation.",
            features: [
                "Thermally separated profile",
                "Thermally broken flap systems",
                "Modular design allows design flexibility",
                "Available in any length, in spans from 1 – 6 metres"
            ],
            specSheet: "assets/kingspan/Decks&Liners/day1.pdf"
        },
        "Arcade Rooflight": {
            name: "Arcade Rooflight",
            solution: "Daylighting Solutions",
            images: ["assets/kingspan/DaylightingSolutions/day2.png"],
            description: "The modular design of the Arcade Rooflight makes it an ideal solution for industrial roofs and long spans to provide daylighting and smoke and heat ventilation. It is designed with thermally broken sections with a variety of glazing options available",
            features: [
                "Modular solution allows design flexibility and infinite runs",
                "Available in any length, in spans from 1 – 6 metres",
                "Different glazing options to meet project requirements"
            ],
            specSheet: "pdf/kingspan-kooltherm-k8-spec-sheet.pdf"
        },
        "Classic Skylight Dome": {
            name: "Classic Skylight Dome",
            solution: "Daylighting Solutions",
            images: ["assets/kingspan/DaylightingSolutions/day3.png"],
            description: "The Classic Skylight Dome is a flexible option for enhancing daylight in a building, with a wide range of sizes & accessories available. The domes can be installed with an opening base, allowing them to be used for ventilation and/or smoke exhaust",
            features: [
                "High quality, double-skin or triple-skin glazing dome",
                "Sturdy PVC upstand",
                "Wide range of sizes to suit all project requirement"
            ],
            specSheet: "pdf/kingspan-kooltherm-k5-spec-sheet.pdf"
        },
        "Ecolux Fixed Skylight": {
            name: "Ecolux Fixed Skylight",
            solution: "Daylighting Solutions",
            images: ["assets/kingspan/DaylightingSolutions/day4.png"],
            description: "The Ecolux Fixe skylight is a one-off device designed to equip waterproofing support type roofs. This skylight is composed of a galvanised sheet steel upstand and a honeycomb polycarbonate cover.",
            features: [
                "Wide range of dimensions to suit all project requirements",
                "Variety of material options available including polycarbonate, polyester, aluminium and/or PMMA dome",
                "Solar protection: Ecosun Brise Soleil integrates perfectly with the Ecolux Fixe skylight"
            ],
            specSheet: "pdf/kingspan-kooltherm-k3-spec-sheet.pdf"
        },
        "Ecovision": {
            name: "Ecovision",
            solution: "Daylighting Solutions",
            images: ["assets/kingspan/DaylightingSolutions/day5.png"],
            description: "The Ecovision ventilation window is designed to provide daily ventilation at no extra cost and also acts as a smoke and heat exhaust vent (SHEV)",
            features: [
                "Flexible, adaptable ventilation option which can be used across a wide range of building façade types",
                "Available with Single, double or triple glazing, sandwich panel or multiwall polycarbonate (MWPC)",
                "Available with electric or pneumatic control"
            ],
            specSheet: "pdf/kingspan-kooltherm-k3-spec-sheet.pdf"
        },
        "LiteVault": {
            name: "LiteVault",
            solution: "Daylighting Solutions",
            images: ["assets/kingspan/DaylightingSolutions/day6.png"],
            description: "Installing the LiteVault skylight brings an ideal insulating and weatherproofing performance, therefore reducing the demand for artificial lighting and promoting reduced usage of heating and cooling systems.",
            features: [
                "Unlimited length",
                "Easy installation",
                "No fixings through polycarbonate sheets"
            ],
            specSheet: "pdf/kingspan-kooltherm-k7-spec-sheet.pdf"
        },

        // Sandwich Panels Products
        "QuadCore KS100BMSF Evolution Wall Panel": {
            name: "QuadCore KS100BMSF Evolution Wall Panel",
            solution: "Sandwich Panels",
            images: ["assets/kingspan/SandwichPanels/sa1.png"],
            description: "QuadCore KS100BMSF Evolution Wall Panel is a simple and effective single component solution that delivers aesthetically pleasing finishes with exceptionally fast install time.",
            features: [
                "High-performance QuadCore insulation core",
                "Cover width: 1000 mm",
                "Core thickness: 80 mm and 100 mm"
            ],
            specSheet: "assets/kingspan/SandwichPanels/sa1.pdf"
        },
        "QuadCore KS100ERO T-Dek Flat Roof Panel": {
            name: "QuadCore KS100ERO T-Dek Flat Roof Panel",
            solution: "Sandwich Panels",
            images: ["assets/kingspan/SandwichPanels/sa2.png"],
            description: "An energy efficient high performance insulated single-ply membrane roof deck system suitable for flat and pitched roofs above 0.5° (1%) after deflection, and curved roofs with a convex curve of 45 m radius / concave curve 50 m radius.",
            features: [
                "High performance QuadCore insulation core",
                "Cover width: 1000 mm",
                "Profile: Flat single - ply PVC/TPO membrane"
            ],
            specSheet: "assets/kingspan/SandwichPanels/sa2.pdf"
        },
        "QuadCore KS100ERO T-Dek Longspan Flat Roof Panel": {
            name: "QuadCore KS100ERO T-Dek Longspan Flat Roof Panel",
            solution: "Sandwich Panels",
            images: ["assets/kingspan/SandwichPanels/sa3.png"],
            description: "QuadCore KS100ERO T-DEK Longspan Flat Roof Panel is an insulated flat roof system combining a structural deck QuadCore insulation and a metal top sheet into one product.",
            features: [
                "High Performance QuadCore insulation core",
                "Cover width: 825 mm",
                "Fixing Method: through-fixed"
            ],
            specSheet: "assets/kingspan/SandwichPanels/sa3.pdf"
        },
        "QuadCore KS100PRW Roof Panel": {
            name: "QuadCore KS100PRW Roof Panel",
            solution: "Sandwich Panels",
            images: ["assets/kingspan/SandwichPanels/sa4.png"],
            description: "QuadCore KS100PRW Roof Panel is a through-fixed trapezoidal roof panel suitable for pitched roof application of 4˚ or more after deflection.",
            features: [
                "High Performance QuadCore insulation core",
                "Cover width: 1000 mm",
                "Profile: 42 mm deep trapezoidal"
            ],
            specSheet: "assets/kingspan/SandwichPanels/sa4.pdf"
        },
        "QuadCore KS100PRW Wall Panel": {
            name: "QuadCore KS100PRW Wall Panel",
            solution: "Sandwich Panels",
            images: ["assets/kingspan/SandwichPanels/sa5.png"],
            description: "QuadCore KS100PRW Wall Panel.",
            features: [
                "High performance QuadCore insulation core",
                "Cover width: 1000 mm",
                "Profile: 42 mm deep trapezoidal"
            ],
            specSheet: "assets/kingspan/SandwichPanels/sa5.pdf"
        },
        "QuadCore KS103MSF AWP Wall Panel": {
            name: "QuadCore KS103MSF AWP Wall Panel",
            solution: "Sandwich Panels",
            images: ["assets/kingspan/SandwichPanels/sa6.png"],
            description: "Structural wall panel for industrial and commercial buildings.",
            features: [
                "High performance QuadCore insulation core",
                "Cover width: 1030 mm",
                "Profile: Megalambri"
            ],
            specSheet: "assets/kingspan/SandwichPanels/sa6.pdf"
        },
        "QuadCore KS103SSF AWP Wall Panel": {
            name: "QuadCore KS103SSF AWP Wall Panel",
            solution: "Sandwich Panels",
            images: ["assets/kingspan/SandwichPanels/sa7.png"],
            description: "Our QuadCore KS103SSF panel range is available in 3 profiles. They can be installed both vertically and horizontally and available in a wide range of colors for maximum visual impact.",
            features: [
                "High performance QuadCore insulation core",
                "Cover width: 1030 mm",
                "Profiles: Microlambri, Superlambri and Smoothlambri"
            ],
            specSheet: "assets/kingspan/SandwichPanels/sa7.pdf"
        },
        "QuadCore KS110CTF Coldstore Panel": {
            name: "QuadCore KS110CTF Coldstore Panel",
            solution: "Sandwich Panels",
            images: ["assets/kingspan/SandwichPanels/sa8.png"],
            description: "QuadCore KS110CTF Coldstore Panels are designed for use within temperature controlled and hygiene safe environments, such as food processing, freezers, pharmaceutical, cold/chill store and clean rooms.",
            features: [
                "High performance QuadCore insulation core",
                "Cover width: 1100 mm",
                "Profiles: Box (Izocold), CS Flat (Pharmacold), Micro-Rib (MicroCold), Mega-Box (MegaCold) and Smart Panel"
            ],
            specSheet: "assets/kingspan/SandwichPanels/sa8.pdf"
        },
        "QuadCore KS110NCTF Coldstore Panel": {
            name: "QuadCore KS110NCTF Coldstore Panel",
            solution: "Sandwich Panels",
            images: ["assets/kingspan/SandwichPanels/sa9.png"],
            description: "Kingspan KS110NCTF cold store panels are designed for use within temperature controlled and hygiene safe environments, such as food processing, freezers, pharmaceutical, cold/chill store and clean rooms",
            features: [
                "High-performance QuadCore Insulation Core",
                "Cover width: 1100 mm",
                "Profile: Box (Izocold), CS Flat (Pharmacold) and Micro-Rib (MicroCold)"
            ],
            specSheet: "assets/kingspan/SandwichPanels/sa9.pdf"
        },
        "QuadCore KSD1000/1100CS Coldstore Panel": {
            name: "QuadCore KSD1000/1100CS Coldstore Panel",
            solution: "Sandwich Panels",
            images: ["assets/kingspan/SandwichPanels/sa10.png"],
            description: "QuadCore KSD1000/1100CS Coldstore Panel is designed for use within temperature controlled and hygiene safe environments, such as food processing, freezers, pharmaceutical, cold/chill store and cleanrooms.",
            features: [
                "High performance QuadCore insulation core",
                "Suitable for internal walls and ceiling applications, including Box-in-a-Box",
                "The choice for safe keeping of pharmaceuticals, chemicals, vaccines, food storage & processing, distribution"
            ],
            specSheet: "assets/kingspan/SandwichPanels/sa10.pdf"
        },
        "QuadCore KSD1000RW Roof Panel": {
            name: "QuadCore KSD1000RW Roof Panel",
            solution: "Sandwich Panels",
            images: ["assets/kingspan/SandwichPanels/sa11.png"],
            description: "QuadCore KSD1000RW Roof Panel is a through-fix and trapezoidal profiled panel with a high performance QuadCore insulation core. The panel is available in a width of 1000 mm.",
            features: [
                "High Performance QuadCore Insulation Core",
                "Pitch (°): suitable for pitched roof applications of 4˚ or more after steel deflection",
                "Cover width: 1000 mm"
            ],
            specSheet: "assets/kingspan/SandwichPanels/sa11.pdf"
        },
        "QuadCore KSD1000RW Wall Panel": {
            name: "QuadCore KSD1000RW Wall Panel",
            solution: "Sandwich Panels",
            images: ["assets/kingspan/SandwichPanels/sa12.png"],
            description: "QuadCore KSD1000RW Wall Panel is a through-fix and trapezoidal profiled panel with a high performance QuadCore insulation core. The panel is available in 1000 mm width.",
            features: [
                "High Performance QuadCore Insulation Core",
                "Cover width: 1000 mm",
                "Profile: trapezoidal 35 mm height"
            ],
            specSheet: "assets/kingspan/SandwichPanels/sa12.pdf"
        },
        "QuadCore KSD600/900/1000 AWP Wall Panel": {
            name: "QuadCore KSD600/900/1000 AWP Wall Panel",
            solution: "Sandwich Panels",
            images: ["assets/kingspan/SandwichPanels/sa13.png"],
            description: "QuadCore KSD600/900/1000 AWP Wall Panel is a secret-fix wall panel available in 4 distinct profiles and a variety of panel widths offering freedom of design and high performance.",
            features: [
                "High Performance Quadcore Insulation Core",
                "Quick installationCover width: 600/900/1000 mm",
                "Profiles: Flat, Flat-Stucco, Micro-Rib and Mini-Micro"
            ],
            specSheet: "assets/kingspan/SandwichPanels/sa13.pdf"
        },
        "Quadcore KS103LMSF Clad Rack Warehouses Panels": {
            name: "Quadcore KS103LMSF Clad Rack Warehouses Panels",
            solution: "Sandwich Panels",
            images: ["assets/kingspan/SandwichPanels/sa14.png"],
            description: "QuadCore KS103LMSF Clad Rack Warehouses Panel is a secret-fix system available with a 200 mm insulation depth, offering economical but aesthetic solutions to designers, contractors and clients alike.",
            features: [
                "High-performance QuadCore Insulation Core",
                "Cover width: 1030 mm",
                "Core thickness: 200 mm"
            ],
            specSheet: "assets/kingspan/SandwichPanels/sa14.pdf"
        },
        "Quadcore KS103LSSF Clad Rack Warehouses Panels": {
            name: "Quadcore KS103LSSF Clad Rack Warehouses Panels",
            solution: "Sandwich Panels",
            images: ["assets/kingspan/SandwichPanels/sa15.png"],
            description: "QuadCore KS103LSSF Clad Rack Warehouses Panel is a secret-fix system available with a 200 mm insulation depth, offering economical but aesthetic solutions to designers, contractors and clients alike.",
            features: [
                "High-performance QuadCore insulation core",
                "Cover width: 1030 mm",
                "Core thickness: 200 mm"
            ],
            specSheet: "assets/kingspan/SandwichPanels/sa15.pdf"
        },
        "Quadcore KS110CTF Camlock Coldstore Panels": {
            name: "Quadcore KS110CTF Camlock Coldstore Panels",
            solution: "Sandwich Panels",
            images: ["assets/kingspan/SandwichPanels/sa16.png"],
            description: "QuadCore KS110CTF Camlock Coldstore Panel is designed for use within temperature-controlled and hygienesafe environments such as food processing, freezers, pharmaceuticals, cold/chill stores and cleanrooms.",
            features: [
                "High-performance QuadCore insulation core",
                "Profile: Box (Izocold)",
                "Cover width: 1100 mm"
            ],
            specSheet: "assets/kingspan/SandwichPanels/sa16.pdf"
        },
        "Quadcore KS110IZF Insulation Boards": {
            name: "Quadcore KS110IZF Insulation Boards",
            solution: "Sandwich Panels",
            images: ["assets/kingspan/SandwichPanels/sa17.png"],
            description: "QuadCore KS110IZF Insulation Board is a high compressive strength insulation board.",
            features: [
                "High-performance QuadCore Insulation core",
                "Cover width: 1100mm",
                "Core thickness: 50, 60 and 100 mm"
            ],
            specSheet: "assets/kingspan/SandwichPanels/sa17.pdf"
        },
        "Fabricated Flashing": {
            name: "Fabricated Flashing",
            solution: "Sandwich Panels",
            images: ["assets/kingspan/SandwichPanels/sa18.png"],
            description: "With a wide selection of materials, gauges and finishes available, the possibilities for fabricated flashings are endless. Material options include pre-coated steel, galvanized steel and aluminum. Suitable for roof and wall applications.",
            features: [
                "Profiles: drip/eave, verge and ridge",
                "Fixing detail: welded or laminated",
                "Metal type: steel or aluminium"
            ],
            specSheet: "assets/kingspan/SandwichPanels/sa18.pdf"
        },
        "Highline Gutter": {
            name: "Highline Gutter",
            solution: "Sandwich Panels",
            images: ["assets/kingspan/SandwichPanels/sa19.png"],
            description: "Our pre-coated highline gutter systems are available in a range of finishes, and offer a lightweight solution that is quick and efficient to install",
            features: [
                "Metal type: steel or aluminium",
                "Available length: up to 3 m",
                "Colours: variety of colours and mill finish"
            ],
            specSheet: "assets/kingspan/SandwichPanels/sa19.pdf"
        },
        "KSD1000/1100CS Coldstore Panel": {
            name: "KSD1000/1100CS Coldstore Panel",
            solution: "Sandwich Panels",
            images: ["assets/kingspan/SandwichPanels/sa20.png"],
            description: "KSD1000/1100CS Coldstore Panel is designed for use within temperature controlled and hygiene safe environments, such as food processing, freezers, pharmaceutical, cold/chill store and clean rooms.",
            features: [
                "Cover width: 1000/1100 mm",
                "Profiles: Equi-Bead, Mini-Micro, CS Flat, Micro-Rib and Mini-Bead",
                "Internal temperature range: from -70°C to ambient"
            ],
            specSheet: "assets/kingspan/SandwichPanels/sa20.pdf"
        },
        "KSD1000RW Roof Panel": {
            name: "KSD1000RW Roof Panel",
            solution: "Sandwich Panels",
            images: ["assets/kingspan/SandwichPanels/sa21.png"],
            description: "KSD1000RW Roof Panel is a through-fix and trapezoidal profiled panel available in a width of 1000 mm.",
            features: [
                "Kingspan PIR Core Insulation",
                "Cover width: 1000 mm",
                "Pitch (°): suitable for pitched roof applications of 4˚ or more after steel deflection"
            ],
            specSheet: "assets/kingspan/SandwichPanels/sa21.pdf"
        },
        "Preformed Corner Panel": {
            name: "Preformed Corner Panel",
            solution: "Sandwich Panels",
            images: ["assets/kingspan/SandwichPanels/sa22.png"],
            description: "Our range of insulated pre-formed corners combine insulation continuity with aesthetic design to offer an alternative solution to traditional corner flashings",
            features: [
                "Panel Corner: folded and curved corners",
                "Metal type: steel or aluminium",
                "Application: suitable for horizontal, vertical, internal and external applications"
            ],
            specSheet: "assets/kingspan/SandwichPanels/sa22.pdf"
        },

        // Facade Systems Products
        "HC35/800MR Profile": {
            name: "HC35/800MR Profile",
            solution: "Facade Systems",
            images: ["assets/kingspan/FaçadeSystems/fa1.png"],
            description: "HC35/800MR provides a neat and aesthetically pleasing look in horizontal cladding applications and offers flexible performance with a wide range of acoustic and thermal options.",
            features: [
                "Cover width: 800 mm",
                "Material: Aluminium",
                "Available Thickness: 0.9/1.0/1.2 mm"
            ],
            specSheet: "assets/kingspan/FaçadeSystems/s22.pdf"
        },
        "PL300 Wall and Soffit Cladding": {
            name: "PL300 Wall and Soffit Cladding",
            solution: "Facade Systems",
            images: ["assets/kingspan/FaçadeSystems/fa2.png"],
            description: "Secret-fix single skin wall and soffit cladding with flat surface finish. PL 300 can be applied vertically or horizontally and is designed to be fixed directly to a bespoke carrier system where the sheets will snap into place.",
            features: [
                "Material: 0.9 mm Aluminium",
                "Available Lengths: 1.5 - 11.8 m",
                "Cover width: 300 mm"
            ],
            specSheet: "pdf/kingspan-urban-spec-sheet.pdf"
        },
        "Sinusoidal S Profile": {
            name: "Sinusoidal S Profile",
            solution: "Facade Systems",
            images: ["assets/kingspan/FaçadeSystems/fa3.png"],
            description: "Featuring a very shallow profile, Sinusoidal S-Profile is is intended for use on relatively steep roof pitches with closely spaced purlins. Being a symmetrical profile, it is suitable for forming into smooth curves.",
            features: [
                "Available in Steel or Aluminium Options",
                "Thickness: 0.7/0.9/1.0 mm",
                "Can be smooth curved"
            ],
            specSheet: "pdf/kingspan-urban-spec-sheet.pdf"
        },
        "TKS1000-4 Profile": {
            name: "TKS1000-4 Profile",
            solution: "Facade Systems",
            images: ["assets/kingspan/FaçadeSystems/fa4.png"],
            description: "Through-fix single skin metal profile for horizontal or vertical applications",
            features: [
                "Material: Steel",
                "Cover Width: 1000 mm",
                "Thickness: 0.5/0.6/0.7 mm"
            ],
            specSheet: "pdf/kingspan-urban-spec-sheet.pdf"
        },
        "TKS1000-6 Profile": {
            name: "TKS1000-6 Profile",
            solution: "Facade Systems",
            images: ["assets/kingspan/FaçadeSystems/fa5.png"],
            description: "Through-fix single skin metal profile for horizontal or vertical applications",
            features: [
                "Material: Steel",
                "Cover Width: 1030 mm",
                "Thickness: 0.5/0.6/0.7 mm"
            ],
            specSheet: "pdf/kingspan-tektura-spec-sheet.pdf"
        },

        // Ductwork Products
        "KDuct Pre-Clad PIR": {
            name: "KDuct Pre-Clad PIR",
            solution: "Ductwork",
            images: ["assets/kingspan/Ductwork/du1.jpeg"],
            description: "Kingspan KDuct Pre-Clad PIR panels comprise of a fibre-free rigid thermoset foil faced polyisocyanurate (PIR) insulation with a outer composite aluminium laminated facing.",
            features: [
                "Ultra-strength and rigidness",
                "Traditional exterior ductwork",
                "Easy to clean."
            ],
            specSheet: "assets/kingspan/Ductwork/du1.pdf"
        },
        "KDuct Pre-Clad Phenolic": {
            name: "KDuct Pre-Clad Phenolic",
            solution: "Ductwork",
            images: ["assets/kingspan/Ductwork/du2.png"],
            description: "Kingspan KDuct Pre-Clad Phenolic Duct System has a rigid thermoset insulation core. It has a fibre-free and closed cell insulation core.",
            features: [
                "Easy to clean.",
                "Fast–track single–fix installation.",
                "Fibre–free insulation core.."
            ],
            specSheet: "assets/kingspan/Ductwork/du2.pdf"
        },
        "PalDuct PIR": {
            name: "PalDuct PIR",
            solution: "Ductwork",
            images: ["assets/kingspan/Ductwork/du3.png"],
            description: "Kingspan PalDuct PIR Panels comprise a rigid thermoset polyisocyanurate (PIR) insulation core.",
            features: [
                "Fibre–free insulation core",
                "Low weight fabricated ductwork, quick installation",
                "Space saving: flush-fitting installation possible."
            ],
            specSheet: "assets/kingspan/Ductwork/du3.pdf"
        },
        "PalDuct Phenolic": {
            name: "PalDuct Phenolic",
            solution: "Ductwork",
            images: ["assets/kingspan/Ductwork/du4.png"],
            description: "Kingspan PalDuct Phenolic Panels have a rigid thermoset phenolic insulation core.",
            features: [
                "UL Listed as a Class 1 Air Duct, to Standard for Safety UL 181 (Factory Made Air Ducts & Air Connectors)",
                "Fibre–free insulation core",
                "Low weight fabricated ductwork, quick installation"
            ],
            specSheet: "assets/kingspan/Ductwork/du4.pdf"
        },

        // Standing Seam System Products
        "KingZip SF": {
            name: "KingZip SF",
            solution: "Standing Seam System",
            images: ["assets/kingspan/StandingSeamSystems/st1.png"],
            description: "KingZip SF is an external metal sheet used as a part of Kingspan's Standing Seam Systems for insulated roof, wall & ceiling applications. It offers an integrated architectural building envelope solution especially for complex and 3D geometry designs.",
            features: [
                "System Build-Up:  two types of standing seams systems are available",
                "KingZip SF Linea Standing Seam: for 2D designs (Standard Geometry)",
                "KingZip SF Infiniti Standing Seam: for 3D designs (Complex Geometry)"
            ],
            specSheet: "assets/kingspan/StandingSeamSystems/st1.pdf"
        },

        // Roof Decks & Liners Products
        "35 333 Liner": {
            name: "35 333 Liner",
            solution: "Roof Decks & Liners",
            images: ["assets/kingspan/Decks&Liners/de1.png"],
            description: "35/333 Liner is a versatile product used in roof and wall construction. Its primary application is in double skin systems, where it is commonly combined with other trapezoidal liner sheets or the KingZip SF secret-fixed profile system.",
            features: [
                "Metal type: Steel or Aluminium",
                "Available lengths: from 0.50 m to 11.80 m (non-standard lengths are available & subject to transportation restrictions)",
                "Profile depth: 35 mm"
            ],
            specSheet: "pdf/kingspan-dek-spec-sheet.pdf"
        },
        "WA200 Liner": {
            name: "WA200 Liner",
            solution: "Roof Decks & Liners",
            images: ["assets/kingspan/Decks&Liners/de2.png"],
            description: "WA200 Liner is a profiled liner used as part of any build-up system and single skin sheet solutions requiring purlins or side grits due to a lesser spanning capability.",
            features: [
                "Metal type: Steel or Aluminium",
                "Available Lengths: from 0.50 m to 11.80 m (non-standard lengths are available & subject to transportation restrictions)",
                "Profile depth: 38.10 mm"
            ],
            specSheet: "assets/kingspan/Decks&Liners/de2.pdf"
        },
        "45/250 Liner": {
            name: "45/250 Liner",
            solution: "Roof Decks & Liners",
            images: ["assets/kingspan/Decks&Liners/de3.png"],
            description: "45/250 Liner is a profiled liner used as part of any build-up system and single skin sheet solutions requiring purlins or side grits due to a lesser spanning capability.",
            features: [
                "Metal type: Steel or Aluminium",
                "Available lengths: from 0.50 m to 11.80 m (non-standard lengths are available & subject to transportation restrictions)",
                "Profile depth: 45 mm"
            ],
            specSheet: "assets/kingspan/Decks&Liners/de3.pdf"
        },
        "WA900 Liner": {
            name: "WA900 Liner",
            solution: "Roof Decks & Liners",
            images: ["assets/kingspan/Decks&Liners/de4.png"],
            description: "WA900 Liner is a profiled liner used as part of any build-up system and single skin sheet solutions requiring purlins or side grits due to a lesser spanning capability.",
            features: [
                "Metal type: Steel or Aluminium",
                "Available lengths: from 0.50 m to 11.80 m (non-standard lengths are available & subject to transportation restrictions)",
                "Profile depth: 38.10 mm"
            ],
            specSheet: "assets/kingspan/Decks&Liners/de4.pdf"
        },
        "WB6 Liner": {
            name: "WB6 Liner",
            solution: "Roof Decks & Liners",
            images: ["assets/kingspan/Decks&Liners/de5.png"],
            description: "WB6 Liner is a profiled liner used as part of any build-up system and single skin sheet solutions requiring purlins or side grits due to a lesser spanning capability.",
            features: [
                "Metal type: Steel or Aluminium",
                "Available lengths: from 0.50 m to 11.80 m (non-standard lengths are available & subject to transportation restrictions)",
                "Profile Depth: 45 mm"
            ],
            specSheet: "assets/kingspan/Decks&Liners/de5.pdf"
        },
        "WA6 Liner": {
            name: "WA6 Liner",
            solution: "Roof Decks & Liners",
            images: ["assets/kingspan/Decks&Liners/de6.png"],
            description: "WA6 Liner is a profiled liner used as part of any build-up system and single skin sheet solutions requiring purlins or side grits due to a lesser spanning capability. In a traditional standing seam build-up purlin system.",
            features: [
                "Metal type: Steel or Aluminium",
                "Available lengths: from 0.50 m to 11.80 m (non-standard lengths are available & subject to transportation restrictions)",
                "Profile depth: 38.10 mm"
            ],
            specSheet: "assets/kingspan/Decks&Liners/de6.pdf"
        },
        "RD100/825 Deck": {
            name: "RD100/825 Deck",
            solution: "Roof Decks & Liners",
            images: ["assets/kingspan/Decks&Liners/de7.png"],
            description: "RD100/825 Deck is a profiled deck that is used as part of any build-up system that offers more spanning capabilities than traditional liner systems.",
            features: [
                "Metal type: Steel or Aluminium",
                "Available lengths: from 0.50 m to 11.80 m (non-standard lengths are available & subject to transportation restrictions)",
                "Profile Depth: 100 mm"
            ],
            specSheet: "assets/kingspan/Decks&Liners/de7.pdf"
        },
        "RD200/750 Deck": {
            name: "RD200/750 Deck",
            solution: "Roof Decks & Liners",
            images: ["assets/kingspan/Decks&Liners/de8.png"],
            description: "RD200/750 Deck is a profiled deck that is used as part of any build-up system that offers more spanning capabilities than traditional liner systems.",
            features: [
                "Metal Type: Steel or Aluminium",
                "Available lengths: from 0.50 m to 11.80 m (non-standard lengths are available and subject to transportation restriction)",
                "Profile depth: 205 mm"
            ],
            specSheet: "assets/kingspan/Decks&Liners/de8.pdf"
        },
        "RD75/300 Deck": {
            name: "RD75/300 Deck",
            solution: "Roof Decks & Liners",
            images: ["assets/kingspan/Decks&Liners/de9.png"],
            description: "RD75/300 Deck is a profiled deck that is used as part of any build-up system that offers more spanning capabilities than traditional liner systems.",
            features: [
                "Metal type: Steel or Aluminium",
                "Available lengths: from 0.50 m to 11.80 m (non-standard lengths are available & subject to transportation restrictions)",
                "Profile depth: 205 mm"
            ],
            specSheet: "assets/kingspan/Decks&Liners/de9.pdf"
        },

        // Safety & Protection Systems Products
        "KingZip Expanded Mesh Walkway": {
            name: "KingZip Expanded Mesh Walkway",
            solution: "Safety & Protection Systems",
            images: ["assets/kingspan/Safety&ProtectionSystems/saf1.png"],
            description: "The KingZip expanded mesh walkway system is designed to complement KingZip standing seam system. The walkway mesh provides superb grip underfoot and offer a highly effective solution for walkway gantries, trailer ramps and stair treads",
            features: [
                "Walkways are fixed to the roof profile without penetration of the sheeting, maintaining the KingZip system integrity",
                "Plank is made of 4mm thick mild steel expanded metal mesh with Z275 galvanization",
                "Excellent anti-skid performance, slip resistance surface and high bearing capacity"
            ],
            specSheet: "assets/kingspan/Safety&ProtectionSystems/saf2.pdf"
        },
        "KingZip Serrated Walkway": {
            name: "KingZip Serrated Walkway",
            solution: "Safety & Protection Systems",
            images: ["assets/kingspan/Safety&ProtectionSystems/saf2.png"],
            description: "The Kingspan serrated walkway system is designed to complement KingZip standing seam system. The walkways are fixed to the roof profile without penetration of the sheeting, maintaining the KingZip system integrity",
            features: [
                "Walkways are fixed to the roof profile without penetration of the sheeting, maintaining the KingZip system integrity",
                "Slip resistant surface",
                "Aluminum grating extruded from 6063-T6 alloy flat bar with serrated surface and round cross bars with separator tubes"
            ],
            specSheet: "assets/kingspan/Safety&ProtectionSystems/saf2.pdf"
        },

        // Door & Loading Systems Products
        "Cleanroom Door": {
            name: "Cleanroom Door",
            solution: "Door & Loading Systems",
            images: ["assets/kingspan/Doors&LoadingSystems/do1.png"],
            description: "Airtight, foodsafe doors that combine contemporary design and aesthetics with high acoustic and thermal performance.",
            features: [
                "Single section (mono block) door",
                "Easy and silent opening and closing mechanism",
                "Door Dimensions Single Leaf: Min: 700 x 1700 mm, Max: 1500 x 2400 mm"
            ],
            specSheet: "pdf/kingspan-speedor-spec-sheet.pdf"
        },
        "Controlled Atmosphere Door": {
            name: "Controlled Atmosphere Door",
            solution: "Door & Loading Systems",
            images: ["assets/kingspan/Doors&LoadingSystems/do2.png"],
            description: "Sliding doors with guaranteed hermetic sealing, specially designed for temperature and humidity controlled environments with absolute gas tightness requirements",
            features: [
                "Foodsafe in accordance with HACCP standards",
                "Heavy duty angle shaped frame, reinforced with marine plywood and PVC",
                "Exceptional sliding mechanism design with soft closing and easy disengagement"
            ],
            specSheet: "pdf/kingspan-speedor-spec-sheet.pdf"
        },
        "Fire Rated Cold Store Hinged Door": {
            name: "Fire Rated Cold Store Hinged Door",
            solution: "Door & Loading Systems",
            images: ["assets/kingspan/Doors&LoadingSystems/do3.png"],
            description: "Insulated and airtight elements which play a critical role in maintaining consistent temperatures in cold rooms",
            features: [
                "Foodsafe in accordance with HACCP standards",
                "Door Dimensions Single Leaf: Min: 800 x 2000 mm, Max: 1300 x 2300 mm",
                "Coatings/Finishes: Plastisol and INOX 304"
            ],
            specSheet: "pdf/kingspan-speedor-spec-sheet.pdf"
        },
        "Fire Rated Cold Store Sliding Door": {
            name: "Fire Rated Cold Store Sliding Door",
            solution: "Door & Loading Systems",
            images: ["assets/kingspan/Doors&LoadingSystems/do4.png"],
            description: "Fire Rated sliding doors for passageways with opening widths > 1200 mm to save space",
            features: [
                "Fire Rating: E90, EI2 90, EI1 60 classification options as per EN13501-2",
                "Foodsafe in accordance with HACCP standards",
                "Door Dimensions: Min: 1200 x 2000 mm, Max: 3000 x 3000 mm"
            ],
            specSheet: "pdf/kingspan-speedor-spec-sheet.pdf"
        },
        "Hinged Doorr": {
            name: "Hinged Door",
            solution: "Door & Loading Systems",
            images: ["assets/kingspan/Doors&LoadingSystems/do5.png"],
            description: "Hinged doors are insulated and airtight elements which play a critical role in maintaining consistent temperatures in cold rooms",
            features: [
                "Foodsafe in accordance with HACCP standards",
                "Door Dimensions Single Leaf: Min: 700 x 1700 mm, Max: 1500 x 2500 mm",
                "Door Dimensions Double Leaf: Min: 1400 x 2000 mm, Max: 2400 x 3000 mm"
            ],
            specSheet: "pdf/kingspan-speedor-spec-sheet.pdf"
        },
        "Insulated Rapid Speed PVC Door": {
            name: "Insulated Rapid Speed PVC Door",
            solution: "Door & Loading Systems",
            images: ["assets/kingspan/Doors&LoadingSystems/do6.png"],
            description: "Ideal for interior passage ways of heavy traffic cold stores. Prevents heat loss by minimizing the time that the passage is open during the transit of goods coming in and out of the cold stores providing substantial savings in energy consumption.",
            features: [
                "Prevents the build-up of ice on components and walk-through areas with low maintenance requirement",
                "Temperature Range: -30º / ambient",
                "Door Dimensions: Min: 800 x 2000 mm, Max: 4000 x 4000 mm - custom sizes available upon request"
            ],
            specSheet: "pdf/kingspan-speedor-spec-sheet.pdf"
        },
        "Sliding Door": {
            name: "Sliding Door",
            solution: "Door & Loading Systems",
            images: ["assets/kingspan/Doors&LoadingSystems/do7.png"],
            description: "Ideal for environments where temperature control is needed and when opening width of 1200 mm or more is required in order to save space. They open offset to the wall, occupying minimum corridor / room area when opened",
            features: [
                "Temperature Range: -40º / ambient",
                "Door Dimensions: Min: 800 x 2000mm, Max: 3000 x 6000 mm",
                "Door Thickness: 90/100/120/140 mm"
            ],
            specSheet: "pdf/kingspan-speedor-spec-sheet.pdf"
        },
        "Vertical Sliding Door": {
            name: "Vertical Sliding Door",
            solution: "Door & Loading Systems",
            images: ["assets/kingspan/Doors&LoadingSystems/do8.png"],
            description: "Vertical sliding doors are equipped with EN13241-1 certified anti-fall safety systems and are generally used in controlled environment passageways where installation of regular sliding doors are not possible due to side space restrictions",
            features: [
                "EN13241-1 certified anti-fall safety system",
                "Foodsafe in accordance with HACCP standards",
                "Heavy duty angle shaped frame, reinforced with marine plywood and PVC"
            ],
            specSheet: "pdf/kingspan-thermadoor-spec-sheet.pdf"
        },

        // Natural Ventilation Products
        "Eura": {
            name: "Eura",
            solution: "Natural Ventilation",
            images: ["assets/kingspan/NaturalVentilation/na1.png"],
            description: "Suitable for roof or facade application, the Eura louvred vent has been designed to remove large amounts of warm air or smoke from internal spaces, making it ideal for both natural ventilation and also as a smoke and heat exhaust vent (SHEV).",
            features: [
                "Extracts large volumes of smoke & warm air with a geometrical surface of up to 9.37 sq. m",
                "Tested and certified in accordance with EN 12101-2 for use as a natural smoke and heat exhaust vent (SHEV)",
                "Can be installed at any angle from horizontal through to 90° vertical enabling roof and façade application"
            ],
            specSheet: "pdf/kingspan-windcatcher-spec-sheet.pdf"
        },
        "Estra": {
            name: "Estra",
            solution: "Natural Ventilation",
            images: ["assets/kingspan/NaturalVentilation/na2.png"],
            description: "The Estra is a glazed louvred vent which has a highly aesthetic appearance and can be used for daily ventilation or smoke and heat extraction.",
            features: [
                "Suitable for application to glazed facades",
                "Thermally insulated profile sections and is designed with both insulated glass and single glazed glass",
                "Choice of louvers available includes point-fixed, circumferentially framed and (semi-)structural glazing"
            ],
            specSheet: "assets/kingspan/NaturalVentilation/na2.pdf"
        },
        "Eura R": {
            name: "Eura R",
            solution: "Natural Ventilation",
            images: ["assets/kingspan/NaturalVentilation/na3.png"],
            description: "The Eura-R is a natural louvred vent that is designed to remove large amounts of warm air even in poor weather via rainproof side dampers or smoke from internal spaces, making it ideal for both natural ventilation and also for smoke and heat exhaust.",
            features: [
                "Designed for all-weather ventilation with rainproof side dampers",
                "EN 12101-2 certified smoke and heat exhaust vent (SHEV)",
                "Integrated water drainage"
            ],
            specSheet: "assets/kingspan/NaturalVentilation/na3.pdf"
        },
        "Inova": {
            name: "Inova",
            solution: "Natural Ventilation",
            images: ["assets/kingspan/NaturalVentilation/na4.png"],
            description: "The Inova is a stylish ventilation window with concealed controls, suitable for daily natural ventilation and is specially designed for use in facades.",
            features: [
                "Suitable for natural ventilation",
                "Available in a rectangular shape in different sizes",
                "Concealed operating system embedded in the frame"
            ],
            specSheet: "assets/kingspan/NaturalVentilation/na4.pdf"
        },
        "Lumera": {
            name: "Lumera",
            solution: "Natural Ventilation",
            images: ["assets/kingspan/NaturalVentilation/na5.png"],
            description: "The Lumera is an aesthetic casement window used for natural ventilation and also smoke exhaust. With its slim profile, hidden controls, and versatile shape options, the Lumera is ideal for projects aiming to achieve a high architectural impact.",
            features: [
                "Designed for structural glass roofs",
                "Slim profiles and concealed controls embedded within frame",
                "Available in a variety of sizes and shapes (rectangular, triangular, trapezium etc.)"
            ],
            specSheet: "assets/kingspan/NaturalVentilation/na5.pdf"
        },
        "Optima": {
            name: "Optima",
            solution: "Natural Ventilation",
            images: ["assets/kingspan/NaturalVentilation/na6.png"],
            description: "The Optima is a thermally separated louvred vent used for smoke control and daily ventilation, as well as daylighting. It is the ideal solution for buildings looking to achieve high levels of thermal performance and sustainability.",
            features: [
                "Highly energy efficient design with optional glass louvres available",
                "CE marked, certified according EN 12101-2 and tested according to EN 14351-1",
                "Designed to achieve superior thermal performance (contact our technical team for more details on U-values)"
            ],
            specSheet: "assets/kingspan/NaturalVentilation/na6.pdf"
        },
        "Ventria": {
            name: "Ventria",
            solution: "Natural Ventilation",
            images: ["assets/kingspan/NaturalVentilation/na7.png"],
            description: "Ventria ventilation windows provide a versatile, attractive glazed solution suitable for glazed roofs and facades to provide natural ventilation and smoke and heat exhaust.",
            features: [
                "Designed for glass facades and roofs to provide natural ventilation and smoke and heat exhaust",
                "Bespoke dimensions, panels and shapes can be requested",
                "Geometric surface of up to 6.12 m2 depending on length:width ratio and choice of controls"
            ],
            specSheet: "assets/kingspan/NaturalVentilation/na7.pdf"
        }

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
                        ],
                        specSheet: "pdf/aco-drain-spec-sheet.pdf" // Added PDF spec sheet
                    },
                    "aco-heeldrain": {
                        name: "ACO HeelDrain",
                        images: [
                            "https://www.aco.com/fileadmin/_processed_/8/0/csm_aco-heeldrain_5a5a5a5a5a.png"
                        ],
                        description: "Linear drainage system for building perimeters.",
                        features: [
                            "Protects building foundations",
                            "Easy to integrate",
                            "High flow capacity",
                            "Durable construction"
                        ],
                        specSheet: "pdf/aco-heeldrain-spec-sheet.pdf" // Added PDF spec sheet
                    }
                }
            },
            waterManagement: {
                name: "Water Management",
                description: "Solutions for sustainable water management",
                products: {
                    "aco-rain": {
                        name: "ACO Rain",
                        images: [
                            "https://www.aco.com/fileadmin/_processed_/9/1/csm_aco-rain_9a9a9a9a9a.png"
                        ],
                        description: "Sustainable drainage system for rainwater management.",
                        features: [
                            "Promotes natural drainage",
                            "Reduces runoff",
                            "Improves water quality",
                            "Aesthetically pleasing"
                        ],
                        specSheet: "pdf/aco-rain-spec-sheet.pdf" // Added PDF spec sheet
                    }
                }
            }
        },
        allProducts: {
            // All ACO products would be listed here in a flattened structure
            // Each should include the specSheet property
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
                        ${product.specSheet ?
                            `<a href="${product.specSheet}" class="action-btn secondary-btn" download>Download Spec Sheet</a>` :
                            '<button class="action-btn secondary-btn" disabled>Spec Sheet Not Available</button>'}
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