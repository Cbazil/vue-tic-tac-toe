
new Vue({
  el: '#app',
  data: {
    player: 'player',
    squares: [{ id: 'sq1', val: '' },
    { id: 'sq2', val: '' },
    { id: 'sq3', val: '' },
    { id: 'sq4', val: '' },
    { id: 'sq5', val: '' },
    { id: 'sq6', val: '' },
    { id: 'sq7', val: '' },
    { id: 'sq8', val: '' },
    { id: 'sq9', val: '' }],
    turn: true,
    play: 0
  },
  updated(){
    /* console.log(JSON.stringify(this.squares)); */
    if (this.play === 1) {
      console.log('Game Over!');
    }
  },
  
  methods: {
    move(event) {
      let targetId = event.currentTarget.id;
      let sqr = this.squares.find((item) =>  item.id === targetId);
      
    sqr.val = 'tic';
      
    this.botMove(this.squares);       
      
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
    
    if(sq1 == 'tic' && sq2 == 'tic' && sq3 == 'tic'){
      this.play = 1;
    } 
    if(sq1 == 'tic' && sq4 == 'tic' && sq7 == 'tic'){
      this.play = 1;
    } 
    if(sq3 == 'tic' && sq6 == 'tic' && sq9 == 'tic'){
      this.play = 1;
    } 
    if(sq7 == 'tic' && sq8 == 'tic' && sq9 == 'tic'){
      this.play = 1;
    } 
    if(sq2 == 'tic' && sq5 == 'tic' && sq8 == 'tic'){
      this.play = 1;
    } 
    if(sq4 == 'tic' && sq5 == 'tic' && sq6 == 'tic'){
      this.play = 1;
    } 
    if(sq1 == 'tic' && sq5 == 'tic' && sq9 == 'tic'){
      this.play = 1;
    } 
    if(sq3 == 'tic' && sq5 == 'tic' && sq7 == 'tic'){
      this.play = 1;
    } 
    if(sq1 == 'tac' && sq2 == 'tac' && sq3 == 'tac') {
      this.play = 1;
    } 
    if (sq1 == 'tac' && sq4 == 'tac' && sq7 == 'tac') {
      this.play = 1;
    } 
    if (sq3 == 'tac' && sq6 == 'tac' && sq9 == 'tac') {
      this.play = 1;
    } 
    if (sq7 == 'tac' && sq8 == 'tac' && sq9 == 'tic') {
      this.play = 1;
    } 
    if (sq2 == 'tac' && sq5 == 'tac' && sq8 == 'tac') {
      this.play = 1;
    } 
    if (sq4 == 'tac' && sq5 == 'tac' && sq6 == 'tac') {
      this.play = 1;
    } 
    if (sq1 == 'tac' && sq5 == 'tac' && sq9 == 'tac') {
      this.play = 1;
    }
    if (sq3 == 'tac' && sq5 == 'tac' && sq7 == 'tac') {
      this.play = 1;
    } 
    
    // this.turn = !this.turn;
    },
    randumb(arr1, arr2) {
      var percent = Math.ceil(Math.random() * 100);
      // console.log(percent);
      if (percent > 70) {
        let ranNum = Math.floor(Math.random() * arr2.length);
        // console.log('Array Two: ', ranNum);
        return arr2[ranNum];
      } else {
        let ranNum = Math.floor(Math.random() * arr1.length);
       // console.log('Array One: ', ranNum);
        return arr1[ranNum];
      }
    },
    botMove(sqrs){
      // console.log(JSON.stringify(sqrs));
      let sq1 = sqrs[0].val;
      let sq2 = sqrs[1].val;
      let sq3 = sqrs[2].val;
      let sq4 = sqrs[3].val;
      let sq5 = sqrs[4].val;
      let sq6 = sqrs[5].val;
      let sq7 = sqrs[6].val;
      let sq8 = sqrs[7].val;
      let sq9 = sqrs[8].val;
      
      // Player Plays middle
      if(sq1 == '' && sq2 == '' && sq3 == '' && sq4 == '' && sq5 == 'tic' && sq6 == '' && sq7 == '' && sq8 == '' && sq9 == ''){
        let move = this.randumb([sqrs[0], sqrs[8]], [sqrs[1], sqrs[2], sqrs[3], sqrs[7]]);
        move.val = 'tac';
      } 
      
      // Phase 1 good move
      else if(sq1 == 'tac' && sq2 == '' && sq3 == 'tic' && sq4 == '' && sq5 == 'tic' && sq6 == '' && sq7 == '' && sq8 == '' && sq9 == '') {
        let move = this.randumb([sqrs[6]], [sqrs[3], sqrs[7]]);
        move.val = 'tac';
      }
      else if(sq1 == '' && sq2 == '' && sq3 == '' && sq4 ==  '' && sq5 == 'tic' && sq6 == '' && sq7 == 'tic' && sq8 == '' && sq9 == 'tac'){
        let move = this.randumb([sqrs[2]], [sqrs[1], sqrs[5]]);
        move.val = 'tac';
      }
      else if(sq1 == '' && sq2 == '' && sq3 == 'tac' && sq4 == '' && sq5 == 'tic' && sq6 == '' && sq7 == '' && sq8 == '' && sq9 == 'tic'){
        let move = this.randumb([sqrs[0]], [sqrs[1], sqrs[3]]);
        move.val = 'tac';
      }
      // Phase 1 Bad move
      else if(sq1 == '' && sq2 == 'tac' && sq3 == 'tic' && sq4 == '' && sq5 == 'tic' && sq6 == '' && sq7 == '' && sq8 == '' && sq9 == ''){
        let move = this.randumb([sqrs[6]], [sqrs[6], sqrs[3], sqrs[7]]);
        move.val = 'tac';
      } 
 
      else if(sq1 == '' && sq2 == '' && sq3 == '' && sq4 == '' && sq5 == 'tic' && sq6 == '' && sq7 == 'tic' && sq8 == 'tac' && sq9 == ''){
        let move = this.randumb([sqrs[2]], [sqrs[1], sqrs[2], sqrs[5]]);
        move.val = 'tac';
      }
      else if(sq1 == 'tic' && sq2 == '' && sq3 == '' && sq4== 'tac' && sq5 == 'tic' && sq6 == '' && sq7 == '' && sq8 == '' && sq9 == ''){
        let move = this.randumb([sqrs[8]], [sqrs[5], sqrs[7], sqrs[8]]);
        move.val = 'tac';
      }
      // Player Plays any corner
      // first corner
      else if(sq1 == 'tic' && sq2 == '' && sq3 == '' && sq4 == '' && sq5 == '' && sq6 == '' && sq7 == '' && sq8 == '' && sq9 == ''){
        let move = this.randumb([sqrs[4]], [sqrs[1], sqrs[2], sqrs[3], sqrs[4], sqrs[6], sqrs[8]]);
        move.val = 'tac';
      }
      else if(sq1 == 'tic' && sq2 == '' && sq3 == '' && sq4 == '' && sq5 == 'tac' && sq6 == '' && sq7 == 'tic' && sq8 == '' && sq9 == ''){
        let move = this.randumb([sqrs[3]], [sqrs[1], sqrs[3], sqrs[5], sqrs[7]]);
          move.val = 'tac';
      }
      else if(sq1 == 'tic' && sq2 == '' && sq3 == 'tic' && sq4 == '' && sq5 == 'tac' && sq6 == '' && sq7 == '' && sq8 == '' && sq9 == ''){
        let move = this.randumb([sqrs[1]], [sqrs[1], sqrs[3], sqrs[5], sqrs[7]]);
        move.val = 'tac';
      }
      // second corner
      else if(sq1 == '' && sq2 == '' && sq3 == 'tic' && sq4 == '' && sq5 == '' && sq5 == '' && sq6 == '' && sq7 == '' && sq8 == '' && sq9 == ''){
        let move = this.randumb([sqrs[4]], [sqrs[0], sqrs[1], sqrs[4], sqrs[5], sqrs[6], sqrs[8]]);
        move.val = 'tac';
      }
      else if(sq1 == '' && sq2 == '' && sq3 == 'tic' && sq4 == '' && sq5 == 'tac' && sq6 == '' && sq7 == '' && sq8 == '' && sq9 == 'tic'){
        let move = this.randumb([sqrs[5]], [sqrs[1], sqrs[3], sqrs[5], sqrs[7]]);
        move.val = 'tac';
      }
      // third corner 
      else if(sq1 == '' && sq2 == '' && sq3 == '' && sq4 == '' && sq5 == '' && sq6 == '' && sq7 == 'tic' && sq8 == '' && sq9 == ''){
        let move = this.randumb([sqrs[4]], [sqrs[0], sqrs[2], sqrs[3], sqrs[4], sqrs[7], sqrs[8]]);
        move.val = 'tac';
      } 
      else if(sq1 == '' && sq2 == '' && sq3 == '' && sq4 == '' && sq5 == 'tac' && sq6 == '' && sq7 == 'tic' && sq8 == '' && sq9 == 'tic'){
        let move = this.randumb([sqrs[7]], [sqrs[1], sqrs[3], sqrs[5], sqrs[7]]);
        move.val = 'tac';
      }
      // fourth corner 
      else if(sq1 == '' && sq2 == '' && sq3 == '' && sq4 == '' && sq5 == '' && sq6 == '' && sq7 == '' && sq8 == '' && sq9 == 'tic'){
        let move = this.randumb([sqrs[4]], [sqrs[0], sqrs[2], sqrs[4], sqrs[5], sqrs[6], sqrs[7]]);
        move.val = 'tac';
      }
      // Player plays sides 
      // top side
      else if(sq1 == '' && sq2 == 'tic' && sq3 == '' && sq4 == '' && sq5 == '' && sq6 == '' && sq7 == '' && sq8 == '' && sq9 == ''){
        let move = this.randumb([sqrs[4]], [sqrs[0], sqrs[2], sqrs[4]]);
        move.val = 'tac';
      }
      // left side
      else if(sq1 == '' && sq2 == '' && sq3 == '' && sq4 == 'tic' && sq5 == '' && sq6 == '' && sq7 == '' && sq8 == '' && sq9 == ''){
        let move = this.randumb([sqrs[4]], [sqrs[0], sqrs[4], sqrs[6]]);
        move.val = 'tac';
      } 
      // right side
      else if(sq1 == '' && sq2 == '' && sq3 == '' && sq4 == '' && sq5 == '' && sq6 == 'tic' && sq7 == '' && sq8 == '' && sq9 == ''){
        let move = this.randumb([sqrs[4]], [sqrs[2], sqrs[4], sqrs[8]]);
        move.val = 'tac';
      }
      // bottom side 
      else if(sq1 == '' && sq2 == '' && sq3 == '' && sq4 == '' && sq5 == '' && sq6 == '' && sq7 == '' && sq8 == 'tic' && sq9 == ''){
        let move = this.randumb([sqrs[4]], [sqrs[4], sqrs[6], sqrs[8]]);
        move.val = 'tac';
      }
      // Winning moves
      // top side
      else if(sq1 == '' && sq2 == 'tic' && sq2 == 'tic' || sq1 == '' && sq2 == 'tac' && sq2 == 'tac'){
        let move = this.randumb([sqrs[0]], [sqrs[0]]);
        move.val = 'tac';
      }
      else if(sq1 == 'tic' && sq2 == '' && sq3 == 'tic' || sq1 == 'tac' && sq2 == '' && sq3 == 'tac'){
        let move = this.randumb([sqrs[1]], [sqrs[1]]);
        move.val = 'tac';
      }
      else if(sq1 == 'tic' && sq2 == 'tic' && sq3 == '' || sq1 == 'tac' && sq2 == 'tac' && sq3 == ''){
        let move = this.randumb([sqrs[2]],[sqrs[2]]);
        move.val = 'tac';
      }
      // left side
      else if(sq1 == '' && sq4 == 'tic' && sq7 == 'tic' || sq1 == '' && sq4 == 'tac' && sq7 == 'tac'){
        let move = this.randumb([sqrs[0]], [sqrs[0]]);
        move.val = 'tac';
      }
      else if(sq1 == 'tic' && sq4 == '' && sq7 == 'tic' || sq1 == 'tac' && sq4 == '' && sq7 == 'tac'){
        let move = this.randumb([sqrs[3]], [sqrs[3]]);
        move.val = 'tac';
      }
      else if(sq1 == 'tic' && sq4 == 'tic' && sq7 == '' || sq1 == 'tac' && sq4 == 'tac' && sq7 == ''){
        let move = this.randumb([sqrs[6]], [sqrs[6]]);
        move.val = 'tac';
      }
      // right side 
      else if(sq3 == '' && sq6 == 'tic' && sq9 == 'tic' || sq3 == '' && sq6 == 'tac' && sq9 == 'tac'){
        let move = this.randumb([sqrs[2]], [sqrs[2]]);
        move.val = 'tac';
      }
      else if(sq3 == 'tic' && sq6 == '' && sq9 == 'tic' || sq3 == 'tac' && sq6 == '' && sq9 == 'tac'){
        let move = this.randumb([sqrs[5]], [sqrs[5]]);
        move.val = 'tac';
      }
      else if(sq3 == 'tic' && sq6 == 'tic' && sq9 == '' || sq3 == 'tac' && sq6 == 'tac' && sq9 == ''){
        let move = this.randumb([sqrs[8]],[sqrs[8]]);
        move.val = 'tac';
      }
      // bottom side 
      else if(sq7 == '' && sq8 == 'tic' && sq9 == 'tic' || sq7 == '' && sq8 == 'tac' && sq9 == 'tac'){
        let move = this.randumb([sqrs[6]], [sqrs[6]]);
        move.val = 'tac';
      }
      else if(sq7 == 'tic' && sq8 == '' && sq9 == 'tic' || sq7 == 'tac' && sq8 == '' && sq9 == 'tac'){
        let move = this.randumb([sqrs[7]], [sqrs[7]]);
        move.val = 'tac';
      }
      else if(sq7 == 'tic' && sq8 == 'tic' && sq9 == '' || sq7 == 'tac' && sq8 == 'tac' && sq9 == ''){
        let move = this.randumb([sqrs[8]], [sqrs[8]]);
        move.val = 'tac';
      }
      // verticle 
      else if(sq2 == '' && sq5 == 'tic' && sq8 == 'tic' || sq2 == '' && sq5 == 'tac' && sq8 == 'tac'){
        let move = this.randumb([sqrs[1]], [sqrs[1]]);
        move.val = 'tac';
      }
      else if(sq2 == 'tic' && sq5 == '' && sq8 == 'tic' || sq2 == 'tac' && sq5 == '' && sq8 == 'tac'){
        let move = this.randumb([sqrs[4]], [sqrs[4]]);
        move.val = 'tac';
      }
      else if(sq2 == 'tic' && sq5 == 'tic' && sq8 == '' || sq2 == 'tac' && sq5 == 'tac' && sq8 == ''){
        let move = this.randumb([sqrs[7]], [sqrs[7]]);
        move.val = 'tac';
      }
      // horizontal
      else if(sq4 == '' && sq5 == 'tic' && sq6 == 'tic' || sq4 == '' && sq5 == 'tac' && sq6 == 'tac'){
        let move = this.randumb([sqrs[3]], [sqrs[3]]);
        move.val = 'tac';
      }
      else if(sq4 == 'tic' && sq5 == '' && sq6 == 'tic' || sq4 == 'tac' && sq5 == '' && sq6 == 'tac'){
        let move = this.randumb([sqrs[4]], [sqrs[4]]);
        move.val = 'tac';
      }
      else if(sq4 == 'tic' && sq5 == 'tic' && sq6 == '' || sq4 == 'tac' && sq5 == 'tac' && sq6 == ''){
        let move = this.randumb([sqrs[5]], [sqrs[5]]);
        move.val = 'tac';
      }
      // Diagonal right
      else if(sq1 == '' && sq5 == 'tic' && sq9 == 'tic' || sq1 == '' && sq5 == 'tac' && sq9 == 'tac'){
        let move = this.randumb([sqrs[0]], [sqrs[0]]);
        move.val = 'tac';
      }
      else if(sq1 == 'tic' && sq5 == '' && sq9 == 'tic' || sq1 == 'tac' && sq5 == '' && sq9 == 'tac'){
        let move = this.randumb([sqrs[4]], [sqrs[4]]);
        move.val = 'tac';
      }
      else if(sq1 == 'tic' && sq5 == 'tic' && sq9 == '' || sq1 == 'tac' && sq5 == 'tac' && sq9 == ''){
        let move = this.randumb([sqrs[8]], [sqrs[8]]);
        move.val = 'tac';
      }
      // Diagonal left
      else if(sq3 == '' && sq5 == 'tic' && sq7 == 'tic' || sq3 == '' && sq5 == 'tac' && sq7 == 'tac'){
        let move = this.randumb([sqrs[2]], [sqrs[2]]);
        move.val = 'tac';
      }
      else if(sq3 == 'tic' && sq5 == '' && sq7 == 'tic' || sq3 == 'tac' && sq5 == '' && sq7 == 'tac'){
        let move = this.randumb([sqrs[4]], [sqrs[4]]);
        move.val = 'tac';
      }
      else if(sq3 == 'tic' && sq5 == 'tic' && sq7 == '' || sq3 == 'tac' && sq5 == 'tac' && sq7 == ''){
        let move = this.randumb([sqrs[6]], [sqrs[6]]);
        move.val = 'tac';
      }
      else {
        this.randomSqr(sqrs);
      }
    },
    randomSqr(arr) {
      let empty = arr.filter(item => item.val == "");
      let move = empty[Math.floor(Math.random() * empty.length)];
      move.val = 'tac';
    }
  } 
})