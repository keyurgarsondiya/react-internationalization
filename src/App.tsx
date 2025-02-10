import { IntlProvider } from './store';
import HomePage from './pages/home';

function App() {
  return (
    <IntlProvider>
      <HomePage />
    </IntlProvider>
  );
}

export default App;
