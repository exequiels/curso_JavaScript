const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get('id');

if (!postId) {
    window.location.href = 'boceto_foro.html';
} else {
    fetch(`http://localhost:3000/api/posts/${postId}`)
        .then(response => response.json())
        .then(post => {
        let postElement = document.getElementById('posteos');
        let serverDate = new Date(post.date);
        let localDate = serverDate.toLocaleString('es-ES', { timeZone: 'America/Argentina/Buenos_Aires' });

        let content = `
        <tr class="p-3">
            <td class="px-3 py-3 align-middle">
                <p><u>${post.title}</u></p>
                <p>${localDate} por <a href="">${post.postedBy.username}</a></p>
                <p>${post.content}</p>
            </td>
        </tr>
        `;

        // Respuestas
        if(post.respuestas && post.respuestas.length > 0) {
            let responseContent = post.respuestas.map(reply => {
                console.log(reply.repliedBy);
                let replyDate = new Date(reply.date);
                let localReplyDate = replyDate.toLocaleString('es-ES', { timeZone: 'America/Argentina/Buenos_Aires' });

                return `
                <tr class="p-3">
                    <td class="px-5 py-3 align-middle">
                        <p>${localReplyDate} por <a href="">${reply.repliedBy.username}</a></p>
                        <p>${reply.content}</p>
                    </td>
                </tr>
                `;
            }).join('');

            content += responseContent;
        }

        postElement.innerHTML = content;
    })
    .catch(error => {
        //window.location.replace('/boceto_foro.html');
    });
}
document.getElementById('formulario').addEventListener('submit', async function(event) {
    event.preventDefault();

    const respuesta = document.getElementById('respuesta').value;
    const userId = localStorage.getItem('userId');
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            content: respuesta,
            repliedBy: userId
        }),
    };
    //console.log(requestOptions.body);
    fetch(`http://localhost:3000/api/posts/${postId}/respuesta`, requestOptions)
    .then(response => {
        location.reload();
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.indexOf('application/json') !== -1) {
            return response.json();
        } else {
            throw new Error("Did not receive JSON");
        }
    })
    .then(data => {
        //console.log(data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});