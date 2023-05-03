import { configureStore } from '@reduxjs/toolkit'
import  ThemeSlice  from './slice/themeSlice'


const store = () => configureStore({
  reducer: {
    theme: ThemeSlice
  },

})

export default store