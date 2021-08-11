import { Provider } from "react-redux";
import MainLayout from "./layout/MainLayout";
import store from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <MainLayout />
      </div>
    </Provider>
  );
};

export default App;
