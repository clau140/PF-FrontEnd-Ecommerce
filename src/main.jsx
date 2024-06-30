import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux/store/store.js'
import App from './App.jsx'
import './index.css'
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
const stripeKey = import.meta.env.VITE_APP_STRIPE_PUBLIC_KEY

const stripePromise = loadStripe(stripeKey)
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={ store }>
    <BrowserRouter>
      <Elements stripe={ stripePromise } >
        <App />
      </Elements>
    </BrowserRouter>
  </Provider>
)
