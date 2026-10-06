if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
}


window.addEventListener("load", function () {
L
    if (!window.location.hash) {
        window.scrollTo(0, 0);
    }

    document.body.classList.add("page-loaded");

    updateActiveLink();
    updateHeader();

});


const menuToggle =
    document.getElementById("menuToggle");

const navLinks =
    document.getElementById("navLinks");

function setMenuIcon(isOpen) {

    if (!menuToggle) return;

    const icon =
        menuToggle.querySelector("i");

    if (!icon) return;

    icon.classList.toggle(
        "fa-xmark",
        isOpen
    );

    icon.classList.toggle(
        "fa-bars",
        !isOpen
    );
}

function closeMenu() {

    if (navLinks) {
        navLinks.classList.remove("show");
    }

    setMenuIcon(false);
}

if (menuToggle && navLinks) {

    menuToggle.addEventListener(
        "click",
        function (event) {

            event.stopPropagation();

            const isOpen =
                navLinks.classList.toggle("show");

            setMenuIcon(isOpen);

        }
    );

}

const navigationLinks =
    document.querySelectorAll(
        ".nav-links a"
    );


navigationLinks.forEach(function (link) {

    link.addEventListener(
        "click",
        function () {

            closeMenu();

        }
    );

});

const sections =
    document.querySelectorAll(
        "main section[id]"
    );


function updateActiveLink() {

    let currentSection = "";


    const scrollPosition =
        window.scrollY + 180;


    sections.forEach(
        function (section) {

            const sectionTop =
                section.offsetTop;

            const sectionBottom =
                sectionTop +
                section.offsetHeight;


            if (
                scrollPosition >= sectionTop &&
                scrollPosition < sectionBottom
            ) {

                currentSection =
                    section.getAttribute("id");

            }

        }
    );


    navigationLinks.forEach(
        function (link) {

            const href =
                link.getAttribute("href");


            link.classList.toggle(
                "active",
                href === "#" + currentSection
            );

        }
    );

}

const header =
    document.querySelector(".header");


function updateHeader() {

    if (!header) return;

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

}


// Run when scrolling
window.addEventListener(
    "scroll",
    function () {

        updateActiveLink();
        updateHeader();

    }
);

const anchorLinks =
    document.querySelectorAll(
        'a[href^="#"]'
    );


anchorLinks.forEach(
    function (link) {

        link.addEventListener(
            "click",
            function (event) {

                const targetId =
                    this.getAttribute("href");


                // Ignore empty "#"
                if (
                    !targetId ||
                    targetId === "#"
                ) {

                    event.preventDefault();

                    return;

                }


                const targetSection =
                    document.querySelector(
                        targetId
                    );


                // Scroll to section
                if (targetSection) {

                    event.preventDefault();

                    targetSection.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            }
        );

    }
);

const contactForm =
    document.getElementById(
        "contactForm"
    );


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (event) {
            event.preventDefault();


            const nameInput =
                document.getElementById("name");

            const emailInput =
                document.getElementById("email");

            const messageInput =
                document.getElementById("message");
            if (
                !nameInput ||
                !emailInput ||
                !messageInput
            ) {

                return;

            }
            const name =
                nameInput.value.trim();

            const email =
                emailInput.value.trim();

            const message =
                messageInput.value.trim();

            if (
                name === "" ||
                email === "" ||
                message === ""
            ) {

                alert(
                    "Please fill in all the fields."
                );

                return;

            }

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


            if (
                !emailPattern.test(email)
            ) {

                alert(
                    "Please enter a valid email address."
                );

                return;

            }

            alert(
                "Thank you, " +
                name +
                "! Your message has been received."
            );


            // Clear form
            contactForm.reset();

        }
    );

}



const footerYear =
    document.querySelector(
        ".footer-bottom p"
    );


if (footerYear) {

    footerYear.textContent =
        "© " +
        new Date().getFullYear() +
        " Karunya Devi. All rights reserved.";

}




document.addEventListener(
    "click",
    function (event) {

       
        if (
            !menuToggle ||
            !navLinks
        ) {

            return;

        }


        const clickedInsideMenu =
            navLinks.contains(
                event.target
            );


        const clickedMenuButton =
            menuToggle.contains(
                event.target
            );


        // Close if clicked outside
        if (
            !clickedInsideMenu &&
            !clickedMenuButton
        ) {

            closeMenu();

        }

    }
);


document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape" &&
            navLinks &&
            navLinks.classList.contains("show")
        ) {

            closeMenu();

        }

    }
);

window.addEventListener(
    "resize",
    function () {

        if (
            window.innerWidth > 700 &&
            navLinks
        ) {

            closeMenu();

        }

    }
);




console.log(
    "%c🚀 Welcome to Karunya Devi's Portfolio!",
    "font-size:18px;font-weight:bold;"
);

console.log(
    "%cBuilt with HTML, CSS and JavaScript.",
    "font-size:14px;"
);

console.log(
    "%cFull Stack Developer | B.E. CSE",
    "font-size:13px;"
);