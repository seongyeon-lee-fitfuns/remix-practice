import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    route("", "routes/user.tsx", [
        index("routes/posts.tsx")
    ])
] satisfies RouteConfig;