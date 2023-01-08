// Modules
import { StatusBar } from 'expo-status-bar';

// Components
import ContainerScreen from './components/ContainerScreen';
import Panel from './components/Panel';
import KeyboardCalculator from './components/KeyboardCalculator';

// Contexts
import { AppProvider } from './contexts/AppContext';

export default function App() {
  return (
    <AppProvider>
      <ContainerScreen>
        <StatusBar style="light"/>
        <Panel/>
        <KeyboardCalculator/>
      </ContainerScreen>
    </AppProvider>
  );
}

