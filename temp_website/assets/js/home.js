/*===== NAVIGATION =====*/
document.addEventListener("DOMContentLoaded", function () {

    //  open and close nav 
    document.getElementById('navbar-toggle').addEventListener('click', function () {
        var navUl = document.querySelector('nav ul');
        if (navUl.style.display === 'none' || navUl.style.display === '') {
            navUl.style.display = 'block';
        } else {
            navUl.style.display = 'none';
        }
    });

    // Hamburger toggle
    document.getElementById('navbar-toggle').addEventListener('click', function () {
        this.classList.toggle('active');
    });

    // If a link has a dropdown, add sub menu toggle.
    var dropdownLinks = document.querySelectorAll('nav ul li a:not(:only-child)');
    dropdownLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            var navbarDropdown = this.nextElementSibling;
            if (navbarDropdown.style.display === 'none' || navbarDropdown.style.display === '') {
                navbarDropdown.style.display = 'block';
            } else {
                navbarDropdown.style.display = 'none';
            }

            // Close dropdown when select another dropdown
            document.querySelectorAll('.navbar-dropdown').forEach(function (dropdown) {
                if (dropdown !== navbarDropdown) {
                    dropdown.style.display = 'none';
                }
            });

            e.stopPropagation();
        });
    });

    // Click outside the dropdown will remove the dropdown class
    document.addEventListener('click', function () {
        document.querySelectorAll('.navbar-dropdown').forEach(function (dropdown) {
            dropdown.style.display = 'none';
        });
    });

});