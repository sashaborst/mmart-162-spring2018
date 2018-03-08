//1. define functions:
const getPosts = () => {
    container.innerHTML = ''
    fetch('http://localhost:3000/posts/').then(response =>{
        return response.json();
      })
      .then(posts => {
          console.log(posts)
          const container = document.getElementById('container')
          posts.forEach(post => {
              let template = `
                    <h2>${post.name}</h2>
                    <a href="${post.url}">More</a>
                    <p>${post.text}</p>
                    <h3>Comments:</h3>
                    <div class="comments">TODO next week...</div>`
              container.innerHTML += template;
          })
    })
}
getPosts()
