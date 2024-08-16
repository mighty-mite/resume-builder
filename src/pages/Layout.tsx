import { Outlet } from "react-router";
import Progress from "../components/Progress";

export default function Layout() {
  return (
    <section className="flex">
      <Progress />
      <Outlet />
    </section>
  );
}
