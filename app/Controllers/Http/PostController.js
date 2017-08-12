'use strict'

const Post = use('App/Models/Post')

class PostController {

    async index() {
        let posts = await Post.all()
        return posts
    }

    async detail({params}) {
        let post = await Post.find(params.id)

        return post
    }

}

module.exports = PostController
