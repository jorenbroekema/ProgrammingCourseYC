async function fetchProjects() {
  const response = await fetch('../projects.json');
  const data = await response.json();
  return data.projects;
}

function sortProjects(projects) {
  projects.sort((a, b) => {
    const dateA = Date.parse(a.startDate);
    const dateB = Date.parse(b.startDate);
    if (dateA > dateB) {
      return -1;
    }
    return 1;
  });
  return projects;
}

function insertProjectsInDOM(projects) {
  targetElement = document.querySelector('#my-projects');
  projects.forEach((project) => {
    let projectDOM = document.createElement('li');
    projectDOM.classList.add('project');
    projectDOM.innerHTML = `
      <!-- Image        -->
      <div class="image-holder">
        <div id="yc" class="image" style="background-image: url('../assets/projects/${project.imageFile}')"></div>
      </div>
      <!-- Title        -->
      <div class="project-title">${project.title}</div>
      <!-- Description  -->
      <div class="project-description">
        <p>${project.description}</p>
      </div>
      <!-- Date         -->
      <div class="date-holder">
        <small>${project.startDate} ${project.endDate ? `- ${project.endDate}` : ''}</small>
      </div>
    `;

    targetElement.insertAdjacentElement('beforeend', projectDOM);
  })
}

fetchProjects().then(projects => {
  const sortedProjects = sortProjects(projects);
  insertProjectsInDOM(sortedProjects);
});
