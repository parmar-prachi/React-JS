import ReminderCounter from './components/ReminderCounter';
import './index.css';

function App() {
  return (
    <div className="app-container">
      <ReminderCounter limit={10} />
    </div>
  );
}

export default App;