export default function SellerForm() {
  return (
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
          <input placeholder="1234563218" type="text" className="text-input" />
        </label>
        <label className="w-full">
          Invoice No.
          <input placeholder="000001" type="text" className="text-input" />
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
  );
}
