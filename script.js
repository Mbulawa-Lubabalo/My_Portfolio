import { projects } from './projects_data.js';

const container = document.getElementById("project-list-container");

const projectHTMLArray = projects.map(project => {
    return `
        <li>
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="technologies">
                ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
            </div>
            <div class="links">
                <a href="${project.liveLink}" target="_blank">Live Demo</a>
                <a href="${project.githubLink}" target="_blank">GitHub</a>
            </div>
        </li>
    `;
});
container.innerHTML = projectHTMLArray.join('');