
const counterReducer = ( state = { current_count: 0 }, action ) => {
    
    if (action.type === 'INCREMENT') {
        return { current_count: state.current_count + action.payload }
    }
    return state
}

export default counterReducer;