import Vue from 'vue'
import { MLInstaller, MLCreate, MLanguage } from 'vue-multilanguage'

Vue.use(MLInstaller)

export default new MLCreate({
  initial: 'en',
  save: process.env.NODE_ENV === 'production',
  languages: [
    new MLanguage('en').create({
      home: 'Home',
      helloUser: 'Hello, <strong>{userName}</strong>!',
      menu: 'Menu',
      profile_menu_settings: 'Settings',
      profile_menu_logout: 'Logout'
    }),

    new MLanguage('ru').create({
      home: 'Главная',
      helloUser: 'Привет, <strong>{userName}</strong>!',
      menu: 'Меню',
      profile_menu_settings: 'Настройки',
      profile_menu_logout: 'Выход'
    })
  ]
})
