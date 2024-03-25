import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from './app/index.js'
import { Provider } from 'react-redux'
import '../node_modules/bootstrap/dist/css/bootstrap.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
