import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      outline: 0;
      transform: translate(-4px, -4px);

      &:after {
        transform: translate(8px, 8px);
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 14px;
      left: 14px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = ['JavaScript (ES14+)', 'React', 'SASS', 'Vite', 'CSS3', 'HTML5'];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              Glad to have you here! My name is Dario, and I love bringing ideas to life on the web.
              My passion for web development started when I began experimenting with{' '}
              <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" rel="noreferrer">
                HTML
              </a>
              ,{' '}
              <a target="_blank" href="https://developer.mozilla.org/es/docs/Web/CSS" rel="noreferrer">
                CSS
              </a>
              , and{' '}
              <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" rel="noreferrer">
                JavaScript
              </a>{' '}
              to create interactive and engaging user experiences.
            </p>

            <p>
              Fast-forward to today, I’ve worked on various front-end projects, refining my skills
              in{' '}
              <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" rel="noreferrer">
                JavaScript
              </a>
              ,{' '}
              <a target="_blank" href="https://react.dev/learn" rel="noreferrer">
                React
              </a>
              ,{' '}
              <a target="_blank" href="https://developer.mozilla.org/es/docs/Web/CSS" rel="noreferrer">
                CSS
              </a>
              , and modern development tools. My main focus is building efficient, well-structured,
              and visually compelling web applications while ensuring accessibility and performance.
            </p>

            <p>
              I'm also passionate about{' '}
              <a target="_blank" href="https://en.wikipedia.org/wiki/Astrophysics" rel="noreferrer">
                Astrophysics
              </a>
              , music production and enjoy exploring the intersection between technology and
              creativity.
            </p>

            <p>Here are a few technologies I’ve been working with recently:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.jpg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
