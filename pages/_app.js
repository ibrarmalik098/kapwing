import Home from './index'
import { Provider } from 'react-redux'
import '../styles/globals.css'
// import store from '../src/store/store'
import store from '../src/store/store'


function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store()}>
      <Home>
        <Component {...pageProps} />
      </Home>
    </Provider>
  )
}
export default MyApp
