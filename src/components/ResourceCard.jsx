
import React from "react";

function ResourceCard({ title, value, icon, description, color, percentage }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm text-gray-500 font-medium">{title}</p>
          <h2 className="text-3xl font-bold text-slate-800 mt-2">
            {value}
          </h2>
        </div>

        <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${color}`}>
          {icon}
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between">
        <p className="text-xs text-gray-500">{description}</p>
        <span className="text-xs font-semibold text-blue-600">
          {percentage}
        </span>
      </div>
    </div>
  );
}

export default ResourceCard;
