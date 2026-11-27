
import React from "react";

const menuItems = [
  { icon: "▦", label: "Dashboard", active: true },
  { icon: "▤", label: "Resources" },
  { icon: "♙", label: "Employees" },
  { icon: "⇄", label: "Allocations" },
  { icon: "◷", label: "Requests" },
  { icon: "▥", label: "Reports" },
];

function Sidebar({ isOpen, onClose }) {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed lg:static top-16 lg:top-0 left-0 z-40 h-[calc(100vh-4rem)] lg:h-auto w-64 bg-slate-900 text-white flex-shrink-0 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="px-5 py-6">
          <p className="text-xs uppercase tracking-widest text-slate-400 mb-4">
            Main Menu
          </p>

          <nav className="space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={onClose}
                className={`w-full flex items-center gap-4 px-4 py-3 rounded-lg text-sm transition ${
                  item.active
                    ? "bg-blue-600 text-white shadow-lg"
                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                {item.label}
              </button>
            ))}
          </nav>

          <div className="mt-12 border-t border-slate-700 pt-5">
            <p className="text-xs uppercase tracking-widest text-slate-400 mb-4">
              Preferences
            </p>

            <button className="w-full flex items-center gap-4 px-4 py-3 rounded-lg text-sm text-slate-300 hover:bg-slate-800">
              <span className="text-lg">⚙</span>
              Settings
            </button>
          </div>
        </div>

        <div className="absolute bottom-5 left-5 right-5 bg-slate-800 rounded-lg p-4">
          <p className="text-sm font-semibold">ResourceHub v1.0</p>
          <p className="text-xs text-slate-400 mt-1">
            Enterprise Workspace
          </p>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
