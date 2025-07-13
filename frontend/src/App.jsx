import { useState } from "react";
import UserDropdown from "./components/UserDropdown";
import ClaimButton from "./components/ClaimButton";
import Leaderboard from "./components/Leaderboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  const [selectedUserId, setSelectedUserId] = useState("");
  const [refresh, setRefresh] = useState(false);

  return (
    <div className="min-h-screen w-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          🚀 Leaderboard App
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-6">
            <UserDropdown
              onSelectUser={setSelectedUserId}
              onAddUser={() => setRefresh(!refresh)}
            />
            <ClaimButton
              userId={selectedUserId}
              onClaim={() => setRefresh(!refresh)}
            />
          </div>
          <Leaderboard />
        </div>
      </div>
      <ToastContainer position="bottom-right" />
    </div>
  );
}