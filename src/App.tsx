import { IntlProvider } from './store';
import HomePage from './pages';

function App() {
  return (
    <IntlProvider>
      <HomePage />
    </IntlProvider>
  );
}

export default App;
