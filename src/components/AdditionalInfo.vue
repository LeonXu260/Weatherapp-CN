<template>
  <section class="additional-info container">
    <div>
      <span>日出</span>
      <span>{{
        new Date(this.currentWeather.sys.sunrise * 1000).toLocaleString(
          "zh-cn",
          { timeStyle: "short" }
        )
      }}</span>
    </div>
    <div>
      <span>日落</span>
      <span>{{
        new Date(this.currentWeather.sys.sunset * 1000).toLocaleString(
          "zh-cn",
          { timeStyle: "short" }
        )
      }}</span>
    </div>
    <div>
      <span>湿度</span>
      <span>{{ this.currentWeather.main.humidity }}%</span>
    </div>
    <div>
      <span>云量</span>
      <span>{{ this.currentWeather.clouds.all }}%</span>
    </div>
    <div>
      <span>风速</span>
      <span>{{ Math.round(this.currentWeather.wind.speed) }} km/h</span>
    </div>
    <div>
      <span>气压</span>
      <span>{{ this.currentWeather.main.pressure }} hPa</span>
    </div>
  </section>
</template>

<script>
export default {
  name: "AdditionalInfo",
  props: ["currentWeather"],
};
</script>

<style lang="scss" scoped>
.additional-info {
  padding: 30px 20px;
  display: flex;
  flex-wrap: wrap;
  color: #fff;

  > div {
    display: flex;
    flex-direction: column;
    flex-basis: 50%;
    margin-bottom: 20px;

    span:nth-child(1) {
      font-size: 12px;
      margin-bottom: 8px;
    }
    span:nth-child(2) {
      font-weight: 600;
    }
  }

  div:nth-child(5),
  div:nth-child(6) {
    margin-bottom: 0;
  }
}
</style>
