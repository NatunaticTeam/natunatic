import './styles/style.css';
import './styles/artbook.css';
import soggy from './assets/soggycat.webp';
import i18n from './localization';

async function fetchTextFile(url:string) {
  try {
    const response = await fetch(url);

    if (!response.ok) { // Check if the HTTP status code indicates success (e.g., 200 OK)
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const fileContent = await response.text(); // Get the response body as text
    console.debug("File Content:", fileContent);
    return fileContent;

  } catch (error) {
    console.error("Error fetching file:", error);
    return null;
  }
}

// Example usage:
fetchTextFile("");

document.querySelector<HTMLDivElement>('#content')!.innerHTML = `
    <h1>${i18n.t('artbook.wip')}</h1>
    <h4>${i18n.t('artbook.texty2')}</h6>
    <h6>${i18n.t('artbook.texty2')}</h4>
    <h6>${i18n.t('artbook.sog-text')}</h6>
    <img src="${soggy}" alt="here! have WIDE soggy in the meantime" id="soggycat">
    <div class="spacing"></div>
`;