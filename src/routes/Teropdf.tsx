import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/Teropdf")({
  component: TeroPdfLayout,
});

function TeroPdfLayout() {
  return <Outlet />;
}
