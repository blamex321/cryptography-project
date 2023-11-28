import CaesarCipher from "./components/CaesarCipher";
import VigenereCipher from "./components/VengereCipher";
import Footer from "./components/Footer";
import Topbar from "./components/Topbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PlayfairCipher from "./components/PlayFairCipher";
import RSAAlgorithm from "./components/RSACipher";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>This is the dashboard section</div>,
  },
  {
    path: "/caesar-cipher",
    element: <CaesarCipher /> ,
  },
  {
    path: "/vigenere-cipher",
    element: <VigenereCipher /> ,
  },
  {
    path: "/play-fair-cipher",
    element: <PlayfairCipher /> ,
  },
  {
    path: "/rsa-cipher",
    element: <RSAAlgorithm /> ,
  },
]);

function App() {
  return (
    <>
      <Topbar />
      <div className="min-h-screen">
        <RouterProvider router={router} />
      </div>
      <Footer />
    </>
  );
}

export default App;
