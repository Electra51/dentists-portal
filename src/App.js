import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes/Routes";
import { Toaster } from "react-hot-toast";
import LiveChatWidget from "./Pages/Home/LiveChatWidget";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
      <LiveChatWidget />
      <Toaster />
    </Provider>
  );
}

export default App;
