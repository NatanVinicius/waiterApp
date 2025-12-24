import { Container } from "../components/layout/Container";
import { NavMenu } from "../components/layout/sidebar/NavMenu";

function App() {
  return (
    <>
      <NavMenu />
      <div className="ml-27">
        <Container>
          <h1>content..</h1>
        </Container>
      </div>
    </>
  );
}

export default App;
