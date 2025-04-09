import { Link } from "react-router";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger
} from "~/components/ui/sidebar";
import { NAVIGATION_ITEMS } from "~/constants/navigation";

export function SideNavigation() {
  return (
    <Sidebar>
      <SidebarHeader>
        {/* 로고나 제목 자리 */}
        <h2 className="text-lg font-semibold">My App</h2>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {NAVIGATION_ITEMS.map((item) => (
            <SidebarMenuItem key={item.path}>
              <SidebarMenuButton asChild tooltip={item.tooltip}>
                <Link to={item.path}>
                  <item.icon />
                  <span>{item.label}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <SidebarTrigger />
      </SidebarFooter>
    </Sidebar>
  );
} 