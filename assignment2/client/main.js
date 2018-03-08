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
                <ul>
            `
          post.comments.forEach(comment => {
              template += `<li>${comment.text}</li>`
          })
          template += '</ul>'
          container.innerHTML += template;
      })
  });
