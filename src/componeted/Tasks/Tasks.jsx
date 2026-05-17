import React from "react";

const Tasks = ({ inProgress, resolved, onComplete }) => {
  return (
    <div className="lg:sticky lg:top-6">
      <h2 className="text-3xl font-bold mb-6">Task Status</h2>
      <p className="text-sm text-gray-500 mb-8">
        Click on customer tickets to start working
      </p>

      {/* ==================== IN PROGRESS ==================== */}
      <div className="mb-10">
        <h3 className="font-semibold text-xl mb-4 flex items-center gap-2">
          🔴 In Progress Tasks
          <span className="text-sm font-normal text-gray-500">
            ({inProgress.length})
          </span>
        </h3>

        {inProgress.length === 0 ? (
          <p className="text-gray-500 italic pl-2">
            No tasks in progress yet...
          </p>
        ) : (
          inProgress.map((ticket) => (
            <div
              key={ticket.id}
              className="bg-white p-5 rounded-2xl shadow mb-4 border border-gray-100"
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium">
                    #{ticket.id} - {ticket.title}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    {ticket.customer}
                  </p>
                </div>
                <button
                  onClick={() => onComplete(ticket)}
                  className="btn btn-success btn-sm text-white px-6 rounded-xl"
                >
                  Complete
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* ==================== RESOLVED TASKS ==================== */}
      <div>
        <h3 className="font-semibold text-xl mb-4 flex items-center gap-2">
          ✅ Resolved Tasks
          <span className="text-sm font-normal text-gray-500">
            ({resolved.length})
          </span>
        </h3>

        {resolved.length === 0 ? (
          <p className="text-gray-500 italic pl-2">No resolved tasks yet.</p>
        ) : (
          resolved.map((ticket) => (
            <div
              key={ticket.id}
              className="bg-green-50 p-5 rounded-2xl shadow mb-4 border border-green-100"
            >
              <div>
                <p className="font-medium text-green-700">
                  #{ticket.id} - {ticket.title}
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  {ticket.customer} • Resolved
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
React;
export default Tasks;
