const initialState = {
    myFavorites: [],
    allCharactersFav: []
};



const reducer = (state = initialState, action) =>{
    switch(action.type){
        case "ADD_FAV":
            return{
                ...state,
                myFavorites: [...state.allCharactersFav, action.payload], 
                allCharactersFav: [...state.allCharactersFav, action.payload],
            };
            case "REMOVE_FAV":
                return{
                    ...state,
                    myFavorites: state.myFavorites.filter((fav) => fav.id !== Number(action.payload)
                    ),
                };
                case "FILTER":
                    const allCharactersFiltered = state.allCharactersFav.filter
                    ((char)=> char.gender === action.payload);                    
                    return{
                        ...state,
                        myFavorites: allCharactersFiltered
                    };
                case "ORDER":
                    const allCharactersFavCopy = [...state.allCharactersFav];
                    return{
                        ...state,
                        myFavorites:
                        action.payload === "A" 
                        ? allCharactersFavCopy.sort((a, d) => a.id < d.id)
                        : allCharactersFavCopy.sort((a, d) => d.id < a.id)
                    }
        

        default:
            return {...state};
    }
};

export default reducer;