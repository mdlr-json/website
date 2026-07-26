// script.js

const pageTitle = () => {
  const title = document.title;
  return `<h1>${title}</h1>`;
};

const navBar = () => {
  let content = '<ul>';
  const pages = ['index'];
  for (i = 0; i < pages.length; i++) {
    content += (`<li><a href="${pages[i]}.html">${pages[i]}</a></li>`);
  }
  content += '</ul>';
  return content;
};

document.getElementById('page-title').innerHTML = pageTitle();
document.getElementById('navigation-bar').innerHTML = navBar();
