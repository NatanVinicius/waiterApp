import { Outlet } from "react-router";
import { Container } from "../../components/layout/Container";
import { NavMenu } from "../../components/layout/sidebar/NavMenu";
import { Header } from "../../components/layout/header/Header";

export function RootLayout() {
  return (
    <>
      <NavMenu />
      <Header />
      <Container>
        <Outlet />
      </Container>
    </>
  );
}
