class Player {
    constructor(){
      this.index = null;
      this.distance = 0;
      this.name = null;
    }
  
    //to get the player count
    getCount(){
      var playerCountRef = database.ref('playerCount');
      playerCountRef.on("value",(data)=>{
        playerCount = data.val();
      })
    }
  
    //to update the player count
    updateCount(count){
      database.ref('/').update({
        playerCount: count
      });
    }
  
    //to update the distance of the player
    update(){
      var playerIndex = "players/player" + this.index;
      database.ref(playerIndex).set({
        name:this.name,
        distance:this.distance
      });
    }
  
    // to get the player info 
    // static function - belongs to the class rather than the objects of the class
    static getPlayerInfo(){
      var playerInfoRef = database.ref('players');
      playerInfoRef.on("value",(data)=>{
        allPlayers = data.val();
      })
    }
  }