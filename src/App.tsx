import RouterApp from "./router";
import AppProvider from "./context/AppProvider";

function App() {
  return (
    <AppProvider>
      <RouterApp />
    </AppProvider>
  );
}

export default App;
