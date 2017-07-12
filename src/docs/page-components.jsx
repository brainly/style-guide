import { render } from 'react-dom';
import Avatars from '../components/avatar/pages/avatar-interactive';
import Bubbles from '../components/bubble/pages/bubble-interactive';

const content = <div>
  <article>
    <h2 className="article-header" id="avatars">
      Avatars
      <a href="#avatars" className="permalink">#</a>
    </h2>
    <Avatars />
  </article>
  <article>
    <h2 className="article-header" id="bubble">
      Bubble
      <a href="#bubble" className="permalink">#</a>
    </h2>
    <Bubbles />
  </article>
</div>;

render(content, document.getElementById('root'));
