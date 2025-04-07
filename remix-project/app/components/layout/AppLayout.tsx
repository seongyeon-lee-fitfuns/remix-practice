import { useLocation } from "@remix-run/react";
import { SidebarProvider, SidebarInset } from "~/components/ui/sidebar";
import { Header } from "~/components/ui/header";
import { SideNavigation } from "~/components/layout/SideNavigation";

interface AppLayoutProps {
  children: React.ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  const location = useLocation();
  
  // 현재 경로에 따라 페이지 제목 결정
  const getPageTitle = () => {
    const path = location.pathname;
    if (path === "/") return "Home";
    if (path === "/dashboard") return "Dashboard Overview";
    if (path === "/settings") return "Settings";
    
    // 기본 제목 또는 경로에서 추출
    return path.split("/").pop()?.replace(/-/g, " ") || "Dashboard";
  };

  return (
    <SidebarProvider>
      <SideNavigation />
      <SidebarInset>
        <Header title={getPageTitle()} />
        <main className="flex-1 p-4 md:p-6">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
} 