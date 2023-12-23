let BlogsElem = document.getElementById("main");

function AddBlogToList(blog) {
    let NewAuthor = document.createElement("div");
    NewAuthor.textContent = "User" + blog["userId"] + " 01.12.2021" + " 14:42";
    NewAuthor.id="author";
    let NewDiv = document.createElement("div");
    NewDiv.id = "message";
    NewDiv.classList.add("blog");
    let NewH3 = document.createElement("h2");
    NewH3.classList.add("blogtitle");
    let NewP = document.createElement("p");
    NewP.classList.add("blogbody");
    NewH3.textContent = blog["title"];
    NewP.textContent = blog["body"];
    NewDiv.append(NewAuthor);
    NewDiv.append(NewH3);
    NewDiv.append(NewP);
    BlogsElem.append(NewDiv);
}

fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
}).then((response) => response.json()).then((json) => json.forEach((blog) => AddBlogToList(blog)));

let resources = performance.getEntriesByType('resource');
console.log(resources);
