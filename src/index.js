// import { store } from 'features/RandomNumber/store';
import { store } from 'app/store';
import { SnackbarProvider } from 'notistack';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <SnackbarProvider autoHideDuration={2000} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
        <App />
      </SnackbarProvider>
    </BrowserRouter>
  </Provider>
  // </React.StrictMode>
);

serviceWorker.unregister();
