// ============================================================
// NS SUPERCAR LUXURY
// MAIN.JS
// ============================================================


// ============================================================
// 1. SUPERCAR DATABASE - 20 CARS
// ============================================================

const supercars = [

    {
        id: 1,
        brand: "lamborghini",
        brandName: "Lamborghini",
        model: "Revuelto",
        year: "2026",
        engine: "6.5L V12 Hybrid",
        power: "1,001 HP",
        speed: "350+ km/h",
        category: "Luxury Hypercar",
        image: "images/cars/lamborghini-revuelto.jpg"
    },

    {
        id: 2,
        brand: "lamborghini",
        brandName: "Lamborghini",
        model: "Aventador SVJ",
        year: "2022",
        engine: "6.5L V12",
        power: "770 HP",
        speed: "350 km/h",
        category: "Supercar",
        image: "images/cars/lamborghini-aventador-svj.jpg"
    },

    {
        id: 3,
        brand: "ferrari",
        brandName: "Ferrari",
        model: "SF90 Stradale",
        year: "2025",
        engine: "V8 Plug-in Hybrid",
        power: "986 HP",
        speed: "340 km/h",
        category: "Luxury Supercar",
        image: "images/cars/ferrari-sf90.jpg"
    },

    {
        id: 4,
        brand: "ferrari",
        brandName: "Ferrari",
        model: "296 GTB",
        year: "2025",
        engine: "V6 Plug-in Hybrid",
        power: "819 HP",
        speed: "330+ km/h",
        category: "Luxury Supercar",
        image: "images/cars/ferrari-296-gtb.jpg"
    },

    {
        id: 5,
        brand: "mclaren",
        brandName: "McLaren",
        model: "750S",
        year: "2025",
        engine: "4.0L Twin-Turbo V8",
        power: "740 HP",
        speed: "332 km/h",
        category: "Supercar",
        image: "images/cars/mclaren-750s.jpg"
    },

    {
        id: 6,
        brand: "mclaren",
        brandName: "McLaren",
        model: "Artura",
        year: "2025",
        engine: "V6 Hybrid",
        power: "690 HP",
        speed: "330 km/h",
        category: "Hybrid Supercar",
        image: "images/cars/mclaren-artura.jpg"
    },

    {
        id: 7,
        brand: "porsche",
        brandName: "Porsche",
        model: "911 GT3 RS",
        year: "2025",
        engine: "4.0L Flat-Six",
        power: "518 HP",
        speed: "296 km/h",
        category: "Performance Car",
        image: "images/cars/porsche-911-gt3-rs.jpg"
    },

    {
        id: 8,
        brand: "porsche",
        brandName: "Porsche",
        model: "918 Spyder",
        year: "2015",
        engine: "V8 Hybrid",
        power: "887 HP",
        speed: "345 km/h",
        category: "Hypercar",
        image: "images/cars/porsche-918-spyder.jpg"
    },

    {
        id: 9,
        brand: "bugatti",
        brandName: "Bugatti",
        model: "Chiron",
        year: "2024",
        engine: "8.0L Quad-Turbo W16",
        power: "1,479 HP",
        speed: "420 km/h",
        category: "Hypercar",
        image: "images/cars/bugatti-chiron.jpg"
    },

    {
        id: 10,
        brand: "bugatti",
        brandName: "Bugatti",
        model: "W16 Mistral",
        year: "2025",
        engine: "8.0L W16",
        power: "1,578 HP",
        speed: "420+ km/h",
        category: "Hypercar",
        image: "images/cars/bugatti-mistral.jpg"
    },

    {
        id: 11,
        brand: "koenigsegg",
        brandName: "Koenigsegg",
        model: "Jesko",
        year: "2025",
        engine: "5.0L Twin-Turbo V8",
        power: "1,600 HP",
        speed: "High Performance",
        category: "Hypercar",
        image: "images/cars/koenigsegg-jesko.jpg"
    },

    {
        id: 12,
        brand: "koenigsegg",
        brandName: "Koenigsegg",
        model: "Gemera",
        year: "2026",
        engine: "Hybrid",
        power: "2,300 HP",
        speed: "400 km/h",
        category: "Mega GT",
        image: "images/cars/koenigsegg-gemera.jpg"
    },

    {
        id: 13,
        brand: "astonmartin",
        brandName: "Aston Martin",
        model: "Valkyrie",
        year: "2025",
        engine: "6.5L V12 Hybrid",
        power: "1,139 HP",
        speed: "350 km/h",
        category: "Hypercar",
        image: "images/cars/aston-martin-valkyrie.jpg"
    },

    {
        id: 14,
        brand: "astonmartin",
        brandName: "Aston Martin",
        model: "DBS",
        year: "2023",
        engine: "5.2L Twin-Turbo V12",
        power: "715 HP",
        speed: "340 km/h",
        category: "Luxury GT",
        image: "images/cars/aston-martin-dbs.jpg"
    },

    {
        id: 15,
        brand: "mercedes",
        brandName: "Mercedes-AMG",
        model: "GT Black Series",
        year: "2022",
        engine: "4.0L Twin-Turbo V8",
        power: "720 HP",
        speed: "325 km/h",
        category: "Performance Car",
        image: "images/cars/mercedes-amg-gt-black.jpg"
    },

    {
        id: 16,
        brand: "audi",
        brandName: "Audi",
        model: "R8 V10 Performance",
        year: "2023",
        engine: "5.2L V10",
        power: "602 HP",
        speed: "331 km/h",
        category: "Supercar",
        image: "images/cars/audi-r8.jpg"
    },

    {
        id: 17,
        brand: "maserati",
        brandName: "Maserati",
        model: "MC20",
        year: "2025",
        engine: "3.0L Twin-Turbo V6",
        power: "621 HP",
        speed: "325 km/h",
        category: "Supercar",
        image: "images/cars/maserati-mc20.jpg"
    },

    {
        id: 18,
        brand: "pagani",
        brandName: "Pagani",
        model: "Huayra",
        year: "2023",
        engine: "6.0L Twin-Turbo V12",
        power: "730+ HP",
        speed: "High Performance",
        category: "Hypercar",
        image: "images/cars/pagani-huayra.jpg"
    },

    {
        id: 19,
        brand: "rimac",
        brandName: "Rimac",
        model: "Nevera",
        year: "2025",
        engine: "Quad Electric Motors",
        power: "1,914 HP",
        speed: "412 km/h",
        category: "Electric Hypercar",
        image: "images/cars/rimac-nevera.jpg"
    },

    {
        id: 20,
        brand: "lotus",
        brandName: "Lotus",
        model: "Emira",
        year: "2025",
        engine: "Performance Engine",
        power: "400 HP",
        speed: "290 km/h",
        category: "Sports Car",
        image: "images/cars/lotus-emira.jpg"
    }

];


// ============================================================
// 2. OTHER BRANDS
// ============================================================

const otherBrands = [
    "bugatti",
    "koenigsegg",
    "astonmartin",
    "mercedes",
    "audi",
    "maserati",
    "pagani",
    "rimac",
    "lotus"
];


// ============================================================
// 3. CREATE CAR CARD
// ============================================================

function createCarCard(car) {

    return `
        <div class="col-xl-3 col-lg-4 col-md-6 car-column"
             data-brand="${car.brand}">

            <div class="car-card">

                <div class="car-image">

                    <img src="${car.image}"
                         alt="${car.brandName} ${car.model}"
                         loading="lazy">

                    <div class="car-year">
                        ${car.year}
                    </div>

                    <div class="car-brand-badge">
                        ${car.brandName}
                    </div>

                    <div class="car-overlay">

                        <button type="button"
                                class="car-view-btn"
                                onclick="showCarDetails(${car.id})"
                                aria-label="View ${car.brandName} ${car.model}">

                            <i class="bi bi-arrow-up-right"></i>

                        </button>

                    </div>

                </div>


                <div class="car-content">

                    <p class="car-brand">
                        ${car.brandName}
                    </p>

                    <h3>
                        ${car.model}
                    </h3>


                    <div class="car-specs">

                        <div class="car-spec-item">

                            <i class="bi bi-gear"></i>

                            <div>
                                <span>ENGINE</span>
                                <strong>${car.engine}</strong>
                            </div>

                        </div>


                        <div class="car-spec-item">

                            <i class="bi bi-lightning-charge"></i>

                            <div>
                                <span>POWER</span>
                                <strong>${car.power}</strong>
                            </div>

                        </div>


                        <div class="car-spec-item">

                            <i class="bi bi-speedometer2"></i>

                            <div>
                                <span>TOP SPEED</span>
                                <strong>${car.speed}</strong>
                            </div>

                        </div>

                    </div>


                    <div class="car-card-bottom">

                        <span class="car-category">
                            ${car.category}
                        </span>

                        <button type="button"
                                onclick="showCarDetails(${car.id})"
                                class="car-details-btn">

                            DETAILS
                            <i class="bi bi-arrow-right"></i>

                        </button>

                    </div>

                </div>

            </div>

        </div>
    `;
}


// ============================================================
// 4. RENDER CARS
// ============================================================

function renderCars(cars, container) {

    if (!container) {
        return;
    }

    container.innerHTML = cars
        .map(createCarCard)
        .join("");
}


// ============================================================
// 5. PAGE ELEMENTS
// ============================================================

const homeCarContainer =
    document.getElementById("carContainer");

const allCarsContainer =
    document.getElementById("allCarsContainer");

const filterButtons =
    document.querySelectorAll(".filter-btn");

const carSearch =
    document.getElementById("carSearch");

const resetFilter =
    document.getElementById("resetFilter");

let selectedBrand = "all";


// ============================================================
// 6. HOME PAGE
// แสดง 8 คันบนหน้าแรก
// ============================================================

if (homeCarContainer) {

    const homeCars =
        supercars.slice(0, 8);

    renderCars(
        homeCars,
        homeCarContainer
    );
}


// ============================================================
// 7. CARS PAGE
// แสดงรถ 20 คัน
// ============================================================

if (allCarsContainer) {

    renderCars(
        supercars,
        allCarsContainer
    );

    updateCarCount(supercars.length);
}


// ============================================================
// 8. UPDATE CAR COUNT
// ============================================================

function updateCarCount(number) {

    const carCount =
        document.getElementById("carCount");

    if (carCount) {
        carCount.textContent = number;
    }
}


// ============================================================
// 9. NO RESULT
// ============================================================

function showNoResult(number) {

    const noResult =
        document.getElementById("noCarResult");

    if (!noResult) {
        return;
    }

    if (number === 0) {
        noResult.style.display = "block";
    } else {
        noResult.style.display = "none";
    }
}


// ============================================================
// 10. FILTER + SEARCH
// ============================================================

function filterAndSearchCars() {

    if (!allCarsContainer) {
        return;
    }


    let searchText = "";

    if (carSearch) {

        searchText =
            carSearch.value
                .toLowerCase()
                .trim();
    }


    const filteredCars =
        supercars.filter(function (car) {

            let brandMatch = false;


            if (selectedBrand === "all") {

                brandMatch = true;

            } else if (selectedBrand === "other") {

                brandMatch =
                    otherBrands.includes(car.brand);

            } else {

                brandMatch =
                    car.brand === selectedBrand;
            }


            const searchData = `
                ${car.brandName}
                ${car.model}
                ${car.engine}
                ${car.power}
                ${car.speed}
                ${car.year}
                ${car.category}
            `.toLowerCase();


            const searchMatch =
                searchData.includes(searchText);


            return brandMatch && searchMatch;
        });


    renderCars(
        filteredCars,
        allCarsContainer
    );


    updateCarCount(
        filteredCars.length
    );


    showNoResult(
        filteredCars.length
    );
}


// ============================================================
// 11. FILTER BUTTONS
// ============================================================

filterButtons.forEach(function (button) {

    button.addEventListener(
        "click",
        function () {

            selectedBrand =
                this.getAttribute("data-filter") || "all";


            filterButtons.forEach(function (btn) {
                btn.classList.remove("active");
            });


            this.classList.add("active");


            filterAndSearchCars();
        }
    );

});


// ============================================================
// 12. SEARCH
// ============================================================

if (carSearch) {

    carSearch.addEventListener(
        "input",
        filterAndSearchCars
    );
}


// ============================================================
// 13. RESET FILTER
// ============================================================

if (resetFilter) {

    resetFilter.addEventListener(
        "click",
        function () {

            selectedBrand = "all";


            if (carSearch) {
                carSearch.value = "";
            }


            filterButtons.forEach(function (button) {

                button.classList.remove("active");

                if (
                    button.getAttribute("data-filter") === "all"
                ) {
                    button.classList.add("active");
                }

            });


            filterAndSearchCars();
        }
    );
}


// ============================================================
// 14. URL BRAND FILTER
//
// cars.html?brand=ferrari
// cars.html?brand=bugatti
// ============================================================

function checkURLBrand() {

    if (!allCarsContainer) {
        return;
    }


    const params =
        new URLSearchParams(
            window.location.search
        );


    const brand =
        params.get("brand");


    if (!brand) {
        return;
    }


    const requestedBrand =
        brand
            .toLowerCase()
            .replace(/\s+/g, "");


    const brandExists =
        supercars.some(function (car) {
            return car.brand === requestedBrand;
        });


    if (!brandExists) {
        return;
    }


    selectedBrand =
        requestedBrand;


    let buttonFound = false;


    filterButtons.forEach(function (button) {

        button.classList.remove("active");


        if (
            button.getAttribute("data-filter") ===
            selectedBrand
        ) {

            button.classList.add("active");

            buttonFound = true;
        }

    });


    // ถ้าไม่มีปุ่มเฉพาะ Brand
    // ให้ MORE แสดง Active

    if (!buttonFound) {

        const otherButton =
            document.querySelector(
                '.filter-btn[data-filter="other"]'
            );


        if (otherButton) {
            otherButton.classList.add("active");
        }
    }


    const filteredCars =
        supercars.filter(function (car) {
            return car.brand === selectedBrand;
        });


    renderCars(
        filteredCars,
        allCarsContainer
    );


    updateCarCount(
        filteredCars.length
    );


    showNoResult(
        filteredCars.length
    );
}


checkURLBrand();


// ============================================================
// 15. CAR DETAILS MODAL
// ============================================================

function showCarDetails(id) {

    const car =
        supercars.find(function (item) {
            return item.id === id;
        });


    if (!car) {
        return;
    }


    if (typeof bootstrap === "undefined") {

        console.error(
            "Bootstrap JavaScript is not loaded."
        );

        return;
    }


    const oldModal =
        document.getElementById(
            "carDetailsModal"
        );


    if (oldModal) {
        oldModal.remove();
    }


    const contactCar =
        encodeURIComponent(
            car.brandName + " " + car.model
        );


    const modalHTML = `
        <div class="modal fade"
             id="carDetailsModal"
             tabindex="-1"
             aria-hidden="true">

            <div class="modal-dialog modal-xl modal-dialog-centered">

                <div class="modal-content car-modal">

                    <button type="button"
                            class="btn-close btn-close-white car-modal-close"
                            data-bs-dismiss="modal"
                            aria-label="Close">
                    </button>


                    <div class="row g-0">

                        <div class="col-lg-7">

                            <div class="car-modal-image">

                                <img src="${car.image}"
                                     alt="${car.brandName} ${car.model}">

                                <div class="car-modal-brand">
                                    ${car.brandName}
                                </div>

                            </div>

                        </div>


                        <div class="col-lg-5">

                            <div class="car-modal-content">

                                <p class="section-label">
                                    ${car.brandName}
                                </p>

                                <h2>
                                    ${car.model}
                                </h2>

                                <p class="modal-year">
                                    MODEL YEAR ${car.year}
                                </p>


                                <div class="modal-spec">

                                    <span>ENGINE</span>

                                    <strong>
                                        ${car.engine}
                                    </strong>

                                </div>


                                <div class="modal-spec">

                                    <span>POWER</span>

                                    <strong>
                                        ${car.power}
                                    </strong>

                                </div>


                                <div class="modal-spec">

                                    <span>TOP SPEED</span>

                                    <strong>
                                        ${car.speed}
                                    </strong>

                                </div>


                                <div class="modal-spec">

                                    <span>CATEGORY</span>

                                    <strong>
                                        ${car.category}
                                    </strong>

                                </div>


                                <a href="contact.html?car=${contactCar}"
                                   class="btn btn-luxury w-100">

                                    CONTACT ABOUT THIS CAR

                                    <i class="bi bi-arrow-right ms-2"></i>

                                </a>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    `;


    document.body.insertAdjacentHTML(
        "beforeend",
        modalHTML
    );


    const modalElement =
        document.getElementById(
            "carDetailsModal"
        );


    const modal =
        new bootstrap.Modal(
            modalElement
        );


    modal.show();


    modalElement.addEventListener(
        "hidden.bs.modal",
        function () {

            modal.dispose();
            modalElement.remove();

        },
        {
            once: true
        }
    );
}


// ทำให้ onclick ใน HTML เรียกได้แน่นอน
window.showCarDetails =
    showCarDetails;


// ============================================================
// 16. CONTACT PAGE - CAR FROM URL
// ============================================================

function checkContactCar() {

    const subject =
        document.getElementById("subject");


    if (!subject) {
        return;
    }


    const params =
        new URLSearchParams(
            window.location.search
        );


    const car =
        params.get("car");


    if (car) {

        subject.value =
            "Interested in " + car;
    }
}


checkContactCar();


// ============================================================
// 17. CONTACT FORM
// Front-end Demo
// ============================================================

const contactForm =
    document.getElementById("contactForm");

const formSuccess =
    document.getElementById("formSuccess");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            if (!contactForm.checkValidity()) {

                contactForm.classList.add(
                    "was-validated"
                );

                return;
            }


            if (formSuccess) {

                formSuccess.style.display =
                    "flex";
            }


            contactForm.reset();


            contactForm.classList.remove(
                "was-validated"
            );


            if (formSuccess) {

                formSuccess.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });
            }
        }
    );
}


// ============================================================
// 18. SMOOTH SCROLL
// ============================================================

document
    .querySelectorAll('a[href^="#"]')
    .forEach(function (link) {

        link.addEventListener(
            "click",
            function (event) {

                const targetID =
                    this.getAttribute("href");


                if (
                    !targetID ||
                    targetID === "#" ||
                    targetID.length <= 1
                ) {
                    return;
                }


                const target =
                    document.querySelector(
                        targetID
                    );


                if (target) {

                    event.preventDefault();


                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
            }
        );

    });


// ============================================================
// 19. SCROLL REVEAL
// ============================================================

function setupRevealAnimation() {

    const revealElements =
        document.querySelectorAll(
            ".car-card, " +
            ".brand-card, " +
            ".value-card, " +
            ".experience-card, " +
            ".cars-feature-card, " +
            ".contact-feature"
        );


    if (
        !("IntersectionObserver" in window)
    ) {

        revealElements.forEach(
            function (element) {

                element.classList.add(
                    "reveal-active"
                );

            }
        );

        return;
    }


    const revealObserver =
        new IntersectionObserver(
            function (entries, observer) {

                entries.forEach(
                    function (entry) {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "reveal-active"
                            );


                            observer.unobserve(
                                entry.target
                            );
                        }
                    }
                );

            },
            {
                threshold: 0.1
            }
        );


    revealElements.forEach(
        function (element) {

            element.classList.add(
                "reveal"
            );


            revealObserver.observe(
                element
            );
        }
    );
}


setupRevealAnimation();


// ============================================================
// 20. IMAGE ERROR FALLBACK
// ถ้าชื่อรูปผิด จะไม่ทำให้ JavaScript หยุดทำงาน
// ============================================================

document.addEventListener(
    "error",
    function (event) {

        const target =
            event.target;


        if (
            target &&
            target.tagName === "IMG"
        ) {

            target.classList.add(
                "image-error"
            );

        }

    },
    true
);


// ============================================================
// END MAIN.JS
// ============================================================