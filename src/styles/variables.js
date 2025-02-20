import { css } from 'styled-components';

const variables = css`
  :root {
    --dark-navy: #321716; /* El más oscuro */
    --navy: #59302e; /* Color oscuro */
    --light-navy: #6b3835; /* Color intermedio */
    --lightest-navy: #82433b; /* Color claro */
    --navy-shadow: #9b5744; /* Color principal */
    --dark-slate: #b5765a; /* Más brillante */
    --slate: #bc8663; /* Color vibrante */
    --light-slate: #c9a180; /* Color suave */
    --lightest-slate: #dbc3ac; /* Color más claro */
    --white: #eee2d7; /* Color muy suave */
    --green: #f9f4f1; /* Color más cercano al blanco */
    --green-tint: #eee2d7; /* Otro tono claro */
    --pink: #bc8663; /* Marrón cálido */
    --blue: #c9a180; /* Marrón pastel */

    --font-sans: 'Calibre', 'Inter', 'San Francisco', 'SF Pro Text', -apple-system, system-ui,
      sans-serif;
    --font-mono: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;

    --fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;
    --fz-heading: 32px;

    --border-radius: 12px;
    --nav-height: 100px;
    --nav-scroll-height: 70px;

    --tab-height: 42px;
    --tab-width: 120px;

    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

    --hamburger-width: 30px;

    --ham-before: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
    --ham-before-active: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;
    --ham-after: bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    --ham-after-active: bottom 0.1s ease-out,
      transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
  }
`;

export default variables;
