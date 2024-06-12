function App() {
  return (
    <>
      <div className="h-full">
        <div className="max-w-screen-lg m-auto h-full bg-neutral-50">
          <main className="py-8 px-12">
            <h1 className="text-3xl font-bold">Invoicer</h1>
            <p className="text-sm text-gray-600">
              Create and send invoices in minutes.
            </p>
            <div className="mt-12">
              <h2 className="text-xl font-semibold">Seller Information</h2>
              <div className="mt-4 flex gap-6">
                <label className="w-full">
                  Seller
                  <input
                    placeholder="React Invoicer Group Sp. z o. o."
                    type="text"
                    className="text-input"
                  />
                </label>
                <label className="w-full">
                  Address
                  <input
                    placeholder="00-001 Warsaw, Wiejska 1A"
                    type="text"
                    className="text-input"
                  />
                </label>
              </div>
              <div className="mt-4 flex gap-6">
                <label className="w-full">
                  Tax Identification Number
                  <input
                    placeholder="1234563218"
                    type="text"
                    className="text-input"
                  />
                </label>
                <label className="w-full">
                  Invoice No.
                  <input
                    placeholder="000001"
                    type="text"
                    className="text-input"
                  />
                </label>
              </div>
              <div className="mt-4 flex gap-6">
                <label className="w-full">
                  Phone Number
                  <input
                    placeholder="+48 123 456 789"
                    type="text"
                    className="text-input"
                  />
                </label>
                <label className="w-full">
                  E-mail Address
                  <input
                    placeholder="you@yourcompany.com"
                    type="text"
                    className="text-input"
                  />
                </label>
              </div>
            </div>
            <div className="mt-12">
              <h2 className="text-xl font-semibold">Buyer Information</h2>
              <div className="mt-4 flex gap-6">
                <label className="w-full">
                  Buyer
                  <input
                    placeholder="Jonathan Doe"
                    type="text"
                    className="text-input"
                  />
                </label>
                <label className="w-full">
                  Address
                  <input
                    placeholder="00-001 Warsaw, Wiejska 1A"
                    type="text"
                    className="text-input"
                  />
                </label>
              </div>
              <div className="mt-4 flex gap-6">
                <label className="w-full">
                  Tax Identification Number
                  <span className="relative text-xs text-gray-500 bottom-2">
                    {" "}
                    optional
                  </span>
                  <input
                    placeholder="1234563218"
                    type="text"
                    className="text-input"
                  />
                </label>
              </div>
              <div className="mt-4 flex gap-6">
                <label className="w-full">
                  Phone Number
                  <input
                    placeholder="+48 123 456 789"
                    type="text"
                    className="text-input"
                  />
                </label>
                <label className="w-full">
                  E-mail Address
                  <input
                    placeholder="customer@example.com"
                    type="text"
                    className="text-input"
                  />
                </label>
              </div>
            </div>
            <div className="mt-12">
              <h2 className="text-xl font-semibold">Invoice Details</h2>
              <div className="mt-4 flex gap-6">
                <label className="w-full">
                  Date Issued
                  <input
                    placeholder="+48 123 456 789"
                    type="date"
                    className="text-input"
                  />
                </label>
                <label className="w-full">
                  Date Due
                  <input placeholder="PO#" type="date" className="text-input" />
                </label>
              </div>
              <div className="mt-4 flex gap-6">
                <label className="w-full">
                  Invoice Number
                  <input
                    placeholder="INV-000001"
                    type="text"
                    className="text-input"
                  />
                </label>
                <label className="w-full">
                  Reference #
                  <input placeholder="PO#" type="text" className="text-input" />
                </label>
              </div>
              <div className="mt-4 flex gap-6">
                <label className="w-full">
                  Currency
                  <select className="text-input">
                    <option className="option">USD</option>
                    <option className="option">EUR</option>
                    <option className="option">PLN</option>
                  </select>
                </label>
                <div className="w-full"></div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
