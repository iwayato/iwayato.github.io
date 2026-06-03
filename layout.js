const isRoot = !window.location.pathname.includes('/Proyectos/');
const base = isRoot ? '.' : '..';

document.body.insertAdjacentHTML('afterbegin', `
  <header>
    <a href="${base}/index.html">Tomoaki Iwaya Villalobos</a>
    <nav>
      <a href="https://github.com/iwayato" target="_blank">GitHub</a>
      <a href="https://www.linkedin.com/in/tomoaki-iwaya" target="_blank">LinkedIn</a>
    </nav>
  </header>
`);
