
new Vue({
  el: "#app",
  data: {
    player: "player",
    squares: [ { id: "sq1", val: Number("0") },
    { id: "sq2", val: Number("0") },
    { id: "sq3", val: Number("0") },
    { id: "sq4", val: Number("0") },
    { id: "sq5", val: Number("0") },
    { id: "sq6", val: Number("0") },
    { id: "sq7", val: Number("0") },
    { id: "sq8", val: Number("0") },
    { id: "sq9", val: Number("0") }],
    turn: true
  },
  methods: {
    move(event) {
      let targetId = event.currentTarget.id;
      let sqr = this.squares.find((item) =>  item.id === targetId);
      if(this.turn) {
      sqr.val = 1;
      } else {
        sqr.val = 2;
      }
      this.turn = !this.turn;
    }
  }
})