import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes/Routes";
import { Toaster } from "react-hot-toast";
import LiveChatWidget from "./Pages/Home/LiveChatWidget";

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      <LiveChatWidget />
      <Toaster />
    </div>
  );
}

export default App;
