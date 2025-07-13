import axios from "axios";
import { toast } from "react-toastify";

export default function ClaimButton({ userId, onClaim }) {
  const handleClaim = async () => {
    if (!userId) {
      toast.error("Please select a user!");
      return;
    }
    try {
      const res = await axios.post("http://localhost:5000/api/claims", { userId });
      toast.success(`${res.data.points} points claimed!`);
      onClaim();
    } catch (err) {
      toast.error("Claim failed!",err);
    }
  };

  return (
    <button
      onClick={handleClaim}
      className="px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition shadow-md"
    >
      🎯 Claim Points
    </button>
  );
}