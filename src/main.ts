import './style.css'
import n4cPfp from './assets/n4c.jpg'
import julibrosPfp from './assets/julibros.jpg'
import aaronPfp from './assets/aaron.jpg'

document.querySelector<HTMLDivElement>('#header')!.innerHTML = `
  <div>
    <a href="https://natunatic.com">natunatic.com</a> <span> / </span>
    <a href=".">  index  </a><a href="./#team">  team  </a><a>  artbook  </a><a>  projects  </a>
    <div id="content">
      <h1>welcome to natunatic!</h1>
      <h5>page is still a very big wip but we finally decided to keep this design bc julibros really liked it</h5>
      <div class="spacing"><p></p></div>
      <div id="team">
        <h1>of course we present ourselves appropiately</h1>
        <h3>team is composed of mainly 3 persons and their friends</h3>
        <div class="small-spacing"></div>
        <div id="members">
          <div class="person" id="julibros">
            <img src="${julibrosPfp}" alt="n4c" class="pfp"/>
            <p></p>
            <span class="member-name">Julibros</span>
            <p></p>
            <span class="member-roles">sprites, music and some animations</span>
            <p></p>
            <span class="member-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nibh erat, egestas eu diam sit amet, sollicitudin gravida tortor. Sed ac quam dignissim, consequat purus a, tristique justo. Nullam velit nunc, efficitur at risus nec, ultricies vestibulum turpis. Nam justo lacus, convallis et porta quis, eleifend sit amet sapien. Praesent sagittis convallis tortor et tempus. Duis vitae nulla fermentum odio porta tempus at sed mauris. Praesent ut volutpat tellus. In justo nisi, congue nec nisl eu, faucibus aliquam leo. Aliquam et ullamcorper enim. Nulla facilisi. Donec suscipit sed turpis vel efficitur. In hac habitasse platea dictumst. Sed eget orci quis.</span>
          </div>
          <div class="person" id="n4c">
            <img src="${n4cPfp}" alt="n4c" class="pfp"/>
            <p></p>
            <span class="member-name">n4c</span>
            <p></p>
            <span class="member-roles">lead programmer, lazy ass animator and sfx maker</span>
            <p></p>
            <span class="member-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nibh erat, egestas eu diam sit amet, sollicitudin gravida tortor. Sed ac quam dignissim, consequat purus a, tristique justo. Nullam velit nunc, efficitur at risus nec, ultricies vestibulum turpis. Nam justo lacus, convallis et porta quis, eleifend sit amet sapien. Praesent sagittis convallis tortor et tempus. Duis vitae nulla fermentum odio porta tempus at sed mauris. Praesent ut volutpat tellus. In justo nisi, congue nec nisl eu, faucibus aliquam leo. Aliquam et ullamcorper enim. Nulla facilisi. Donec suscipit sed turpis vel efficitur. In hac habitasse platea dictumst. Sed eget orci quis.</span>
          </div>
          <div class="person" id="aaron">
            <img src="${aaronPfp}" alt="n4c" class="pfp"/>
            <p></p>
            <span class="member-name">Elmisterio123x</span>
            <p></p>
            <span class="member-roles">frontend programmer (not yet), animator, sprites</span>
            <p></p>
            <span class="member-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nibh erat, egestas eu diam sit amet, sollicitudin gravida tortor. Sed ac quam dignissim, consequat purus a, tristique justo. Nullam velit nunc, efficitur at risus nec, ultricies vestibulum turpis. Nam justo lacus, convallis et porta quis, eleifend sit amet sapien. Praesent sagittis convallis tortor et tempus. Duis vitae nulla fermentum odio porta tempus at sed mauris. Praesent ut volutpat tellus. In justo nisi, congue nec nisl eu, faucibus aliquam leo. Aliquam et ullamcorper enim. Nulla facilisi. Donec suscipit sed turpis vel efficitur. In hac habitasse platea dictumst. Sed eget orci quis.</span>
          </div>
        </div>
      </div>
    </div>
  </div>
`;