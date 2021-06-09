import GlobalStyle from "./styles/global";
import Routes from "./router/router";
import PopUpCadastro from "./components/PopUp";
import { useState } from "react";
function App() {
  const [solicitar, setSolicitar] = useState(true);
  return (
    <div className="App">
      <GlobalStyle />
      <PopUpCadastro solicitar={solicitar} setSolicitar={setSolicitar} />
      <Routes />
    </div>
  );
}

export default App;
