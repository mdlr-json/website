// script.js

const titlePlate = () => {
  const title = document.title;
  return `<h1>${title}</h1>`;
};

const navBar = () => {
  let content = '<ul>';
  const pages = ['index'];
  for (i = 0; i < n; i++) {
    content += (`<li><a src="/${pages[i]}.html">${pages[i]}</a></li>`);
  }
  return content += '</ul>';
};

document.getElementById('page-title').innerHTML = titlePlate();
document.getElementById('navigation-bar').innerHTML = navBar();
