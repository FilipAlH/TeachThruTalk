console.log('onload')
async function displayNewForm(event) {
  event.preventDefault();
  document.getElementById("newThread").style.display = "block";
  document.getElementById("newThreadBtn").style.display = "none";
}
async function newFormHandler(event) {
    event.preventDefault();     
  const threadTitle = document.getElementById('threadTitle').value;
  const threadBody = document.getElementById('threadBody').value;
  let thread_id = document.location.href.split('http://localhost:3001/api/threads/');

console.log(thread_id)
    const response = await fetch(`/api/threads/${thread_id[1]}`, {
      method: 'POST',
      body: JSON.stringify({
        title: threadTitle,
        body: threadBody,
        language_id: req.params.id 
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(response)
    if (response.ok) {
      document.location.replace(`/api/threads/${thread_id[1]}`);

    } else {
      alert('Failed to add new thread');
    }
  }
  document.getElementById('newThreadBtn').addEventListener('click', displayNewForm);
  document.getElementById('submitThread').addEventListener('click', newFormHandler);
    
