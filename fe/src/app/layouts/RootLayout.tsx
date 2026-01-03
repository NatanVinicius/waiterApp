import { Outlet } from "react-router";
import { Container } from "../../components/layout/Container";
import { NavMenu } from "../../components/layout/sidebar/NavMenu";
import { Header } from "../../components/layout/header/Header";

export function RootLayout() {
  return (
    <div className="h-screen flex">
      <NavMenu />
      <div className="flex flex-col flex-1">
        <Header />
        <Container>
          <Outlet />
        </Container>
      </div>
    </div>
  );
}
