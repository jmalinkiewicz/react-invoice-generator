export default function DetailsForm() {
  return (
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
          <input placeholder="INV-000001" type="text" className="text-input" />
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
  );
}
