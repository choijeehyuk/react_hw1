const LOAD = 'bucket/LOAD';
const CREATE = 'bucket/CREATE';

const initialState = {
    list: ['수박', '맛있음', '수박은 수분 함량이 높다']
};

export const loadAC = (x) => {
    return {type: LOAD, x};
}

export const createAC = (x) => {
    return {type: CREATE, x};
}

export default function reducer(state=initialState, action={}){
    switch (action.type){
    case "bucket/LOAD":
        return state;

    case "bucket/CREATE":
        const ListSum = [...action.x, ...state.list];
        console.log(action.x)
        console.log(...state.list)
        return {list: ListSum};

    default:
        return state;
    }
    
}