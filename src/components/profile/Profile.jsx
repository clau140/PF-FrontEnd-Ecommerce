

const Profile = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 mt-12 mx-auto max-w-6xl">
        <div className="bg-zinc-200 h-[330px] md:w-[346px]">
          <div className="bg-zinc-50">
          <div className="bg-zinc-50 text-lg font-semibold p-4 mb-6">Profile Picture</div>
          </div>
          <div className="flex flex-col items-center">
            <img className="rounded-full w-32 h-32 mb-4" src="" alt="" />
            <div className="text-sm text-gray-500 mb-6">JPG or PNG no larger than 5 MB</div>
            <button className="bg-slate-700 text-white px-4 py-2 rounded-md hover:bg-slate-800" type="button">Upload new image</button>
          </div>
        </div>
        <div className="bg-zinc-200 w-[700px] ml-[-114px]">
          <div className="bg-zinc-50">
          <div className="bg-zinc-50 text-lg font-semibold p-4 mb-6">Account Details</div>
          </div>
          <div>
            <form className="p-4">
              <div className="mb-4">
                <label className="block mb-1" htmlFor="inputUsername">Username (how your name will appear to other users on the site)</label>
                <input className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500" type="text" placeholder="Enter your username" defaultValue="username" />
              </div>
              <div className="mb-4">
                <label className="block mb-1" htmlFor="inputUsername">Name</label>
                <input className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500" type="text" placeholder="Enter your username" defaultValue="username" />
              </div>
              <div className="mb-4">
                <label className="block mb-1" htmlFor="inputUsername">Lastname</label>
                <input className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500" type="text" placeholder="Enter your username" defaultValue="username" />
              </div>
              <div className="mb-4">
                <label className="block mb-1" htmlFor="inputEmailAddress">Email address</label>
                <input className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500" type="email" placeholder="Enter your email address" defaultValue="name@example.com" />
              </div>
              
              <button className="bg-slate-700 text-white px-4 py-2 rounded-md hover:bg-slate-800" type="button">Save changes</button>
            </form>
          </div>
        </div>
      </div>
    )
};

export default Profile;