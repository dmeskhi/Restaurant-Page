//Contact page module
const createMenuPage = () => {
    const content = document.querySelector("#content");
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');
  
    
    const heading = document.createElement('h1');
    heading.textContent = 'Our menu';
  
    const menuList = document.createElement('ul');
    const menuItem1 = document.createElement('li');
    menuItem1.textContent = 'Item1';
    const menuItem2 = document.createElement('li');
    menuItem2.textContent = 'Item2';
    const menuItem3 = document.createElement('li');
    menuItem3.textContent = 'Item3';
    menuList.appendChild(menuItem1);
    menuList.appendChild(menuItem2);
    menuList.appendChild(menuItem3);

    pageContent.appendChild(heading);
    pageContent.appendChild(menuList);
    content.appendChild(pageContent);
  };
  
  export default createMenuPage;