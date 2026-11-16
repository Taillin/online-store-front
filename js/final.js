// Final Project: theme, local profile, FAQ and public product API.
document.addEventListener('DOMContentLoaded', function () {
    var themeButton = document.getElementById('themeToggle');
    var storageNotice = document.getElementById('storageNotice');

    function updateThemeButton() {
        var dark = document.documentElement.getAttribute('data-bs-theme') === 'dark';
        themeButton.textContent = dark ? 'Light theme' : 'Dark theme';
        themeButton.setAttribute('aria-pressed', String(dark));
    }

    themeButton.addEventListener('click', function () {
        var theme = document.documentElement.getAttribute('data-bs-theme') === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-bs-theme', theme);
        updateThemeButton();
        try {
            localStorage.setItem('iaidev-theme', theme);
            storageNotice.textContent = '';
        } catch (error) {
            storageNotice.textContent = 'The theme could not be saved. It will reset when you leave this page.';
        }
    });
    updateThemeButton();

    // This is a browser-only demo profile, not server authentication.
    var user = null;
    var accountLink = document.getElementById('accountLink');
    var signOutButton = document.getElementById('signOut');
    var signInForm = document.getElementById('signInForm');
    var profile = document.getElementById('profilePanel');

    try {
        var savedUser = JSON.parse(localStorage.getItem('iaidev-user'));
        if (savedUser && typeof savedUser.name === 'string' && savedUser.name.trim().length >= 2 && savedUser.name.length <= 40 && typeof savedUser.email === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(savedUser.email)) {
            user = savedUser;
        }
    } catch (error) {
        // Invalid or unavailable storage is treated as a signed-out state.
    }

    function updateProfile() {
        accountLink.textContent = user ? 'Profile: ' + user.name : 'Sign in';
        signOutButton.hidden = !user;
        if (signInForm) {
            signInForm.hidden = Boolean(user);
            profile.hidden = !user;
            if (user) {
                document.getElementById('profileName').textContent = user.name;
                document.getElementById('profileEmail').textContent = user.email;
            }
        }
    }

    if (signInForm) {
        signInForm.addEventListener('submit', function (event) {
            event.preventDefault();
            var name = document.getElementById('signInName');
            var email = document.getElementById('signInEmail');
            var status = document.getElementById('signInStatus');
            var nameValid = name.value.trim().length >= 2 && name.value.trim().length <= 40;
            var emailValid = email.validity.valid && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim());
            name.classList.toggle('is-invalid', !nameValid);
            email.classList.toggle('is-invalid', !emailValid);
            name.setAttribute('aria-invalid', String(!nameValid));
            email.setAttribute('aria-invalid', String(!emailValid));
            status.textContent = '';
            if (!nameValid || !emailValid) {
                status.textContent = 'Check your name and email.';
                (nameValid ? email : name).focus();
                return;
            }
            var nextUser = { name: name.value.trim(), email: email.value.trim() };
            try {
                localStorage.setItem('iaidev-user', JSON.stringify(nextUser));
                user = nextUser;
                signInForm.reset();
                updateProfile();
                document.getElementById('profileName').focus();
            } catch (error) {
                status.textContent = 'Could not save the profile. Allow browser storage and try again.';
            }
        });
    }

    signOutButton.addEventListener('click', function () {
        try {
            localStorage.removeItem('iaidev-user');
            user = null;
            updateProfile();
            accountLink.focus();
            storageNotice.textContent = 'You are signed out.';
        } catch (error) {
            storageNotice.textContent = 'Could not remove the profile. Allow browser storage and try again.';
        }
    });
    updateProfile();

    // Each FAQ button opens its own answer with a jQuery animation.
    $('.faq-question').on('click', function () {
        var open = $(this).attr('aria-expanded') === 'true';
        $(this).attr('aria-expanded', String(!open));
        $(this).find('.faq-indicator').text(open ? '+' : '−');
        var duration = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 200;
        $('#' + $(this).attr('aria-controls')).stop(true, true).slideToggle(duration);
    });

    var apiCategory = document.getElementById('apiCategory');
    if (apiCategory) {
        var refreshButton = document.getElementById('refreshProducts');
        var apiStatus = document.getElementById('apiStatus');
        var apiGrid = document.getElementById('apiProducts');
        var apiTemplate = document.getElementById('apiProductTemplate');

        async function loadApiProducts() {
            apiCategory.disabled = true;
            refreshButton.disabled = true;
            apiGrid.setAttribute('aria-busy', 'true');
            apiGrid.replaceChildren();
            apiStatus.classList.remove('text-danger');
            apiStatus.textContent = 'Loading products...';
            var controller = new AbortController();
            var timeout = setTimeout(function () { controller.abort(); }, 10000);
            try {
                var url = 'https://dummyjson.com/products/category/' + encodeURIComponent(apiCategory.value) + '?limit=6';
                var response = await fetch(url, { signal: controller.signal });
                if (!response.ok) throw new Error('HTTP ' + response.status);
                var data = await response.json();
                if (!Array.isArray(data.products)) throw new Error('Invalid response');
                for (var i = 0; i < data.products.length; i++) {
                    var product = data.products[i];
                    if (!product || typeof product.title !== 'string' || typeof product.price !== 'number' || !Number.isFinite(product.price) || product.price < 0) throw new Error('Invalid product');
                    var card = apiTemplate.content.cloneNode(true);
                    card.querySelector('.product-title').textContent = product.title;
                    card.querySelector('.product-category').textContent = apiCategory.options[apiCategory.selectedIndex].text;
                    card.querySelector('.product-desc').textContent = product.brand || 'No brand listed';
                    card.querySelector('.product-price').textContent = product.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
                    var picture = card.querySelector('img');
                    picture.alt = product.title;
                    picture.onerror = function () {
                        this.onerror = null;
                        this.src = 'images/photo-1496181133206-80ce9b88a853.jpg';
                        this.alt = 'Example photo: product image is unavailable';
                    };
                    picture.src = typeof product.thumbnail === 'string' && product.thumbnail.startsWith('https://') ? product.thumbnail : 'images/photo-1496181133206-80ce9b88a853.jpg';
                    apiGrid.appendChild(card);
                }
                apiStatus.textContent = data.products.length ? 'Products loaded: ' + data.products.length : 'No products in this category.';
            } catch (error) {
                apiGrid.replaceChildren();
                apiStatus.classList.add('text-danger');
                apiStatus.textContent = 'Could not load products. Check your connection and click Refresh.';
            } finally {
                clearTimeout(timeout);
                apiCategory.disabled = false;
                refreshButton.disabled = false;
                apiGrid.setAttribute('aria-busy', 'false');
            }
        }

        apiCategory.addEventListener('change', loadApiProducts);
        refreshButton.addEventListener('click', loadApiProducts);
        loadApiProducts();
    }
});
