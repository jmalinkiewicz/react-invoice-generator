import BuyerForm from "./components/forms/buyerForm";
import DetailsForm from "./components/forms/detailsForm";
import ItemsForm from "./components/forms/itemsForm";
import SellerForm from "./components/forms/sellerForm";
import { DownloadPDF } from "./components/pdfGenerator";
import { useAppSelector } from "./hooks";

function App() {
  const invoice = useAppSelector((state) => state.invoiceSlice);

  const subTotal = invoice.invoiceItems.items.reduce((acc, item) => {
    return acc + item.quantity * item.unitPrice;
  }, 0);
  const totalTax = invoice.invoiceItems.items.reduce((acc, item) => {
    return acc + (item.quantity * item.unitPrice * item.taxRate) / 100;
  }, 0);
  const total = invoice.invoiceItems.items.reduce((acc, item) => {
    return (
      acc +
      (item.quantity * item.unitPrice * item.taxRate) / 100 +
      item.quantity * item.unitPrice
    );
  }, 0);

  const currency = useAppSelector(
    (state) => state.invoiceSlice.invoiceDetails.currency
  );

  const currencyChar = {
    USD: "$",
    EUR: "€",
    PLN: "zł",
  }[currency];

  return (
    <>
      <div className="h-full">
        <div className="max-w-screen-lg m-auto h-full bg-neutral-50">
          <main className="py-8 px-12">
            <h1 className="text-3xl font-bold">Invoicer</h1>
            <p className="text-sm text-gray-600">
              Create and send invoices in minutes.
            </p>
            <SellerForm />
            <BuyerForm />
            <DetailsForm />
            <ItemsForm />
            <div className="mt-8">
              <h2 className="text-2xl font-bold">Summary</h2>
              <div className="grid grid-cols-2 grid-rows-2 gap-4 mt-4">
                <div className="col-span-1 row-span-1">
                  <h3 className="text-xl font-semibold">Billed from</h3>
                  <div className="flex flex-col gap-0.5">
                    <h4 className="font-medium">
                      Seller: {invoice.sellerInfo.seller}
                    </h4>
                    <p>Address: {invoice.sellerInfo.address}</p>
                    <p>Tax ID: {invoice.sellerInfo.taxId}</p>
                    <p>Phone: {invoice.sellerInfo.phone}</p>
                    <p>E-mail: {invoice.sellerInfo.email}</p>
                  </div>
                </div>
                <div className="col-span-1 row-span-1 order-3">
                  <h3 className="text-xl font-semibold">Billed to</h3>
                  <div className="flex flex-col gap-0.5">
                    <h4 className="font-medium">
                      Buyer: {invoice.buyerInfo.buyer}
                    </h4>
                    <p>Address: {invoice.buyerInfo.address}</p>
                    <p>Tax ID: {invoice.buyerInfo.taxId}</p>
                    <p>Phone: {invoice.buyerInfo.phone}</p>
                    <p>E-mail: {invoice.buyerInfo.email}</p>
                  </div>
                </div>
                <div className="col-span-1 row-span-1 order-4">
                  <h3 className="text-xl font-semibold">Invoice Details</h3>
                  <div className="flex flex-col gap-0.5">
                    <p>Date Issued: {invoice.invoiceDetails.dateIssued}</p>
                    <p>Date Due: {invoice.invoiceDetails.dateDue}</p>
                    <p>Invoice Number: {invoice.invoiceDetails.invoiceNo}</p>
                    <p>Reference #: {invoice.invoiceDetails.referenceNo}</p>
                    <p>Currency: {invoice.invoiceDetails.currency}</p>
                  </div>
                </div>
                <div className="col-span-1 row-span-1 order-2">
                  <h3 className="text-xl font-bold flex justify-between">
                    <span>Subtotal:</span> {currencyChar}
                    {subTotal}
                  </h3>
                  <h4 className="text-lg font-medium flex justify-between">
                    <span>Total Tax:</span> {currencyChar}
                    {totalTax}
                  </h4>
                  <h2 className="text-3xl font-bold flex justify-between mt-4">
                    <span>Total:</span> {currencyChar}
                    {total}
                  </h2>
                </div>
              </div>
              <DownloadPDF />
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
