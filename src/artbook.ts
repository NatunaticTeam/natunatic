// im doing my best ok? this is not easy, specially with all the school shit i have and the time that constantly
// gets faster for no reason, sorry for all the crappy things there are in the code and the exaggerated amount of comments

import './styles/style.css';
import './styles/artbook.css';
import './styles/artbookExtras.css';

let textContent:string;
let line;

let testDiv:HTMLDivElement = document.createElement('div');
testDiv.id = 'testingDiv';
testDiv.textContent = 'testing';
document.querySelector<HTMLDivElement>('#content')!.append(testDiv);

function returnBindSimplified(Bind:any)
{
    document.addEventListener('keydown', function(event)
        {
            console.log(event.key, event.code);
        })
}

// function to be triggered to display image on fullscreen on click
/**
 * Function provided to amplify an image to fullscreen
 * @param elementToClick Fetch the element that should be clicked to apply some styles for hovering and add some extra variables
 * @param imageSource Fetch the image source to display it later on fullscreen
 */
function ampImage(elementToClick:HTMLImageElement, imageSource:string)
{
    try
    {
        // amplify image
        console.debug("received")
        console.debug(elementToClick);
        elementToClick.style.opacity = "0%";
    }
    catch (dipshit)
    {
        console.error("umm, we got a pretty sudden error when trying to display image, here it is", dipshit)
    }
}

const artDivTemplate:string = `

`;

// im gonna try to explain what is going on here but not even i can understand it that much
// i just realized this is crappy as hell, im gonna try to fix it when i understand it, sorry for the not much people that are gonna read this
/**
 * Function to read and display information from a txt or other types of files
 * @param url Url for the file to be fetched
 */
async function readTextFile(url: string): Promise<void>
{
    try
    {
        const response = await fetch(url);

        // if response throws error then we throw an error msg w error code respectively
        if (!response.ok)
            throw new Error(`http error, status: ${response.status}`);

        textContent = await response.text(); // wait for the text of the response to be sent to client
        const lines = textContent.split(/\r?\n/); // split the lines
        const newImage:HTMLDivElement = document.createElement('div'); // create the image div for appending
        newImage.classList.add('art'); // class for general styling
        newImage.id = 'art'+lines[0]; // id for unique information
        document.querySelector<HTMLDivElement>('#content')!.append(newImage); // we append the image div to the main content
    
        // this is hilarious, im so ass at coding i had to do ts :sob:
        for (line of lines) // for each line in file do
        {
            // console.debug(line); // print for debug purposes /// not for now
            const newline:HTMLAnchorElement = document.createElement('a'); // create a line for each line in file
            newline.classList.add('something'); // add the class something for... something?
            if (line.trim() == 'file:') // check if this line exists to continue
            {
                const image:HTMLImageElement = document.createElement('img'); // create the image element
                image.src = lines[2]; // source: 2nd line of file which is usually file location
                image.classList.add('artImage'); // add class for global styles
                document.getElementById('art'+lines[0])!.append(image); // append to add to the respective div
                image.addEventListener('click', () => {
                    // made a function so this doesnt get more messy than it already is
                    ampImage(image, image.src)
                }); // add event listener to display image
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
    <div id="amplifiedImageFrame"></div>
`;

// artbookExtras is used in this one
document.querySelector<HTMLDivElement>('#amplifiedImageFrame')!.innerHTML = `
    
`;

export default {
    readTextFile,
    artDivTemplate
};