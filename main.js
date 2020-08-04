
new Vue({
  el: "#app",
  data: {
    player: "player",
    squares: [ { id: "sq1", val: "" },
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
      
      sqr.val = "tic";
      
    sq1 = this.squares[0].val;
    sq2 = this.squares[1].val;
    sq3 = this.squares[2].val;
    sq4 = this.squares[3].val;
    sq5 = this.squares[4].val;
    sq6 = this.squares[5].val;
    sq7 = this.squares[6].val;
    sq8 = this.squares[7].val;
    sq9 = this.squares[8].val;
    // console.log(sq5);

        
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
    // this.turn = !this.turn;
    this.botMove(this.squares);
    },
    randumb(arr1, arr2) {
      var percent = Math.ceil(Math.random() * 100);
      // console.log(percent);
      if (percent > 70) {
        let ranNum = Math.floor(Math.random() * arr2.length);
        // console.log("Array Two: ", ranNum);
        return arr2[ranNum];
      } else {
        let ranNum = Math.floor(Math.random() * arr1.length);
       // console.log("Array One: ", ranNum);
        return arr1[ranNum];
      }
    },
    botMove(sqrs){
       console.log(JSON.stringify(sqrs));
      sq1 = sqrs[0].val;
      sq2 = sqrs[1].val;
      sq3 = sqrs[2].val;
      sq4 = sqrs[3].val;
      sq5 = sqrs[4].val;
      sq6 = sqrs[5].val;
      sq7 = sqrs[6].val;
      sq8 = sqrs[7].val;
      sq9 = sqrs[8].val;
      
      // Player Plays middle
      if(sq1 == "" && sq2 == "" && sq3 == "" && sq4 == "" && sq5 == "tic" && sq6 == "" && sq7 == "" && sq8 == "" && sq9 == ""){
        let move = this.randumb([sqrs[0], sqrs[8]], [sqrs[1], sqrs[2], sqrs[3], sqrs[7]]);
        move.val = "tac";
      } 
      // Phase 1 good move
      if(sq1 == "tac" && sq2 == "" && sq3 == "tic" && sq4 == "" && sq5 == "tic" && sq6 == "" && sq7 == "" && sq8 == "" && sq9 == "") {
        let move = this.randumb([sqrs[6]], [sqrs[3], sqrs[7]]);
        move.val = "tac";
      }
      if(sq1 == "" && sq2 == "" && sq3 == "" && sq4 ==  "" && sq5 == "tic" && sq6 == "" && sq7 == "tic" && sq8 == "" && sq9 == "tac"){
        let move = this.randumb([sqrs[2]], [sqrs[1], sqrs[5]]);
        move.val = "tac";
      }
      if(sq1 == "" && sq2 == "" && sq3 == "tac" && sq4 == "" && sq5 == "tic" && sq6 == "" && sq7 == "" && sq8 == "" && sq9 == "tic"){
        let move = this.randumb([sqrs[0]], [sqrs[1], sqrs[3]]);
        move.val = "tac";
      }
      // Phase 1 Bad move
      if(sq1 == "" && sq2 == "tac" && sq3 == "tic" && sq4 == "" && sq5 == "tic" && sq6 == "" && sq7 == "" && sq8 == "" && sq9 == ""){
        let move = this.randumb([sqrs[6]], [sqrs[6], sqrs[3], sqrs[7]]);
        move.val = "tac";
      } 
      if(sq1 == "" && sq2 == "" && sq3 == "" && sq4 == "" && sq5 == "tic" && sq6 == "" && sq7 == "tic" && sq8 == "tac" && sq9 == ""){
        let move = this.randumb([sqrs[2]], [sqrs[1], sqrs[2], sqrs[5]]);
        move.val = "tac";
      }
      if(sq1 == "tic" && sq2 == "" && sq3 == "" && sq4== "tac" && sq5 == "tic" && sq6 == "" && sq7 == "" && sq8 == "" && sq9 == ""){
        let move = this.randumb([sqrs[8]], [sqrs[5], sqrs[7], sqrs[8]]);
        move.val = "tac";
      }
      // Player Plays any corner
      // first corner
      if(sq1 == "tic" && sq2 == "" && sq3 == "" && sq4 == "" && sq5 == "" && sq6 == "" && sq7 == "" && sq8 == "" && sq9 == ""){
        let move = this.randumb([sqrs[4]], [sqrs[1], sqrs[2], sqrs[3], sqrs[4], sqrs[6], sqrs[8]]);
        move.val = "tac";
      }
      // second corner
  }
})