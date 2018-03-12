const express = require('express')
const errorhandler = require('errorhandler')
const logger = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const routes = require('./routes')

let store = {
    posts: [{
        name: 'What is going on right now in this EdX course?',
        url: 'https://courses.edx.org/courses/course-v1:Microsoft+DEV283x+2T2017/course/',
        imageURL: 'http://www.cats.club/wp-content/uploads/2016/12/Screen-Shot-2016-12-27-at-10.34.43-AM.png',
        text: 'As we have already discussed, this course is a little advanced and some of the language and concepts are glossed over because the teacher already assumes basic fluency with server-side programming. That is OK. You will still learn a ton, even if you don\'t understand everything. You are learning to use developer documentation and resources, and we will go over the jargon and concepts in class.',
        comments: [{
                text: 'So many assumptions are being made about what we already know?! This is overwhelming!'
            }, {
                text: 'This is great! At the end of this unit, we\'re going to be able to make our own API.'
            }, {
                text: 'How do we make this live? On a real server?!!'
        }]
    }, {
        name:'yo yo yo ',
        url:'mmart.us/alex',
        text:'Sup? What is going on! You need to finish ux project page'}]
}


let app = express()

// Middleware: Does stuff to the request and response objects
// before routing:
app.use(bodyParser.json())
app.use(logger('dev'))
app.use(errorhandler())
app.use(cors())
app.use((req, res, next) => {
    req.store = store
    next()
})

app.get('/posts', routes.posts.getPosts)
app.get('/posts/:postId', routes.posts.getPost)
app.post('/posts', routes.posts.addPost)
app.put('/posts/:postId', routes.posts.updatePost)
app.delete('/posts/:postId', routes.posts.removePost)

/*
// NOTE: We will worry about comments next week:
app.get('/posts/:postId/comments', routes.comments.getComments)
app.post('/posts/:postId/comments', routes.comments.addComment)
app.put('/posts/:postId/comments/:commentId', routes.comments.updateComment)
app.delete('/posts/:postId/comments/:commentId', routes.comments.removeComment)
*/

app.listen(3000)
