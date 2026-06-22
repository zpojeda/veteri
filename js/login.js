    document.querySelector('.btn-ingresar').addEventListener('click', function(event){

    event.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // Validar campos vacíos

    if(email === '' || password === ''){

        Swal.fire({
            icon: 'warning',
            title: 'Campos vacíos',
            text: 'Por favor complete todos los campos.',
            confirmButtonColor: '#DD403A'
        });

        return;
    }

    // Validación de usuario

    if(email === 'admin@maskot.com' && password === '12345'){

        Swal.fire({
            icon: 'success',
            title: 'Inicio exitoso',
            text: 'Bienvenido Administrador',
            confirmButtonColor: '#DD403A'
        }).then(() => {

            window.location.href = 'Administrador/dashboard.html';

        });

    }else{

        Swal.fire({
            icon: 'error',
            title: 'Credenciales incorrectas',
            text: 'Correo o contraseña inválidos.',
            confirmButtonColor: '#DD403A'
        });

    }

});


// addEventListener() → escuchar el clic.
// preventDefault() → evitar que el formulario recargue la página.
// getElementById() → capturar datos.
// trim() → eliminar espacios.
// if → validar vacíos.
// && → validar usuario y contraseña.
// Swal.fire() → mensajes modernos.
// window.location.href → redirección al dashboard.