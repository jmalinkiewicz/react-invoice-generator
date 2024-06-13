import {
  setSeller,
  setSellerAddress,
  setSellerEmail,
  setSellerPhone,
  setSellerTaxId,
} from "../../features/invoice/invoiceSlice";
import { useAppDispatch, useAppSelector } from "../../hooks";

export default function SellerForm() {
  const dispatch = useAppDispatch();
  const seller = useAppSelector((state) => state.invoiceSlice.sellerInfo);

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
            value={seller.seller}
            onChange={(e) => {
              dispatch(setSeller(e.target.value));
            }}
          />
        </label>
        <label className="w-full">
          Address
          <input
            placeholder="00-001 Warsaw, Wiejska 1A"
            type="text"
            className="text-input"
            value={seller.address}
            onChange={(e) => {
              dispatch(setSellerAddress(e.target.value));
            }}
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
            value={seller.taxId}
            onChange={(e) => {
              dispatch(setSellerTaxId(e.target.value));
            }}
          />
        </label>
        <label className="w-full">
          Phone Number
          <input
            placeholder="+48 123 456 789"
            type="text"
            className="text-input"
            value={seller.phone}
            onChange={(e) => {
              dispatch(setSellerPhone(e.target.value));
            }}
          />
        </label>
      </div>
      <div className="mt-4 flex gap-6">
        <label className="w-full">
          E-mail Address
          <input
            placeholder="you@yourcompany.com"
            type="text"
            className="text-input"
            value={seller.email}
            onChange={(e) => {
              dispatch(setSellerEmail(e.target.value));
            }}
          />
        </label>
        <div className="w-full"></div>
      </div>
    </div>
  );
}
