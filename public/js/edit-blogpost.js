const editBlogpostFormEl = document.querySelector('.edit-blogpost-form');
const updateBtnEl = document.querySelector('#update-btn');

updateBtnEl.addEventListener('click', async function (event) {
    event.preventDefault();
    console.log('post edit form submitted');
    if (updateBtnEl.hasAttribute('data-id')) {
      const title = document.querySelector('#blogpost-title').value.trim();
      console.log('blogpostTitle = ' + title);
      const contents = document.querySelector('#blogpost-contents').value.trim();
      console.log('blogpostContents = ' + contents);
      const id = updateBtnEl.getAttribute('data-id');
      console.log('id = ' + id);
    
      if (title && contents && id) {
        const response = await fetch(`/api/blogposts/${id}`, {
          method: 'PUT',
          body: JSON.stringify({ title, contents }),
          headers: { 'Content-Type': 'application/json' },
        });
        console.log('updated');
        if (response.ok) {
          console.log('response.ok');
          document.location.replace(`/blogpost/${id}`);
        } else {
          alert('Failed to update post');
        }
      }
    }
});