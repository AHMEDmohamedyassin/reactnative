export const Add_Item = 'additem';
export const Delete_Item = 'deleteitem';

export const Add_Item_Action = item => dispatch =>{
    dispatch({
        type : Add_Item,
        payload : item
    });
} 

export const Delete_Item_Action = id => dispatch => {
    dispatch({
        type : Delete_Item,
        payload : id
    })
}