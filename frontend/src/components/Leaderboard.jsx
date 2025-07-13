import { useState, useEffect } from "react";
import axios from "axios";

export default function Leaderboard() {
  const [users, setUsers] = useState([]);

 const fetchUsers = async () => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/users/top`); // Fetch top 10
  setUsers(res.data);
};

  useEffect(() => {
    fetchUsers();
    const interval = setInterval(fetchUsers, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
  🏆 Top 10 Leaderboard
</h2>
{users.length === 0 ? (
  <p className="text-gray-500">No users yet. Add some to get started!</p>
) : (
  <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rank</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Points</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users.map((user, index) => (
              <tr key={user._id} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index + 1}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.totalPoints}</td>
              </tr>
            ))}
          </tbody>
        </table>
)}
    </div>
  );
}

