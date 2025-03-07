import React from "react";
import Widgets from "../components/Widgets";

const Main = () => {
  return (
    <div className="flex w-full justify-center p-6 bg-black">
      {/* Widget Container */}
      <Widgets />
    </div>
  );
};

export default Main;