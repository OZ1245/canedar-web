import Vue from 'vue'
import { MLInstaller, MLCreate, MLanguage } from 'vue-multilanguage'

Vue.use(MLInstaller)

export default new MLCreate({
  initial: 'en',
  save: process.env.NODE_ENV === 'production',
  languages: [
    new MLanguage('en').create({
      preloader: 'Please wait...',
      home: 'Home',
      helloUser: 'Hello, <strong>{userName}</strong>!',
      menu: 'Menu',
      profile_menu_settings: 'Settings',
      profile_menu_logout: 'Logout',
      calendar_prev_month: 'Previous month: {prevMonth}',
      calendar_next_month: 'Next month: {nextMonth}',
      auth_button_auth: 'Login',
      auth_button_reg: 'Registration'
    }),

    new MLanguage('ru').create({
      preloader: 'Пожалуйста, подождите...',
      home: 'Главная',
      helloUser: 'Привет, <strong>{userName}</strong>!',
      menu: 'Меню',
      profile_menu_settings: 'Настройки',
      profile_menu_logout: 'Выход',
      calendar_prev_month: 'Предыдущий месяц: {prevMonth}',
      calendar_next_month: 'Следующий: {nextMonth}',
      auth_button_auth: 'Войти',
      auth_button_reg: 'Регистрация'
    })
  ]
})
