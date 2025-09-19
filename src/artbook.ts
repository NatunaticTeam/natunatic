import './style.css'
import './styles/artbook.css'
import soggy from './assets/soggycat.webp'

document.querySelector<HTMLDivElement>('#content')!.innerHTML = `
    <h1>artbook is still a wip!</h1>
    <h4>as previously said this page is a very big work in progress</h6>
    <h6>but artbook is coming as soon as we get some things working on the server side of this page ;)</h4>
    <h6>have a wide soggy instead</h6>
    <img src="${soggy}" alt="here! have WIDE soggy in the meantime" id="soggycat">
    <div class="spacing"></div>
`;