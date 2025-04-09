import { useLocation } from "react-router";
import { SidebarProvider, SidebarInset } from "~/components/ui/sidebar";
import { Header } from "~/components/ui/header";
import { SideNavigation } from "~/components/layout/SideNavigation";
import { getPageTitle } from "~/constants/navigation";

interface AppLayoutProps {
  children: React.ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  const location = useLocation();
  
  return (
    <SidebarProvider>
      <SideNavigation />
      <SidebarInset>
        <Header title={getPageTitle(location.pathname)} />
        <main className="flex-1 p-4 md:p-6">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
} 