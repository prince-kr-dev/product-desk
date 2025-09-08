import React from "react";
import { CirclePlus } from "lucide-react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="w-full py-3 flex items-center justify-between border-b border-black">
      <h1 className="text-2xl bg-black pb-1 px-3 rounded-full font-medium">ProductDesk</h1>
      <div>
        <Link to="/create">
          <button className="bg-gray-700 hover:bg-gray-900 transition-all px-3 py-2 rounded-md">
            <CirclePlus />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Nav;
 