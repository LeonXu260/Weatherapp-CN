<template>
  <section class="hourly-weather">
    <div class="container">
      <div
        class="hourly-temp"
        v-for="(time, index) in filteredList"
        :key="index"
      >
        <HourlyTemp :time="time" />
      </div>
    </div>
  </section>
</template>

<script>
import HourlyTemp from "./HourlyTemp";
export default {
  name: "HourlyWeather",
  props: ["forecast"],
  components: {
    HourlyTemp,
  },
  computed: {
    filteredList() {
      return this.forecast.hourly.slice(1, 25);
    },
  },
};
</script>

<style lang="scss" scoped>
.hourly-weather {
  padding: 30px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.7);

  .container {
    display: flex;
    max-width: 100vw;
    overflow: scroll;
    padding: 0;
    margin: 0 20px;

    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>