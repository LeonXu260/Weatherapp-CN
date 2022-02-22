<template>
  <section @click="closeModal" class="modal" ref="modal">
    <div class="modal-wrap" ref="modalWrap">
      <label for="city-name">输入城市:</label>
      <input
        type="text"
        name="city-name"
        placeholder="搜索城市名（如：北京为Beijing，不需要区分大小写）"
        v-model="city"
      />
      <button @click="addCity">添加城市</button>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import db from "@/firebase/init";
export default {
  name: "BaseModal",
  props: ["APIkey", "cities"],
  data() {
    return {
      city: "",
    };
  },
  methods: {
    closeModal(e) {
      if (e.target === this.$refs.modal) {
        this.$emit("close-modal");
      }
    },
    async addCity() {
      if (this.city === "") {
        alert("城市不能为空");
      } else if (
        this.cities.some((res) => res.city === this.city.toLowerCase())
      ) {
        alert(`${this.city} 已经存在!`);
      } else {
        try {
          const res = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&lang='zh_cn'&appid=${this.APIkey}`
          );
          const data = await res.data;
          db.collection("cities")
            .doc()
            .set({
              city: this.city.toLowerCase(),
              currentWeather: data,
            })
            .then(() => {
              this.$emit("close-modal");
            });
        } catch {
          alert(`${this.city} 不存在，请重新尝试!`);
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  z-index: 101;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  label {
    color: #fff;
  }

  .modal-wrap {
    max-width: 500px;
    border-radius: 8px;
    width: 80%;
    padding: 20px;
    background-color: #31363d;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);

    input {
      color: #fff;
      border: none;
      background-color: transparent;
      border-bottom: 1px solid #fff;
      padding: 6px 4px;
      margin: 10px 0 20px;
      width: 100%;

      &:focus {
        outline: none;
      }
    }

    button {
      background-color: #222325;
      color: #fff;
      padding: 6px 20px;
      border-radius: 8px;
      border: none;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
        0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }
  }
}
</style>
