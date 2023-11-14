
# pug.land Blog Repository

This repository contains the source code and content for the `pug.land` blog, a technology-themed blog focused on Azure, Office 365, and Microsoft products.

## Repository Structure

Below is an overview of the main directories and files in this repository:

### Root Directory

- `index.html`: Main entry point of the blog.
- `style.css`: Main stylesheet.
- `script.js`: Main JavaScript file.
- `README.md`: This file, explaining the repository.

### Posts Directory

Contains all blog posts, organized by category. Each post is written in Markdown.

```
/posts
├── azure             # Category directory
│   ├── post1.md      # Individual post in Markdown
│   └── post2.md
├── office365         # Another category
│   ├── post1.md
│   └── post2.md
└── microsoft         # Another category
    ├── post1.md
    └── post2.md
```

### Assets Directory

For images, scripts, or any other assets specific to blog posts.

```
/assets
├── images            # Directory for images
│   ├── azure.png
│   └── office365.jpg
├── css               # Additional CSS files
│   └── custom.css
└── js                # Additional JavaScript files
    └── custom.js
```

### Data or Config Directory (Optional)

For storing configuration files or data files (like JSON files).

```
/data
└── config.json       # Configuration data
```

### GitHub or Deployment Related Files

Includes files like `.gitignore`, and GitHub Actions workflow files.

```
/.github
└── workflows
    └── azure-deploy.yml   # GitHub Actions workflow file
.gitignore                  # Standard gitignore file
```

## Naming Convention

- Use a consistent naming convention for markdown files, like `YYYY-MM-DD-title-of-post.md`.

## Categories

- Organize posts into categories for better structure. Each category has its own folder under the `posts` directory.

## Version Control

- Include a `.gitignore` file to exclude unnecessary or sensitive files from the repository.

## Documentation

- Keep the `README.md` updated with instructions or information about the blog structure and navigation.
