
new Vue({
  el: "#app",
  data: {
    player: "player",
    squares: [ { id: "sq1", val: Number("0") },
    { id: "sq2", val: "" },
    { id: "sq3", val: "" },
    { id: "sq4", val: "" },
    { id: "sq5", val: "" },
    { id: "sq6", val: "" },
    { id: "sq7", val: "" },
    { id: "sq8", val: "" },
    { id: "sq9", val: "" }],
    turn: true,
    play: 0
  },
  updated(){
    /* console.log(JSON.stringify(this.squares)); */
  },
  methods: {
    move(event) {
      let targetId = event.currentTarget.id;
      let sqr = this.squares.find((item) =>  item.id === targetId);
      if(this.turn) {
      sqr.val = "tic";
      } else {
        sqr.val = "tac";
      }
      
    sq1 = this.squares[0].val;
    sq2 = this.squares[1].val;
    sq3 = this.squares[2].val;
    sq4 = this.squares[3].val;
    sq5 = this.squares[4].val;
    sq6 = this.squares[5].val;
    sq7 = this.squares[6].val;
    sq8 = this.squares[7].val;
    sq9 = this.squares[8].val;
        
    if((sq1 == "tic") && (sq2 == "tic") && (sq3 == "tic")){
      this.play = 1;
    } else if((sq1 == "tic") && (sq4 == "tic") && (sq7 == "tic")){
      this.play = 1;
    } else if((sq3 == "tic") && (sq6 == "tic") && (sq9 == "tic")){
      this.play = 1;
    } else if((sq7 == "tic") && (sq8 == "tic") && (sq9 == "tic")){
      this.play = 1;
    } else if((sq2 == "tic") && (sq5 == "tic") && (sq8 == "tic")){
      this.play = 1;
    } else if((sq4 == "tic") && (sq5 == "tic") && (sq6 == "tic")){
      this.play = 1;
    } else if((sq1 == "tic") && (sq5 == "tic") && (sq9 == "tic")){
      this.play = 1;
    } else if((sq3 == "tic") && (sq5 == "tic") && (sq7 == "tic")){
      this.play = 1;
    } else if((sq1 == "tac") && (sq2 == "tac") && (sq3 == "tac")) {
      this.play = 1;
    } else if ((sq1 == "tac") && (sq4 == "tac") && (sq7 == "tac")) {
      this.play = 1;
    } else if ((sq3 == "tac") && (sq6 == "tac") && (sq9 == "tac")) {
      this.play = 1;
    } else if ((sq7 == "tac") && (sq8 == "tac") && (sq9 == "tic")) {
      this.play = 1;
    } else if ((sq2 == "tac") && (sq5 == "tac") && (sq8 == "tac")) {
      this.play = 1;
    } else if ((sq4 == "tac") && (sq5 == "tac") && (sq6 == "tac")) {
      this.play = 1;
    } else if ((sq1 == "tac") && (sq5 == "tac") && (sq9 == "tac")) {
      this.play = 1;
    } else if ((sq3 == "tac") && (sq5 == "tac") && (sq7 == "tac")) {
      this.play = 1;
    } else {
      this.play = 0;
    }
    if (this.play === 1){
        console.log("Game Over!");
    }
    this.turn = !this.turn;
    },
  }
})