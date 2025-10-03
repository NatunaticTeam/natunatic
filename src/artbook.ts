import './styles/style.css';
import './styles/artbook.css';
import soggy from './assets/soggycat.webp';
import i18n from './localization';

async function readTextFile(url: string): Promise<void> {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`http error, status: ${response.status}`);
    }

    const textContent = await response.text();
    const lines = textContent.split(/\r?\n/);

    for (const line of lines) {
      console.log(line);
    }
  } catch (error) {
    console.error("oh no error!!!!!!! here:", error);
  }
}

readTextFile('https://raw.githubusercontent.com/NatunaticTeam/natunatic/refs/heads/main/src/artbook/art1.txt');


document.querySelector<HTMLDivElement>('#content')!.innerHTML = `
    <h1>${i18n.t('artbook.wip')}</h1>
    <h4>${i18n.t('artbook.texty2')}</h6>
    <h6>${i18n.t('artbook.texty2')}</h4>
    <h6>${i18n.t('artbook.sog-text')}</h6>
    <img src="${soggy}" alt="here! have WIDE soggy in the meantime" id="soggycat">
    <div class="spacing"></div>
`;