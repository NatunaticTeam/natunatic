import './styles/style.css';
import './styles/artbook.css';

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
    newImage.id = 'art'+lines[0];
    document.querySelector<HTMLDivElement>('#content')!.append(newImage);
    
    // this is hilarious, im so ass at coding i had to do ts :sob:
    for (line of lines) {
        console.debug(line);
        const newline:HTMLAnchorElement = document.createElement('a');
        newline.classList.add('something');
        if (line.trim() == 'file:')
        { 
            const image:HTMLImageElement = document.createElement('img');
            image.src = lines[2];
            image.classList.add('artImage');
            document.getElementById('art'+lines[0])!.append(image);
            document.getElementById('art'+lines[0])!.append(document.createElement('p'));
            const desc:HTMLSpanElement = document.createElement('span');
            desc.textContent = lines[4];
            desc.classList.add('imageDesc');
            document.getElementById('art'+lines[0])!.append(desc);
            document.getElementById('art'+lines[0])!.append(document.createElement('p'));
            const author:HTMLSpanElement = document.createElement('span');
            author.textContent = lines[6];
            author.classList.add('imageAuthor');
            document.getElementById('art'+lines[0])!.append(author);
            document.getElementById('art'+lines[0])!.append(document.createElement('p'));
            const date:HTMLSpanElement = document.createElement('span');
            date.textContent = 'at: ' + lines[8];
            date.classList.add('imageDate');
            document.getElementById('art'+lines[0])!.append(date);
            document.getElementById('art'+lines[0])!.append(document.createElement('p'));
        }
    }
  } catch (error) {
    console.error("oh no error!!!!!!! here:", error);
  }
}

// this is very crappy and slow and stuff, but it works and im not enough of a programmer to make this better, sorry.
readTextFile('https://raw.githubusercontent.com/NatunaticTeam/natunatic/refs/heads/main/src/artbook/art1.txt');
readTextFile('https://raw.githubusercontent.com/NatunaticTeam/natunatic/refs/heads/main/src/artbook/art2.txt');

document.querySelector<HTMLDivElement>('#content')!.innerHTML = `
`;