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

function createDom(){

    var hero = document.getElementById('hero');

    let bigSection = document.createElement('section');
    bigSection.className = 'grid-project'

    for(let project in projects){

        let section = document.createElement('section')
        section.className = 'project-container-1 ct1'

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
            console.log(tech)
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
        button.innerHTML = 'See Project'


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

// let section = document.createElement('section')
    //     section.className = 'project-container-1 ct1'

    //     let divContainer = document.createElement('div')
    //     divContainer.className = 'img-1-container'

    //     let img = document.createElement('img')
    //     img.className = 'img-size'
    //     img.src = "img/Portfolio_1.png"

    //     let divInfo = document.createElement('div')
    //     divInfo.className = 'prjt-info'

    //     let projectTitle = document.createElement('h2')
    //     projectTitle.className = 'prjct left'
    //     projectTitle.textContent='Tonic'

    //     let divGridContainer = document.createElement('div')
    //     divGridContainer.className = 'prjct grid-container'
        
    //     let companyName = document.createElement('h4')
    //     companyName.className = 'prjct-name'
    //     companyName.textContent = 'CANOPY'

    //     let dotContainer = document.createElement('div')
    //     dotContainer.className = 'dot-container'

    //     let dot = document.createElement('img')
    //     dot.className = 'dot'
    //     dot.src = 'img/counter.png'
        
    //     let role = document.createElement('h4')
    //     role.className = 'prjct-role'
    //     role.textContent = 'Back End Dev'

    //     let scDotContainer = document.createElement('div')
    //     scDotContainer.className = 'dot-container'

    //     let scDot = document.createElement('img')
    //     scDot.className = 'dot'
    //     scDot.src = 'img/counter.png'

    //     let year = document.createElement('h4')
    //     year.className = 'prjct-year'
    //     year.textContent = '2015'

    //     let description = document.createElement('p')
    //     description.className = 'prjct prjct-descr'
    //     description.textContent = 'A daily selection of privately personalized reads; no accounts or sign-ups required.'

    //     let techs = document.createElement('ul')
    //     techs.className = 'prjct container-lg'
        
    //     let techOne = document.createElement('li')
    //     techOne.className = 'prjct-lg'
    //     techOne.textContent = 'Love'

    //     let techTwo = document.createElement('li')
    //     techTwo.className = 'prjct-lg'
    //     techTwo.textContent = 'Love'

    //     let techThree = document.createElement('li')
    //     techThree.className = 'prjct-lg'
    //     techThree.textContent = 'Love'

    //     let techFour = document.createElement('li')
    //     techThree.className = 'prjct-lg'
    //     techThree.textContent = 'Love'

    //     let buttonContainer = document.createElement('div')
    //     buttonContainer.className = 'btn-container'

    //     let button = document.createElement('button')
    //     button.className = 'prjct btn see-project'
    //     button.type = 'button'
    //     button.innerHTML = 'See Project'


    //     // Append element to parent

    //     bigSection.appendChild(section)
    //     section.appendChild(divContainer)
    //     divContainer.appendChild(img)

    //     section.appendChild(divInfo)

    //     divInfo.appendChild(projectTitle)
    //     divInfo.appendChild(divGridContainer)

    //     divGridContainer.appendChild(companyName)
    //     divGridContainer.appendChild(dotContainer)
    //     dotContainer.appendChild(dot)
    //     divGridContainer.appendChild(role)
    //     divGridContainer.appendChild(scDotContainer)
    //     scDotContainer.appendChild(scDot)
    //     divGridContainer.appendChild(year)

    //     divInfo.appendChild(description)

    //     divInfo.appendChild(techs)
    //     techs.appendChild(techOne)
    //     techs.appendChild(techTwo)
    //     techs.appendChild(techThree)
    //     techs.appendChild(techFour)

    //     divInfo.appendChild(buttonContainer)
    //     buttonContainer.appendChild(button)