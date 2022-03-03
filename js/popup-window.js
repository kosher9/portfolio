const projects = 
[
        {
            name: 'Tonic',
            role: {
                company: 'CANOPY',
                job: 'Back End Dev',
                year: 2015
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
                year: 2015
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
                year: 2015
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
                year: 2015
            },
            description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
            image: 'img/Portfolio_4.png',
            technologies: ['html', 'Ruby on rails', 'css', 'JavaScript'],
            live_version: true,
            source: true,
        }
    
]

function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}
      


window.addEventListener('load', (event) => { 

    createDom()

})



let bigSection = document.createElement('section');
function createDom(){

    var hero = document.getElementById('hero');

    bigSection.className = 'grid-project'

    for(let project in projects){

        let section = document.createElement('section')
        section.className = 'project-container-1 ct1'
        section.id = 'portfolio'

        let divContainer = document.createElement('div')
        divContainer.className = 'img-1-container'

        let img = document.createElement('img')
        img.className = 'img-size'
        img.src = projects[project].image

        let divInfo = document.createElement('div')
        divInfo.className = 'prjt-info'

        let projectTitle = document.createElement('h2')
        projectTitle.className = 'prjct left'
        projectTitle.textContent= projects[project].name

        let divGridContainer = document.createElement('div')
        divGridContainer.className = 'prjct grid-container'
        
        let companyName = document.createElement('h4')
        companyName.className = 'prjct-name'
        companyName.textContent = projects[project].role.company

        let dotContainer = document.createElement('div')
        dotContainer.className = 'dot-container'

        let dot = document.createElement('img')
        dot.className = 'dot'
        dot.src = 'img/counter.png'
        
        let role = document.createElement('h4')
        role.className = 'prjct-role'
        role.textContent = projects[project].role.job

        let scDotContainer = document.createElement('div')
        scDotContainer.className = 'dot-container'

        let scDot = document.createElement('img')
        scDot.className = 'dot'
        scDot.src = 'img/counter.png'

        let year = document.createElement('h4')
        year.className = 'prjct-year'
        year.textContent = projects[project].role.year

        let description = document.createElement('p')
        description.className = 'prjct prjct-descr'
        description.textContent = projects[project].description

        let techs = document.createElement('ul')
        techs.className = 'prjct container-lg'
        
        let technologies = projects[project].technologies

        for(let tech in technologies){
            let lg = document.createElement('li')
            if(technologies[tech] == 'Ruby on rails'){
                lg.className = 'prjct-lg rb'
            } else {
                lg.className = 'prjct-lg'
            }
            lg.textContent = technologies[tech]
            techs.appendChild(lg)
        }

        let buttonContainer = document.createElement('div')
        buttonContainer.className = 'btn-container'

        let button = document.createElement('button')
        button.className = 'prjct btn see-project'
        button.type = 'button'
        button.id = 'btnSeeProject'
        button.innerHTML = 'See Project'

        /* this is the popup window (modal) */
        button.addEventListener('click', () => {
           let modal = document.querySelector('.modal-container');
           let title = document.querySelector('.modal-prj-name');
           let img = document.getElementById('modalImg');
           let comp = document.getElementById('comp')
           let role = document.getElementById('role')
           let year = document.getElementById('year')
           let desc = document.getElementById('project-desc');
           let lgItem = document.getElementById('modal-lg');
           let btnSeeLive = document.getElementById('btn-see-live'); 
           let btnSeesource = document.getElementById('btn-see-source');
           
           title.textContent = projects[project].name;
           comp.textContent = projects[project].role.company
           role.textContent = projects[project].role.job
           year.textContent = projects[project].role.year
           desc.innerHTML = projects[project].description
           
           for(let tech in technologies){
                let lg = document.createElement('li')
                if(technologies[tech] == 'Ruby on rails'){
                    lg.className = 'prjct-lg rb'
                } else {
                    lg.className = 'prjct-lg'
                }
                lg.textContent = technologies[tech]
                lgItem.appendChild(lg)
           }

           console.log(desc);
           
           img.src = projects[project].image;

           modal.style.display = 'block';   
            
        })
    
   

        // Append element to parent

        bigSection.appendChild(section)
        section.appendChild(divContainer)
        divContainer.appendChild(img)

        section.appendChild(divInfo)

        divInfo.appendChild(projectTitle)
        divInfo.appendChild(divGridContainer)

        divGridContainer.appendChild(companyName)
        divGridContainer.appendChild(dotContainer)
        dotContainer.appendChild(dot)
        divGridContainer.appendChild(role)
        divGridContainer.appendChild(scDotContainer)
        scDotContainer.appendChild(scDot)
        divGridContainer.appendChild(year)

        divInfo.appendChild(description)

        divInfo.appendChild(techs)

        divInfo.appendChild(buttonContainer)
        buttonContainer.appendChild(button)

    }

    insertAfter(hero, bigSection)

}

const btnClose = document.querySelector('.modal-close-btn'); 
const modal = document.querySelector('.modal-container');
btnClose.addEventListener('click', () => {
    modal.style.display = 'none';
    
})

