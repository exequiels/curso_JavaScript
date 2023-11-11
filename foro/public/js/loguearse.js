document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const invalidCharPattern = /[^a-zA-Z0-9_]/;

    $('.validacion').hide();
    if (username === "") {
        $('#username').siblings('.validacion').show();
        $('#userSpan').text('Complete el nombre');
        event.preventDefault();
    } else if (username.length < 6) {
        $('#userSpan').text('Hey! nombre muy corto!');
        $('#userSpan').show();
        event.preventDefault();
    }

    if (invalidCharPattern.test(username)) {
        $('#username').siblings('.validacion').show();
        $('#userSpan').text('Caracteres inválidos en el nombre de usuario');
        event.preventDefault();
    }

    if (username.trim().indexOf(' ') >= 0) {
        $('#username').siblings('.validacion').show();
        $('#userSpan').text('El nombre de usuario no puede contener espacios');
        event.preventDefault();
    }

    if (password === "") {
        $('#password').siblings('.validacion').show();
        $('#passwordSpan').text('Complete el password');
        event.preventDefault();
    } else if (password.length < 8 || !/[A-Z]/.test(password) || !/\d/.test(password) || !/[a-z]/.test(password)) {
        $('#passwordSpan').text('Contraseña incorrecta');
        $('#passwordSpan').show();
        event.preventDefault();
    }

    if (password.trim().indexOf(' ') >= 0) {
        $('#password').siblings('.validacion').show();
        $('#passwordSpan').text('El password no puede contener espacios');
        event.preventDefault();
    }

    fetch('/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: username, password: password })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        if (data.userId) {
            localStorage.setItem('userId', data.userId);
            //console.log('User ID stored: ' + localStorage.getItem('userId')); 
            window.location.href = '/';
        } else {
            //console.error('Error al iniciar sesión:', data.error);
        }
    })
    .catch(error => console.error('Error de horrores:', error));
});