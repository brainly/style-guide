import React from 'react';
import ArticlePage from '../layouts/ArticlePage';
import packageJSON from '../../../package.json';

const index = () => <ArticlePage>
  <h1 className="main-header">Brainly style guide</h1>
  <h2 className="article-header  article-header--small">
    Version {packageJSON.version }
  </h2>

  <p className="sg-text">Welcome to the official Brainly style guide! This style guide is being used across all language
    versions of the Brainly website (e.g.
    <a href="https://brainly.com" className="sg-link">brainly.com</a>,
    <a href="https://znanija.com" className="sg-link">znanija.com</a>,
    <a href="https://nosdevoirs.fr/" className="sg-link">nosdevoirs.fr</a>
    ), on our
    corporate website (<a href="https://brainly.co" className="sg-link">brainly.co</a>) and some smaller sites (e.g.
    landing pages).</p>

  <h2 className="article-header article-header--small">
    How to use it?
  </h2>

  <p className="sg-text">In order to use style guide components, you have to include CSS file in the <code>&lt;
    head&gt;</code> of your website:</p>

  <pre><code className="html">
    &lt;link href="https://styleguide.brainly.com/{packageJSON.version}/style-guide.css" rel="stylesheet"/&gt;
  </code></pre>

  <p className="sg-text">In order to use basic set of
    <a href="./basics.html#icons" className="sg-link">icons</a>
    include this script before the closing &lt;/body&gt; tag:
  </p>

  <pre>
    <code className="html">
    &lt;script src="https://styleguide.brainly.com/%%images/icons.js%%"&gt;&lt;    /script&gt;
    </code>
  </pre>

  <p className="sg-text">Similarly, if you'd like to use
    <a href="./basics.html#subject-icons" className="sg-link">subject icons</a>
    include the following script:</p>

  <pre>
    <code className="html">
      &lt;script src="https://styleguide.brainly.com/%%images/subjects-icons.js%%"&gt;&lt;    /script&gt;
    </code>
  </pre>

  <h2 className="article-header article-header--small">
    More
  </h2>

  <p className="sg-text">If you'd like to learn more about this project, report a bug or contribute check it out on
    <a href="https://github.com/brainly/style-guide" className="sg-link">GitHub</a>.
  </p>

  <script dangerouslySetInnerHTML={{__html: 'hljs.initHighlightingOnLoad();'}}/>
</ArticlePage>;

export default index;
