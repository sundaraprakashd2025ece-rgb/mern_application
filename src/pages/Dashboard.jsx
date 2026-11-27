
import React from "react";
import SystemBanner from "../components/SystemBanner.jsx";
import ResourceCard from "../components/ResourceCard.jsx";
import RecentActivity from "../components/RecentActivity.jsx";
const resourceStats = [
  {
    title: "Total Resources",
    value: "1,248",
    icon: "▤",
    description: "Registered resources",
    percentage: "100%",
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Available Resources",
    value: "856",
    icon: "✓",
    description: "Ready for allocation",
    percentage: "68.6%",
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Allocated Resources",
    value: "312",
    icon: "⇄",
    description: "Currently in use",
    percentage: "25%",
    color: "bg-purple-100 text-purple-600",
  },
  {
    title: "Pending Requests",
    value: "80",
    icon: "◷",
    description: "Awaiting approval",
    percentage: "6.4%",
    color: "bg-yellow-100 text-yellow-600",
  },
];

function Dashboard() {
  return (
    <main className="flex-1 min-w-0 p-4 md:p-8 bg-gray-50">
      <div className="max-w-7xl mx-auto space-y-7">

        {/* Page Heading */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
              Dashboard
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Welcome back, Admin! Here's your resource overview.
            </p>
          </div>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg text-sm font-semibold transition">
            + Add Resource
          </button>
        </div>

        {/* System Status */}
        <SystemBanner />

        {/* Resource Statistics */}
        <section>
          <div className="mb-4">
            <h2 className="text-lg font-bold text-slate-800">
              Resource Overview
            </h2>
            <p className="text-sm text-gray-500">
              Current status of your resources
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
            {resourceStats.map((resource) => (
              <ResourceCard
                key={resource.title}
                {...resource}
              />
            ))}
          </div>
        </section>

        {/* Recent Activity */}
        <section className="grid grid-cols-1 xl:grid-cols-3 gap-5">
          <div className="xl:col-span-2">
            <RecentActivity />
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
            <h2 className="text-lg font-bold text-slate-800">
              Resource Distribution
            </h2>
            <p className="text-xs text-gray-500 mt-1">
              Current resource utilization
            </p>

            <div className="mt-7">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-600">Available</span>
                <span className="font-semibold">68.6%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-3">
                <div className="bg-green-500 h-3 rounded-full" style={{ width: "68.6%" }}></div>
              </div>
            </div>

            <div className="mt-6">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-600">Allocated</span>
                <span className="font-semibold">25%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-3">
                <div className="bg-blue-500 h-3 rounded-full" style={{ width: "25%" }}></div>
              </div>
            </div>

            <div className="mt-6">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-600">Pending</span>
                <span className="font-semibold">6.4%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-3">
                <div className="bg-yellow-500 h-3 rounded-full" style={{ width: "6.4%" }}></div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm font-semibold text-blue-800">
                Resource utilization
              </p>
              <p className="text-2xl font-bold text-blue-700 mt-1">
                25%
              </p>
              <p className="text-xs text-blue-600 mt-1">
                Of all resources are currently allocated
              </p>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}

export default Dashboard;
