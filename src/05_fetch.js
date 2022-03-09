/**
 * Yo, let's practice our API knowledge.
 */

const NicosRepositories = `https://api.github.com/users/minimumviableperson/repos`;

// 1. This ^ is an endpoint that returns Nico's github repositories.
// Write a function called `getNamesOfNicosRepos`. It should:
//  - fetch data from the NicosRepositories endpoint.
//  - only keep the .name property of each repository.
//  - return all Nico's repo names as an array of strings.

const getNamesOfNicosRepos = () => {
    return fetch(`https://api.github.com/users/minimumviableperson/repos`)
        .then(resp => resp.json())
        .then(repos => repos.map(repo => repo.name))
        .catch(error => console.warn(error));
}

// 2. Create a JSON server. Add a /posts endpoint to it, which returns a list of posts.
// A post is: {
//   id: number,
//   title: string,
//   text: string

fetch('http://localhost:3004/posts', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        title: "This might be marwellous",
        text: "Here I am, you are not alone!"
    })
})

// }
// 2.1 Write a function called createPost that:
// - takes a post as an argument
// - save your post in the JSON server
// - console.log the newly created post from the response (it must contain the new post's id);

const Post = {
    title: "Function post",
    text: "I'm creating this post inside a function"
}

function createPost(Post) {
    return fetch('http://localhost:3004/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: Post.title,
            text: Post.text
        })
    })
}
createPost(Post)