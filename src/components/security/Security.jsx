const Security = () => {
  return (
    <div className="">
      <div className="bg-zinc-200 w-[700px] mx-auto mt-12">
        <div className="bg-zinc-50">
          <div className="bg-zinc-50 text-lg font-semibold p-4 mb-6">
            Change Password
          </div>
        </div>
        <div>
          <form className="p-4">
            <div className="mb-4">
              <label className="block mb-1" htmlFor="currentpassword">
                Current Password
              </label>
              <input
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                type="text"
                placeholder="Enter current password"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1" htmlFor="newpassword">
                New Password
              </label>
              <input
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                type="text"
                placeholder="Enter new password"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1" htmlFor="confirmpassword">
                Confirm Password
              </label>
              <input
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                type="text"
                placeholder="Confirm new password"
              />
            </div>

            <button
              className="bg-slate-700 text-white px-4 py-2 rounded-md hover:bg-slate-800"
              type="button"
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Security;
