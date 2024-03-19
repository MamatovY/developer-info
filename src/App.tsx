import { TheHeader } from "components/TheHeader";
import { Container } from "./components/Container";
import { Search } from "components/Search";
import { UserCard } from "components/UserCard";
import { defaultUser } from "mock";

function App() {
  return (
    <Container>
      <TheHeader />
      <Search hasError onSubmit={() => { }} />
      <UserCard {...defaultUser} />
    </Container>
  );
}

export default App;
