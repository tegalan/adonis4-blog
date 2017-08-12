'use strict'

const Post = use('App/Models/Post')

class PostController {

    async index({ view }) {
        let posts = await Post.all()
        // return posts
        return view.render('post.index',{posts:posts.toJSON()})
    }

    async detail({ view, params }) {
        let post = await Post.find(params.id)

        return view.render('post.detail', { post: post.toJSON() })
    }

}

module.exports = PostController
