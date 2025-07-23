import { useState } from "react";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import { redirect } from "next/navigation";

const LogoutButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleLogout = () => {
    Cookies.remove("token");
    toast.success("Logout Successfully");
    redirect("/login");
  };

  return (
    <div className="relative">
      <button
        onClick={openModal}
        className="px-6 py-3 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition duration-300 cursor-pointer"
      >
        Logout
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-white-30 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Are you sure you want to logout?
            </h2>
            <div className="flex justify-end space-x-4">
              <button
                onClick={closeModal}
                className="px-6 py-3 bg-gray-300 text-gray-900 rounded-lg hover:bg-gray-400 transition duration-300 cursor-pointer"
              >
                Cancel
              </button>

              <button
                onClick={handleLogout}
                className="px-6 py-3 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition duration-300 cursor-pointer"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LogoutButton;
