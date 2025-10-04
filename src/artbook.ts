import './styles/style.css';
import './styles/artbook.css';
import soggy from './assets/soggycat.webp';
import i18n from './localization';

var textContent:string = ''
var line;

async function readTextFile(url: string): Promise<void> {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`http error, status: ${response.status}`);
    }

    textContent = await response.text();
    const lines = textContent.split(/\r?\n/);
    const newImage:HTMLDivElement = document.createElement('div');
    newImage.classList.add('art');
    document.querySelector<HTMLDivElement>('#content')!.append(newImage);

    // this is hilarious, im so ass at coding i had to do ts :sob:
    for (line of lines) {
        console.debug(line);
        const newline:HTMLAnchorElement = document.createElement('a');
        newline.classList.add('something');
        if (line.trim() == 'file:')
        { 
            console.debug("matching string ig");
            const image:HTMLImageElement = document.createElement('img');
            image.src = lines[2];
            image.classList.add('artImage');
            document.querySelector<HTMLDivElement>('.art')!.append(image);
        }
        else if (line.trim() == 'desc')
        {

        }
    }
  } catch (error) {
    console.error("oh no error!!!!!!! here:", error);
  }
}

// this is very crappy and slow and stuff, but it works and im not enough of a programmer to make this better, sorry.
readTextFile('https://raw.githubusercontent.com/NatunaticTeam/natunatic/refs/heads/main/src/artbook/art1.txt');

document.querySelector<HTMLDivElement>('#content')!.innerHTML = `
    <h1>${i18n.t('artbook.wip')}</h1>
    <h4>${i18n.t('artbook.texty2')}</h6>
    <h6>${i18n.t('artbook.texty2')}</h4>
    <h6>${i18n.t('artbook.sog-text')}</h6>
    <img src="${soggy}" alt="here! have WIDE soggy in the meantime" id="soggycat">
    <div class="spacing"></div>
    
`;