import { memo } from "react";
import TodoPage from "./components/TodoPage";

const App = memo(() => {
  return (
    <div className="bg-gray-100 h-screen w-screen flex items-center justify-center">
      <TodoPage />
    </div>
  );
});

// Add display name for better debugging
App.displayName = 'App';

export default App;