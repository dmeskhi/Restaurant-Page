const createRestaurantHomePage = () => {
  const content = document.querySelector("#content");
  const pageContent = document.createElement('div');
  pageContent.classList.add('page-content');

  //Create and append image element
  const image = document.createElement('img');
  image.src =
    "https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  image.height = "300";
  pageContent.appendChild(image);

  //Create and append heading element
  const headline = document.createElement('h1');
  headline.textContent = "Welcome to my project!";
  pageContent.appendChild(headline);

  //Create and append copy element
  const copy = document.createElement('p');
  copy.textContent = "This project caused me a huge headache but I never quit!";
  pageContent.appendChild(copy);
  content.appendChild(pageContent);
};

export default createRestaurantHomePage;
