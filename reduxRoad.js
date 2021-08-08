const initialWagonState = {
    supplies: 100,
    distance: 0,
    days: 0
  }
  
  const gameOnReducer = (state = initialWagonState, action) => {
    switch(action.type){
      case 'gather': {
        return {...state,
          supplies: state.supplies + 15,
          distance: state.distance,
          days:  state.days + 1 
        };
      }
       case 'travel': {
         if(state.supplies <= 0){
           return state
         } else {
                   return {...state,
            supplies: state.supplies - (action.payload * 20),
            distance: state.distance + (action.payload * 10),
            days: state.days +  (1 * action.payload)  
         }
  
          };
       }
        case 'tippedWagon': {
          return{...state,
            supplies: state.supplies -30,
            distance: state.distance,
            days: state.days + 1
          }
        }
       }
      switch(action.type){
      default: {
        return state;
      }
    }
  }
  
  let wagon = gameOnReducer(undefined, {})
  console.log(wagon);
  
  wagon = gameOnReducer(wagon, {type: 'travel', payload: 1})
  console.log(wagon);
  
  wagon = gameOnReducer(wagon, {type:'gather', payload: 0})
  console.log(wagon);
  
  wagon = gameOnReducer(wagon, {type: 'tippedWagon', payload: 0})
  console.log(wagon);
  
  wagon = gameOnReducer(wagon, {type: 'travel', payload: 3})
  console.log(wagon)