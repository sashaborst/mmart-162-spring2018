const createPost = () => {
    const data = {
        name: document.querySelector('#name').value,
        url: document.querySelector('#url').value,
        text: document.querySelector('#text').value
    }
    console.log('Saving the following object to the server:', data);

    fetch('http://localhost:3000/posts/', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {"Content-Type": "application/json"}
    }).then(function(response) {
        return response.json();
    }).then(function(data) {
        //clear form:
        document.querySelector('#name').value = ''
        document.querySelector('#url').value = ''
        document.querySelector('#text').value = ''

        // close form:
        document.querySelector('.modal').classList.toggle('show')
        // re-query for posts
        // note that getPosts is located in the getPosts.js file):
        getPosts()
    })
}

document.querySelector('.button-primary').onclick = createPost
