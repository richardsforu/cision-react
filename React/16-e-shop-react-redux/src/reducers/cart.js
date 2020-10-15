export function cartReducer(state = {}, action) {
    let { type } = action

    switch (type) {
        case 'CHECKOUT': {
            //.....
            return {}
        }
        case 'BUY': {
            let {item}=action
            let{id}=item;
            let cartLine=state[id];
        }
        default: {
            return state;
        }
    }
}
