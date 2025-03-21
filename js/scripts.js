const idiomaNavegador = navigator.language || navigator.userLanguage;
console.log(idiomaNavegador);

// Definimos proyectos para cada tecnología
const projects = {
    mysql: [
        {
            title: "Gestión de Inventarios",
            description: "Sistema completo de gestión de inventarios usando MySQL para el backend.",
            image: "path_to_image.jpg",
            link: "#"
        },
        {
            title: "Base de Datos de Clientes",
            description: "Sistema de administración de clientes usando MySQL y PHP.",
            image: "path_to_image.jpg",
            link: "#"
        }
    ],
    html: [
        {
            title: "Página Web Personal",
            description: "Portafolio personal desarrollado completamente con HTML.",
            image: "path_to_image.jpg",
            link: "#"
        },
        {
            title: "Landing Page",
            description: "Página de aterrizaje para producto desarrollada en HTML.",
            image: "path_to_image.jpg",
            link: "#"
        }
    ],
    css: [
        {
            title: "Página de Empresa",
            description: "Sitio web de empresa con un diseño responsivo y estilizado.",
            image: "path_to_image.jpg",
            link: "#"
        },
        {
            title: "Página de Blog",
            description: "Blog personal con estilo moderno y minimalista.",
            image: "path_to_image.jpg",
            link: "#"
        }
    ],
    php: [
        {
            title: "Sistema de Gestión de Usuarios",
            description: "Aplicación web en PHP para gestionar usuarios y permisos.",
            image: "path_to_image.jpg",
            link: "#"
        },
        {
            title: "Aplicación de Noticias",
            description: "Plataforma de noticias en línea desarrollada con PHP.",
            image: "path_to_image.jpg",
            link: "#"
        }
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

// Actualizar el año en el footer
document.getElementById("current-year").textContent = new Date().getFullYear();
