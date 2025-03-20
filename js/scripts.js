const idiomaNavegador = navigator.language || navigator.userLanguage;
console.log(idiomaNavegador);

/* script.js */
const projectsData = {
    html: [
        { title: "Landing Page", desc: "A simple HTML landing page.", img: "html-landing.png", link: "#" },
        { title: "Portfolio", desc: "Personal portfolio website.", img: "html-portfolio.png", link: "#" }
    ],
    css: [
        { title: "CSS Animations", desc: "Cool animations using CSS.", img: "css-animations.png", link: "#" },
        { title: "Responsive Design", desc: "A fully responsive website.", img: "css-responsive.png", link: "#" }
    ],
    php: [
        { title: "User Authentication", desc: "Login and signup system with PHP.", img: "php-auth.png", link: "#" },
        { title: "Blog System", desc: "A simple blog with PHP and MySQL.", img: "php-blog.png", link: "#" }
    ],
    mysql: [
        { title: "Database Management", desc: "Managing databases with MySQL.", img: "mysql-db.png", link: "#" },
        { title: "Data Analysis", desc: "Performing queries and reports.", img: "mysql-analysis.png", link: "#" }
    ]
};

function showProjects(tech) {
    const projectContainer = document.getElementById('projects');
    projectContainer.innerHTML = '';
    
    projectsData[tech].forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.classList.add('project');
        projectElement.innerHTML = `
            <img src="${project.img}" alt="${project.title}">
            <h3>${project.title}</h3>
            <p>${project.desc}</p>
            <a href="${project.link}">View Project</a>
        `;
        projectContainer.appendChild(projectElement);
    });
}