import Router from './routes';
import { GlobalStyles } from './styles/global';
import { UserProvider } from './providers/UserContext';
import { ProductProvider } from './providers/ProductsContext';
import { AuthProvider } from './providers/AuthContext';
import { ShoppingCartProvider } from './providers/CartContext';

const App = () => (
  <UserProvider>
    <AuthProvider>
      <ProductProvider>
        <ShoppingCartProvider>
          <GlobalStyles />
          <Router />
        </ShoppingCartProvider>
      </ProductProvider>
    </AuthProvider>
  </UserProvider>
);

export default App;
