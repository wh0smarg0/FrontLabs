document.getElementById('loadBtn').addEventListener('click', () => {
    // 1. Робимо запит до API
    fetch('https://randomuser.me/api')
        .then(response => {
            // Перевіряємо, чи успішний запит
            if (!response.ok) {
                throw new Error('Помилка мережі');
            }
            // 2. Перетворюємо відповідь у JSON
            return response.json();
        })
        .then(data => {
            // Отримуємо дані першого користувача з масиву results
            const user = data.results[0];
            
            // 3. Викликаємо функцію для відображення
            displayUser(user);
        })
        .catch(error => {
            console.error('Сталася помилка:', error);
            alert('Не вдалося завантажити дані.');
        });
});

function displayUser(user) {
    const container = document.getElementById('results');

    // Отримуємо потрібні дані згідно з Варіантом 10:
    // 1. Picture (large)
    const picture = user.picture.large;
    // 3. Cell
    const cell = user.cell;
    // 4. City (знаходиться в об'єкті location)
    const city = user.location.city;
    // 7. Email
    const email = user.email;
    // 9. Coordinates (знаходяться в location)
    const lat = user.location.coordinates.latitude;
    const lng = user.location.coordinates.longitude;

    // Створюємо HTML картки
    const cardHTML = `
        <div class="card">
            <img src="${picture}" alt="User Avatar">
            <div class="card-info">
                <p><strong>City:</strong> ${city}</p>
                <p><strong>Cell:</strong> ${cell}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Coords:</strong> ${lat}, ${lng}</p>
            </div>
        </div>
    `;

    // Додаємо картку на початок контейнера
    container.insertAdjacentHTML('afterbegin', cardHTML);
}
