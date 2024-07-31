import SideNav from "../components/SideNav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex h-screen md:flex-row md:overflow-hidden">
      <SideNav />
      <div className="flex-grow md:ml-64 bg-orange-800 p-6 md:overflow-y-auto md:p-12">
        {children}
      </div>
    </main>
  );
}
