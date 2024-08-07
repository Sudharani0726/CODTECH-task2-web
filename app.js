// Sample data (you can replace this with your own database or API)
const posts = [
    {
        id: 1,
        title: 'Introduction to JavaScript',
        content: 'JavaScript is a versatile programming language...',
        author: 'John Doe',
        createdAt: '2024-08-01',
        comments: [
            { commenter: 'Alice', comment: 'Great post!' },
            { commenter: 'Bob', comment: 'Very informative.' }
        ]
    },
    {
        id: 2,
        title: 'CSS for Beginners',
        content: 'CSS is used for styling HTML elements...',
        author: 'Jane Smith',
        createdAt: '2024-07-28',
        comments: []
    }
];

// Function to display posts
function displayPosts() {
    const postList = document.getElementById('post-list');
    postList.innerHTML = '';

    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'post';
        postElement.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.content}</p>
            <p><strong>Author:</strong> ${post.author}</p>
            <p><strong>Posted on:</strong> ${post.createdAt}</p>
            <button onclick="viewPost(${post.id})">View Post</button>
        `;
        postList.appendChild(postElement);
    });
}

// Function to view a specific post
function viewPost(id) {
    const post = posts.find(p => p.id === id);
    if (post) {
        window.location.href = `blog/post.html?id=${id}`;
    }
}

// Initial display of posts
document.addEventListener('DOMContentLoaded', displayPosts);
