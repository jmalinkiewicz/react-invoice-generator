import {
  setBuyer,
  setBuyerAddress,
  setBuyerEmail,
  setBuyerPhone,
  setBuyerTaxId,
} from "../../features/invoice/invoiceSlice";
import { useAppDispatch, useAppSelector } from "../../hooks";

export default function BuyerForm() {
  const dispatch = useAppDispatch();
  const buyer = useAppSelector((state) => state.invoiceSlice.buyerInfo);
  return (
    <div className="mt-12">
      <h2 className="text-xl font-semibold">Buyer Information</h2>
      <div className="mt-4 flex gap-6">
        <label className="w-full">
          Buyer
          <input
            placeholder="Jonathan Doe"
            type="text"
            className="text-input"
            value={buyer.buyer}
            onChange={(e) => {
              dispatch(setBuyer(e.target.value));
            }}
          />
        </label>
        <label className="w-full">
          Address
          <input
            placeholder="00-001 Warsaw, Wiejska 1A"
            type="text"
            className="text-input"
            value={buyer.address}
            onChange={(e) => {
              dispatch(setBuyerAddress(e.target.value));
            }}
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
            value={buyer.taxId}
            onChange={(e) => {
              dispatch(setBuyerTaxId(e.target.value));
            }}
          />
        </label>
        <label className="w-full">
          Phone Number
          <input
            placeholder="+48 123 456 789"
            type="text"
            className="text-input"
            value={buyer.phone}
            onChange={(e) => {
              dispatch(setBuyerPhone(e.target.value));
            }}
          />
        </label>
      </div>
      <div className="mt-4 flex gap-6">
        <label className="w-full">
          E-mail Address
          <input
            placeholder="customer@example.com"
            type="text"
            className="text-input"
            value={buyer.email}
            onChange={(e) => {
              dispatch(setBuyerEmail(e.target.value));
            }}
          />
        </label>
        <div className="w-full"></div>
      </div>
    </div>
  );
}
