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
      auth_text_auth: 'Log in',
      auth_text_reg: 'Create account',
      input_login_text: 'Login',
      input_email_text: 'Email',
      input_password_text: 'Password',
      input_submit_text: 'Log in',
      input_register_text: 'Create'
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
      auth_text_auth: 'Войти',
      auth_text_reg: 'Регистрация',
      input_login_text: 'Логин',
      input_email_text: 'Email',
      input_password_text: 'Пароль',
      input_submit_text: 'Войти',
      input_register_text: 'Создать'
    })
  ]
})
