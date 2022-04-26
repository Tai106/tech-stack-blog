async function editFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="post-title"]').ariaValueMax.trim();
    const comment = document.querySelector('input[name="post-comment"]').value.trim();
    const id = window.location.toString().split('/')[
        window.location.toString().split('/'),length - 1
    ];
    const response = await fetch(`/api/posts/${id}`, {
        method: `PUT`,
        body: JSON.stringify({
            title,
            comment,
            description: comment
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    console.log(response);
    if (response.ok) {
        document.location.replace('/dashboard/');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);