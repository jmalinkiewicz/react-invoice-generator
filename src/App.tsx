import BuyerForm from "./components/forms/buyerForm";
import DetailsForm from "./components/forms/detailsForm";
import SellerForm from "./components/forms/sellerForm";

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
            <SellerForm />
            <BuyerForm />
            <DetailsForm />
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
