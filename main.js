
new Vue({
  el: "#app",
  data: {
    player: "player",
    sq1: 0,
    sq2: 0,
    sq3: 0,
    sq4: 0,
    sq5: 0,
    sq6: 0,
    sq7: 0,
    sq8: 0,
    sq9: 0
  },
  methods: {
    move(event) {
      let targetId = event.currentTarget.id;
      console.log(targetId);
    }
  }
})