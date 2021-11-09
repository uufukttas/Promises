import getData from './modules.js'

const data = await getData(1);

console.log(data.user);
console.log('posts:', data.posts);