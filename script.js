 // subscription form functionality
 document.querySelector(".footer-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
    const emailInput = this.querySelector("input[type='email']");
    const email = emailInput.value;
    if (email) {
        alertbox.render({
            alertIcon: 'success',
            title: 'Thank You!',
            message: 'Subscription successful!',
            themeColor: '#FF6700',
            btnColor: '#FF6700',
            btnTitle: 'Ok', border: true
        });
        emailInput.value = ""; // Clear the input field
    } else {
        alert("Please enter a valid email address."); // Show alert box for invalid input
    }
});

// Banner Slider Functionality
document.addEventListener("DOMContentLoaded", function () {
    const banners = [
        "images/banner/xiaomi-15.jpg",
        "images/banner/xiaomi-pad-7-1.jpg",
        "images/banner/poco-f7-pro.jpg",
        "images/banner/redmi-note-14.jpg"
    ];
    let currentBannerIndex = 0;
    const bannerImage = document.getElementById("bannerImage");

    // Set initial banner
    bannerImage.src = banners[currentBannerIndex];

    // Previous button functionality
    document.getElementById("prevBanner").addEventListener("click", function () {
        currentBannerIndex = (currentBannerIndex - 1 + banners.length) % banners.length;
        bannerImage.src = banners[currentBannerIndex];
    });

    // Next button functionality
    document.getElementById("nextBanner").addEventListener("click", function () {
        currentBannerIndex = (currentBannerIndex + 1) % banners.length;
        bannerImage.src = banners[currentBannerIndex];
    });

    // Auto-rotate banners every 5 seconds
    setInterval(function () {
        currentBannerIndex = (currentBannerIndex + 1) % banners.length;
        bannerImage.src = banners[currentBannerIndex];
    }, 5000);
});

// Product Modal System (from shop.js)
document.addEventListener("DOMContentLoaded", () => {
    const shopContainer = document.getElementById("shop");
    const mainContent = document.getElementById("mainContent");
    const productModal = document.getElementById("productModal");
    const closeModal = document.getElementById("closeModal");
    const modalContent = productModal.querySelector(".product-hero");

    const products = [
        {
            name: "Xiaomi 15",
            price: "PHP 49,999",
            image: "images/xiaomi-15.jpg",
            description: "The Future of Performance, Redefined",
            page: "xiaomi-15.html",
            highlights: [
                {
                    icon: "⚡",
                    title: "Snapdragon 8 Elite",
                    desc: "Next-gen 3nm processor delivering 30% faster performance and 20% better efficiency."
                },
                {
                    icon: "📷",
                    title: "Leica Professional Camera",
                    desc: "50MP main sensor with Summicron lens and advanced computational photography."
                },
                {
                    icon: "🖥️",
                    title: "LTPO 2K Display",
                    desc: "6.36\" AMOLED with 1-120Hz adaptive refresh rate and 3200nit peak brightness."
                }
            ]
        },
        {
            name: "Xiaomi Redmi A5 4G",
            price: "PHP 4,999",
            image: "images/xiaomi-redmi-a5-4g.jpg",
            description: "Essential Performance at an Unbeatable Price",
            page: "xiaomi-redmi-a5-4g.html",
            highlights: [
                {
                    icon: "📱",
                    title: "6.88\" HD+ Display",
                    desc: "Large screen with 90Hz refresh rate for smooth scrolling."
                },
                {
                    icon: "🔋",
                    title: "5200mAh Battery",
                    desc: "All-day battery life with 15W fast charging support."
                },
                {
                    icon: "📸",
                    title: "32MP Dual Camera",
                    desc: "Capture clear photos with AI-enhanced imaging."
                }
            ]
        },
        {
            name: "Xiaomi Redmi Note 14S",
            price: "PHP 11,999",
            image: "images/xiaomi-redmi-note-14s.jpg",
            description: "Mid-range Powerhouse with Premium Features",
            page: "xiaomi-redmi-note-14s.html",
            highlights: [
                {
                    icon: "🚀",
                    title: "MediaTek Helio G99-Ultra",
                    desc: "Powerful 6nm chipset for smooth multitasking and gaming."
                },
                {
                    icon: "🔋",
                    title: "67W Fast Charging",
                    desc: "5000mAh battery charges to 100% in just 42 minutes."
                },
                {
                    icon: "📷",
                    title: "200MP Pro-Grade Camera",
                    desc: "Triple camera system with ultra-wide and macro lenses."
                }
            ]
        },
        {
            name: "Xiaomi Poco M7",
            price: "PHP 6,999",
            image: "images/xiaomi-poco-m7-5g.jpg",
            description: "5G Connectivity at an Affordable Price",
            page: "xiaomi-poco-m7-5g.html",
            highlights: [
                {
                    icon: "📶",
                    title: "5G Ready",
                    desc: "Future-proof connectivity with next-gen network support."
                },
                {
                    icon: "🖥️",
                    title: "120Hz AMOLED Display",
                    desc: "Vibrant colors and smooth visuals for media consumption."
                },
                {
                    icon: "🔋",
                    title: "45W Fast Charging",
                    desc: "5000mAh battery with quick recharge capability."
                }
            ]
        },
        {
            name: "Xiaomi Pad 7 Pro",
            price: "PHP 23,999",
            image: "images/xiaomi-pad-7-pro.jpg",
            description: "Premium Tablet for Work and Play",
            page: "xiaomi-pad-7-pro.html",
            highlights: [
                {
                    icon: "🖥️",
                    title: "11.2\" 2.8K Display",
                    desc: "144Hz refresh rate with Dolby Vision support."
                },
                {
                    icon: "✏️",
                    title: "Xiaomi Smart Pen",
                    desc: "Low latency stylus for precise note-taking and drawing."
                },
                {
                    icon: "🔋",
                    title: "All-Day Battery",
                    desc: "8850mAh battery with 67W fast charging."
                }
            ]
        },
        {
            name: "Xiaomi Poco F7 PRO",
            price: "PHP 27,999",
            image: "images/xiaomi-poco-f7-pro.jpg",
            description: "Flagship Killer with Pro Performance",
            page: "xiaomi-poco-f7-pro.html",
            highlights: [
                {
                    icon: "⚡",
                    title: "Snapdragon 8 Gen 3",
                    desc: "Powerful flagship processor for elite performance."
                },
                {
                    icon: "📷",
                    title: "50MP Pro Camera",
                    desc: "Advanced imaging system with OIS and 8K video."
                },
                {
                    icon: "🔋",
                    title: "90W HyperCharge",
                    desc: "Fully charges in just 19 minutes (4600mAh battery)."
                }
            ]
        },
        {
            name: "Xiaomi Poco F7 ULTRA",
            price: "PHP 39,999",
            image: "images/xiaomi-poco-f7-ultra.jpg",
            description: "Ultimate Performance Without Compromise",
            page: "xiaomi-poco-f7-ultra.html",
            highlights: [
                {
                    icon: "🚀",
                    title: "Snapdragon 8 Elite",
                    desc: "Top-tier chipset with liquid cooling technology."
                },
                {
                    icon: "📷",
                    title: "1-Inch Main Sensor",
                    desc: "Professional-grade camera with Leica optics."
                },
                {
                    icon: "🖥️",
                    title: "LTPO 2K Display",
                    desc: "6.67\" AMOLED with 1-120Hz adaptive refresh rate."
                }
            ]
        },
        {
            name: "Xiaomi Poco X7",
            price: "PHP 14,999",
            image: "images/xiaomi-poco-x7.jpg",
            description: "Balanced Performance for Everyday Use",
            page: "xiaomi-poco-x7.html",
            highlights: [
                {
                    icon: "⚡",
                    title: "Dimensity 7300-Ultra",
                    desc: "Efficient 4nm processor with 5G connectivity."
                },
                {
                    icon: "🔋",
                    title: "45W Turbo Charging",
                    desc: "5110mAh battery charges to 100% in 45 minutes."
                },
                {
                    icon: "📷",
                    title: "50MP OIS Camera",
                    desc: "Triple camera system with optical image stabilization."
                }
            ]
        },
        {
            name: "Xiaomi Poco X7 Pro",
            price: "PHP 17,999",
            image: "images/xiaomi-poco-x7-pro.jpg",
            description: "Premium Features at a Mid-Range Price",
            page: "xiaomi-poco-x7-pro.html",
            highlights: [
                {
                    icon: "🚀",
                    title: "Dimensity 8400-Ultra",
                    desc: "4nm chipset with excellent power efficiency."
                },
                {
                    icon: "🖥️",
                    title: "120Hz CrystalRes AMOLED Display",
                    desc: "6.67\" screen with Dolby Vision and HDR10+."
                },
                {
                    icon: "📷",
                    title: "50MP Main Camera",
                    desc: "High-resolution sensor with advanced night mode."
                }
            ]
        },
        {
            name: "Xiaomi Mix Flip",
            price: "PHP 81,341.59",
            image: "images/xiaomi-mix-flip.jpg",
            description: "Unleash your creativity with the Xiaomi Mix Flip, featuring a Snapdragon 8 Gen 3 processor, a stunning Leica camera, and rapid 67W HyperCharge in a sleek foldable design.",
            page: "xiaomi-mix-flip.html",
            highlights: [
                {
                    icon: "⚡",
                    title: "Snapdragon 8 Gen 3",
                    desc: "4nm power-efficient mobile platform with up to 3.3GHz CPU for unmatched performance."
                },
                {
                    icon: "🔋",
                    title: "67W HyperCharge",
                    desc: "4780mAh battery charges quickly, providing all-day power in just minutes."
                },
                {
                    icon: "📸",
                    title: "Leica Camera System",
                    desc: "50MP main camera with advanced features for stunning photography and 8K video recording."
                }
            ]
        }
    ];

    function generateShopItems() {
        shopContainer.innerHTML = "";
        products.forEach(product => {
            const card = document.createElement("div");
            card.classList.add("card");

            card.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <span>${product.name}</span>
                <p>Price: ${product.price}</p>
                <button class="button-buy" data-product="${product.name}">View</button>
            `;
            shopContainer.appendChild(card);
        });
    }

    function showProductModal(productName) {
        const product = products.find(p => p.name === productName);
        if (!product) return;

        // Update modal content
        modalContent.querySelector(".product-title").textContent = product.name;
        modalContent.querySelector(".product-tagline").textContent = product.description;
        modalContent.querySelector(".product-image").src = product.image;
        modalContent.querySelector(".preorder-btn").textContent = "More Information"; // Change button text

        // Update highlights
        const highlightsContainer = modalContent.querySelector(".product-highlights");
        highlightsContainer.innerHTML = "";

        product.highlights.forEach(highlight => {
            const highlightCard = document.createElement("div");
            highlightCard.classList.add("highlight-card");
            highlightCard.innerHTML = `
    <div class="highlight-icon">${highlight.icon}</div>
    <h3 class="highlight-title">${highlight.title}</h3>
    <p class="highlight-desc">${highlight.desc}</p>
`;
            highlightsContainer.appendChild(highlightCard);
        });

        // Show modal
        productModal.style.display = "flex";
        mainContent.classList.add("blur");
        document.body.style.overflow = "hidden";

        // Add event listener for the "More Information" button
        const moreInfoButton = modalContent.querySelector(".preorder-btn");
        moreInfoButton.onclick = () => {
            window.location.href = product.page; // Redirect to the specified page
        };
    }

    // Generate shop items
    generateShopItems();

    // Event delegation for dynamically added buttons
    shopContainer.addEventListener("click", (event) => {
        if (event.target.classList.contains("button-buy")) {
            const productName = event.target.getAttribute("data-product");
            showProductModal(productName);
        }
    });

    // Close modal
    closeModal.addEventListener("click", () => {
        productModal.style.display = "none";
        mainContent.classList.remove("blur");
        document.body.style.overflow = "auto";
    });

    // Close modal when clicking outside
    productModal.addEventListener("click", (e) => {
        if (e.target === productModal) {
            productModal.style.display = "none";
            mainContent.classList.remove("blur");
            document.body.style.overflow = "auto";
        }
    });
});