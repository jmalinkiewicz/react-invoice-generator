import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { addItem, removeItem } from "../../features/invoice/invoiceSlice";

export default function ItemsForm() {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState<number | "">(1);
  const [unitPrice, setUnitPrice] = useState<number | "">(0);
  const [taxRate, setTaxRate] = useState<number | "">(0);

  const dispatch = useAppDispatch();
  const items = useAppSelector((state) => state.invoiceSlice.invoiceItems);
  const currency = useAppSelector(
    (state) => state.invoiceSlice.invoiceDetails.currency
  );

  const currencyChar = {
    USD: "$",
    EUR: "€",
    PLN: "zł",
  }[currency];

  const total =
    (Number(quantity) *
      Math.floor(
        (Number(unitPrice) + Number(unitPrice) * (Number(taxRate) / 100)) * 100
      )) /
    100;

  function handleAddItem() {
    if (!description || !quantity || !unitPrice || !taxRate) {
      return;
    }

    dispatch(
      addItem({
        description,
        quantity: Number(quantity),
        unitPrice: Number(unitPrice),
        taxRate: Number(taxRate),
      })
    );
    setDescription("");
    setQuantity(1);
    setUnitPrice(0);
    setTaxRate(0);
  }

  function handleRemoveItem(index: number) {
    dispatch(removeItem(index));
  }

  return (
    <div className="mt-12">
      <h2 className="text-xl font-semibold">Invoice Items</h2>
      <div className="mt-4">
        <div className="flex flex-col gap-4">
          <div className="flex font-bold text-md justify-between">
            <div className="w-1/2">Description</div>
            <div className="w-1/12">Quantity</div>
            <div className="w-1/12 ">Unit Price</div>
            <div className="w-1/12 ">Tax Rate</div>
            <div className="w-1/12 ">Total</div>
            <div className="w-1/12 "></div>
          </div>
          <div className="flex justify-between">
            <div className="w-1/2">
              <input
                type="text"
                className="w-full p-2 border-[1px] border-gray-300 hover:border-gray-400"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="w-1/12">
              <input
                type="number"
                className="w-full p-2 border-[1px] border-gray-300 hover:border-gray-400"
                value={quantity}
                onChange={(e) => {
                  if (e.target.value === "" || Number(e.target.value) < 0) {
                    setQuantity("");
                  } else {
                    setQuantity(Number(e.target.value));
                  }
                }}
              />
            </div>
            <div className="w-1/12">
              <input
                type="number"
                className="w-full p-2 border-[1px] border-gray-300 hover:border-gray-400"
                value={unitPrice}
                onChange={(e) => {
                  if (e.target.value === "" || Number(e.target.value) < 0) {
                    setUnitPrice("");
                  } else {
                    setUnitPrice(Number(e.target.value));
                  }
                }}
              />
            </div>
            <div className="w-1/12">
              <input
                type="number"
                className="w-full p-2 border-[1px] border-gray-300 hover:border-gray-400"
                value={taxRate}
                max={100}
                min={0}
                onChange={(e) => {
                  if (e.target.value === "" || Number(e.target.value) < 0) {
                    setTaxRate("");
                  } else {
                    setTaxRate(Number(e.target.value));
                  }
                }}
              />
            </div>
            <div className="w-1/12 flex items-center">
              <span>
                {currencyChar}
                {total}
              </span>
            </div>
            <div className="w-1/12">
              <button
                onClick={handleAddItem}
                className="w-full p-2 bg-blue-500 rounded text-white hover:bg-blue-600"
              >
                Add
              </button>
            </div>
          </div>
        </div>
        {!items.items.length && (
          <div className="text-center mt-4 text-gray-500 p-16">
            No items added yet
          </div>
        )}
        <div className="flex flex-col gap-1 mt-6">
          {items.items.map((item, index) => {
            return (
              <div className="flex justify-between bg-slate-200 rounded py-1 px font-medium">
                <div className="w-1/2 flex items-center pl-4">
                  {item.description}
                </div>
                <div className="w-1/12 grid place-items-center">
                  {item.quantity}
                </div>
                <div className="w-1/12 grid place-items-center">
                  {currencyChar}
                  {item.unitPrice}
                </div>
                <div className="w-1/12 grid place-items-center">
                  {item.taxRate}%
                </div>
                <div className="w-1/12 flex items-center">
                  {currencyChar}
                  {(Number(item.quantity) *
                    Math.floor(
                      (Number(item.unitPrice) +
                        Number(item.unitPrice) * (Number(item.taxRate) / 100)) *
                        100
                    )) /
                    100}
                </div>
                <div className="w-1/12">
                  <button
                    onClick={() => {
                      handleRemoveItem(index);
                    }}
                    className="w-full p-2 rounded bg-red-500 hover:bg-red-600 text-white"
                  >
                    Del
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
