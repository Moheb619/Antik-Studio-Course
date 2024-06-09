import { Footer } from "./(root)/_components/footer";
import { Navbar } from "./(root)/_components/navbar";
import { NavbarDesktopHome } from "./(root)/_components/navbar-desktop-home";
import { Sidebar } from "./(root)/_components/sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="md:hidden h-[80px] md:pl-56 fixed inset-y-0 w-full z-50">
        <Navbar />
      </div>
      <div className="hidden md:block">
        <NavbarDesktopHome />
      </div>
      <main className="pt-[80px] md:pt-0 h-full">{children}</main>
      <Footer />
    </div>
  );
};

export default DashboardLayout;
