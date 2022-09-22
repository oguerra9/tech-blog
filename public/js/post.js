const commentFormEl = document.querySelector('.comment-form');


commentFormEl.addEventListener('submit', async function () {
    const comment = document.querySelector('#comment-text').value.trim();
    if (commentFormEl.hasAttribute('data-id')) {
        const post_id = commentFormEl.getAttribute('data-id');
    }

    if (comment && post_id) {

        const response = await fetch(`api/comments`, {
            method: 'POST',
            body: JSON.stringify({ comment, post_id }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            console.log('response.ok');
        } else {
            alert('Failed to post comment');
        }
    }
});