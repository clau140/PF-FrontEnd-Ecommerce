const Billing = () => {
  return (
    <div className="">
      <div className="bg-white shadow-md mt-12 max-w-6xl mx-auto">
        <div className="bg-zinc-50 text-lg font-inter font-semibold p-4">
          Billing History
        </div>
        <div className="p-4 bg-zinc-200">
          <div className="overflow-x-auto">
            <div className="w-full">
              <div className="mb-4 flex items-center justify-between border-b border-gray-500">
                <div className="w-1/4 px-4 py-2 font-inter font-semibold">
                  Transaction ID
                </div>
                <div className="w-1/4 px-4 py-2 font-inter font-semibold">
                  Date
                </div>
                <div className="w-1/4 px-4 py-2 font-inter font-semibold">
                  Amount
                </div>
                <div className="w-1/4 px-4 py-2 font-inter font-semibold">
                  Status
                </div>
              </div>
              <div className="mb-4 flex items-center justify-between border-b border-gray-200">
                <div className="w-1/4 px-4 py-2">#39201</div>
                <div className="w-1/4 px-4 py-2">06/15/2021</div>
                <div className="w-1/4 px-4 py-2">$29.99</div>
                <div className="w-1/4 px-4 py-2">
                  <span className="px-2 py-1 bg-gray-200 text-gray-800 rounded">
                    Pending
                  </span>
                </div>
              </div>
              <div className="mb-4 flex items-center justify-between border-b border-gray-200">
                <div className="w-1/4 px-4 py-2">#38594</div>
                <div className="w-1/4 px-4 py-2">05/15/2021</div>
                <div className="w-1/4 px-4 py-2">$29.99</div>
                <div className="w-1/4 px-4 py-2">
                  <span className="px-2 py-1 bg-green-500 text-white rounded">
                    Paid
                  </span>
                </div>
              </div>
              <div className="mb-4 flex items-center justify-between border-b border-gray-200">
                <div className="w-1/4 px-4 py-2">#38223</div>
                <div className="w-1/4 px-4 py-2">04/15/2021</div>
                <div className="w-1/4 px-4 py-2">$29.99</div>
                <div className="w-1/4 px-4 py-2">
                  <span className="px-2 py-1 bg-green-500 text-white rounded">
                    Paid
                  </span>
                </div>
              </div>
              <div className="mb-4 flex items-center justify-between">
                <div className="w-1/4 px-4 py-2">#38125</div>
                <div className="w-1/4 px-4 py-2">03/15/2021</div>
                <div className="w-1/4 px-4 py-2">$29.99</div>
                <div className="w-1/4 px-4 py-2">
                  <span className="px-2 py-1 bg-green-500 text-white rounded">
                    Paid
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billing;
