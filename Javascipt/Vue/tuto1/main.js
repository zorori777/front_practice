const app = new Vue({
  el: "#app",
  data: {
    takumi: {
      nickname: "Takumin",
      age: 22
    },
    mirai: {
      nickname: "saga",
      age: 18
    }
  },
  template: `
    <div>
      <h2>{{takumi.nickname}}</h2>
      <h2>{{takumi.age}}</h2>
      <h2>{{mirai.nickname}}</h2>
      <h2>{{mirai.age}}</h2>
    </div>
  `
})
