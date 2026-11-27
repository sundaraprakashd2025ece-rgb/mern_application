
import React from "react";

const activities = [
  {
    title: "New laptop added",
    user: "Admin",
    time: "10 minutes ago",
    status: "Added",
    color: "bg-blue-100 text-blue-700",
  },
  {
    title: "Projector allocated",
    user: "John Doe",
    time: "30 minutes ago",
    status: "Allocated",
    color: "bg-green-100 text-green-700",
  },
  {
    title: "Resource request submitted",
    user: "Sarah",
    time: "1 hour ago",
    status: "Pending",
    color: "bg-yellow-100 text-yellow-700",
  },
  {
    title: "Monitor returned",
    user: "Michael",
    time: "2 hours ago",
    status: "Returned",
    color: "bg-purple-100 text-purple-700",
  },
];

function RecentActivity() {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="text-lg font-bold text-slate-800">
            Recent Activity
          </h2>
          <p className="text-xs text-gray-500 mt-1">
            Latest resource management updates
          </p>
        </div>

        <button className="text-sm text-blue-600 font-semibold">
          View All
        </button>
      </div>

      <div className="space-y-5">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-gray-100 pb-4 last:border-0 last:pb-0"
          >
            <div>
              <h3 className="text-sm font-semibold text-slate-800">
                {activity.title}
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                By {activity.user} · {activity.time}
              </p>
            </div>

            <span className={`text-xs font-semibold px-3 py-1 rounded-full w-fit ${activity.color}`}>
              {activity.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentActivity;
