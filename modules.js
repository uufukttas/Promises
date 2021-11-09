import axios from "axios";

const getUser = number => {
    return new Promise(async (resolve, reject) => {
        const { data: user } = await axios('https://jsonplaceholder.typicode.com/users/' + number);

        resolve(user);
    })
}

const getPost = number => {
    return new Promise(async (resolve, reject) => {
        const { data: post } = await axios('https://jsonplaceholder.typicode.com/posts/' + number);

        resolve(post);
    })
}

const getData = async (number) => {
    const user = await getUser(number);
    const post = await getPost(number);
    let posts = [];

    posts.push(post);

    return {
        user: user,
        posts: posts,
    }
};

export default getData;