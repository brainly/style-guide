import React from 'react';
import ArticlePage from '../layouts/ArticlePage';
import packageJSON from '../../../package.json';
import ContentBox from '../../components/content-box/ContentBox';
import ContentBoxHeader from '../../components/content-box/ContentBoxHeader';
import ContentBoxContent from '../../components/content-box/ContentBoxContent';

const index = () => (
  <ArticlePage>
    <h1 className="main-header">Brainly style guide</h1>
    <h2 className="article-header  article-header--small">
      Version {packageJSON.version}
    </h2>

    <p className="sg-text">
      Welcome to the official Brainly style guide! This style guide is being
      used across all language versions of the Brainly website (e.g.
      <a
        href="https://brainly.com"
        className="sg-text sg-text--blue-dark sg-text--bold sg-text--link"
      >
        brainly.com
      </a>
      ,
      <a
        href="https://znanija.com"
        className="sg-text sg-text--blue-dark sg-text--bold sg-text--link"
      >
        znanija.com
      </a>
      ,
      <a
        href="https://nosdevoirs.fr/"
        className="sg-text sg-text--blue-dark sg-text--bold sg-text--link"
      >
        nosdevoirs.fr
      </a>
      ), on our corporate website (
      <a
        href="https://brainly.co"
        className="sg-text sg-text--blue-dark sg-text--bold sg-text--link"
      >
        brainly.co
      </a>
      ) and some smaller sites (e.g. landing pages).
    </p>

    <h2 className="article-header article-header--small">How to use it?</h2>

    <p className="sg-text">
      In order to use style guide components, you have to include CSS file in
      the <code>&lt;head&gt;</code> of your website:
    </p>

    <pre>
      <code className="html">
        &lt;link href=&quot;https://styleguide.brainly.com/{packageJSON.version}
        /style-guide.css&quot; rel=&quot;stylesheet&quot;/&gt;
      </code>
    </pre>

    <ContentBox>
      <ContentBoxHeader>
        <p className="sg-text">
          For our icons include this scripts before the closing &lt;/body&gt;
          tag:
        </p>
      </ContentBoxHeader>
    </ContentBox>

    <ul className="sg-list">
      <li className="sg-list__element">
        <ContentBox>
          <ContentBoxHeader>
            <p className="sg-text">
              <a
                href="./basics.html#icons"
                className="sg-text sg-text--blue-dark sg-text--bold sg-text--link"
              >
                Basic icons
              </a>
              :
            </p>
          </ContentBoxHeader>
          <ContentBoxContent>
            <pre>
              <code className="html">
                &lt;script
                src=&quot;https://styleguide.brainly.com/%%images/icons.js%%&quot;&gt;&lt;/script&gt;
              </code>
            </pre>
          </ContentBoxContent>
        </ContentBox>
      </li>
      <li className="sg-list__element">
        <ContentBox>
          <ContentBoxHeader>
            <p className="sg-text">
              <a
                href="./basics.html#subject-icons"
                className="sg-text sg-text--blue-dark sg-text--bold sg-text--link"
              >
                Subject icons
              </a>
              :
            </p>
          </ContentBoxHeader>
          <ContentBoxContent>
            <pre>
              <code className="html">
                &lt;script
                src=&quot;https://styleguide.brainly.com/%%images/subjects-icons.js%%&quot;&gt;&lt;/script&gt;
              </code>
            </pre>
          </ContentBoxContent>
        </ContentBox>
      </li>
      <li className="sg-list__element">
        <ContentBox>
          <ContentBoxHeader>
            <p className="sg-text">
              <a
                href="./basics.html#subject-mono-icons"
                className="sg-text sg-text--blue-dark sg-text--bold sg-text--link"
              >
                Subject mono icons
              </a>
              :
            </p>
          </ContentBoxHeader>
          <ContentBoxContent>
            <pre>
              <code className="html">
                &lt;script
                src=&quot;https://styleguide.brainly.com/%%images/subjects-mono-icons.js%%&quot;&gt;&lt;/script&gt;
              </code>
            </pre>
          </ContentBoxContent>
        </ContentBox>
      </li>
      <li className="sg-list__element">
        <ContentBox>
          <ContentBoxHeader>
            <p className="sg-text">
              <a
                href="./basics.html#math-symbols"
                className="sg-text sg-text--blue-dark sg-text--bold sg-text--link"
              >
                Math Symbols
              </a>
              :
            </p>
          </ContentBoxHeader>
          <ContentBoxContent>
            <pre>
              <code className="html">
                &lt;script
                src=&quot;https://styleguide.brainly.com/%%images/math-symbols-icons.js%%&quot;&gt;&lt;/script&gt;
              </code>
            </pre>
          </ContentBoxContent>
        </ContentBox>
      </li>
      <li className="sg-list__element">
        <ContentBox>
          <ContentBoxHeader>
            <p className="sg-text">
              <a
                href="./basics.html#mobile-icons"
                className="sg-text sg-text--blue-dark sg-text--bold sg-text--link"
              >
                Mobile Icons
              </a>
              :
            </p>
          </ContentBoxHeader>
          <ContentBoxContent>
            <pre>
              <code className="html">
                &lt;script
                src=&quot;https://styleguide.brainly.com/%%images/mobile-icons.js%%&quot;&gt;&lt;/script&gt;
              </code>
            </pre>
          </ContentBoxContent>
        </ContentBox>
      </li>
    </ul>

    <h2 className="article-header article-header--small">More</h2>

    <p className="sg-text">
      If you&apos;d like to learn more about this project, report a bug or
      contribute check it out on
      <a
        href="https://github.com/brainly/style-guide"
        className="sg-text sg-text--blue-dark sg-text--bold sg-text--link"
      >
        GitHub
      </a>
      .
    </p>

    <script
      dangerouslySetInnerHTML={{__html: 'hljs.initHighlightingOnLoad();'}}
    />
  </ArticlePage>
);

export default index;
