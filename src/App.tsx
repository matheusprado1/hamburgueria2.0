import Router from './routes';
import { GlobalStyles } from './styles/global';
import { UserProvider } from './providers/UserContext';
import { ProductProvider } from './providers/ProductsContext';
import { AuthProvider } from './providers/AuthContext';

const App = () => (
  <UserProvider>
    <AuthProvider>
      <ProductProvider>
        <GlobalStyles />
        <Router />
      </ProductProvider>
    </AuthProvider>
  </UserProvider>
);

export default App;
