import React from 'react';

interface AdvocateProps {
  advocate: {
    name: string;
    email: string;
    state: string;
    district: string;
    gender: string;
    mobile: string;
    language: string;
    aadharProof: string;
    pincode: string;
    location: string;
    distance: string;
    specialization: string;
    ratings: number;
    profilePicture: string;
  };
  onClose: () => void; // Function to close the modal
}

const AdvocateDetailsModal: React.FC<AdvocateProps> = ({
  advocate,
  onClose,
}) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div
        className="rounded-2xl shadow-2xl w-full max-w-2xl p-8 relative"
        style={{
          backgroundColor: '#e0f7fa',
          height: '600px',
          marginTop: '40px',
          marginLeft: '20px',
        }}
      >
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-3xl font-semibold text-gray-800">
            {advocate.name}
          </h2>
          <button
            className="text-gray-400 hover:text-gray-900 text-2xl transition-colors duration-200"
            onClick={onClose}
          >
            &times;
          </button>
        </div>

        <div className="flex flex-col items-center">
          <img
            src={advocate.profilePicture}
            alt={advocate.name}
            className="rounded-full w-32 h-32 mb-6 shadow-lg border-4 border-blue-500 transition-transform transform hover:scale-105"
          />

          <div className="grid grid-cols-2 gap-x-8 gap-y-4 w-full text-left text-gray-600">
            <p className="col-span-2 text-center text-lg text-blue-600 font-medium">
              Advocate Profile
            </p>

            <p className="text-lg">
              <strong>Email:</strong>{' '}
              <span className="text-gray-800">{advocate.email}</span>
            </p>
            <p className="text-lg">
              <strong>Mobile:</strong>{' '}
              <span className="text-gray-800">{advocate.mobile}</span>
            </p>
            <p className="text-lg">
              <strong>State:</strong>{' '}
              <span className="text-gray-800">{advocate.state}</span>
            </p>
            <p className="text-lg">
              <strong>District:</strong>{' '}
              <span className="text-gray-800">{advocate.district}</span>
            </p>
            <p className="text-lg">
              <strong>Gender:</strong>{' '}
              <span className="text-gray-800">{advocate.gender}</span>
            </p>
            <p className="text-lg">
              <strong>Language:</strong>{' '}
              <span className="text-gray-800">{advocate.language}</span>
            </p>
            <p className="text-lg">
              <strong>Aadhar Proof:</strong>{' '}
              <span className="text-gray-800">{advocate.aadharProof}</span>
            </p>
            <p className="text-lg">
              <strong>Pincode:</strong>{' '}
              <span className="text-gray-800">{advocate.pincode}</span>
            </p>
            <p className="text-lg">
              <strong>Location:</strong>{' '}
              <span className="text-gray-800">{advocate.location}</span>
            </p>
            <p className="text-lg">
              <strong>Distance:</strong>{' '}
              <span className="text-gray-800">{advocate.distance}</span>
            </p>
            <p className="text-lg">
              <strong>Specialization:</strong>{' '}
              <span className="text-gray-800">{advocate.specialization}</span>
            </p>
            <p className="text-lg">
              <strong>Ratings:</strong>{' '}
              <span className="text-yellow-500">{advocate.ratings} ★</span>
            </p>
          </div>
        </div>

        <div className="text-center mt-4">
          {' '}
          {/* Reduced margin for the button */}
          <button
            onClick={onClose}
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-300"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdvocateDetailsModal;