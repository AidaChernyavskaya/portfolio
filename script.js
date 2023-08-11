const projects = [
    {
        name: 'Exchanger',
        about: 'Спроектировала SPA приложение для обмена валют и просмотра актуального курса валют относительно базовой. ' +
               'Технологии: React, React-Router, Axios, SASS.',
        ref: 'https://aidachernyavskaya.github.io/exchanger/',
        photo: './img/exchanger.png'
    },
    {
        name: 'Приложение погоды',
        about: 'Спроектировала SPA приложение просмотра погоды: с поддержкой темной темы и использованием Geocoding API. ' +
               'Технологии: React, React-Router, Axios, SASS.',
        ref: 'https://aidachernyavskaya.github.io/weather-app/',
        photo: './img/weather.png'
    },
    {
        name: 'To-do list',
        about: 'Написала веб-приложение для ведения списка дел: с календарем, сохранением состояния в localStorage и ' +
               'Drag’n’Drop анимацией.Технологии: React, Typescript, SASS.',
        ref: 'https://aidachernyavskaya.github.io/to-do-list-react/',
        photo: './img/to-do-list.png'
    },
    {
        name: 'Лендинги',
        about: 'Верстка лендингов по макетам. Работала с Sass, grid, адаптивно и кроссбраузерно верстала, ' +
               'использовала методологию БЭМ.',
        ref: 'https://aidachernyavskaya.github.io/productivity-landing/',
        photo: './img/landing.png'
    },
    {
        name: 'Игра на JS',
        about: 'Разработала 2d-змейку: со спрайтами, звуковыми эффектами и изменяемыми уровнями сложности. ' +
               'Технологии: HTML5, CSS3, JS.',
        ref: 'https://aidachernyavskaya.github.io/snake-game/',
        photo: './img/snake.png'
    },
];

const projectSection = document.getElementById('projects_section');

projects.map((project, index) => {
    let projectElem = document.createElement('div');
    projectElem.classList.add('project');

    let projectPhoto = document.createElement('div');
    projectPhoto.classList.add('project__photo');
    let projectPhotoBackground = document.createElement('div');
    projectPhotoBackground.classList.add('project__photo_background');
    let projectPhotoImg = document.createElement('img');
    projectPhotoImg.classList.add('project__photo_img');
    projectPhotoImg.src = project.photo;

    projectPhotoBackground.appendChild(projectPhotoImg);
    projectPhoto.appendChild(projectPhotoBackground);

    let projectInf = document.createElement('div');
    projectInf.classList.add('project__information');
    let h3 = document.createElement('h3');
    h3.classList.add('text__purple');
    h3.innerHTML = project.name;
    let p = document.createElement('p');
    p.classList.add('text__black')
    p.innerHTML = project.about;
    let a = document.createElement('a');
    a.classList.add('button');
    a.innerHTML = 'Открыть приложение';
    a.href = project.ref;

    projectInf.appendChild(h3);
    projectInf.appendChild(p);
    projectInf.appendChild(a);

    if (index === 0) {
        let catImg = document.createElement('img');
        catImg.src = "img/cat.png";
        catImg.classList.add('cat');
        projectPhoto.appendChild(catImg);
    }

    projectElem.appendChild(projectPhoto);
    projectElem.appendChild(projectInf);
    projectSection.appendChild(projectElem);
})