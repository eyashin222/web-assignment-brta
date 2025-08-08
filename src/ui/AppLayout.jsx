import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function AppLayout() {
  return (
    <div className="grid w-full h-screen grid-rows-[1fr_auto_auto]">
      <Header />
      <div>
        <main className="mx-auto max-w-3xl">
          <Outlet />
        </main>
      </div>

      <Footer />
    </div>
  );
}
export default AppLayout;
