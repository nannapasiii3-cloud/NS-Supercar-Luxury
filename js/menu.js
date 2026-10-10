// ============================================================
// NS SUPERCAR LUXURY
// MENU.JS
// ============================================================

document.addEventListener("DOMContentLoaded", function () {

    // --------------------------------------------------------
    // ตรวจสอบหน้าปัจจุบัน
    // --------------------------------------------------------

    let currentPage = window.location.pathname.split("/").pop();

    if (currentPage === "") {
        currentPage = "index.html";
    }


    // --------------------------------------------------------
    // NAVBAR
    // --------------------------------------------------------

    const menu = `
        <nav class="navbar navbar-expand-lg navbar-dark fixed-top"
             id="mainNavbar">

            <div class="container">

                <!-- LOGO -->

                <a class="navbar-brand" href="index.html">

                    <div class="nav-logo">

                        <div class="logo-symbol">
                            <span class="logo-n">N</span>
                            <span class="logo-s">S</span>
                        </div>

                        <div class="logo-text">
                            <strong>SUPERCAR</strong>
                            <span>LUXURY</span>
                        </div>

                    </div>

                </a>


                <!-- MOBILE BUTTON -->

                <button class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#mainMenu"
                        aria-controls="mainMenu"
                        aria-expanded="false"
                        aria-label="Toggle navigation">

                    <span class="navbar-toggler-icon"></span>

                </button>


                <!-- MENU -->

                <div class="collapse navbar-collapse"
                     id="mainMenu">

                    <ul class="navbar-nav ms-auto align-items-lg-center">


                        <!-- HOME -->

                        <li class="nav-item">

                            <a class="nav-link ${
                                currentPage === "index.html"
                                    ? "active"
                                    : ""
                            }"
                               href="index.html">

                                HOME

                            </a>

                        </li>


                        <!-- SUPERCARS -->

                        <li class="nav-item">

                            <a class="nav-link ${
                                currentPage === "cars.html"
                                    ? "active"
                                    : ""
                            }"
                               href="cars.html">

                                SUPERCARS

                            </a>

                        </li>


                        <!-- BRANDS -->

                        <li class="nav-item">

                            <a class="nav-link ${
                                currentPage === "brands.html"
                                    ? "active"
                                    : ""
                            }"
                               href="brands.html">

                                BRANDS

                            </a>

                        </li>


                        <!-- ABOUT -->

                        <li class="nav-item">

                            <a class="nav-link ${
                                currentPage === "about.html"
                                    ? "active"
                                    : ""
                            }"
                               href="about.html">

                                ABOUT

                            </a>

                        </li>


                        <!-- CONTACT -->

                        <li class="nav-item ms-lg-3">

                            <a class="nav-link nav-contact ${
                                currentPage === "contact.html"
                                    ? "active"
                                    : ""
                            }"
                               href="contact.html">

                                CONTACT

                                <i class="bi bi-arrow-up-right ms-1"></i>

                            </a>

                        </li>


                    </ul>

                </div>

            </div>

        </nav>
    `;


    // --------------------------------------------------------
    // แสดง Menu
    // --------------------------------------------------------

    const menuContainer = document.getElementById("menu");

    if (menuContainer) {
        menuContainer.innerHTML = menu;
    }


    // --------------------------------------------------------
    // NAVBAR SCROLL EFFECT
    // --------------------------------------------------------

    const navbar = document.getElementById("mainNavbar");

    function navbarScroll() {

        if (!navbar) {
            return;
        }

        if (window.scrollY > 50) {

            navbar.classList.add("navbar-scrolled");

        } else {

            navbar.classList.remove("navbar-scrolled");

        }

    }


    navbarScroll();

    window.addEventListener(
        "scroll",
        navbarScroll
    );


    // --------------------------------------------------------
    // MOBILE MENU
    // --------------------------------------------------------

    const navLinks =
        document.querySelectorAll("#mainMenu .nav-link");


    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            const navbarCollapse =
                document.getElementById("mainMenu");


            if (
                navbarCollapse &&
                navbarCollapse.classList.contains("show") &&
                typeof bootstrap !== "undefined"
            ) {

                const bootstrapCollapse =
                    bootstrap.Collapse.getOrCreateInstance(
                        navbarCollapse
                    );

                bootstrapCollapse.hide();

            }

        });

    });

});