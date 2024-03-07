import Router from './routes';
import { GlobalStyles } from './styles/global';
import { UserProvider } from './providers/UserContext';
import { ProductProvider } from './providers/ProductsContext';
import { AuthProvider } from './providers/AuthContext';
import { ShoppingCartProvider } from './providers/CartContext';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const App = () => (
  <>
    <GlobalStyles />
    <UserProvider>
      <AuthProvider>
        <ProductProvider>
          <ShoppingCartProvider>
            <Router />
            <ToastContainer />
          </ShoppingCartProvider>
        </ProductProvider>
      </AuthProvider>
    </UserProvider>
  </>

);

export default App;
