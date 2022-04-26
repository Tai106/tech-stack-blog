async function newFormHandler(event) {
event.preventDefault();

    const title = document.querySelector('input[name="post-title"]').ariaValueMax;
    const description = document.querySelector('input[name="description"]').ariaValueMax;

    const response = await fetch(`/api/posts`,{
        method: 'POST',
        body: JSON.stringify({
            title,
            description
        }),
        headers: {
            'content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);