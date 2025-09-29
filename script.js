// Menu links
const menuLinks = {
    getAbout: document.getElementById("about"),
    getResume: document.getElementById("resume"),
    getContact: document.getElementById("contact")
};

// Function to remove active classes
function removeClass() {
    document.querySelectorAll("nav a").forEach(link => link.classList.remove("selected"));
    document.querySelectorAll("main section").forEach(sec => sec.classList.remove("view"));
}

// Add event listeners to each nav link
Object.keys(menuLinks).forEach(linkId => {
    let navLink = document.getElementById(linkId);
    let section = menuLinks[linkId];

    navLink.addEventListener("click", function (e) {
        e.preventDefault(); // Always handle click (desktop + mobile)
        removeClass();
        section.classList.add("view");
        navLink.classList.add("selected");
    });
});
