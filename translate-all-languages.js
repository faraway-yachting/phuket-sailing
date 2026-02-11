const fs = require('fs');

const translations = {
  ru: require('./translations/ru.json'),
  th: require('./translations/th.json'),
  cn: require('./translations/cn.json'),
  ar: require('./translations/ar.json')
};

const en = JSON.parse(fs.readFileSync('messages/en.json', 'utf8'));
const langs = ['ru', 'th', 'cn', 'ar'];

langs.forEach(lang => {
  const filePath = `messages/${lang}.json`;
  const file = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  
  if (translations[lang]) {
    function deepMerge(target, source) {
      for (const key in source) {
        if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
          if (!target[key]) target[key] = {};
          deepMerge(target[key], source[key]);
        } else {
          target[key] = source[key];
        }
      }
    }
    
    deepMerge(file.catamaranCharter, translations[lang]);
  }
  
  fs.writeFileSync(filePath, JSON.stringify(file, null, 2));
  console.log(`Translated ${lang}.json`);
});

console.log('Done!');
