const displayArticles = (articles) => {
    let newsContainer = document.getElementById('newsContainer');
    newsContainer.innerHTML = '';
    articles.forEach(article => {
        let div = document.createElement('div');
        div.className = 'news-item';
        div.innerHTML = `
            <h3>${article.title}</h3>
            <p>${article.content}</p>
            <button onclick="editArticle(${article.id})">Edit</button>
            <button onclick="deleteArticle(${article.id})">Delete</button>
        `;
        newsContainer.appendChild(div);
    });
};

const createArticle = async (event) => {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    await fetch('/api/articles', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, content }),
    });
    document.getElementById('newsForm').reset();
    fetchArticles();
};

const deleteArticle = async (id) => {
    await fetch(`/api/articles/${id}`, {
        method: 'DELETE',
    });
    fetchArticles();
};

const editArticle = async (id) => {
    let articleTitle = prompt("Enter new title:");
    let articleContent = prompt("Enter new content:");
    if (articleTitle && articleContent) {
        await fetch(`/api/articles/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title: articleTitle, content: articleContent }),
        });
        fetchArticles();
    }
};

const fetchArticles = async () => {
    let response = await fetch('/api/articles');
    let articles = await response.json();
    displayArticles(articles);
};

document.getElementById('newsForm').addEventListener('submit', createArticle);
fetchArticles();
