const app = new Vue({
  el: "#app",
  data: {
    takumi: {
      last: "takumi",
      first: "watanabe",
      age: 22
    },

    mirai: {
      last: "mirai",
      first: "watanabe",
      age: 18
    }
  },
  filters: {
    ageInOneYear(value) {
      return `${value.age + 1}`;
    },
    fullName(value) {
      return `${value.last}, ${value.first}`;
    }
  },
  template: `
    <div>
      <h2>{{takumi | fullName}}</h2>
      <h2>{{takumi | ageInOneYear}}</h2>
      <h2>{{mirai | fullName}}</h2>
      <h2>{{mirai | ageInOneYear}}</h2>
    </div>
  `
})
