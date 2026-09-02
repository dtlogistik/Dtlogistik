/* =====================================================
   ДТ ЛОГИСТИК
   MAIN JAVASCRIPT
===================================================== */

document.addEventListener("DOMContentLoaded", function () {


    /* =================================================
       PRELOADER
    ================================================= */

    const preloader =
        document.getElementById("preloader");


    function hidePreloader() {

        if (!preloader) {
            return;
        }

        preloader.classList.add("hide");

        document.body.classList.add("loaded");

    }


    /*
       Прелоадер гарантированно исчезнет.
       Даже если картинка или интернет
       загрузятся с задержкой.
    */

    setTimeout(hidePreloader, 2500);


    /*
       Если всё загрузилось быстро —
       тоже скрываем его.
    */

    window.addEventListener("load", function () {

        setTimeout(hidePreloader, 900);

    });



    /* =================================================
       MOBILE MENU
    ================================================= */

    const menuButton =
        document.getElementById("menuButton");

    const nav =
        document.getElementById("nav");


    if (menuButton && nav) {

        menuButton.addEventListener(
            "click",
            function () {

                nav.classList.toggle("open");

            }
        );

    }



    /* =================================================
       CLOSE MOBILE MENU
    ================================================= */

    const links =
        document.querySelectorAll(".nav a");


    links.forEach(function (link) {

        link.addEventListener(
            "click",
            function () {

                if (nav) {

                    nav.classList.remove("open");

                }

            }
        );

    });



    /* =================================================
       SCROLL ANIMATIONS
    ================================================= */

    const revealElements =
        document.querySelectorAll(".reveal");


    if ("IntersectionObserver" in window) {


        const observer =
            new IntersectionObserver(
                function (entries) {

                    entries.forEach(
                        function (entry) {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target.classList.add(
                                    "visible"
                                );

                                observer.unobserve(
                                    entry.target
                                );

                            }

                        }
                    );

                },
                {
                    threshold: 0.12
                }
            );


        revealElements.forEach(
            function (element) {

                observer.observe(element);

            }
        );


    } else {


        revealElements.forEach(
            function (element) {

                element.classList.add("visible");

            }
        );

    }



    /* =================================================
       ПЛАВНЫЕ ЯКОРЯ
    ================================================= */

    document.querySelectorAll(
        'a[href^="#"]'
    ).forEach(function (link) {


        link.addEventListener(
            "click",
            function (event) {

                const id =
                    this.getAttribute("href");


                if (
                    id === "#" ||
                    !id
                ) {

                    return;

                }


                const target =
                    document.querySelector(id);


                if (!target) {

                    return;

                }


                event.preventDefault();


                const headerHeight = 70;


                const targetPosition =
                    target.getBoundingClientRect().top
                    +
                    window.scrollY
                    -
                    headerHeight;


                window.scrollTo({

                    top: targetPosition,

                    behavior: "smooth"

                });

            }
        );

    });



    /* =================================================
       HEADER SHADOW
    ================================================= */

    const header =
        document.querySelector(".header");


    window.addEventListener(
        "scroll",
        function () {

            if (!header) {
                return;
            }


            if (window.scrollY > 40) {

                header.style.boxShadow =
                    "0 10px 40px rgba(0,0,0,0.18)";

            } else {

                header.style.boxShadow =
                    "none";

            }

        }
    );

});