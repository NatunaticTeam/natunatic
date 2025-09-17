import './style.css'

document.querySelector<HTMLDivElement>('#header')!.innerHTML = `
  <div>
    <a href="https://natunatic.com">natunatic.com</a> <span> / </span>
    <a href=".">  index  </a><a href="./#team">  team  </a><a>  artbook  </a><a>  projects  </a>
    <div id="content">
      <h1>welcome to natunatic!</h1>
      <h5>page is still a very big wip but we finally decided to keep this design bc julibros really liked it</h5>
      <div class="spacing"><p></p></div>
      <div id="team"><h3>team is composed of mainly 3 persons and their friends</h3></div>
    </div>
  </div>
`;