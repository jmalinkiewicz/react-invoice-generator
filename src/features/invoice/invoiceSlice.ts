import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InvoiceState = {
  sellerInfo: {
    seller: string;
    address: string;
    taxId: string;
    phone: string;
    email: string;
  };
  buyerInfo: {
    buyer: string;
    address: string;
    taxId?: string;
    phone: string;
    email: string;
  };
  invoiceDetails: {
    dateIssued: string;
    dateDue: string;
    invoiceNo: string;
    referenceNo: string;
    currency: "USD" | "EUR" | "PLN";
  };
  invoiceItems: {
    items: {
      quantity: number;
      description: number;
      unitPrice: number;
      taxRate: number;
    }[];
  };
};

const initialState: InvoiceState = {
  sellerInfo: {
    seller: "",
    address: "",
    taxId: "",
    phone: "",
    email: "",
  },
  buyerInfo: {
    buyer: "",
    address: "",
    taxId: "",
    phone: "",
    email: "",
  },
  invoiceDetails: {
    dateIssued: "",
    dateDue: "",
    invoiceNo: "",
    referenceNo: "",
    currency: "USD",
  },
  invoiceItems: {
    items: [],
  },
};

export const invoiceSlice = createSlice({
  name: "invoice",
  initialState,
  reducers: {
    setSeller: (state, action: PayloadAction<string>) => {
      state.sellerInfo.seller = action.payload;
    },
    setSellerAddress: (state, action: PayloadAction<string>) => {
      state.sellerInfo.address = action.payload;
    },
    setSellerTaxId: (state, action: PayloadAction<string>) => {
      state.sellerInfo.taxId = action.payload;
    },
    setSellerPhone: (state, action: PayloadAction<string>) => {
      state.sellerInfo.phone = action.payload;
    },
    setSellerEmail: (state, action: PayloadAction<string>) => {
      state.sellerInfo.email = action.payload;
    },
    setBuyer: (state, action: PayloadAction<string>) => {
      state.buyerInfo.buyer = action.payload;
    },
    setBuyerAddress: (state, action: PayloadAction<string>) => {
      state.buyerInfo.address = action.payload;
    },
    setBuyerTaxId: (state, action: PayloadAction<string>) => {
      state.buyerInfo.taxId = action.payload;
    },
    setBuyerPhone: (state, action: PayloadAction<string>) => {
      state.buyerInfo.phone = action.payload;
    },
    setBuyerEmail: (state, action: PayloadAction<string>) => {
      state.buyerInfo.email = action.payload;
    },
    setDateIssued: (state, action: PayloadAction<string>) => {
      state.invoiceDetails.dateIssued = action.payload;
    },
    setDateDue: (state, action: PayloadAction<string>) => {
      state.invoiceDetails.dateDue = action.payload;
    },
    setInvoiceNo: (state, action: PayloadAction<string>) => {
      state.invoiceDetails.invoiceNo = action.payload;
    },
    setReferenceNo: (state, action: PayloadAction<string>) => {
      state.invoiceDetails.referenceNo = action.payload;
    },
    setCurrency: (state, action: PayloadAction<"USD" | "EUR" | "PLN">) => {
      state.invoiceDetails.currency = action.payload;
    },
    addItem: (
      state,
      action: PayloadAction<InvoiceState["invoiceItems"]["items"][0]>
    ) => {
      state.invoiceItems.items.push(action.payload);
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.invoiceItems.items.splice(action.payload, 1);
    },
  },
});

export const {
  setSeller,
  setSellerAddress,
  setSellerTaxId,
  setSellerPhone,
  setSellerEmail,
  setBuyer,
  setBuyerAddress,
  setBuyerTaxId,
  setBuyerPhone,
  setBuyerEmail,
  setDateIssued,
  setDateDue,
  setInvoiceNo,
  setReferenceNo,
  setCurrency,
  addItem,
  removeItem,
} = invoiceSlice.actions;
