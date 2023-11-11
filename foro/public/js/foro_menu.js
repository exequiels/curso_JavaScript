$(document).ready(function() {
    const identificado = !!localStorage.getItem('userId');
    const tdRegistrarse = $('#btnRegistrarse td');
    const tdLoguearse = $('#btnLoguearse td');
    const tdSalir = $('#btnSalir td');
    let nuevoPost = '';

    if (identificado) {
        tdRegistrarse.hide();
        tdLoguearse.hide();
        tdSalir.show();
    } else {
        tdRegistrarse.show();
        tdLoguearse.show();
        tdSalir.hide();
        $('#nuevopost').html(nuevoPost);
    }

    $('#btnSalir a').click(function() {
        localStorage.removeItem('userId');
    });
});