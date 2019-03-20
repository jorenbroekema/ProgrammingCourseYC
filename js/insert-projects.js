console.log('Hello, World!');

async function fetchProjects() {
  const response = await fetch('../projects.json');
  const data = await response.json();
  return data.projects;
}


function insertProjectsInDOM(projects) {
  const targetElement = document.getElementById('my-projects');

  projects.forEach(project => {
    const item = document.createElement('li');
    item.classList.add('project');

    item.innerHTML = `
      <!-- Image -->
      <div class="image-holder">
        <div class="image" style="background-image: url('../assets/projects/${project.imageFile}');">
        </div>
      </div>
      <!-- Title -->
      <!-- Description -->
      <!-- Date -->
    `;

    console.log(item);

    targetElement.insertAdjacentElement('beforeend', item);
  });

}


fetchProjects().then(projects => {
  insertProjectsInDOM(projects);
});


// const projects = fetchProjects();
// console.log(projects);

