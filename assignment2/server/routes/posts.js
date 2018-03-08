module.exports = {
    getPosts(req, res) {
        res.status(200).send(req.store.posts)
    },
    addPost(req, res) {
        let newPost = req.body
        let postId = req.store.posts.length
        store.posts.push(newPost)
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
