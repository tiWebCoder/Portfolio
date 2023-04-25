
    /**
     * Opens the menu, hides the menu icon and displays the close
     * menu icon
     */
    function openMenu(){
        var menuIcon = document.getElementById('menu-icon');
        var closeMenuIcon = document.getElementById('close-menu-icon');
        var menu = document.getElementById('menu');

        menuIcon.style.display = 'none';
        closeMenuIcon.style.display = 'block';
        menu.style.transform = 'scaleY(1)';
        menu.style.opacity = '1';
    }

    /**
     * Closes the menu, hides the close menu icon and displays the
     * menu icon
     */
    function closeMenu(){
        var menuIcon = document.getElementById('menu-icon');
        var closeMenuIcon = document.getElementById('close-menu-icon');
        var menu = document.getElementById('menu');

        menuIcon.style.display = 'block';
        closeMenuIcon.style.display = 'none';
        menu.style.transform = 'scaleY(0)';
        menu.style.opacity = '0';
    }

    