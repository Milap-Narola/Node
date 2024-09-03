const postData = async (blog) => {
    try {
        let req = await fetch("http://localhost:8080/blog", {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        });
        let res = await req.json();
        console.log(res);
    } catch (error) {
        console.error("Error posting data:", error);
    }
}

let id = document.cookie;
let userId = id.split("=")[1];

console.log(userId);
if (!userId) {
    window.location.href = "http://127.0.0.1:5500/view/login.html";
}

const handleData = (e) => {
    e.preventDefault();
    let data = {
        title: document.getElementById('title').value,
        content: document.getElementById('content').value,
        author: document.getElementById('author').value,
        createdAt: document.getElementById('date').value,
        userId: userId
    };
    postData(data);
}

document.getElementById("blogPostForm").addEventListener("submit", handleData);

const mapper = (data) => {
    document.getElementById("blogList").innerHTML = "";

    data.map((ele) => {
        console.log(ele);
        let div = document.createElement("div");

        let title = document.createElement("h1");
        title.innerHTML = ele.title;

        let content = document.createElement("p");
        content.innerHTML = ele.content;

        let author = document.createElement("h3");
        author.innerHTML = `Author: ${ele.author}`;

        let date = document.createElement("p");
        date.innerHTML = `Date: ${ele.createdAt}`;
        div.append(title, content, author, date);

        document.getElementById("blogList").append(div);
    });
}

const getBlog = async () => {
        let req = await fetch(`http://localhost:8080/blog/user/${userId}`);
        let data = await req.json();
        mapper(data);
   
}

getBlog();
