let commentFormEl = document.querySelector('.comment-form');


commentFormEl.addEventListener('submit', async function () {
    console.log('comment submit clicked');
    const comment = document.querySelector('#comment-text').value.trim();
    if (commentFormEl.hasAttribute('data-id')) {
        const blogpost_id = commentFormEl.getAttribute('data-id');
    }

    if (comment && blogpost_id) {

        const response = await fetch(`api/comments`, {
            method: 'POST',
            body: JSON.stringify({ comment, blogpost_id }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            console.log('response.ok');
            document.location.replace(`/blogpost/${blogpost_id}`);
        } else {
            alert('Failed to post comment');
        }
    }
});