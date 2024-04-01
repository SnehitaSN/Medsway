import React ,{useState} from 'react'
import DashboardLayout from '../../dashboardlayout/DashboardLayout'
import {useNavigate} from 'react-router-dom'

function Billing() {

  const [items, setItems] = useState([{ name: '', quantity: 0, price: 0 }]);
  const [invoiceNumber, setInvoiceNumber] = useState('');
  const [clientName, setClientName] = useState('');

  const navigate = useNavigate()

  const handleNavigate = ()=>{
    navigate('/invoice')
  }

  const handleItemChange = (index, key, value) => {
    const newItems = [...items];
    newItems[index][key] = value;
    setItems(newItems);
  };

  const handleAddItem = () => {
    setItems([...items, { name: '', quantity: 0, price: 0 }]);
  };

  const handleRemoveItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  const calculateTotal = () => {
    return items.reduce((total, item) => total + item.quantity * item.price, 0);
  };


  return (
    <DashboardLayout>
     <div className=" ml-64 mt-8 ">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Invoice Number</label>
        <input
          type="text"
          className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={invoiceNumber}
          onChange={(e) => setInvoiceNumber(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Client Name</label>
        <input
          type="text"
          className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={clientName}
          onChange={(e) => setClientName(e.target.value)}
        />
      </div>
      <table className="w-full mb-4">
        <thead>
          <tr>
            <th className="px-4 py-2">Item</th>
            <th className="px-4 py-2">Quantity</th>
            <th className="px-4 py-2">Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>
                <input
                  type="text"
                  className="border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={item.name}
                  onChange={(e) => handleItemChange(index, 'name', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="number"
                  className="border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={item.quantity}
                  onChange={(e) => handleItemChange(index, 'quantity', parseInt(e.target.value))}
                />
              </td>
              <td>
                <input
                  type="number"
                  className="border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={item.price}
                  onChange={(e) => handleItemChange(index, 'price', parseFloat(e.target.value))}
                />
              </td>
              <td>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                  onClick={() => handleRemoveItem(index)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={handleAddItem}
      >
        Add Item
      </button>
      <div className="mt-4">
        <h2 className="text-lg font-bold mb-2">Total: ${calculateTotal().toFixed(2)}</h2>
      </div>
      <div className="mt-8">
        <button  onClick={handleNavigate}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Generate Invoice
          
        </button>
      </div>
    </div>
    </DashboardLayout>
  )
}

export default Billing