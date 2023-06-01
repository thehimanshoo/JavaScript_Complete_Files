let val = document;
console.log(document);

// doctype
val = document.doctype;
console.log(val);

// head section
val = document.head;
console.log(val);

// title of the page
val = document.title;
console.log(val);

// body section
val = document.body;
console.log(val);

// navbar with tag
val = document.querySelector('nav');
console.log(val);

// navbar with id
val = document.querySelector('#nav-bar');
console.log(val);

// navbar with class name
val = document.querySelector('.main-nav');
console.log(val);

// nested element selection
val = document.querySelector('.main-nav a span');
console.log(val.textContent);

// to change the content
let h1Tag = document.querySelector('h1');
console.log(h1Tag);

// the text between the tag
console.log(h1Tag.innerText);

// change the text
h1Tag.innerText = 'Good Evening';

// change the styles
h1Tag.style.backgroundColor = 'black';
h1Tag.style.color = 'white';
h1Tag.style.textAlign = 'center';
h1Tag.style.padding = '15px';
h1Tag.style.boxShadow = '0 0 10px black';


// <nav id="nav-bar" class="main-nav">
//     <a href="#"> &#8377; <span>50000</span></a>
// </nav>
//
// <h1>Good Morning</h1>
//
// <img id="laptop-image" src="../img/image5.jpeg" alt="">
//
//
//     <form>
//     <input type="text">
//     </form>

// Image Change
let imageTag = document.querySelector('#laptop-image');
imageTag.style.width = '400px';
imageTag.style.display = 'block';
imageTag.style.margin = 'auto';
imageTag.style.boxShadow = '0 0 10px black';
imageTag.style.borderRadius = '10px';

// access the attributes of a tag
console.log(imageTag.getAttribute('src'));

// to change the attribute
imageTag.setAttribute('src', '../img/image5.jpeg');

// get the input tag
let textBox = document.querySelector('input');
textBox.setAttribute('type','date');


