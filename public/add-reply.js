console.log('onload')

async function newFormHandler(event) {
event.preventDefault();

console.log('test')
const body = document.getElementById('body').value;
let thread_id = document.location.href.split('https://teach-through-talk.herokuapp.com/api/replies/');
console.log(thread_id)
  
    const response = await fetch(`/api/replies/${thread_id[1]}`, {
      method: 'POST',
      body: JSON.stringify({
        body: body,
        thread_id: thread_id
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
  
  document.getElementById('submitReply').addEventListener('click', newFormHandler);
    
