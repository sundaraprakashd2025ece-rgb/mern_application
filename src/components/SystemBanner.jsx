
import React, { useEffect, useState } from "react";

function SystemBanner() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-green-50 border border-green-200 rounded-xl px-4 py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
      <div className="flex items-center gap-3">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
        </span>

        <div>
          <p className="text-sm font-semibold text-green-800">
            All Systems Operational
          </p>
          <p className="text-xs text-green-700">
            Resource Management System is running
          </p>
        </div>
      </div>

      <p className="text-xs text-green-800">
        Last updated: {currentTime.toLocaleTimeString()}
      </p>
    </div>
  );
}

export default SystemBanner;
