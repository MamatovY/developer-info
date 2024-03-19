import { TheHeader } from "components/TheHeader";
import { Container } from "./components/Container";
import { Search } from "components/Search";

function App() {
  return (
    <Container>
      <TheHeader />
      <Search hasError onSubmit={() => { }} />
    </Container>
  );
}

export default App;
