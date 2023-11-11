document.getElementById('formulario').addEventListener('submit', async function(event) {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const content = document.getElementById('posteo').value;
    const userId = localStorage.getItem('userId');
    console.log(userId);

    try {
        const response = await fetch('/api/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ title, content, postedBy: userId }),
        });

        if(response.ok){
            const data = await response.json();
            //console.log('Exito:', data);
        } else {
            throw new Error('Error al postear');
        }
        window.location.href = '/';
    } catch(error) {
        console.error(error);
    }
});