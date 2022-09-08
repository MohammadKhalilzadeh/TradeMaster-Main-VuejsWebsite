import en from "./assets/translations/en.json";
import fr from "./assets/translations/fr.json";
import fa from "./assets/translations/fa.json";
import ar from "./assets/translations/ar.json";
import VueI18n from "vue-i18n";
import Vue from "vue";

Vue.use(VueI18n);

export default new VueI18n({
  locale: localStorage.getItem("lang") || "fa",
  messages: {
    fa: fa,
    en: en,
    ar: ar,
    fr: fr,
  },
});
