import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function AppShell() {
  return (
    <div className="h-screen grid grid-rows-[64px_1fr] bg-gray-50 text-gray-900">
      <Header />
      <div className="grid grid-cols-[240px_1fr] min-h-0">
        <Sidebar />
        <main className="flex items-center justify-center text-2xl font-semibold">
          Hola mundo
        </main>
      </div>
    </div>
  );
}
