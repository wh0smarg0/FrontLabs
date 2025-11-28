/* --- ЗАВДАННЯ 1: ВАЛІДАЦІЯ --- */
function validateForm() {
    // Отримуємо елементи
    const fields = [
        { 
            id: 'pib', 
            // ТТТТТТ Т.Т. (Слово пробіл Літера крапка Літера крапка)
            regex: /^[A-Za-zА-Яа-яІіЇїЄє']+\s[A-Za-zА-Яа-яІіЇїЄє']\.[A-Za-zА-Яа-яІіЇїЄє']\.$/,
            name: 'ПІБ'
        },
        { 
            id: 'group', 
            // ТТ-ЧЧ (Дві літери дефіс дві цифри)
            regex: /^[A-Za-zА-Яа-яІіЇїЄє']{2}-\d{2}$/,
            name: 'Група'
        },
        { 
            id: 'phone', 
            // (ЧЧЧ)-ЧЧЧ-ЧЧ-ЧЧ
            regex: /^\(\d{3}\)-\d{3}-\d{2}-\d{2}$/,
            name: 'Телефон'
        },
        { 
            id: 'address', 
            // м. ЧЧЧЧЧЧ (м крапка пробіл 6 цифр)
            regex: /^м\.\s\d{6}$/,
            name: 'Адреса'
        },
        { 
            id: 'email', 
            // тттттт@ттттт.com (перевірка email)
            regex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            name: 'e-mail'
        }
    ];

    let allValid = true;
    let resultText = "Введені дані:\n";

    fields.forEach(field => {
        const el = document.getElementById(field.id);
        const val = el.value.trim();
        
        if (field.regex.test(val)) {
            el.classList.remove('error');
            el.classList.add('success');
            resultText += `${field.name}: ${val}\n`;
        } else {
            el.classList.remove('success');
            el.classList.add('error');
            allValid = false;
        }
    });

    if (allValid) {
        alert(resultText);
    } else {
        alert("Помилка! Перевірте поля, виділені червоним.");
    }
}

/* --- ЗАВДАННЯ 2: ТАБЛИЦЯ --- */
const table = document.getElementById('myTable');
const variantNumber = 10; // Ваш варіант

let counter = 1;
for (let i = 0; i < 6; i++) {
    const row = document.createElement('tr');
    for (let j = 0; j < 6; j++) {
        const cell = document.createElement('td');
        cell.textContent = counter;

        // 1. Наведення (mouseenter): 
        // Зміна кольору на випадковий для клітинки №10
        cell.addEventListener('mouseenter', function() {
            if (parseInt(this.textContent) === variantNumber) {
                const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
                this.style.backgroundColor = randomColor;
            }
        });

        // 2. Клік (click): 
        // Зміна кольору на обраний з палітри для клітинки №10 (або для будь-якої, зазвичай для варіантної)
        // Методичка каже "при Click на ній", маючи на увазі клітинку варіанту.
        cell.addEventListener('click', function() {
            if (parseInt(this.textContent) === variantNumber) {
                const selectedColor = document.getElementById('colorPicker').value;
                this.style.backgroundColor = selectedColor;
                // Додатково можна змінювати колір тексту для контрасту
                this.style.color = 'white'; 
            }
        });

        // 3. Подвійний клік (dblclick): 
        // Варіант 10: зміна кольору клітинок в вибраному рядку, починаючи з обраної, через одну
        cell.addEventListener('dblclick', function() {
            const selectedColor = document.getElementById('colorPicker').value;
            const parentRow = this.parentElement;
            const cells = parentRow.children;
            
            // cellIndex повертає номер стовпця (починаючи з 0), де знаходиться клітинка
            const startIndex = this.cellIndex;

            // Проходимо по рядку, починаючи з клікнутої клітинки, крок = 2
            for (let k = startIndex; k < cells.length; k += 2) {
                cells[k].style.backgroundColor = selectedColor;
            }
        });

        row.appendChild(cell);
        counter++;
    }
    table.appendChild(row);
}
