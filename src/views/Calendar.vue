<template>
  <div class="calendar-page">
    <Calendar/>
  </div>
</template>

<script>
import Calendar from '@/components/calendar'

export default {
  name: 'CalendarPage',
  components: {
    Calendar
  }
}
</script>

<style lang="stylus">
@import '../assets/styles/_variables'
@import '../assets/styles/_mixins'
// .calendar-page
</style>
