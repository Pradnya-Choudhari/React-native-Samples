
export const DATA_AVAILABLE = 'DATA_AVAILABLE';
export const ADD_DATA = 'ADD_DATA';

//Import the sample data
import Data from '../instruction.json';
import { Actions } from 'react-native-router-flux';

export function getData() {
    return (dispatch) => {
        const data = Data.instructions;
        dispatch({ type: DATA_AVAILABLE, data: data });
    };
}

export function postData(item) {
    item.id = Data.instructions[Data.instructions.length - 1].id + 1;
    Data.instructions.push(item);
    Actions.home();
}

export function putData(pushEvent) {
    Data.instructions[pushEvent.id - 1] = pushEvent;
    Actions.home();
}

export function deleteEvent(deletedata) {
    let index = Data.instructions.findIndex( e => e.id === deletedata.id);
    Data.instructions.splice(index, 1);
    Actions.home();
}