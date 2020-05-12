const fonts = [ 'Roboto', 'Lato', 'Open Sans', 'Raleway' ]; // Adicione suas fontes do Google Fonts aqui
const numAleatorio = Math.floor(Math.random() * fonts.length);

if (localStorage.getItem('random_font')) { // Se houver o item no storage
    var randomFont = localStorage.getItem('random_font'); // Pega o valor do item no storage
} else { // Se não houver o item no storage
    var randomFont = fonts[numAleatorio]; // Seleciona fonte aleatoriamente
    localStorage.setItem('random_font', randomFont); // Salva o valor no storage
}
 
const fontName = randomFont.replace(/\s+/g, '+');

const fontLinkTag = document.createElement('link');
Object.assign( fontLinkTag, {
    href: 'https://fonts.googleapis.com/css2?family=' + fontName,
    rel: 'stylesheet'
})

const docHead = document.querySelector('head');
docHead.appendChild(fontLinkTag);

const meuCSS = "h1 { font-family: '" + randomFont + "', sans-serif; }";

const customCssTag = document.createElement('style');
const customCssText = document.createTextNode(meuCSS);

customCssTag.setAttribute('type', 'text/css');
customCssTag.appendChild(customCssText);
docHead.appendChild(customCssTag);