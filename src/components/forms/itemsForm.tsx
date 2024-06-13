import { useState } from "react";

export default function ItemsForm() {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [unitPrice, setUnitPrice] = useState(0);
  const [taxRate, setTaxRate] = useState(0);

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
            <div className="w-1/12 "></div>
          </div>
          <div className="flex justify-between">
            <div className="w-1/2">
              <input type="text" className="w-full p-2" />
            </div>
            <div className="w-1/12">
              <input type="text" className="w-full p-2" />
            </div>
            <div className="w-1/12">
              <input type="text" className="w-full p-2" />
            </div>
            <div className="w-1/12">
              <input type="text" className="w-full p-2" />
            </div>
            <div className="w-1/12">
              <button className="w-full p-2 bg-blue-500 rounded text-white hover:bg-blue-600">
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
