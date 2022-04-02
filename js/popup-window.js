const projects = [
  {
    name: 'Tonic',
    role: {
      company: 'CANOPY',
      job: 'Back End Dev',
      year: 2015,
    },
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: 'img/Portfolio_1.png',
    technologies: ['html', 'css', 'JavaScript'],
    live_version: true,
    source: true,
  },
  {
    name: 'Multi-Post Stories',
    role: {
      company: 'CANOPY',
      job: 'Back End Dev',
      year: 2015,
    },
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: 'img/Portfolio_2.png',
    technologies: ['html', 'Ruby on rails', 'css', 'JavaScript'],
    live_version: true,
    source: true,
  },
  {
    name: 'Multi-Post Stories',
    role: {
      company: 'CANOPY',
      job: 'Back End Dev',
      year: 2015,
    },
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: 'img/Portfolio_3.png',
    technologies: ['html', 'Ruby on rails', 'css', 'JavaScript'],
    live_version: true,
    source: true,
  },
  {
    name: 'CANOPY',
    role: {
      company: 'CANOPY',
      job: 'Back End Dev',
      year: 2015,
    },
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: 'img/Portfolio_4.png',
    technologies: ['html', 'Ruby on rails', 'css', 'JavaScript'],
    live_version: true,
    source: true,
  },

  {
    name: 'ToDo List',
    role: {
      company: 'TICNRT',
      job: 'Full-Stack Developer',
      year: 2022,
    },
    description: 'A daily selection of personnal tasks; no accounts or sign-ups required.',
    image: 'img/new_project.png',
    technologies: ['html', 'css', 'JavaScript', 'WebPack'],
    live_version: true,
    source: true,
  },

];

function insertAfter(referenceNode, newNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

const bigSection = document.createElement('section');

function createDom() {
  const hero = document.getElementById('hero');

  bigSection.className = 'grid-project';

  Object.keys(projects).forEach((key) => {
    const section = document.createElement('section');
    section.className = 'project-container-1 ct1';
    section.id = 'portfolio';

    const divContainer = document.createElement('div');
    divContainer.className = 'img-1-container';

    const img = document.createElement('img');
    img.className = 'img-size';
    img.src = projects[key].image;

    const divInfo = document.createElement('div');
    divInfo.className = 'prjt-info';

    const projectTitle = document.createElement('h2');
    projectTitle.className = 'prjct left';
    projectTitle.textContent = projects[key].name;

    const divGridContainer = document.createElement('div');
    divGridContainer.className = 'prjct grid-container';

    const companyName = document.createElement('h4');
    companyName.className = 'prjct-name';
    companyName.textContent = projects[key].role.company;

    const dotContainer = document.createElement('div');
    dotContainer.className = 'dot-container';

    const dot = document.createElement('img');
    dot.className = 'dot';
    dot.src = 'img/counter.png';

    const role = document.createElement('h4');
    role.className = 'prjct-role';
    role.textContent = projects[key].role.job;

    const scDotContainer = document.createElement('div');
    scDotContainer.className = 'dot-container';

    const scDot = document.createElement('img');
    scDot.className = 'dot';
    scDot.src = 'img/counter.png';

    const year = document.createElement('h4');
    year.className = 'prjct-year';
    year.textContent = projects[key].role.year;

    const description = document.createElement('p');
    description.className = 'prjct prjct-descr';
    description.textContent = projects[key].description;

    const techs = document.createElement('ul');
    techs.className = 'prjct container-lg';

    const { technologies } = projects[key];

    Object.keys(technologies).forEach((key) => {
      const lg = document.createElement('li');
      if (technologies[key] === 'Ruby on rails') {
        lg.className = 'prjct-lg rb';
      } else {
        lg.className = 'prjct-lg';
      }
      lg.textContent = technologies[key];
      techs.appendChild(lg);
    });

    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'btn-container';

    const button = document.createElement('button');
    button.className = 'prjct btn see-project';
    button.type = 'button';
    button.id = 'btnSeeProject';
    button.innerHTML = 'See Project';

    /* this is the popup window (modal) */
    button.addEventListener('click', () => {
      const modal = document.querySelector('.modal-container');
      const title = document.querySelector('.modal-prj-name');
      const img = document.getElementById('modalImg');
      const comp = document.getElementById('comp');
      const role = document.getElementById('role');
      const year = document.getElementById('year');
      const desc = document.getElementById('project-desc');
      const lgItem = document.getElementById('modal-lg');

      title.textContent = projects[key].name;
      comp.textContent = projects[key].role.company;
      role.textContent = projects[key].role.job;
      year.textContent = projects[key].role.year;
      desc.innerHTML = projects[key].description;

      while (lgItem.lastElementChild) {
        lgItem.removeChild(lgItem.lastElementChild);
      }

      Object.keys(technologies).forEach((key) => {
        const lg = document.createElement('li');
        if (technologies[key] === 'Ruby on rails') {
          lg.className = 'prjct-lg rb';
        } else {
          lg.className = 'prjct-lg';
        }
        lg.textContent = technologies[key];
        lgItem.appendChild(lg);
      });

      img.src = projects[key].image;

      modal.style.display = 'block';
    });

    // Append element to parent

    bigSection.appendChild(section);
    section.appendChild(divContainer);
    divContainer.appendChild(img);

    section.appendChild(divInfo);

    divInfo.appendChild(projectTitle);
    divInfo.appendChild(divGridContainer);

    divGridContainer.appendChild(companyName);
    divGridContainer.appendChild(dotContainer);
    dotContainer.appendChild(dot);
    divGridContainer.appendChild(role);
    divGridContainer.appendChild(scDotContainer);
    scDotContainer.appendChild(scDot);
    divGridContainer.appendChild(year);

    divInfo.appendChild(description);

    divInfo.appendChild(techs);

    divInfo.appendChild(buttonContainer);
    buttonContainer.appendChild(button);
  });

  insertAfter(hero, bigSection);
}

const btnClose = document.querySelector('.modal-close-btn');
const modal = document.querySelector('.modal-container');
btnClose.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('load', () => {
  createDom();
});
