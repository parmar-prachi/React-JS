import React from 'react';
import Dashboard from './pages/ Dashboard';

function App() {
  return (
    <div className="App">
   
      {/* Main Content Area */}
      <main>
        <Dashboard />
      </main>

      {/* Simple Footer */}
      <footer className="mt-12 py-6 border-t border-gray-200 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Digital Document Manager • Secure Cloud Storage
      </footer>
    </div>
  );
}

export default App;