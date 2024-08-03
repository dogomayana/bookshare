import SideNav from "../components/SideNav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="hidden md:flex md:h-screen md:flex-row md:overflow-hidden">
      <SideNav />
      <div className="flex-grow md:ml-64 p-6 md:overflow-y-auto md:p-3">
        {children}
      </div>
    </main>
  );
}
