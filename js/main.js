let isSunsetMode = true

const languageWordsOuter = [
  'React.js',
  'JavaScript',
  'Python',
  'HTML',
  'SCSS',
  'TypeScript',
  'Redux.js',
  'REST',
  'HTTP',
]

const languageWordsInner = ['AWS Amplify', 'BASH', 'ZSH', 'GIT', 'MySQL', 'Node.js']

document.getElementById('spin').innerHTML = languageWordsOuter.map((language, indx) => 
    `<div class="spin" style="${'animation-delay: -' + indx * 1.1 + 's'}">
      <div class="words">${language}</div>
    </div>`
).join('')

document.getElementById('spinInner').innerHTML = languageWordsInner.map((language, indx) => 
  `<div class="spinInner"  style="${'animation-delay: -' + indx * 1.65 + 's'}">
    <div class="words">${language}</div>
  </div>`
).join('')

document.getElementById("themeChange").addEventListener("click", function() {
  toggleStylesheet("./css/theme.css", isSunsetMode);
})


// Define a function to apply or remove a stylesheet
function toggleStylesheet(href, onoff) {
  console.log(onoff); // log the onoff value for debugging purposes

  if (onoff) { 
    // if onoff is true, apply the stylesheet
    var link = document.createElement('link'); // create a new link element
    link.id = 'theme'; // set the link's id attribute
    link.rel = 'stylesheet'; // set the link's rel attribute
    link.type = 'text/css'; // set the link's type attribute
    link.href = href; // set the link's href attribute to the specified URL
    document.getElementsByTagName('head')[0].appendChild(link); // add the link to the page's head element

    // change the src of an element with id "sunsetMountains" to a different image
    document.getElementById("sunsetMountains").src = './img/mSunrise.svg';
    isSunsetMode = false; // update the isSunsetMode variable
  } else { 
    // if onoff is false, remove the stylesheet
    document.getElementById("sunsetMountains").src = './img/mountainsSunset.svg';

    // find all link elements with an id attribute of "theme" and remove them
    document.querySelectorAll('link[id=theme]').forEach((link) => link.parentNode.removeChild(link));

    isSunsetMode = true; // update the isSunsetMode variable
  }
}

// Define an object with references to several page elements
let contentSections = {
  "visitorForm": document.getElementById("visitorForm"),
  "workexperience": document.getElementById("workexperience"),
  "projects": document.getElementById("projects"),
  "languages": document.getElementById("languages"),
  "aboutme": document.getElementById("aboutme"),
  "refferences": document.getElementById("refferences")
};

// Define a function to show a content section
function showContent(sectionName) {
  console.log(sectionName); // log the sectionName for debugging purposes

  // Hide all content sections
  for (let section in contentSections) {
    contentSections[section].style.display = "none";
  }

  console.log(contentSections); // log the contentSections object for debugging purposes

  // Show the specified content section
  contentSections[sectionName].style.display = "block";
}

// Define a function to update the color of the links in the page's header
function updateHeader() {
  const threshold = 800; // define a scroll threshold of 800 pixels
  const navComponentA = document.querySelectorAll('.navComponent a'); // find all anchor elements with a class of "navComponent"

  if (window.scrollY < threshold) {
    // if the user has scrolled less than the threshold, update the link colors

    navComponentA.forEach(compA => {
      // for each anchor element, update the color
      compA.style.color = isSunsetMode ? "#550701" : "#062B79"; // use the isSunsetMode variable to determine the color
    });
    
  } else {
    // if the user has scrolled the threshold or more, update the link colors to white
    navComponentA.forEach(compA => {
      compA.style.color = "white";
    });
  }
}

// Add an event listener to the window object to call the updateHeader function when the user scrolls the page
window.addEventListener('scroll', updateHeader);