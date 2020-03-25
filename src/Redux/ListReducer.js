import { CONSTANTS } from "../actions";

let listID = 2;
let cardID = 4;  

const initialstate = [
    {
        title: "1st List",
        id: 0,
        cards: [
            {
                id: 0,
                text: "Loren IPSON dummy data"
            },
            {
                id: 1,
                text: "Loren IPSON dummy data 2"
            }
        ]
    },
    {
        title: "2st List",
        id: 1,
        cards: [
            {
                id: 0,
                text: "Loren IPSON dummy data"
            },
            {
                id: 1,
                text: "Loren IPSON dummy data 2"
            },
            {
                id: 2,
                text: "Loren IPSON dummy data 3"
            }
        ]
    }
];

const ListReducer = (state = initialstate, action) => {
    switch (action.type) {

        case CONSTANTS.ADD_LIST:
            const newList = {
                title:action.payload,
                card:[],
                id:listID
            }
            listID +=1
            return [...state,newList];

            case CONSTANTS.ADD_CARD:
                const newCard = {
                    text: action.payload.text,
                    id:cardID
                };
                cardID +=1;

                const newState = state.map(list => {
                    if(list.id === action.payload.listID) {
                        return {
                            ...list,
                            cards: [...list.cards, newCard]
                        }
                    } else {
                        return list
                    }
                })
                return newState;

        default:
            return state;
    }
};
export default ListReducer; 