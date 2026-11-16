$(function () {
    function markField(selector, valid) {
        $(selector).toggleClass('is-valid', valid).toggleClass('is-invalid', !valid);
        $(selector).attr('aria-invalid', String(!valid));
        return valid;
    }

    function validEmail(value) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
    }

    function checkRegistrationField(id) {
        var value = $('#' + id).val();
        var valid = value.trim() !== '';
        if (id === 'registerEmail') valid = validEmail(value);
        if (id === 'registerPassword') valid = value.length >= 8 && !/\s/.test(value);
        if (id === 'confirmPassword') valid = value !== '' && value === $('#registerPassword').val();
        return markField('#' + id, valid);
    }

    function showStrength() {
        var password = $('#registerPassword').val();
        var label = 'weak';
        var color = 'text-danger';
        if (password.length >= 8 && /[a-zа-я]/i.test(password) && /\d/.test(password) && !/\s/.test(password)) {
            label = 'medium';
            color = 'text-warning';
        }
        if (password.length >= 12 && /[a-zа-я]/.test(password) && /[A-ZА-Я]/.test(password) && /\d/.test(password) && /[^a-zа-я0-9\s]/i.test(password) && !/\s/.test(password)) {
            label = 'strong';
            color = 'text-success';
        }
        $('#passwordStrength').removeClass('text-danger text-warning text-success').addClass(password ? color : '').text('Strength: ' + (password ? label : '—'));
    }

    $('#registrationForm input').on('input', function () {
        checkRegistrationField(this.id);
        $('#registrationStatus').text('');
        if (this.id === 'registerPassword') {
            showStrength();
            if ($('#confirmPassword').val() || $('#confirmPassword').hasClass('is-invalid')) checkRegistrationField('confirmPassword');
        }
    });

    $('#registrationForm').on('submit', function (e) {
        e.preventDefault();
        var valid = true;
        $('#registrationForm input').each(function () {
            if (!checkRegistrationField(this.id)) valid = false;
        });
        showStrength();
        $('#registrationStatus').toggleClass('text-success', valid).toggleClass('text-danger', !valid).text(valid ? 'The form is valid. This demo does not create an account.' : 'Please fix the highlighted fields.');
        if (!valid) $('#registrationForm .is-invalid').first().trigger('focus');
    });

    function checkContactField(id) {
        var valid = id === 'agreeTerms' ? $('#agreeTerms').prop('checked') : $('#' + id).val().trim() !== '';
        if (id === 'userEmail') valid = validEmail($('#userEmail').val());
        return markField('#' + id, valid);
    }

    $('#contactForm [required]').on('input change', function () {
        checkContactField(this.id);
        $('#contactStatus').text('');
    });

    $('#contactForm').on('submit', function (e) {
        e.preventDefault();
        var valid = true;
        $('#contactForm [required]').each(function () {
            if (!checkContactField(this.id)) valid = false;
        });
        $('#contactStatus').toggleClass('text-success', valid).toggleClass('text-danger', !valid).text(valid ? 'The form is valid. This demo does not send messages.' : 'Fill in the required fields and tick the box.');
        if (!valid) $('#contactForm .is-invalid').first().trigger('focus');
    });

    var activeCategory = 'all';

    function filterProducts() {
        var query = $('#catalogSearch').val().trim().toLowerCase();
        var count = 0;
        $('.catalog-grid .product-card').each(function () {
            var category = $(this).find('.product-category').text().trim();
            if (category === 'Memory' || category === 'Storage') category = 'Memory and SSD';
            var matches = $(this).find('.product-info').text().toLowerCase().includes(query);
            var visible = matches && (activeCategory === 'all' || category === activeCategory);
            $(this).toggleClass('d-none', !visible);
            if (visible) count++;
        });
        $('#searchStatus').text('Products found: ' + count);
        $('#noResults').toggleClass('d-none', count !== 0);
    }

    $('#catalogSearch').on('input', filterProducts);
    $('.filter-badge').on('click', function () {
        activeCategory = $(this).attr('data-category');
        $('.filter-badge').removeClass('active').attr('aria-pressed', 'false');
        $(this).addClass('active').attr('aria-pressed', 'true');
        filterProducts();
    });
    if ($('#catalogSearch').length) filterProducts();

    if ($('#productRows').length) {
        var products = [
            { name: 'ASUS Vivobook S14', category: 'Laptops', price: 419990 },
            { name: 'ASUS Zenbook 14 OLED', category: 'Laptops', price: 549990 },
            { name: 'GeForce RTX 4060 8GB', category: 'Graphics cards', price: 189990 },
            { name: 'AMD Ryzen 5 5600', category: 'Processors', price: 59990 }
        ];
        var editingIndex = -1;
        var storageKey = 'iaidev-products';
        var oldCategories = {
            "Ноутбуки": "Laptops",
            "Видеокарты": "Graphics cards",
            "Процессоры": "Processors",
            "Охлаждение": "Cooling",
            "Память и SSD": "Memory and SSD",
            "Питание": "Power supplies"
        };
        try {
            var saved = localStorage.getItem(storageKey);
            if (saved !== null) {
                var parsed = JSON.parse(saved);
                if (!Array.isArray(parsed)) throw new Error('Invalid list');
                for (var i = 0; i < parsed.length; i++) {
                    if (!parsed[i] || typeof parsed[i].name !== 'string' || typeof parsed[i].category !== 'string' || !Number.isInteger(parsed[i].price) || parsed[i].price < 1) throw new Error('Invalid product');
                }
                for (var i = 0; i < parsed.length; i++) {
                    if (typeof oldCategories[parsed[i].category] === 'string') {
                        parsed[i].category = oldCategories[parsed[i].category];
                    }
                }
                products = parsed;
            }
        } catch (error) {
            $('#storageStatus').text('The saved list is unavailable. Showing the default products.');
        }

        function renderProducts() {
            $('#productRows').empty();
            for (var i = 0; i < products.length; i++) {
                var row = $('<tr>');
                $('<td>').text(products[i].name).appendTo(row);
                $('<td>').text(products[i].category).appendTo(row);
                $('<td>').text(products[i].price.toLocaleString('en-US')).appendTo(row);
                var actions = $('<div>').addClass('table-actions');
                $('<button>').attr({ type: 'button', 'data-index': i }).addClass('btn btn-sm btn-outline-burgundy edit-product').text('Edit').appendTo(actions);
                $('<button>').attr({ type: 'button', 'data-index': i }).addClass('btn btn-sm btn-outline-danger delete-product').text('Delete').appendTo(actions);
                $('<td>').append(actions).appendTo(row);
                $('#productRows').append(row);
            }
            if (products.length === 0) $('#productRows').append($('<tr>').append($('<td>').attr('colspan', 4).text('Your list is empty. Add a product.')));
        }

        function saveProducts() {
            try {
                localStorage.setItem(storageKey, JSON.stringify(products));
                $('#storageStatus').text('');
            } catch (error) {
                $('#storageStatus').text('Could not save changes. They will be lost after a reload.');
            }
            renderProducts();
        }

        function resetProductForm() {
            editingIndex = -1;
            $('#productForm')[0].reset();
            $('#productForm .form-control, #productForm .form-select').removeClass('is-valid is-invalid').removeAttr('aria-invalid');
            $('#productFormTitle').text('Add a product');
            $('#saveProduct').text('Add');
            $('#cancelEdit').addClass('d-none');
        }

        $('#productForm').on('submit', function (e) {
            e.preventDefault();
            var name = $('#productName').val().trim();
            var category = $('#productCategory').val();
            var price = Number($('#productPrice').val());
            var nameValid = markField('#productName', name.length > 0 && name.length <= 100);
            var categoryValid = markField('#productCategory', category !== '');
            var priceValid = markField('#productPrice', Number.isInteger(price) && price >= 1 && price <= 999999999);
            if (!nameValid || !categoryValid || !priceValid) {
                $('#productForm .is-invalid').first().trigger('focus');
                return;
            }
            var product = { name: name, category: category, price: price };
            if (editingIndex === -1) {
                products.push(product);
                $('#productStatus').text('Product added.');
            } else {
                products[editingIndex] = product;
                $('#productStatus').text('Product updated.');
            }
            saveProducts();
            resetProductForm();
        });

        $('#productRows').on('click', '.edit-product', function () {
            editingIndex = Number($(this).attr('data-index'));
            var product = products[editingIndex];
            $('#productForm .is-invalid, #productForm .is-valid').removeClass('is-invalid is-valid').removeAttr('aria-invalid');
            $('#productName').val(product.name).trigger('focus');
            $('#productCategory').val(product.category);
            $('#productPrice').val(product.price);
            $('#productFormTitle').text('Edit product');
            $('#saveProduct').text('Save');
            $('#cancelEdit').removeClass('d-none');
            $('#productStatus').text('');
        });

        $('#cancelEdit').on('click', resetProductForm);
        $('#productRows').on('click', '.delete-product', function () {
            var index = Number($(this).attr('data-index'));
            if (!confirm('Delete "' + products[index].name + '"?')) return;
            products.splice(index, 1);
            if (editingIndex === index) resetProductForm();
            else if (editingIndex > index) editingIndex--;
            saveProducts();
            $('#productStatus').text('Product deleted.');
        });
        renderProducts();
    }

    if ($('#galleryModal').length) {
        var galleryImages = $('.gallery-item img');
        var currentImage = 0;
        var galleryModal = new bootstrap.Modal($('#galleryModal')[0]);
        var galleryButton;

        function showImage() {
            var selected = galleryImages.eq(currentImage);
            $('#lightboxImage').stop(true, true).fadeOut(120, function () {
                $(this).attr({ src: selected.attr('src'), alt: selected.attr('alt') }).fadeIn(180);
                $('#galleryCaption').text(selected.attr('alt'));
                $('#galleryCounter').text((currentImage + 1) + ' / ' + galleryImages.length);
            });
        }

        $('.gallery-item').on('click', function () {
            galleryButton = this;
            currentImage = $('.gallery-item').index(this);
            showImage();
            galleryModal.show();
        });
        $('#previousImage').on('click', function () {
            currentImage = (currentImage - 1 + galleryImages.length) % galleryImages.length;
            showImage();
        });
        $('#nextImage').on('click', function () {
            currentImage = (currentImage + 1) % galleryImages.length;
            showImage();
        });
        $('#galleryModal').on('keydown', function (e) {
            if (e.key === 'ArrowLeft') { e.preventDefault(); $('#previousImage').trigger('click'); }
            if (e.key === 'ArrowRight') { e.preventDefault(); $('#nextImage').trigger('click'); }
        }).on('hidden.bs.modal', function () {
            $('#lightboxImage').stop(true, true);
            if (galleryButton) galleryButton.focus();
        });
    }
});
