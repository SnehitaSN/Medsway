// InvoiceDocument.jsx
import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    padding: 20,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
});

const InvoiceDocument = ({ invoiceNumber, clientName, items }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.title}>Invoice</Text>
        <Text>Invoice Number: {invoiceNumber}</Text>
        <Text>Client Name: {clientName}</Text>
        <View style={{ marginBottom: 10 }}>
          <Text style={{ fontWeight: 'bold' }}>Items:</Text>
          {items.map((item, index) => (
            <View key={index} style={styles.itemRow}>
              <Text>{item.name}</Text>
              <Text>{item.quantity}</Text>
              <Text>${item.price}</Text>
            </View>
          ))}
        </View>
        <Text style={{ fontWeight: 'bold', textAlign: 'right' }}>Total: ${calculateTotal(items).toFixed(2)}</Text>
      </View>
    </Page>
  </Document>
);

// Function to calculate the total cost based on items, quantities, and prices
const calculateTotal = (items) => {
  return items.reduce((total, item) => total + item.quantity * item.price, 0);
};

export default InvoiceDocument;
