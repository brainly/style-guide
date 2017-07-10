import { render } from 'react-dom';
import Avatars from '../components/avatar/pages/avatar';

const content =
  <article>
    <h2 className="article-header" id="avatars">
      Avatars
      <a href="#avatars" className="permalink">#</a>
    </h2>
    <Avatars />
  </article>;

render(content, document.getElementById('root'));
