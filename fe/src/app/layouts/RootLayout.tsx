import { Outlet } from "react-router";
import { Container } from "../../components/layout/Container";
import { NavMenu } from "../../components/layout/sidebar/NavMenu";

export function RootLayout() {
  return (
    <>
      <NavMenu />
      <Container>
        <Outlet />
      </Container>
    </>
  );
}
