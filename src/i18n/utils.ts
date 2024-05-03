
import config from '../../astro.config.mjs';



export default function getLangInfo() {  
      const languages = Object.keys(config);
      return config.i18n
    }