// add utility script to the document
const addUtilityScript = () => {
  const utilityScript = document.createElement("script");
  utilityScript.setAttribute("type", "module");
  utilityScript.setAttribute("src", "script/utilities.js");
  utilityScript.setAttribute("defer", "");

  document.head.appendChild(utilityScript);
};
// addUtilityScript();

// customize site tabs
const changeTabColor = () => {
  // create meta element
  const themeMeta = document.createElement("meta");
  themeMeta.name = "theme-color";

  // generate a random color
  const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  themeMeta.content = color;
  document.head.appendChild(themeMeta);
};
// changeTabColor();

// customize site title
const changeTitle = () => {
  document.title = "Welcome To DOM Manipulation Blog";
};
changeTitle();

// link bootstrap
const linkBootstrap = () => {
  // create link element
  const link = document.createElement("link");
  // add attributes
  link.href =
    "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css";
  link.rel = "stylesheet";
  link.integrity =
    "sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN";
  link.crossOrigin = "anonymous";

  // add to the head element
  document.head.appendChild(link);
};
linkBootstrap();

// set background color of the document
document.body.setAttribute("class", "bg-body-tertiary");

// build HTML
function build() {
  const mainContainer = fluidContainer("main");

  mainContainer.appendChild(headerSection());
  mainContainer.appendChild(articleSection());
  mainContainer.appendChild(footerSection());

  document.body.appendChild(mainContainer);
}
build();

// create fluid container
function fluidContainer(element) {
  const containerElement = document.createElement(element);
  containerElement.setAttribute(
    "class",
    "container-fluid text-center mt-5 px-md-5"
  );

  return containerElement;
}

// create bootstrap row
function bootstrapRow() {
  const bootstrapRow = document.createElement("section");
  bootstrapRow.setAttribute("class", "row");

  return bootstrapRow;
}

// create bootstrap column
function bootstrapCol() {
  const bootstrapCol = document.createElement("div");
  bootstrapCol.setAttribute("class", "col");
  return bootstrapCol;
}

// add header section
function headerSection() {
  const header = document.createElement("header");
  header.setAttribute("class", "my-4");

  // add header row
  header.appendChild(headerRow());

  return header;
}

// create header row
function headerRow() {
  const headerRow = bootstrapRow();

  // add logo column
  const logoCol = bootstrapCol();
  logoCol.setAttribute(
    "class",
    "col-3 col-md-3 col-lg-2 d-flex justify-content-end pe-0 pe-sm-1"
  );

  // create logo img
  const logoImg = document.createElement("img");
  logoImg.setAttribute("class", "img-fluid rounded img-thumbnail");
  logoImg.src = "./imgs/logo.jpg";
  logoImg.alt = "BLOG Logo Image";
  logoImg.title = "DOM Manipulation Logo";
  logoImg.style.width = "150px";
  logoImg.style.height = "74px";

  // add logo img
  logoCol.appendChild(logoImg);

  // create navigation column
  const navCol = bootstrapCol();
  navCol.setAttribute("class", "col-9 col-md-9 col-lg-10");

  // create navbar
  const navbar = document.createElement("nav");
  navbar.setAttribute(
    "class",
    "navbar d-block navbar-expand bg-body rounded border"
  );

  // create full width container
  const resContainer = document.createElement("div");
  resContainer.setAttribute("class", "container-fluid d-block g-0");

  // create nav items
  const navItems = document.createElement("ul");
  navItems.setAttribute("class", "navbar-nav justify-content-around");

  // create single item 1
  const navItem1 = document.createElement("li");
  navItem1.setAttribute("class", "nav-item");
  const navLink1 = document.createElement("a");
  navLink1.setAttribute("class", "nav-link active link-primary");
  navLink1.href = "#";

  // create single item 2
  const navItem2 = document.createElement("li");
  navItem2.setAttribute("class", "nav-item");
  const navLink2 = document.createElement("a");
  navLink2.setAttribute("class", "nav-link link-secondary");
  navLink2.href = "#";

  // create single item 3
  const navItem3 = document.createElement("li");
  navItem3.setAttribute("class", "nav-item");
  const navLink3 = document.createElement("a");
  navLink3.setAttribute("class", "nav-link");
  navLink3.href = "#";

  // create single item 4
  const navItem4 = document.createElement("li");
  navItem4.setAttribute("class", "nav-item");
  const navLink4 = document.createElement("a");
  navLink4.setAttribute("class", "nav-link");
  navLink4.href = "#";

  navLink1.innerText = "Home";
  navLink2.innerText = "Blog";
  navLink3.innerText = "About";
  navLink4.innerText = "Contact";

  // add nav links to nav items
  navItem1.appendChild(navLink1);
  navItem2.appendChild(navLink2);
  navItem3.appendChild(navLink3);
  navItem4.appendChild(navLink4);

  // add single items
  navItems.append(navItem1, navItem2, navItem3, navItem4);
  // add nav items to the container
  resContainer.appendChild(navItems);
  // add container to the navbar
  navbar.appendChild(resContainer);
  // add navbar to nav column
  navCol.appendChild(navbar);

  // add elements to the header
  headerRow.append(logoCol, navCol);

  return headerRow;
}

// create article section
function articleSection() {
  const article = document.createElement("article");
  article.setAttribute("class", "ms-sm-4");

  // add article row to the article element
  article.appendChild(articleRow());

  return article;
}

// create article row
function articleRow() {
  const articleRow = bootstrapRow();

  // add blog content to article row
  articleRow.append(...blogContent());

  return articleRow;
}

// create article blog column
function blogColumn() {
  const colContainer = bootstrapCol();
  colContainer.setAttribute("class", "col-sm-6 col-lg-4 mb-3");

  return colContainer;
}

// build blog content (single)
function blogContent() {
  const colContainer1 = blogColumn();
  const colContainer2 = blogColumn();
  const colContainer3 = blogColumn();

  // generate card header names
  const headerNames1 = cardHeaderNames("Web API", "DOM", "JavaScript");
  const headerNames2 = cardHeaderNames("property", "Document", "body");
  const headerNames3 = cardHeaderNames("method", "DOM", "createElement()");

  // generate card header links
  const headerLinks1 = cardHeaderLinks(
    "https://developer.mozilla.org/en-US/docs/Web/API",
    "https://developer.mozilla.org/en-US/docs/Web/API/Document",
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
  );

  const headerLinks2 = cardHeaderLinks(
    "https://javascript.info/dom-attributes-and-properties",
    "https://developer.mozilla.org/en-US/docs/Web/API/Document",
    "https://developer.mozilla.org/en-US/docs/Web/API/Document/body"
  );
  const headerLinks3 = cardHeaderLinks(
    "https://www.freecodecamp.org/news/html-dom-methods/",
    "https://developer.mozilla.org/en-US/docs/Web/API/Document",
    "https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement"
  );

  // generate blog headers
  const buildBlogHeader1 = cardHeader(headerNames1, headerLinks1);
  const buildBlogHeader2 = cardHeader(headerNames2, headerLinks2);
  const buildBlogHeader3 = cardHeader(headerNames3, headerLinks3);

  // generate blog bodies
  const buildBlogBody1 = cardBody(
    "./imgs/dom-structure.jpg",
    "Document Object Model Structure infographic",
    "Document Infographic",
    "Document",
    "",
    `The <code>Document</code> interface represents any web page loaded in the browser and serves as an entry point into the web page's content, which is the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Document_object_model/Using_the_Document_Object_Model#what_is_a_dom_tree" class="card-link">DOM tree</a>.`,
    "https://dom.spec.whatwg.org/",
    "Read More"
  );
  const buildBlogBody2 = cardBody(
    "./imgs/document-body.jpg",
    "Document body property simulation",
    "Document body simulation",
    "Document: body",
    "",
    `The <code>Document.body</code> property represents the <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/body">\<body\></a> or <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/frameset">\<frameset\></a> node of the current document, or <code>null</code> if no such element exists.`,
    "https://developer.mozilla.org/en-US/docs/Web/API/Document/body#examples",
    "See Examples"
  );
  const buildBlogBody3 = cardBody(
    "./imgs/document-createElement.jpg",
    "Document createElement Method simulation",
    "Document createElement simulation",
    "Document: createElement()",
    "",
    `In an <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">HTML</a> document, the <code>document.createElement()</code> method creates the HTML element specified by <i>tagName</i>, or an <a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLUnknownElement"><code>HTMLUnknownElement</code></a> if <i>tagName</i> isn't recognized.`,
    "https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement#examples",
    "See Examples"
  );

  // connect headers and bodies
  const buildBlogs1 = blogCard();
  buildBlogs1.append(buildBlogHeader1, buildBlogBody1);
  const buildBlogs2 = blogCard();
  buildBlogs2.append(buildBlogHeader2, buildBlogBody2);
  const buildBlogs3 = blogCard();
  buildBlogs3.append(buildBlogHeader3, buildBlogBody3);

  colContainer1.appendChild(buildBlogs1);
  colContainer2.appendChild(buildBlogs2);
  colContainer3.appendChild(buildBlogs3);

  return [colContainer1, colContainer2, colContainer3];
}

// create blog card body
function cardBody(...contents) {
  const bodyContainer = document.createElement("div");

  // extract card body contents
  const [
    imgLink,
    imgAlt,
    imgTitle,
    cardTitle,
    cardSubTitle,
    cardText,
    btnLink,
    btnText,
  ] = contents;

  // generate body contents
  const bodyContents = document.createElement("div");
  bodyContents.setAttribute("class", "d-flex flex-column");
  bodyContents.innerHTML = `<img src="${imgLink}" class="card-img-top w-50 align-self-center" alt="${imgAlt}" title="${imgTitle}">
  <div class="card-body">
    <h5 class="card-title">${cardTitle}</h5>
    <p class="card-text">${cardText}</p>
    <a href="${btnLink}" class="btn btn-info text-light">${btnText}</a>
  </div>`;

  // add card body to card container
  bodyContainer.append(bodyContents);

  return bodyContainer;
}

// create blog card (single)
function blogCard() {
  const cardContainer = document.createElement("div");
  cardContainer.setAttribute("class", "card text-start");

  return cardContainer;
}

// create blog card header
function cardHeader(naming, linking) {
  const headerContainer = document.createElement("div");

  // extract header names
  const [firstName, secondName, thirdName] = naming;

  // extract header links
  const [firstLink, secondLink, thirdLink] = linking;

  // generate header contents
  const headerContents = document.createElement("div");
  headerContents.innerHTML += `
  <div class="card-header">
    <a href="${firstLink}" class="badge bg-info link-underline-none">${firstName}</a>
    <a href="${secondLink}" class="badge bg-info link-underline-none">${secondName}</a>
    <a href="${thirdLink}" class="badge bg-info link-underline-none">${thirdName}</a>
  </div>`;

  // card header link underline none
  const cardLinks = headerContents.querySelectorAll(".link-underline-none");
  for (const link of cardLinks) {
    link.style.textDecoration = "none";
  }

  // add header to card
  headerContainer.append(headerContents);

  return headerContainer;
}

// create blog card header names
function cardHeaderNames(...names) {
  const [first, second, third] = names;
  return [first, second, third];
}

// create blog card header links
function cardHeaderLinks(...links) {
  const [first, second, third] = links;
  return [first, second, third];
}

// create footer Section
function footerSection() {
  const footer = document.createElement("footer");
  footer.setAttribute("class", "my-4");

  // add footer row to the footer element
  footer.appendChild(footerRow());

  return footer;
}

// create footer row
function footerRow() {
  const footerRow = bootstrapRow();

  // add logo column
  const logoCol = bootstrapCol();
  logoCol.setAttribute(
    "class",
    "col-3 col-md-3 col-lg-2 d-flex justify-content-end pe-0 pe-sm-1"
  );

  // create logo img
  const logoImg = document.createElement("img");
  logoImg.setAttribute("class", "img-fluid rounded img-thumbnail");
  logoImg.src = "./imgs/logo.jpg";
  logoImg.alt = "BLOG Logo Image";
  logoImg.title = "DOM Manipulation Logo";
  logoImg.style.width = "150px";
  logoImg.style.height = "74px";

  // add logo img
  logoCol.appendChild(logoImg);

  // create navigation column
  const navCol = bootstrapCol();
  navCol.setAttribute("class", "col-9 col-md-9 col-lg-10");

  // create footer nav
  const navbar = document.createElement("nav");
  navbar.setAttribute("class", "navbar navbar-expand bg-body rounded border");

  // create full width container
  const resContainer = document.createElement("div");
  resContainer.setAttribute("class", "container-fluid d-block g-0");

  // create nav items
  const navItems = document.createElement("ul");
  navItems.setAttribute("class", "navbar-nav justify-content-around");

  // create single item 1
  const navItem1 = document.createElement("li");
  navItem1.setAttribute("class", "nav-item");
  const navLink1 = document.createElement("a");
  navLink1.setAttribute("class", "nav-link active link-primary");
  navLink1.href = "#";

  // create single item 2
  const navItem2 = document.createElement("li");
  navItem2.setAttribute("class", "nav-item");
  const navLink2 = document.createElement("a");
  navLink2.setAttribute("class", "nav-link link-secondary");
  navLink2.href = "#";

  // create single item 3
  const navItem3 = document.createElement("li");
  navItem3.setAttribute("class", "nav-item");
  const navLink3 = document.createElement("a");
  navLink3.setAttribute("class", "nav-link");
  navLink3.href = "#";

  // create single item 4
  const navItem4 = document.createElement("li");
  navItem4.setAttribute("class", "nav-item");
  const navLink4 = document.createElement("a");
  navLink4.setAttribute("class", "nav-link");
  navLink4.href = "#";

  navLink1.innerText = "Home";
  navLink2.innerText = "Blog";
  navLink3.innerText = "About";
  navLink4.innerText = "Contact";

  // add nav links to nav items
  navItem1.appendChild(navLink1);
  navItem2.appendChild(navLink2);
  navItem3.appendChild(navLink3);
  navItem4.appendChild(navLink4);

  // add single items
  navItems.append(navItem1, navItem2, navItem3, navItem4);
  // add nav items to the container
  resContainer.appendChild(navItems);
  // add container to the navbar
  navbar.appendChild(resContainer);
  // add navbar to nav column
  navCol.appendChild(navbar);

  // add elements to the footer
  footerRow.append(logoCol, navCol);
  return footerRow;
}
