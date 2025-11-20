document.addEventListener('DOMContentLoaded', () => {

    // === ЗАВДАННЯ 1: Зміна стилів при кліку (n=100) ===

    const element1 = document.getElementById('element-1');
    const element2 = document.querySelector('#element-2');

    const toggleColor = (element, className) => {
        if (element) {
            element.classList.toggle(className);
        }
    };

    // 1. Клік на Елементі №1 (h1)
    if (element1) {
        element1.addEventListener('click', () => {
            toggleColor(element1, 'highlight-id');
        });
    }

    // 2. Клік на Елементі №2 (p.subtitle)
    if (element2) {
        element2.addEventListener('click', () => {
            toggleColor(element2, 'highlight-query');
        });
    }

    // === ЗАВДАННЯ 2: Ініціалізація керування зображеннями ===

    const initImageControls = (prefix) => {
        const imageSection = document.getElementById(`${prefix}manipulation-section`);
        const imageElement = document.getElementById(`${prefix}targetImage`);
        const addButton = document.getElementById(`${prefix}addButton`);
        const zoomInButton = document.getElementById(`${prefix}zoomInButton`);
        const zoomOutButton = document.getElementById(`${prefix}zoomOutButton`);
        const removeButton = document.getElementById(`${prefix}removeButton`);

        if (imageElement && imageSection) {
            const initialSrc = imageElement.src;
            let currentWidth = imageElement.clientWidth;
            const step = 50;

            // 1. Додати
            addButton.addEventListener('click', () => {
                if (!imageElement.parentNode) {
                    const buttonGroup = imageSection.querySelector('.button-group');
                    // Додаємо зображення перед кнопками
                    imageSection.insertBefore(imageElement, buttonGroup);
                    imageElement.src = initialSrc;
                    imageElement.style.width = '100%';
                    currentWidth = imageElement.clientWidth;
                }
            });

            // 2. Збільшити
            zoomInButton.addEventListener('click', () => {
                if (imageElement.parentNode) {
                    currentWidth += step;
                    imageElement.style.width = currentWidth + 'px';
                }
            });

            // 3. Зменшити
            zoomOutButton.addEventListener('click', () => {
                if (imageElement.parentNode) {
                    if (currentWidth > step) {
                        currentWidth -= step;
                        imageElement.style.width = currentWidth + 'px';
                    }
                }
            });

            // 4. Видалити
            removeButton.addEventListener('click', () => {
                if (imageElement.parentNode) {
                    imageElement.remove();
                }
            });
        }
    };

    // Ініціалізація контролів для Артема (використовує 'artem-')
    initImageControls('artem-');

    // Ініціалізація контролів для Маргарити (використовує 'margarita-')
    initImageControls('margarita-');
});