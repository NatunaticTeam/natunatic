import './style.css'
import './styles/artbook.css'
import soggy from './assets/soggycat.webp'
import i18n from './localization';

document.querySelector<HTMLDivElement>('#content')!.innerHTML = `
    <h1>${i18n.t('artbook.wip')}</h1>
    <h4>${i18n.t('artbook.texty2')}</h6>
    <h6>${i18n.t('artbook.texty2')}</h4>
    <h6>${i18n.t('artbook.sog-text')}</h6>
    <img src="${soggy}" alt="here! have WIDE soggy in the meantime" id="soggycat">
    <div class="spacing"></div>
`;