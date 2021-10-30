console.log('onload')
async function newFormHandler(event) {
    event.preventDefault();

console.log('test')
    const body = document.querySelector('#body').value;
let thread_id=document.location.href.split('http://localhost:3001/api/replies/');
  

    const response = await fetch(`/api/replies/${thread_id[1]}`, {
      method: 'POST',
      body: JSON.stringify({
        body
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    console.log(response)
    if (response.ok) {
      document.location.replace(`/api/replies/${thread_id[1]}`);
    } else {
      alert('Failed to add reply');
    }
  }
  
  document.querySelector('.submitReply').addEventListener('click', newFormHandler);
    
