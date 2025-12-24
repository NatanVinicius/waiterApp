import { RouterProvider } from "react-router";
import { Container } from "../components/layout/Container";
import { routes } from "./Routes";
import { NavMenu } from "../components/layout/NavMenu";

function App() {
  return (
    <>
      <NavMenu />
      <div className="ml-27">
        <RouterProvider router={routes} />
        <Container>
          <h1>content..</h1>
        </Container>
      </div>
    </>
  );
}

export default App;
