export function reducer(state, action) {
    switch (action.type) {
        case 'addFruit':
            return {fruits: [state.fruits, action.payload]};
        default: throw new Error('Action type must be declared')
    }
}