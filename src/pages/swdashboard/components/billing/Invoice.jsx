import React, { useState } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import InvoiceDocument from "./Invoicedocument";

function Invoice() {
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [clientName, setClientName] = useState("");
  const [items, setItems] = useState([]);
  const [invoiceDetails,setInvoiceDetails]=useState("")
  const[pdfContent,setPdfContent] = useState('')

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "invoiceNumber") {
      setInvoiceNumber(value);
    } else if (name === "clientName") {
      setClientName(value);
    }
  };

  const handleAddItem = () => {
    setItems([...items, { name: "", quantity: 0, price: 0 }]);
  };

  const handleItemChange = (index, key, value) => {
    const newItems = [...items];
    newItems[index][key] = value;
    setItems(newItems);
  };

  const calculateTotal = () => {
    return items.reduce((total, item) => total + item.quantity * item.price, 0);
  };
  const handleGenerateInvoice = () => {
    // Extract details needed for the invoice from the state
    const invoiceDetails = {
      invoiceNumber: invoiceNumber,
      clientName: clientName,
      items: items,
    };

    // Define the PDF document content
    const pdfContent = (
      <InvoiceDocument
        invoiceNumber={invoiceDetails.invoiceNumber}
        clientName={invoiceDetails.clientName}
        items={invoiceDetails.items}
      />
    );
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Invoice Generator</h1>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Invoice Number
        </label>
        <input
          type="text"
          name="invoiceNumber"
          value={invoiceDetails.invoiceNumber}
          onChange={handleInputChange}
          className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Client Name
        </label>
        <input
          type="text"
          name="clientName"
          value={invoiceDetails.clientName}
          onChange={handleInputChange}
          className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <table className="w-full mb-4">{/* Table for item details */}</table>
      <button
        onClick={handleAddItem}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Add Item
      </button>
      <div className="mt-4">
        <h2 className="text-lg font-bold mb-2">
          Total: ${calculateTotal().toFixed(2)}
        </h2>
      </div>
      <div className="mt-8">
        <button
          onClick={handleGenerateInvoice}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Generate Invoice (PDF)
        </button>
      </div>
      <PDFDownloadLink document={pdfContent} fileName="invoice.pdf">
        {({ blob, url, loading, error }) =>
          loading ? "Generating PDF..." : "Download Invoice"
        }
      </PDFDownloadLink>
    </div>
  );
}

export default Invoice;
