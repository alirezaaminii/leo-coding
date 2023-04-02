import { createSlice } from "@reduxjs/toolkit"

const watchLaterSlice = createSlice({
    name: 'watch-later',
    initialState: {
        watchLaterMovies: []
    },
    reducers: {
        addToWatchLater: (state, action) => {
            state.watchLaterMovies = [action.payload, ...state.watchLaterMovies]
        },
        removeFromWatchLater: (state, action) => {
            const indexOfId = state.watchLaterMovies.findIndex(key => key.id === action.payload.id)
            // Code review :: in my humble opinion, I think using `filter` method instead of `findIndex`
            //   has a better performance for removing the selected item from the watch later list
            // Suggestion code :: const watchLaterList = state.watchLaterMovies.filter(key => key.id !== action.payload.id)
            state.watchLaterMovies.splice(indexOfId, 1)
        },
        remveAllWatchLater: (state) => {
        // Code review ::(less important) we have a typo here for the word `remveAllWatchLater`, a fix will be appreciated!
            state.watchLaterMovies = []
        },
    },
})

export default watchLaterSlice
