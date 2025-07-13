import { useState, useEffect } from "react";
import axios from "axios";

export default function UserDropdown({ onSelectUser, onAddUser }) {
  const [users, setUsers] = useState([]);
  const [newUserName, setNewUserName] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
  const res = await axios.get("https://leaderboard-app-woad.vercel.app/api/users/all"); // Fetch all users
  setUsers(res.data);
};

  const handleAddUser = async () => {
    if (!newUserName.trim()) return;
    await axios.post("https://leaderboard-app-woad.vercel.app/api/users", { name: newUserName });
    setNewUserName("");
    fetchUsers();
  };

  return (
    <div className="space-y-4 p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-gray-800">Select User</h2>
      <select
        onChange={(e) => onSelectUser(e.target.value)}
        className="w-full p-2 border text-black border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      >
        <option value="">Select a user</option>
        {users.map((user) => (
          <option key={user._id} value={user._id} className="p-2">
            {user.name}
          </option>
        ))}
      </select>

      <div className="flex space-x-2">
        <input
          type="text"
          value={newUserName}
          onChange={(e) => setNewUserName(e.target.value)}
          placeholder="New User Name"
          className="flex-1 text-black p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleAddUser}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Add User
        </button>
      </div>
    </div>
  );
}