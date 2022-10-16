var navLinks = document.getElementById("nav-items");

    function showMenu() {
            navLinks.style.right = "0"
    }
    
    
    function hideMenu() {
            navLinks.style.right = "-30%"
    } 



    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log(entry)
            if (entry.isIntersecting) {
                entry.target.classList.add('show')
            } else {
                entry.target.classList.remove('show');
            }
        });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

