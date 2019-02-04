import Vue from 'vue'
import VueI18n from 'vue-i18n'

import jp from './lang/jp.json'
import tw from './lang/tw.json'

Vue.use(VueI18n)


const messages = {
    tw,jp
};

const i18n = new VueI18n({
    /** 默认值 */
    locale: 'jp',
    messages
})

export default i18n