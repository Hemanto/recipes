const alldata= (state='',action)=>{
    switch (action.type) {
        case 'ALLDATA':
            return state='fetch API data'
        default:
            return state='getting error while fetching api'
    }
}
export default alldata