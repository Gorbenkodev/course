const byeInLang = {
  en: 'Bye!',
  es: 'iChau!',
  ua: 'До побачення!'
};

export const goodbye = {
  sayGoodbye: function(lang) {
    return byeInLang[lang]
  }
}