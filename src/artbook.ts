import './styles/style.css';
import './styles/artbook.css';

var textContent:string = ''
var line;

// im gonna try to explain what is going on here but not even i can understand it that much

async function readTextFile(url: string): Promise<void> {
  try {
    // we define the response as a fetch with an await promise
    const response = await fetch(url);

    // if response isnt ok then we throw an error w error code respectively
    if (!response.ok) {
      throw new Error(`http error, status: ${response.status}`);
    }

    textContent = await response.text(); // wait for the text of the response to be sent to client
    const lines = textContent.split(/\r?\n/); // split the lines
    const newImage:HTMLDivElement = document.createElement('div'); // create the image div for apending
    newImage.classList.add('art'); // class for general styling
    newImage.id = 'art'+lines[0]; // id for unique information
    document.querySelector<HTMLDivElement>('#content')!.append(newImage); // we append the image div to the main content
    
    // this is hilarious, im so ass at coding i had to do ts :sob:
    for (line of lines) { // for each line in file do
        console.debug(line); // print for debug purposes
        const newline:HTMLAnchorElement = document.createElement('a'); // create a line for each line in file
        newline.classList.add('something'); // add the class something for... something?
        if (line.trim() == 'file:') // check if this line exists to continue
        { 
            const image:HTMLImageElement = document.createElement('img'); // create the image element
            image.src = lines[2]; // source: 2nd line of file which is usually file location
            image.classList.add('artImage'); // add class for global styles
            document.getElementById('art'+lines[0])!.append(image); // append to add to the respective div
            document.getElementById('art'+lines[0])!.append(document.createElement('p')); // in-file separation
            const desc:HTMLSpanElement = document.createElement('span'); // create description element
            desc.textContent = lines[4]; // retrieve description
            desc.classList.add('imageDesc'); // add global styles
            document.getElementById('art'+lines[0])!.append(desc); // append
            document.getElementById('art'+lines[0])!.append(document.createElement('p')); // separation
            const author:HTMLSpanElement = document.createElement('span'); // create author element
            author.textContent = lines[6]; // retrieve author element
            author.classList.add('imageAuthor'); // add global styles
            document.getElementById('art'+lines[0])!.append(author); // append
            document.getElementById('art'+lines[0])!.append(document.createElement('p')); // separation
            const date:HTMLSpanElement = document.createElement('span'); // create date element
            date.textContent = 'at: ' + lines[8]; // retrieve date
            date.classList.add('imageDate'); // add global styles
            document.getElementById('art'+lines[0])!.append(date); // append
            document.getElementById('art'+lines[0])!.append(document.createElement('p')); // separation
        }
    }
  } catch (error) {
    console.error("oh no error!!!!!!! here:", error); // in case theres an error in something throw the message
  }
}

// this is very crappy and slow and stuff, but it works and im not enough of a programmer to make this better, sorry.
readTextFile('https://raw.githubusercontent.com/NatunaticTeam/natunatic/refs/heads/main/src/artbook/art1.txt');
readTextFile('https://raw.githubusercontent.com/NatunaticTeam/natunatic/refs/heads/main/src/artbook/art2.txt');

// ignore this
document.querySelector<HTMLDivElement>('#content')!.innerHTML = `
`;