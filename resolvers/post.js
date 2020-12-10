const {post, posts} = require('../temp');

// querys of resolvers
const totalPosts = () => post.length;
const allPosts = () => posts;

// mutations
const newPost = (parent, args) => {
    // parent: returned post objetc
    // args: parameters
    // create a new post object
    const post = {
        id: posts.length + 1,
        ...args.input
    };
    // push new post object to posts array
    posts.push(post);
    return post;
};

module.exports = {
    Query:{
        totalPost,
        allPosts
    },
    mutation: {
        newPost
    }
};