import { QueryClientProvider } from "@tanstack/react-query";
import { Container } from "../components/layout/Container";
import { NavMenu } from "../components/layout/sidebar/NavMenu";
import { queryClient } from "../lib/queryClient";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <>
        <NavMenu />
        <div className="ml-27">
          <Container>
            <h1>content..</h1>
          </Container>
        </div>
      </>
    </QueryClientProvider>
  );
}

export default App;
