import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux/store/store.js'
import App from './App.jsx'
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n.js'; // Importa tu configuración de i18next
import './index.css'
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
const stripeKey = import.meta.env.VITE_APP_STRIPE_PUBLIC_KEY

const stripePromise = loadStripe(stripeKey)
ReactDOM.createRoot(document.getElementById('root')).render(
  <I18nextProvider i18n={i18n}>
  <Provider store={ store }>
  
    <BrowserRouter>
      <Elements stripe={ stripePromise } >
        <App />
      </Elements>
    </BrowserRouter>
    
  </Provider> 
  
  </I18nextProvider>
)
