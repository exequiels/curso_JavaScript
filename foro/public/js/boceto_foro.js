fetch('http://localhost:3000/api/posts')
.then(response => response.json())
.then(data => {

    data.sort((a, b) => new Date(b.date) - new Date(a.date));
    let foroInicio = document.getElementById('foroInicio');

    data.forEach(post => {

        let id = post._id;
        let serverDate = new Date(post.date);
        let localDate = serverDate.toLocaleString('es-ES', { timeZone: 'America/Argentina/Buenos_Aires' });

        let row = `
                <tr class="p-3"> 
                    <td class="px-3 py-3 align-middle"><p><a href="posteos?id=${id}">${post.title}</a></p><p class="d-md-none d-sm-block">${localDate} por <a href="${id}">${post.postedBy.username}</a></p><p class="d-md-none d-sm-block text-secondary">Visitas: ${post.visitas} | Respuestas: ${post.respuestas.length}</p></td>
                    <td class="px-3 py-3 align-middle d-none d-md-table-cell text-secondary">${localDate} por <a href="">${post.postedBy.username}</a></td>
                    <td class="px-3 py-3 align-middle d-none d-md-table-cell text-center text-secondary">${post.visitas}</td>
                    <td class="px-3 py-3 align-middle d-none d-md-table-cell text-center text-secondary">${post.respuestas.length}</td>
                </tr>`;

        foroInicio.innerHTML += row;
    });
})
.catch((error) => {
    console.error('Error:', error);
});