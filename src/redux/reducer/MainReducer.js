import { Add_Item , Delete_Item} from "../action/MainAction";

const MainReducer = (state = [] , action ) => {
    switch (action.type){
        case Add_Item : 
            return [...state , action.payload]
        case Delete_Item:
            return state.filter(item => item.id != action.payload)
        default :
            return [...state];
    }
}

export default MainReducer;