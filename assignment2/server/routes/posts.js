module.exports = {
    getPosts(req, res) {
        console.log('\n\n-------- YOUR DATA STORE --------')
        console.log(req.store)
        console.log('\n\n\n\n')
        res.status(200).send(req.store.posts)
    },
    addPost(req, res) {
        console.log(req.body)
        let newPost = req.body
        let postId = req.store.posts.length
        req.store.posts.push(newPost)
        res.status(201).send({postId: postId})
    },
    updatePost(req, res) {
        const postID = req.params.postId
        req.store.posts[postID] = Object.assign(req.store.posts[postID], req.body)
        res.status(200).send(req.store.posts[req.params.postId])
    },
    removePost(req, res) {
        const postID = req.params.postId
        req.store.posts.splice(postID, 1)
        res.status(204).send()
    }
}
