import { Outlet } from "react-router";
import Progress from "../components/Progress";
// import Resume from "../components/Resume";
// import { createPortal } from "react-dom";
// import { useState, useRef } from "react";
// import Resume from "../components/Resume";
// import { useReactToPrint } from "react-to-print";

export default function Layout() {
  // const [showResume, setShowResume] = useState(false);
  // const onShow = () => setShowResume(true);
  // const onClose = () => setShowResume(false);
  // const pdf = useRef<HTMLDivElement>(null);

  // const makePdf = useReactToPrint({
  //   content: () => pdf.current,
  //   documentTitle: "Resume",
  // });

  return (
    <section className="flex">
      <Progress />
      <div className="pl-14 pr-5 pt-10 w-full">
        <Outlet />
      </div>
      {/* <div style={{ margin: "0 auto" }}>
        <Resume />
      </div> */}
    </section>
  );
}
