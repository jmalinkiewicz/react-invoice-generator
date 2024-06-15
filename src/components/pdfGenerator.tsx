import React from "react";
import {
  PDFViewer,
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFDownloadLink,
} from "@react-pdf/renderer";
import { useAppSelector } from "../hooks";
import { InvoiceState } from "../features/invoice/invoiceSlice";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
    padding: 24,
  },
  title: {
    fontSize: 32,
  },
  line: {
    marginVertical: 12,
    borderBottomColor: "#000000",
    borderBottomWidth: 4,
    width: "100%",
  },
  billing: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  billedContainer: {
    width: "50%",
    padding: 12,
    border: "1px solid #000000",
    backgroundColor: "#FFFFFF",
  },
  billedDetailsContainer: {
    marginTop: 6,
    display: "flex",
    flexDirection: "column",
    gap: 4,
  },
  spaceBetweenText: {
    fontSize: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  billedHeading: {
    fontSize: 14,
  },
  detailsContainer: {
    backgroundColor: "#dbdbdb",
    marginTop: 1,
    padding: 12,
    border: "1px solid #000000",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  table: {
    marginTop: 8,
    display: "flex",
    width: "100%",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#000",
  },
  tableRow: {
    flexDirection: "row",
    borderStyle: "solid",
    borderBottomWidth: 1,
    borderColor: "#000",
    backgroundColor: "#f0f0f0",
  },
  tableCell: {
    flex: 1,
    margin: 5,
    fontSize: 10,
  },
  descriptionCell: {
    flex: 3,
    margin: 5,
    fontSize: 10,
  },
  itemsText: {
    fontSize: 14,
  },
  summaryNumbers: {
    marginTop: 8,
    width: "45%",
    display: "flex",
    flexDirection: "column",
    gap: 6,
    marginLeft: "auto",
  },
  subTotalText: {
    fontSize: 12,
  },
  totalTaxText: {
    fontSize: 10,
  },
  totalText: {
    fontSize: 16,
  },
  viewer: {
    width: window.innerWidth, // Adjust the width to your preference
    height: window.innerHeight, // Adjust the height to your preference
  },
});

const MyDocument = ({ invoice }: { invoice: InvoiceState }) => {
  const currencyChar = {
    USD: "$",
    EUR: "€",
    PLN: "PLN",
  }[invoice.invoiceDetails.currency];

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

  return (
    <Document title="Invoice">
      <Page size="A4" style={styles.page}>
        <View>
          <Text style={styles.title}>Invoice</Text>
        </View>
        <View style={styles.line}></View>
        {/* BILLING DETAILS */}
        <View style={styles.billing}>
          <View style={styles.billedContainer}>
            <Text style={styles.billedHeading}>Billed From:</Text>
            <View style={styles.billedDetailsContainer}>
              <View style={styles.spaceBetweenText}>
                <Text>Name:</Text>
                <Text>{invoice.sellerInfo.seller}</Text>
              </View>
              <View style={styles.spaceBetweenText}>
                <Text>Addres:</Text>
                <Text>{invoice.sellerInfo.address}</Text>
              </View>
              <View style={styles.spaceBetweenText}>
                <Text>Tax ID:</Text>
                <Text>{invoice.sellerInfo.taxId}</Text>
              </View>
              <View style={styles.spaceBetweenText}>
                <Text>Phone:</Text>
                <Text>{invoice.sellerInfo.phone}</Text>
              </View>
              <View style={styles.spaceBetweenText}>
                <Text>E-mail:</Text>
                <Text>{invoice.sellerInfo.email}</Text>
              </View>
            </View>
          </View>
          <View style={styles.billedContainer}>
            <Text style={styles.billedHeading}>Billed To:</Text>
            <View style={styles.billedDetailsContainer}>
              <View style={styles.spaceBetweenText}>
                <Text>Name:</Text>
                <Text>{invoice.buyerInfo.buyer}</Text>
              </View>
              <View style={styles.spaceBetweenText}>
                <Text>Addres:</Text>
                <Text>{invoice.buyerInfo.address}</Text>
              </View>
              <View style={styles.spaceBetweenText}>
                <Text>Tax ID:</Text>
                <Text>{invoice.buyerInfo.taxId}</Text>
              </View>
              <View style={styles.spaceBetweenText}>
                <Text>Phone:</Text>
                <Text>{invoice.buyerInfo.phone}</Text>
              </View>
              <View style={styles.spaceBetweenText}>
                <Text>E-mail:</Text>
                <Text>{invoice.buyerInfo.email}</Text>
              </View>
            </View>
          </View>
        </View>
        {/* INVOICE DETAILS (CURR, DATES) */}
        <View style={styles.detailsContainer}>
          <View style={styles.spaceBetweenText}>
            <Text>Date Issued: </Text>
            <Text>{invoice.invoiceDetails.dateIssued}</Text>
          </View>
          <View style={styles.spaceBetweenText}>
            <Text>Date Due: </Text>
            <Text>{invoice.invoiceDetails.dateDue}</Text>
          </View>
          <View style={styles.spaceBetweenText}>
            <Text>Invoice No. : </Text>
            <Text>{invoice.invoiceDetails.invoiceNo}</Text>
          </View>
          <View style={styles.spaceBetweenText}>
            <Text>Reference #: </Text>
            <Text>{invoice.invoiceDetails.referenceNo}</Text>
          </View>
          <View style={styles.spaceBetweenText}>
            <Text>Currency: </Text>
            <Text>{invoice.invoiceDetails.currency}</Text>
          </View>
        </View>
        <View style={styles.line}></View>
        {/* INVOICE ITEMS */}
        <View>
          <Text style={styles.itemsText}>Items:</Text>
          <View style={styles.table}>
            {/* Table Header */}
            <View style={styles.tableRow}>
              <Text style={styles.descriptionCell}>Description</Text>
              <Text style={styles.tableCell}>Quantity</Text>
              <Text style={styles.tableCell}>Price</Text>
              <Text style={styles.tableCell}>Tax Rate</Text>
              <Text style={styles.tableCell}>Total Gross</Text>
            </View>
            {/* Table Rows */}
            {invoice.invoiceItems.items.map((item, index) => (
              <View style={styles.tableRow} key={index}>
                <Text style={styles.descriptionCell}>{item.description}</Text>
                <Text style={styles.tableCell}>{item.quantity}</Text>
                <Text style={styles.tableCell}>${item.unitPrice}</Text>
                <Text style={styles.tableCell}>{item.taxRate}%</Text>
                <Text style={styles.tableCell}>
                  $
                  {(Number(item.quantity) *
                    Math.floor(
                      (Number(item.unitPrice) +
                        Number(item.unitPrice) * (Number(item.taxRate) / 100)) *
                        100
                    )) /
                    100}
                </Text>
              </View>
            ))}
          </View>
        </View>
        <View style={styles.line}></View>
        {/* SUMMARY */}
        <View>
          <Text>Summary</Text>
          <View style={styles.summaryNumbers}>
            <View style={[styles.spaceBetweenText, styles.subTotalText]}>
              <Text>Subtotal:</Text>
              <Text>
                {currencyChar}
                {subTotal}
              </Text>
            </View>
            <View style={[styles.spaceBetweenText, styles.totalTaxText]}>
              <Text>Total Tax:</Text>
              <Text>
                {currencyChar}
                {totalTax}
              </Text>
            </View>
            <View style={[styles.spaceBetweenText, styles.totalText]}>
              <Text>Total Gross:</Text>
              <Text>
                {currencyChar}
                {total}
              </Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export const DownloadPDF = () => {
  const invoice = useAppSelector((state) => state.invoiceSlice);

  return (
    <div>
      <PDFDownloadLink
        document={<MyDocument invoice={invoice} />}
        fileName="example.pdf"
      >
        {({ blob, url, loading, error }) =>
          loading ? "Loading document..." : "Download now!"
        }
      </PDFDownloadLink>
    </div>
  );
};
