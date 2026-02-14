// Hytale Portfolio JavaScript

// Project Data source
const projectsData = [
    {
        id: "gigantic-floating-islands",
        title: "Gigantic Floating Islands",
        description: "Massive floating landmasses inspired by fantasy tropes. Uses custom noise generators for islands and cloud layers. Detailed volumetric clouds and waterfalls cascading into the void.",
        link: "#",
        images: [
            "assets/placeholder.jpg",
            "assets/placeholder.jpg",
            "assets/placeholder.jpg"
        ]
    },
    {
        id: "generic-taiga",
        title: "Generic Taiga",
        description: "A classic taiga biome with towering spruce trees, snow-capped mountains, frozen ice-shelf lakes and caves.",
        link: "#",
        images: [
            "assets/GenericTaiga/Hytale2026-02-09_23-10-45.png",
            "assets/GenericTaiga/Hytale2026-02-09_23-11-56.png",
            "assets/GenericTaiga/Hytale2026-02-09_23-13-01.png",
            "assets/GenericTaiga/Hytale2026-02-09_23-13-15.png",
            "assets/GenericTaiga/Hytale2026-02-09_23-13-50.png",
            "assets/GenericTaiga/Hytale2026-02-10_15-57-18.png",
            "assets/GenericTaiga/Hytale2026-02-10_16-01-21.png",
            "assets/GenericTaiga/Hytale2026-02-10_16-02-04.png",
            "assets/GenericTaiga/Hytale2026-02-10_23-01-03.png",
            "assets/GenericTaiga/Hytale2026-02-10_23-03-07.png",
            "assets/GenericTaiga/Hytale2026-02-10_23-04-48.png",
            "assets/GenericTaiga/Hytale2026-02-10_23-06-30.png",
            "assets/GenericTaiga/Hytale2026-02-10_23-06-41.png",
            "assets/GenericTaiga/Hytale2026-02-10_23-07-28.png",
            "assets/GenericTaiga/Hytale2026-02-10_23-09-49.png",
            "assets/GenericTaiga/Hytale2026-02-10_23-10-23.png"
        ]
    },
    {
        id: "inspired-by-cenote",
        title: "Inspired by Cenote",
        description: "Deep, water-filled sinkholes with lush vegetation hanging from the opening. A hidden underground paradise with crystal clear water.",
        link: "#",
        images: [
            "assets/Cenote/Hytale2026-02-05_23-46-09.png",
            "assets/Cenote/Hytale2026-02-07_00-03-50.png",
            "assets/Cenote/Hytale2026-02-07_00-04-14.png",
            "assets/Cenote/Hytale2026-02-07_00-05-37.png",
            "assets/Cenote/Hytale2026-02-07_22-05-59.png",
            "assets/Cenote/Hytale2026-02-07_22-22-41.png",
            "assets/Cenote/Hytale2026-02-07_22-22-51.png",
            "assets/Cenote/Hytale2026-02-07_23-56-20.png"
        ]
    },
    {
        id: "island-in-ocean",
        title: "Island in Ocean",
        description: "A solitary island generated in the middle of a vast ocean. Features a mountain like island with a towering structure of a castle on top of the island.",
        link: "#",
        images: [
            "assets/OceanIsland/Hytale2026-01-29_22-45-31.png",
            "assets/OceanIsland/Hytale2026-01-30_00-17-03.png",
            "assets/OceanIsland/Hytale2026-01-30_00-18-05.png",
            "assets/OceanIsland/Hytale2026-01-30_00-22-01.png"
        ]
    },
    {
        id: "end-of-the-world",
        title: "End of the world (Corrupted)",
        description: "A landscape consumed by corruption. Dark purples, jagged terrain, Representing the end of the world through chaos.(Some pics were taken during experimentation with world generation)",
        link: "#",
        images: [
            "assets/EndOfWorld/Hytale2026-01-26_22-29-54.png",
            "assets/EndOfWorld/Hytale2026-01-26_22-30-08.png",
            "assets/EndOfWorld/Hytale2026-01-26_22-30-28.png",
            "assets/EndOfWorld/Hytale2026-01-26_22-52-12.png",
            "assets/EndOfWorld/Hytale2026-01-26_22-53-08.png",
            "assets/EndOfWorld/Hytale2026-01-26_22-53-35.png",
            "assets/EndOfWorld/Hytale2026-01-27_19-47-23.png",
            "assets/EndOfWorld/Hytale2026-01-27_22-23-42.png",
            "assets/EndOfWorld/Hytale2026-01-27_22-36-33.png",
            "assets/EndOfWorld/Hytale2026-01-27_22-36-36.png",
            "assets/EndOfWorld/Hytale2026-01-27_22-36-57.png",
            "assets/EndOfWorld/Hytale2026-01-27_22-37-02.png",
            "assets/EndOfWorld/Hytale2026-01-27_22-45-10.png",
            "assets/EndOfWorld/Hytale2026-01-27_22-52-14.png",
            "assets/EndOfWorld/Hytale2026-01-27_22-52-21.png"
        ]
    },
    {
        id: "inspired-by-pandora",
        title: "Inspired by Pandora",
        description: "Bioluminescent flora, floating rocks, dense fog, and alien terrain generation inspired by Avatar. Glowing Crystals/plants light up the dark.",
        link: "#",
        images: [
            "assets/PandoraInspired/Hytale2026-01-25_17-20-55.png",
            "assets/PandoraInspired/Hytale2026-01-25_17-24-59.png",
            "assets/PandoraInspired/Hytale2026-01-25_17-56-54.png",
            "assets/PandoraInspired/Hytale2026-01-25_17-57-02.png",
            "assets/PandoraInspired/Hytale2026-01-25_18-07-56.png",
            "assets/PandoraInspired/Hytale2026-01-25_18-08-27.png",
            "assets/PandoraInspired/Hytale2026-01-25_22-32-18.png"
        ]
    },
    {
        id: "the-antartica",
        title: "The Antartica",
        description: "Vast ice sheets, glaciers, and cold barrens. Minimalist but atmospheric.(BUT WHY?)",
        link: "#",
        images: [
            "assets/Antartica/Hytale2026-01-24_23-20-40.png",
            "assets/Antartica/Hytale2026-01-25_11-49-34.png",
            "assets/Antartica/Hytale2026-01-25_11-51-51.png",
            "assets/Antartica/Hytale2026-01-25_12-00-38.png",
            "assets/Antartica/Hytale2026-01-25_12-02-21.png"
        ]
    },
    {
        id: "mystical-floating-islands",
        title: "Mystical Floating Islands",
        description: "Smaller, magical floating islands. High fantasy theme.",
        link: "#",
        images: ["assets/placeholder.jpg", "assets/placeholder.jpg"]
    },
    {
        id: "underground-coral-reefs",
        title: "Underground Coral Reefs",
        description: "Vibrant coral ecosystems generated in flooded underground caverns. Bioluminescent sea life and colorful coral structures. The surface lakes lead to the underground coral reefs.",
        link: "#",
        images: [
            "assets/UndergroundCoral/Hytale2026-01-20_17-54-55.png",
            "assets/UndergroundCoral/Hytale2026-01-20_17-55-09.png",
            "assets/UndergroundCoral/Hytale2026-01-20_17-55-42.png",
            "assets/UndergroundCoral/Hytale2026-01-20_17-56-07.png",
            "assets/UndergroundCoral/Hytale2026-01-20_17-56-13.png",
            "assets/UndergroundCoral/Hytale2026-01-20_17-56-24.png",
            "assets/UndergroundCoral/Hytale2026-01-20_17-56-42.png",
            "assets/UndergroundCoral/Hytale2026-01-20_17-57-43.png"
        ]
    }
];

document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for anchor links (Index page)
    if (window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/')) {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;

                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // Project Detail Page Logic
    if (window.location.pathname.includes('project-details.html')) {
        const urlParams = new URLSearchParams(window.location.search);
        const projectId = urlParams.get('id');
        const project = projectsData.find(p => p.id === projectId);

        if (project) {
            document.title = `${project.title} - Hytale World Designer`;
            document.getElementById('detail-title').textContent = project.title;
            document.getElementById('detail-description').textContent = project.description;
            document.getElementById('detail-link').href = "https://x.com/LowkeyShehz";

            const galleryGrid = document.getElementById('gallery-grid');
            galleryGrid.innerHTML = ''; // Clear existing content

            project.images.forEach(imgSrc => {
                const imgContainer = document.createElement('div');
                imgContainer.className = 'gallery-item';

                const img = document.createElement('img');
                img.src = imgSrc;
                img.alt = `${project.title} - Gallery Image`;
                img.className = 'gallery-img';

                imgContainer.appendChild(img);
                galleryGrid.appendChild(imgContainer);
            });

            document.getElementById('loading').style.display = 'none';
            document.getElementById('project-content').style.display = 'block';

            // Lightbox Logic
            const lightbox = document.getElementById('lightbox');
            const lightboxImg = document.getElementById('lightbox-img');
            const closeBtn = document.getElementsByClassName('close-lightbox')[0];

            // Open lightbox on image click
            document.querySelectorAll('.gallery-img').forEach(img => {
                img.addEventListener('click', function () {
                    lightbox.style.display = "block";
                    lightboxImg.src = this.src;
                });
            });

            // Close logic
            closeBtn.onclick = function () {
                lightbox.style.display = "none";
            }

            window.onclick = function (event) {
                if (event.target == lightbox) {
                    lightbox.style.display = "none";
                }
            }
        } else {
            document.getElementById('loading').textContent = 'Project not found.';
        }
    }

    console.log("Hytale Portfolio loaded! 🧱");
});
