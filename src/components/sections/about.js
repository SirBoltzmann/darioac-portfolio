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
      <h2 className="numbered-heading">Sobre mí</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              ¡Me alegra que estés aquí! Mi nombre es Dario y me encanta dar vida a las ideas en la
              web. Mi pasión por el desarrollo web comenzó cuando empecé a experimentar con{' '}
              <a
                target="_blank"
                href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
                rel="noreferrer">
                HTML
              </a>
              ,{' '}
              <a
                target="_blank"
                href="https://developer.mozilla.org/es/docs/Web/CSS"
                rel="noreferrer">
                CSS
              </a>
              , y{' '}
              <a
                target="_blank"
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                rel="noreferrer">
                JavaScript
              </a>{' '}
              para crear experiencias de usuario interactivas y atractivas.
            </p>

            <p>
              Avanzando hasta el presente, he trabajado en diversos proyectos de front-end,
              perfeccionando mis habilidades en{' '}
              <a
                target="_blank"
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                rel="noreferrer">
                JavaScript
              </a>
              ,{' '}
              <a target="_blank" href="https://react.dev/learn" rel="noreferrer">
                React
              </a>
              ,{' '}
              <a
                target="_blank"
                href="https://developer.mozilla.org/es/docs/Web/CSS"
                rel="noreferrer">
                CSS
              </a>
              , y herramientas modernas de desarrollo. Mi enfoque principal es construir
              aplicaciones web eficientes, bien estructuradas y visualmente atractivas, asegurando
              siempre accesibilidad y rendimiento.
            </p>

            <p>
              También me apasiona la{' '}
              <a target="_blank" href="https://en.wikipedia.org/wiki/Astrophysics" rel="noreferrer">
                Astrofísica
              </a>
              , la producción musical y disfruto explorando la intersección entre tecnología y
              creatividad.
            </p>

            <p>Aquí hay algunas tecnologías con las que he estado trabajando recientemente:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.webp"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
