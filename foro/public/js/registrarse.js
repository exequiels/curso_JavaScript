document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const passwordConfirmar = document.getElementById('passwordConfirmar').value;
    const invalidCharPattern = /[^a-zA-Z0-9_]/;

    $('.validacion').hide();
    if (username === "") {
        $('#username').siblings('.validacion').show();
        $('#userSpan').text('Complete el nombre');
        event.preventDefault();
    } else if (username.length < 6) {
        $('#userSpan').text('El nombre de usuario debe contener al menos 6 caracteres');
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

    if (email === "") {
        $('#email').siblings('.validacion').show();
        $('#emailSpan').text('Complete el email');
        event.preventDefault();
    }

    if (email.trim().indexOf(' ') >= 0) {
        $('#email').siblings('.validacion').show();
        $('#emailSpan').text('El email no puede contener espacios');
        event.preventDefault();
    }

    if (password === "") {
        $('#password').siblings('.validacion').show();
        $('#passwordSpan').text('Complete el password');
        event.preventDefault();
    } else if (password.length < 8 || !/[A-Z]/.test(password) || !/\d/.test(password) || !/[a-z]/.test(password)) {
        $('#passwordSpan').text('La contraseña debe contener al menos 8 caracteres, una mayúscula y un número');
        $('#passwordSpan').show();
        event.preventDefault();
    }

    if (password.trim().indexOf(' ') >= 0) {
        $('#password').siblings('.validacion').show();
        $('#passwordSpan').text('El password no puede contener espacios');
        event.preventDefault();
    }

    if (password !== passwordConfirmar) {
        $('#passwordConfirmar').siblings('.validacion').show();
        $('#passwordConfirmarSpan').text('Las contraseñas no coinciden');
        return;
    }

    fetch('/api/auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: username,
            email: email,
            password: password,
        })
    })
    .then(response => {
        if (!response.ok) {
            return response.json().then(data => {
                throw new Error(data.error);
            });
        }
        return response.json();
    })
    .then(data => {
        console.log('Success:', data);
        let tableRegistrarse = $('#registrarse');
            tableRegistrarse.empty();
            let row = `Usuario "${data.username}" con email "${data.email}", registrado satisfactoriamente.`;
        tableRegistrarse.html(row);
    })
    .catch((error) => {
        console.error('Error:', error);
        let row;
        if (error.message === "El nombre de usuario ya está en uso.") {
            $('#username').siblings('.validacion').show();
            $('#userSpan').text('El nombre ya está en uso.');
        } else if (error.message === "El correo electrónico ya está en uso.") {
            $('#email').siblings('.validacion').show();
            $('#emailSpan').text('El email ya está en uso.');
        } else {
            row = "Ha ocurrido un error inesperado. Intente nuevamente o contactese con un administrador.";
            tableRegistrarse.html(row);
        }
    });
});