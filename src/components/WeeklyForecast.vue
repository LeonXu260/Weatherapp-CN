<template>
  <section class="weekly-forecast">
    <div class="container">
      <div class="daily" v-for="(day, index) in filteredList" :key="index">
        <DailyForecast :day="day" />
      </div>
    </div>
  </section>
</template>

<script>
import DailyForecast from "./DailyForecast";
export default {
  name: "WeeklyForecast",
  props: ["forecast"],
  components: {
    DailyForecast,
  },
  computed: {
    filteredList() {
      return this.forecast.daily.slice(1, 8);
    },
  },
};
</script>

<style lang="scss" scoped>
.weekly-forecast {
  padding: 30px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.7);

  .daily {
    margin-bottom: 24px;
  }

  .daily:last-child {
    margin-bottom: 0;
  }
}
</style>
