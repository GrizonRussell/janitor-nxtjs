'use client'
import { useState } from 'react';

export default function Applicants() {
  const [selectedApplicant, setSelectedApplicant] = useState(null);

  // Sample data for applicants
  const applicants = [
    {
      index: 1,
      name: 'Macario, Mel Sabido',
      points: '0/350',
      percentage: 0,
      age: 30,
      gender: 'Male',
      email: 'mel.sabido@example.com',
      contactNumber: '09546448754',
      presentAddress: '123 Street, City',
      permanentAddress: '321 Avenue, City',
      education: [
        {
          institution: 'Opol Community College',
          course: 'Bachelor of Science IT',
          courseType: 'Tertiary Education',
          graduationDate: 'Sep 03, 2024',
        },
      ],
    },
    {
      index: 2,
      name: 'Macario, Joe Trump',
      points: '300/350',
      percentage: 85.71,
      age: 25,
      gender: 'Male',
      email: 'joe.trump@example.com',
      contactNumber: '09123456789',
      presentAddress: '567 Street, City',
      permanentAddress: '789 Avenue, City',
      education: [
        {
          institution: 'Liceo de College',
          course: 'Bachelor of Arts in History',
          courseType: 'Tertiary Education',
          graduationDate: 'Jan 01, 2022',
        },
      ],
    },
    {
      index: 3,
      name: 'Macario, Kobid Dog',
      points: '150/350',
      percentage: 42.86,
      age: 28,
      gender: 'Female',
      email: 'kobid.dog@example.com',
      contactNumber: '09876543210',
      presentAddress: '901 Street, City',
      permanentAddress: '109 Avenue, City',
      education: [
        {
          institution: 'Cagayan de Oro College',
          course: 'Bachelor of Arts in History',
          courseType: 'Tertiary Education',
          graduationDate: 'Jan 01, 2022',
        },
      ],
    },
  ];

  const closeModal = () => {
    setSelectedApplicant(null);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold">Janitor</h1>
        <p className="text-gray-400 mt-2">
          Nam laoreet lorem nec lacinia facilisis. Aliquam dignissim tellus sed purus sollicitudin eleifend.
          Integer tempor vitae ipsum auctor lobortis.
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex mb-6">
        <button className="px-4 py-2 bg-gray-700 rounded-l-md">Details</button>
        <button className="px-4 py-2 bg-gray-500 text-white rounded-r-md">Applicants</button>
      </div>

      {/* Applicants Table */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <table className="w-full table-auto text-left">
          <thead>
            <tr className="text-gray-400">
              <th className="py-2">Index</th>
              <th>Full Name</th>
              <th>Points</th>
              <th>Percentage</th>
            </tr>
          </thead>
          <tbody>
            {applicants.map((applicant) => (
              <tr key={applicant.index} className="border-b border-gray-700">
                <td className="py-2">{applicant.index}</td>
                <td
                  className="cursor-pointer text-blue-400 hover:text-blue-600 underline transition-all duration-200"
                  onClick={() => setSelectedApplicant(applicant)}
                >
                  {applicant.name}
                </td>
                <td>{applicant.points}</td>
                <td
                  className={`${
                    applicant.percentage >= 50 ? 'text-green-500' : 'text-red-500'
                  }`}
                >
                  {applicant.percentage}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Passing Percentage Info */}
        <p className="mt-4 text-gray-400">Passing percentage: 50%</p>
      </div>

      {/* Modal */}
      {selectedApplicant && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 transition-opacity duration-300 ease-out">
          <div className="bg-gray-900 p-6 rounded-lg w-full max-w-3xl shadow-lg text-white relative transform transition-transform duration-300 ease-out scale-100 hover:scale-105">
          {/* Close Button */}
          <button
            className="absolute top-1 right-2 text-white p-2 rounded-md shadow-lg transition duration-300"
            onClick={closeModal}
          >
            <span className="text-lg font-bold">X</span>
          </button>
            {/* Profile Section */}
            <div className="flex mb-4 items-center">
              <div className="w-1/4 flex justify-center">
                <div className="bg-gray-700 rounded-full w-24 h-24 shadow-lg"></div>
              </div>
              <div className="w-3/4">
                <h2 className="text-3xl font-bold mb-2">{selectedApplicant.name}</h2>
                <div className="text-sm text-gray-400">Skill:</div>
                <span className="bg-green-500 text-white px-3 py-1 shadow-md rounded-md">
                  Project management
                </span>
              </div>
            </div>

            {/* Basic Information */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold border-b border-gray-700 pb-2 mb-4">Basic Information:</h3>
              <div className="grid grid-cols-2 gap-4 text-gray-300">
                <p><strong>Age:</strong> {selectedApplicant.age} years old</p>
                <p><strong>Gender:</strong> {selectedApplicant.gender}</p>
                <p><strong>Email:</strong> {selectedApplicant.email}</p>
                <p><strong>Contact number:</strong> {selectedApplicant.contactNumber}</p>
                <p><strong>Present address:</strong> {selectedApplicant.presentAddress}</p>
                <p><strong>Permanent address:</strong> {selectedApplicant.permanentAddress}</p>
              </div>
            </div>
          {/* Education Section */}
          <div className="bg-gray-800 p-4 rounded-lg shadow-inner">
            <h3 className="text-lg font-semibold mb-2">Education</h3>
            <table className="w-full text-sm text-gray-400">
              <thead className="border-b border-gray-600">
                <tr>
                  <th className="py-2 text-left">#</th>
                  <th className="text-left">Institution</th>
                  <th className="text-left">Course</th>
                  <th className="text-left">Course type</th>
                  <th className="text-left">Graduation date</th>
                </tr>
              </thead>
              <tbody>
                {selectedApplicant.education.map((edu, index) => (
                  <tr key={index} className="border-b border-gray-600">
                    <td className="py-2 text-left">{index + 1}</td>
                    <td className="text-left">{edu.institution}</td>
                    <td className="text-left">{edu.course}</td>
                    <td className="text-left">{edu.courseType}</td>
                    <td className="text-left">{edu.graduationDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          </div>
        </div>
      )}
    </div>
  );
}
