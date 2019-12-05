const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//img
let headerimg = document.getElementById('cta-img')
headerimg.setAttribute('src', siteContent['cta']['img-src'])

let middleimg = document.getElementById('middle-img')
middleimg.setAttribute('src', siteContent['main-content']['middle-img-src'])

//nav
let nav = document.querySelectorAll('a')
nav[0].textContent = siteContent['nav']['nav-item-1']
nav[1].textContent = siteContent['nav']['nav-item-2']
nav[2].textContent = siteContent['nav']['nav-item-3']
nav[3].textContent = siteContent['nav']['nav-item-4']
nav[4].textContent = siteContent['nav']['nav-item-5']
nav[5].textContent = siteContent['nav']['nav-item-6']

//middle

let middle = document.querySelector('h1')
middle.textContent = 'DOM \n Is \n Awsome' //cant get the line break to work? Oh well

let middlebutton = document.querySelector('button')
middlebutton.textContent = siteContent['cta']['button']


//main content
let headertext = document.querySelectorAll('h4')
headertext[0].textContent = siteContent['main-content']['features-h4']
headertext[1].textContent = siteContent['main-content']['about-h4']
headertext[2].textContent = siteContent['main-content']['services-h4']
headertext[3].textContent = siteContent['main-content']['product-h4']
headertext[4].textContent = siteContent['main-content']['vision-h4']

let paragraph = document.querySelectorAll('p')
paragraph[0].textContent = siteContent['main-content']['features-content']
paragraph[1].textContent = siteContent['main-content']['about-content']
paragraph[2].textContent = siteContent['main-content']['services-content']
paragraph[3].textContent = siteContent['main-content']['product-content']
paragraph[4].textContent = siteContent['main-content']['vision-content']

///contact
headertext[5].textContent = siteContent['contact']['contact-h4']

paragraph[5].textContent = siteContent['contact']['address']
paragraph[6].textContent = siteContent['contact']['phone']
paragraph[7].textContent = siteContent['contact']['email']

//footer
let footer = document.querySelector('footer p')
footer.textContent = siteContent['footer']['copyright']


//changes

nav.forEach(function(value) {
value.style.color = 'green'
})

let navadd = document.querySelector('nav')

let appended = document.createElement('a')
let prepended = document.createElement('a')
appended.textContent = 'last one'
navadd.appendChild(appended)
prepended.textContent = 'first one'
navadd.prepend(prepended)
