import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  route("", "routes/index.tsx"),
  route("profile", "routes/profile.tsx"),
  route("user", "routes/user.tsx", [index("routes/posts.tsx")]),
  route("actions", "routes/actions.jsx"),
  route("actions/form", "routes/actions/form.jsx"),
  route("actions/usesubmit", "routes/actions/usesubmit.jsx"),
  route("actions/fetcher", "routes/actions/fetcher.jsx"),
] satisfies RouteConfig;
