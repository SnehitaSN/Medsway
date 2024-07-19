import React , { useState }from 'react'
import Layout from '../../components/layout/Layout'

function CreateAccount() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    // Reset the form fields after submission
    resetForm();
  };

  const resetForm = () => {
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setName('');
  };
  return (
    <Layout>
 <div className="flex justify-center items-center min-h-screen mt-8 bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white border-2 rounded-lg border-gray-300 shadow-xl px-8 py-10 w-full max-w-lg"
      >
        <div className="mb-6">
          <h1 className="font-sans text-blue-700 font-semibold text-center text-2xl">
            Create Account
          </h1>
        </div>
        
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block text-gray-700 text-lg font-sans font-medium mb-2"
          >
            Full Name
          </label>
          <input
            type="text"
            placeholder="Enter Full Name"
            required
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="email"
            className="block text-gray-700 text-lg font-sans font-medium mb-2"
          >
            Email
          </label>
          <input
            type="email"
            placeholder="Enter Email"
            required
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-gray-700 text-lg font-sans font-medium mb-2"
          >
            Password
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            minLength={4}
            required
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="confirmPassword"
            className="block text-gray-700 text-lg font-sans font-medium mb-2"
          >
            Confirm Password
          </label>
          <input
            type="password"
            placeholder="Confirm Password"
            minLength={4}
            required
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-sans font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          >
            Create Account
          </button>
        </div>
      </form>
    </div>
    </Layout>
  )
}

export default CreateAccount