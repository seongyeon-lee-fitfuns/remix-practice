import { Home, Settings, LayoutDashboard, Clock } from "lucide-react";

export interface NavigationItem {
  path: string;
  label: string;
  icon: typeof Home | typeof Settings | typeof LayoutDashboard | typeof Clock;
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
  {
    path: "/defer-test",
    label: "Defer 테스트",
    icon: Clock,
    tooltip: "Remix Defer 테스트",
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
