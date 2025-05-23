import LoginProvider from "./contexts/LoginContext";
import Rotas from "./routes/Rotas";


const App = () => {
  return (
    <>
      <LoginProvider>
        <Rotas />
      </LoginProvider>
      
    </>
  );
}

export default App;