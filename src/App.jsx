import { Toaster } from "react-hot-toast";
import Routes from "./Routes/Routes";

function App() {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Routes />
    </>
  );
}

export default App;
