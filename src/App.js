import './App.css';
import MyBalance from './MyBalance.js';
import Spending from './Spending.js';

function App() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 h-screen bg-indigo-50">
      <div className="flex flex-col gap-4 w-1/4">
        <MyBalance />
        <Spending />
      </div>
    </div>
  );
}

export default App;
