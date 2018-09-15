const app = new Vue({
  el: "#app",
  data: {
    editFriend: null,
    friends: [],
  },
  methods: {
    updateFriend(friend) {
      fetch("http://rest.learncode.academy/api/vue-5/friends/" + friend.id, {
        body: JSON.stringify(friend),
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
      })
      .then(() => {
        console.log(JSON.stringify(friend))
        this.editFriend = null;
      })
    },
    deleteFriend(id, i) {
      fetch("http://rest.learncode.academy/api/vue-5/friends/" + id, {
      method: "DELETE",
      })
      .then(() => {
        console.log(i)
        this.friends.splice(i, 1);
      })
    }
  },
  mounted() {
    fetch("http://rest.learncode.academy/api/vue-5/friends")
      .then(response => response.json())
      .then((data) =>{
        this.friends = data;
      })
  },
  template: `
    <div>
      <li v-for="friend, i in friends">
        <div v-if="editFriend === friend.id">
          <button v-on:click=updateFriend(friend)>save</button>
          <input v-on:keyup.13="updateFriend(friend)" v-model="friend.name" />
        </div>
      <div v-else>
        <button v-on:click="editFriend = friend.id">edit</button>
        <button v-on:click="deleteFriend(friend.id, i)">+</button>
        {{friend.name}}
      </div>
      </li>
    </div>
  `
})

