import SideNav from '@/app/ui/sidenav';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="flex-none md:w-28 lg:w-28 xl:w-64">
        <SideNav />
      </div>
      <div className="flex-grow h-screen md:overflow-y-auto md:px-12 font-black text-3xl ">{children}</div>
    </div>
  );
}