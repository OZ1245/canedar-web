<template>
  <div class="calendar">
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
              {'calendar__number--other-month': !day.currentMonth}
            ]"
          >
            {{ day.formated }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'Calendar',
  props: {
    year: {
      type: Number,
      default: moment().year()
    },
    month: {
      type: Number,
      default: moment().month()
    }
  },
  data () {
    return {}
  },
  computed: {
    dayNames () {
      return Array(7).fill(0).map((_, i) => moment().isoWeekday(i + 1).format('ddd'))
    },
    today () {
      if (this.year === moment().year() && this.month === (moment().month() + 1)) {
        return moment().date()
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
              currentMonth: (full.month() === this.month)
            }
          })
        }))
    }
  },
  mounted () {
    console.log(this.weekDays)
    console.log(this.today)
  }
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
    max-width 1200px
    border 1px solid cGreen

  &__week, &__header
    display flex
    flex 0 1 calc(100% / 7)

  &__week
    &:not(:last-child)
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
    padding 5px
    color cGrauDark

    &:not(:last-child)
      border-right 1px solid cGreen

  &__number
    position absolute
    top 5px
    right 5px
    font-size 14px
    line-height 16px
    color cGrayDark

    &--weekend
      color cRed

    &--other-month
      color cGray
</style>
