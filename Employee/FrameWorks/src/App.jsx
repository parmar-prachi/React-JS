import React from "react";
import "./App.css";
import BootstrapCard from "./components/BootstrapCard";
import TailwindCard from "./components/TailwindCard";
import AntDesignCard from "./components/AntDesignCard";

function App() {
  return (
    <>
      <div className="container py-5">
        <h1 className="text-center mb-5">UI using Bootstrap, Tailwind & Ant Design</h1>

        <div className="row g-4">
          <div className="col-md-6">
            <BootstrapCard />
          </div>

          <div className="col-md-6">
            <TailwindCard />
          </div>
        </div>

        <div className="mt-5">
          <AntDesignCard />
        </div>
      </div>
    </>
  );
}

export default App;
