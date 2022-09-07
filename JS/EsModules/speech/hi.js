const helloInLang = {
  en: 'Hello world',
  es: "iHola mundo!",
  ua: 'Привiт, свiт!'
}

export const greeting = {
  sayHello: function(lang) {
    return helloInLang[lang];
  }
};
