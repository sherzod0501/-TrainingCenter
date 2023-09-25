import { useAuth } from "./hook/useAuth.js";
import { Public } from "./public.js";
import { Private } from "./private.js";

function App() {
  const { token } = useAuth();
  return <div className="App">{token ? <Private /> : <Public />}</div>;
}

export default App;
