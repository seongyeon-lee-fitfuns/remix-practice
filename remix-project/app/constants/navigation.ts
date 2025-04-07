import { Home, Settings, LayoutDashboard } from "lucide-react";

export interface NavigationItem {
  path: string;
  label: string;
  icon: typeof Home | typeof Settings | typeof LayoutDashboard;
  tooltip: string;
}

export const NAVIGATION_ITEMS: NavigationItem[] = [
  {
    path: "/",
    label: "Home",
    icon: Home,
    tooltip: "Home",
  },
  {
    path: "/dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
    tooltip: "Dashboard",
  },
  {
    path: "/settings",
    label: "Settings",
    icon: Settings,
    tooltip: "Settings",
  },
  {
    path: "/test",
    label: "Test",
    icon: LayoutDashboard,
    tooltip: "Test",
  },
];

// 경로에 기반한 페이지 제목을 가져오는 함수
export function getPageTitle(path: string): string {
  const navigationItem = NAVIGATION_ITEMS.find((item) => item.path === path);

  if (navigationItem) {
    if (navigationItem.path === "/dashboard") return "Dashboard Overview";
    return navigationItem.label;
  }

  // 일치하는 항목이 없으면 경로에서 추출
  return path.split("/").pop()?.replace(/-/g, " ") || "Dashboard";
}
