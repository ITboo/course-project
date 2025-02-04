import './App.css';
import List from './List';
import { TrpcProvider } from './lib/trpc';

function App() {
  return (
    <TrpcProvider>
      <List/>
    </TrpcProvider>
  );
}

export default App;
