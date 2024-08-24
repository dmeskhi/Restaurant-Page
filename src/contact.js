//Contact page module
const createContactPage = () => {
    const content = document.querySelector("#content");
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');
  
    
    const form = document.createElement('form');
    form.classList.add('contact-form');
  
    const headingInput = document.createElement('input');
    headingInput.type = 'text';
    headingInput.placeholder = 'Enter Heading'
    pageContent.appendChild(headingInput);
  
    const addressInput = document.createElement('input');
    addressInput.type = 'text';
    addressInput.placeholder = 'Enter Address'
    pageContent.appendChild(addressInput);

    const phoneInput = document.createElement('input');
    phoneInput.type = 'text';
    phoneInput.placeholder = 'Enter Phone'
    pageContent.appendChild(phoneInput);

    pageContent.appendChild(form);
    content.appendChild(pageContent);
  };
  
  export default createContactPage;