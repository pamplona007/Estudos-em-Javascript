// === Dias comemorativos ===

const date = new Date();
const diaMes = date.getDate() + '-' + (date.getMonth()+1);

function setFont() {
    switch (diaMes) {
        case '25-5':

            console.log('PARABÉNS LUCAS');
            break;

        default:

                // === Fonte aleatória ===
                const head = document.querySelector('head');


                // Seleção de fonte aleatória
                const fonts = ['Roboto', 'Lato', 'Open Sans', 'Raleway', 'Roboto Mono', 'Merriweather', 'Ubuntu', 'Barlow', 'Libre Baskerville', 'Jost', 'Montserrat', 'Poppins', 'Roboto Slab', 'Quicksand', 'Josefin Sans', 'Bitter', 'Varela Round', 'Arvo', 'Manrope', 'Merriweather Sans', 'Exo 2', 'Source Serif Pro', 'Cairo', 'Overpass', 'Confortaa', 'Barlow Condensed', 'Questrial', 'EB Garamond', 'Zilla Slab', 'Bree Serif', 'Josefin Slab', 'Inter', 'Sanchez', 'Alice', 'Jaldi', 'Kreon', 'Karma', 'Yrsa', 'Sulphur Point', 'Crimson Pro', 'Scope One', 'Hepta Slab' ];

                if (localStorage.getItem('pamplona_fonte')) {
                    var rFont = localStorage.getItem('pamplona_fonte');
                } else {
                    var rFont = fonts[Math.floor(Math.random() * fonts.length)];
                    localStorage.setItem('pamplona_fonte', rFont);
                }

                // Cria link do Google Fonts
                const gfLink = document.createElement('link');

                Object.assign( gfLink, {
                    href: `https://fonts.googleapis.com/css2?family=${rFont.replace(/\s+/g, '+')}`,
                    rel: 'stylesheet',
                    id: 'lp-cfontlink'
                })
                head.appendChild(gfLink);


                // Cria css para aplicar a fonte
                const customCssTag = document.createElement('style');
                const customCssAtt = document.createTextNode(`h1,h2,h3,h4,h5,h6,.h1,.h2,.h3,.h4,.h5,.h6 { font-family: '${rFont}', sans-serif;}`);

                customCssTag.setAttribute('type', 'text/css');
                customCssTag.setAttribute('id', 'lp-cfontcss');
                customCssTag.appendChild(customCssAtt);
                head.appendChild(customCssTag);


                // Diz qual a fonte no rodapé
                const fWrapper = document.querySelector('.vlt-footer-inner');
                const fonteSpan = document.createElement('span'); 
                const qualAFonte = document.createTextNode(`Sua fonte é a ${rFont} :)`);
                fonteSpan.style.fontFamily = `'${rFont}', sans-serif`;

                fonteSpan.setAttribute('id', 'lp-cspan')
                fonteSpan.appendChild(qualAFonte);
                fWrapper.appendChild(fonteSpan);
            break;
    }
}
setFont();
