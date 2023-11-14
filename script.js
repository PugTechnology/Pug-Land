
document.addEventListener("DOMContentLoaded", function() {
    // Replace these URLs with the actual URLs of your Markdown files
    let posts = [
        'https://raw.githubusercontent.com/PugTechnology/Pug-Land/main/posts/azure/post_azure.md',
        'https://raw.githubusercontent.com/PugTechnology/Pug-Land/main/posts/office365/post_office365.md'
    ];

    posts.forEach(url => {
        fetch(url)
            .then(response => response.text())
            .then(markdown => {
                let converter = new showdown.Converter();
                let html = converter.makeHtml(markdown);
                let div = document.createElement('div');
                div.className = 'blog-post';
                div.innerHTML = html;
                document.getElementById('blog-posts').appendChild(div);
            });
    });
});
