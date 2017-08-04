import I18n from 'react-native-i18n';

I18n.defaultSeparator = ";";

I18n.translations = {  
  "en-US": require("./en.json"),
  "fr-FR": require("./fr.json"),
};

I18n.defaultLocale = I18n.locale =  "fr-FR";

export default I18n;