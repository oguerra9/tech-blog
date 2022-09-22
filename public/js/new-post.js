const newFormHandler = async (event) => {
    console.log('newFormHandler method called /public/js/dashboard.js:2');
    event.preventDefault();

    const title = document.querySelector('#post-title').value.trim();
    const contents = document.querySelector('#post-contents').value.trim();

    if (title && contents) {
        console.log('title: ' + title);
        console.log('contents: ' + contents);
        const response = await fetch(`api/posts`, {
            method: 'POST',
            body: JSON.stringify({ title, contents }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to create post');
        }
    }
};

document
    .querySelector('.new-post-form')
    .addEventListener('submit', newFormHandler);