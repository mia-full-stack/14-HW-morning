document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let isValid = true;

    // Очистка предыдущих ошибок
    document.querySelectorAll('.error').forEach(el => el.textContent = '');

    // Валидация имени
    const name = document.getElementById('name').value;
    if (!/^[A-Za-zА-Яа-я]{2,24}$/.test(name)) {
        document.getElementById('nameError').textContent = 'Имя должно содержать от 2 до 24 букв';
        isValid = false;
    }

    // Валидация email
    const email = document.getElementById('email').value;
    if (!/^.{7,}@/.test(email)) {
        document.getElementById('emailError').textContent = 'Некорректный email';
        isValid = false;
    }

    // Валидация телефона
    const phone = document.getElementById('phone').value;
    if (!/^\+[0-9]{7,11}$/.test(phone)) {
        document.getElementById('phoneError').textContent = 'Телефон должен начинаться с + и содержать от 8 до 12 цифр';
        isValid = false;
    }

    // Валидация пароля
    const password = document.getElementById('password').value;
    if (password.length < 5 || password.length > 26) {
        document.getElementById('passwordError').textContent = 'Пароль должен содержать от 5 до 26 символов';
        isValid = false;
    }

    if (isValid) {
        alert('Регистрация прошла успешно!');
        // Здесь можно добавить сохранение данных в localStorage
    }
});