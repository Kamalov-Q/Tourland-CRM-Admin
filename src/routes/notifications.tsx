import { createFileRoute, redirect } from "@tanstack/react-router";
import { loadSession } from "@/lib/store";

export const Route = createFileRoute("/notifications")({
  beforeLoad: () => {
    const session = loadSession();
    
    if (!session) {
      throw redirect({
        to: "/login",
      });
    }

    if (session.role === "director") {
      throw redirect({
        to: "/director/notifications",
      });
    }

    if (session.role === "employee") {
      throw redirect({
        to: "/employee/notifications",
      });
    }

    throw redirect({
      to: "/login",
    });
  },
  component: () => null,
});