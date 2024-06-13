import {
  setCurrency,
  setDateDue,
  setDateIssued,
  setInvoiceNo,
  setReferenceNo,
} from "../../features/invoice/invoiceSlice";
import { useAppDispatch, useAppSelector } from "../../hooks";

export default function DetailsForm() {
  const dispatch = useAppDispatch();
  const details = useAppSelector((state) => state.invoiceSlice.invoiceDetails);
  return (
    <div className="mt-12">
      <h2 className="text-xl font-semibold">Invoice Details</h2>
      <div className="mt-4 flex gap-6">
        <label className="w-full">
          Date Issued
          <input
            placeholder="13-06-2024"
            type="date"
            className="text-input"
            value={details.dateIssued}
            onChange={(e) => {
              dispatch(setDateIssued(e.target.value));
            }}
          />
        </label>
        <label className="w-full">
          Date Due
          <input
            placeholder="PO#"
            type="date"
            className="text-input"
            value={details.dateDue}
            onChange={(e) => {
              dispatch(setDateDue(e.target.value));
            }}
          />
        </label>
      </div>
      <div className="mt-4 flex gap-6">
        <label className="w-full">
          Invoice Number
          <input
            placeholder="INV-000001"
            type="text"
            className="text-input"
            value={details.invoiceNo}
            onChange={(e) => {
              dispatch(setInvoiceNo(e.target.value));
            }}
          />
        </label>
        <label className="w-full">
          Reference #
          <input
            placeholder="PO#"
            type="text"
            className="text-input"
            value={details.referenceNo}
            onChange={(e) => {
              dispatch(setReferenceNo(e.target.value));
            }}
          />
        </label>
      </div>
      <div className="mt-4 flex gap-6">
        <label className="w-full">
          Currency
          <select
            className="text-input"
            value={details.currency}
            onChange={(e) => {
              const currencyValue = e.target.value as "USD" | "EUR" | "PLN";
              dispatch(setCurrency(currencyValue));
            }}
          >
            <option value="USD" className="option">
              USD
            </option>
            <option value="EUR" className="option">
              EUR
            </option>
            <option value="PLN" className="option">
              PLN
            </option>
          </select>
        </label>
        <div className="w-full"></div>
      </div>
    </div>
  );
}
