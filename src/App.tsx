import Router from './routes';
import { GlobalStyles } from './styles/global';
import { UserProvider } from './providers/UserContext';

const App = () => (
  <UserProvider>
    <GlobalStyles />
    <Router />
  </UserProvider>
);

export default App;
