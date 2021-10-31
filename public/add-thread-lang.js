console.log('onload')

async function postNewThread(thread_id){
  const threadTitle = document.getElementById('threadTitle').value;
  const threadBody = document.getElementById('threadBody').value;

  const response = await fetch(`/api/threads/${thread_id}`, {
    method: 'POST',
    body: JSON.stringify({
      title: threadTitle,
      body: threadBody,
      language_id: thread_id 
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  console.log(response)
  if (response.ok) {
    document.location.replace(`/api/threads/${thread_id}`);
  
  } else {
    alert('Failed to add new thread');
  }
}

async function displayNewForm(event) {
  event.preventDefault();
  document.getElementById("newThread").style.display = "block";
  document.getElementById("newThreadBtn").style.display = "none";

  const URLlocation = document.location.href.split('http://localhost:3001/api/threads/');

  if(URLlocation[1]) {
    document.getElementById('threadLanguagePrompt').style.display= "none"
  }
}
async function newFormHandler(event) {
    event.preventDefault();
    const threads = document.location.href.split('http://localhost:3001/api/threads/');
    if(threads[1]){
      let thread_id = threads[1]
      postNewThread(thread_id)
    } else {
    const promptLanguage = document.getElementById('threadLanguage')
    const thread = promptLanguage.value;
    thread_id = thread.toLowerCase()
    postNewThread(thread_id)
  }
}
  document.getElementById('newThreadBtn').addEventListener('click', displayNewForm);
  document.getElementById('submitThread').addEventListener('click', newFormHandler);
    
