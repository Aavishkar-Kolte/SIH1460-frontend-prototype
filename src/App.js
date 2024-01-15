import './App.css';
import { Home } from './pages/Home';
import { QuestionDataProvider } from './contexts/QuestionData';
import { ResultProvider } from './contexts/Result';

function App() {
  return (
    <ResultProvider>
      <QuestionDataProvider>
        <Home />
      </QuestionDataProvider>
    </ResultProvider>


  );
}

export default App;
