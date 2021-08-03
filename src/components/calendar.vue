<template>
  <div class="calendar" @mouseover="toggleButtons('show')" @mouseleave="toggleButtons('hide')">
    <div class="calendar__wrap">
      <div class="calendar__header">
        <div class="calendar__day-name" v-for="(name, n) in dayNames" :key="n">
          <span>{{ name }}</span>
        </div>
      </div>

      <div class="calendar__week" v-for="(week, w) in weekDays" :key="w">
        <div class="calendar__day" v-for="(day, d) in week.days" :key="d">
          <span
            class="calendar__number"
            :class="[
              {'calendar__number--weekend': day.weekend},
              {'calendar__number--other-month': !day.currentMonth},
              {'calendar__number--today': day.today}
            ]"
          >
            {{ day.formated }}
          </span>
        </div>
      </div>

      <button
        type="button"
        class="calendar__button calendar__button--left"
        v-show="showButtons"
        @click="changeMonth('prev')"
        :title="$ml.get('prevMonthTitle')"
      >
        <img src="@/assets/svg/left-green.svg">
      </button>

      <button
        type="button"
        class="calendar__button calendar__button--right"
        v-show="showButtons"
        @click="changeMonth('next')"
        :title="$ml.get('nextMonthTitle')"
      >
        <img src="@/assets/svg/right-green.svg">
      </button>
    </div>

  </div>
</template>

<script>
import { mapActions } from 'vuex'
import moment from 'moment'
import { MLBuilder } from 'vue-multilanguage'

export default {
  name: 'Calendar',
  props: {
    propYear: {
      type: Number,
      default: moment().year()
    },
    propMonth: {
      type: Number,
      default: moment().month()
    }
  },
  data () {
    return {
      year: this.propYear,
      month: this.propMonth,
      showButtons: false
    }
  },
  computed: {
    mlprevMonthTitle () {
      return new MLBuilder('calendar_prev_month').with('prevMonth', moment().month(this.month).subtract(1, 'month').format('MMMM'))
    },
    mlnextMonthTitle () {
      return new MLBuilder('calendar_next_month').with('nextMonth', moment().month(this.month).add(1, 'month').format('MMMM'))
    },
    dayNames () {
      return Array(7).fill(0).map((_, i) => moment().isoWeekday(i + 1).format('ddd'))
    },
    today () {
      if (this.year === moment().year() && this.month === (moment().month())) {
        return moment()
      } else {
        return false
      }
    },
    weekDays () {
      const endDate = moment().month(this.month).date(1).endOf('month')

      return Array(endDate.date()).fill(0).map((_, i) => moment().year(this.year).month(this.month).date(i + 1))
        .map((day) => ({ day, week: day.week() }))
        .filter(({ week }, i, arr) => arr.findIndex((info) => info.week === week) === i)
        .map(({ day, week }) => ({
          week: week,
          days: Array(7).fill(0).map((_, i) => {
            const full = moment(day).week(week).startOf('week').add(i + 1, 'day')

            return {
              full: full,
              formated: full.format('D'),
              weekend: (i === 5 || i === 6),
              currentMonth: (full.month() === this.month),
              today: (full.isSame(this.today, 'day'))
            }
          })
        }))
    }
  },
  methods: {
    ...mapActions([
      'changeDate'
    ]),
    toggleButtons (mode) {
      if (mode === 'show') {
        this.showButtons = true
      }
      if (mode === 'hide') {
        this.showButtons = false
      }
    },
    changeMonth (direction) {
      let originalDate
      if (direction === 'prev') {
        originalDate = moment().set({ year: this.year, month: this.month }).subtract(1, 'month')
        this.month = originalDate.month()
      }

      if (direction === 'next') {
        originalDate = moment().set({ year: this.year, month: this.month }).add(1, 'month')
        this.month = originalDate.month()
      }
      this.year = originalDate.year()
      this.$store.dispatch('changeDate', originalDate)
    }
  },
  mounted () {}
}
</script>

<style lang="stylus">
@import '../assets/styles/_variables'
@import '../assets/styles/_mixins'

.calendar
  display flex
  justify-content center

  &__wrap
    display flex
    flex-direction column
    width 100%
    position relative
    max-width 1200px
    border 1px solid cGreen
    box-sizing border-box

  &__week, &__header
    display flex
    flex 0 1 calc(100% / 7)

  &__week
    &:not(:last-of-type)
      border-bottom 1px solid cGreen

  &__day, &__day-name
    display flex
    width 100%

  &__day-name
    justify-content center
    background cGreen
    font-size 16px
    line-height 18px
    color cWhite
    padding 15px

    &:not(:last-child)
      border-right 1px solid cWhite

  &__day
    min-height 70px
    position relative
    padding 5px 34px 5px 5px
    color cGrauDark
    cursor pointer
    transition background-color .3s

    &:not(:last-child)
      border-right 1px solid cGreen

    &:hover
      background-color cGreenLight
      transition background-color .15s

  &__number
    position absolute
    top 0
    right 0
    padding 5px
    font-size 14px
    line-height 16px
    color cGrayDark

    &--weekend
      color cRed

    &--other-month
      color cGray

    &--today
      color cWhite
      background-color cRed

  &__button
    resetButton()
    height 100%
    position absolute
    top 0
    align-items center
    padding 10px
    transition background-color .3s

    &:active
      background cGreenAccent

    &--left
      left calc(-64px - (10px * 2))

    &--right
      right calc(-64px - (10px * 2))

    img
      width 64px
      height 64px
      object-fir contain
</style>
