const deleteBtnEl = document.querySelector('#delete-btn');
const editBtnEl = document.querySelector('#edit-btn');


deleteBtnEl.addEventListener('click', async function (event) {
  console.log('delButtonHandler called');
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');
    console.log('id: ' + id);
  
    const response = await fetch(`/api/blogpost/${id}`, {
      method: 'DELETE',
    });
    console.log('Deleted');

    if (response.ok) {
      console.log('response.ok');
      document.location.replace('/dashboard');
    } else {
      alert('Failed to delete post');
    }
  }
});


editBtnEl.addEventListener('click', async function (event) {
  console.log('editBtnEl clicked');
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');
    console.log('id: ' + id);
    document.location.replace(`/edit-blogpost/${id}`);
  }
});

