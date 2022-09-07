const helloInLang = {
  en: 'Hello world',
  es: "iHola mundo!",
  ua: 'Привiт, свiт!'

}

const byeInLang = {
  en: 'Bye!',
  es: 'iHola mundo!',
  ua: 'iChau!'
};

const greeting = {
  sayHello: function(lang) {
    return helloInLang[lang];
  }
};

const goodbye = {
  sayGoodbye: function(lang) {
    return byeInLang[lang]
  }
}

export {
  greeting,
  goodbye
}
