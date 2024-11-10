import React, { useState } from 'react';

interface FeeChargeFormProps {
  caseTitle: string;
  onSubmit: (amount: number) => void;
  onClose: () => void;
}

const FeeChargeForm: React.FC<FeeChargeFormProps> = ({
  caseTitle,
  onSubmit,
  onClose,
}) => {
  const [amount, setAmount] = useState<number | ''>('');
  const [message, setMessage] = useState<string>('');
  const [isError, setIsError] = useState<boolean>(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsedAmount =
      typeof amount === 'string' ? parseFloat(amount) : amount;
    if (parsedAmount > 0) {
      onSubmit(parsedAmount);
      setMessage(
        `Fee of $${parsedAmount} charged successfully for case "${caseTitle}".`,
      );
      setIsError(false);
    } else {
      setMessage('Error: Amount must be greater than 0.');
      setIsError(true);
    }
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setAmount(value === '' ? '' : parseFloat(value));
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg max-w-md w-full shadow-lg">
        <h3 className="text-xl font-semibold mb-4 text-blue-600">
          Charge Fee for {caseTitle}
        </h3>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <label className="block font-semibold text-gray-700 mb-2">
              Amount to Charge:
            </label>
            <input
              type="number"
              value={amount}
              onChange={handleAmountChange}
              required
              className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          {message && (
            <p
              className={`text-center text-sm ${
                isError ? 'text-red-500' : 'text-green-500'
              }`}
            >
              {message}
            </p>
          )}
          <div className="flex justify-end mt-4 space-x-4">
            <button
              type="submit"
              className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded bg-gray-300 text-gray-700 hover:bg-gray-400"
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FeeChargeForm;