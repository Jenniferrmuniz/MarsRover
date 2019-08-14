// Rover Object Goes Here
// ======================

var marsRover = {
  direction:'N',
  x: 0,
  y: 0,
  travelLog: []
};

// ======================




function turnLeft(rover){
  console.log("turnLeft was called!");
  
  switch(marsRover.direction){
    case 'N':
      marsRover.direction = 'W';
      break;
    
    case 'E':
      marsRover.direction = 'N';
      break;
    
    case 'S':
      marsRover.direction = 'E';
      break;
    
    case 'W':
      marsRover.direction = 'S';
      break;
  }
}





function turnRight(rover){
  console.log("turnRight was called!");

  switch(rover.direction){
    case 'N':
      rover.direction = 'E';
      break;
    
    case 'E':
      rover.direction = 'S';
      break;
    
    case 'S':
      rover.direction = 'W';
      break;
    
    case 'W':
      rover.direction = 'N';
      break;
  }
}








function moveForward(rover){
  console.log("moveForward was called")
  rover.travelLog.push([rover.x, rover.y]);
  

  switch(rover.direction){
      
    case 'N':
      rover.y--;
      break;
      
    case 'E':
      rover.x++;
      break;
      
    case 'S':
      rover.y++;
      break;
      
    case 'W':
      rover.x--;
      break;
  }
  
  console.log(`Rover is now positioned at coordinates [${rover.x}, ${rover.y}]`);
}







function whichWay(rover, command){
 
  
  for(let i=0; i<command.length; i++){
    
    switch(command[i]){
        
      case 'r':
        turnRight(rover);
        break;
        
      case 'l':
        turnLeft(rover);
        break;
        
      case 'f':
        moveForward(rover);   
        break;
    }
  }
  console.log('The Mars Rover has traveled over these coordinatews:');
  for(let i=0; i<marsRover.travelLog.length; i++){
    console.log(marsRover.travelLog[i]);
  }
}


whichWay(marsRover, 'rffrfflf');
