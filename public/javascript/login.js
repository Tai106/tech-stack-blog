async function loginFormHandler(event) {
    event.preventDeafault();

    const username = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (username && password) {
        const response = await fetch('/api/users/login', {
            method: 'post',
            body: JSON.stringify({
                username,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
           document.location.replace('/dashboard/');
        } else {
            alert(response.statusText);
    }
}
}

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);