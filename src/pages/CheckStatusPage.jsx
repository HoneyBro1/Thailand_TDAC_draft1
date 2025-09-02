import React, { useState } from 'react';
import { db } from '../firebase.js';
import { collection, query, where, getDocs } from "firebase/firestore";

// A small component to display validation errors
const FieldError = ({ error }) => {
  if (!error) return null;
  return <p className="text-xs text-red-500 mt-1">{error}</p>;
};

// A component to display the application status with a colored badge
const StatusBadge = ({ status }) => {
    const statusStyles = {
        'Submitted': 'bg-blue-100 text-blue-800',
        'Approved': 'bg-green-100 text-green-800',
        'Rejected': 'bg-red-100 text-red-800',
        'In Progress': 'bg-yellow-100 text-yellow-800',
    };
    return (
        <span className={`px-3 py-1 text-sm font-semibold rounded-full ${statusStyles[status] || 'bg-gray-100 text-gray-800'}`}>
            {status}
        </span>
    );
};

const CheckStatusPage = () => {
    const [formData, setFormData] = useState({
        lastName: '',
        passport: '',
        email: '',
        confirmEmail: '',
    });
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [searchResult, setSearchResult] = useState(null); // Will hold the found application data
    const [noResult, setNoResult] = useState(false); // To show a "not found" message

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        if (errors[e.target.name]) {
          setErrors(prev => ({ ...prev, [e.target.name]: null }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.lastName) newErrors.lastName = 'Last name is required.';
        if (!formData.passport) newErrors.passport = 'Passport number is required.';
        if (!formData.email) newErrors.email = 'Email is required.';
        if (formData.email !== formData.confirmEmail) newErrors.confirmEmail = 'Emails do not match.';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSearchResult(null);
        setNoResult(false);

        if (!validateForm()) {
            return;
        }

        setIsLoading(true);
        try {
            const q = query(collection(db, "applications"), 
                where("lastName", "==", formData.lastName.trim()),
                where("passportNumber", "==", formData.passport.trim()),
                where("email", "==", formData.email.trim())
            );

            const querySnapshot = await getDocs(q);
            
            if (querySnapshot.empty) {
                setNoResult(true);
            } else {
                // Assuming one result, take the first document
                const appData = querySnapshot.docs[0].data();
                setSearchResult({ id: querySnapshot.docs[0].id, ...appData });
            }
        } catch (error) {
            console.error("Error searching for application: ", error);
            setErrors({ form: "An error occurred. Please try again." });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen py-12">
            <div className="max-w-4xl mx-auto px-4">
                <div className="bg-white rounded-lg shadow-xl p-8">
                    <h1 className="text-3xl font-bold text-gray-800">Check Status</h1>
                    <p className="text-gray-600 mt-2 mb-8">Easily check the data and status of your application</p>
                    
                    <form onSubmit={handleSubmit} noValidate>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                                <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 focus:ring-red-500 focus:border-red-500" />
                                <FieldError error={errors.lastName} />
                            </div>
                             <div>
                                <label htmlFor="passport" className="block text-sm font-medium text-gray-700">Passport</label>
                                <input type="text" id="passport" name="passport" value={formData.passport} onChange={handleChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 focus:ring-red-500 focus:border-red-500" />
                                <FieldError error={errors.passport} />
                            </div>
                             <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 focus:ring-red-500 focus:border-red-500" />
                                <FieldError error={errors.email} />
                            </div>
                            <div>
                                <label htmlFor="confirmEmail" className="block text-sm font-medium text-gray-700">Confirm Email</label>
                                <input type="email" id="confirmEmail" name="confirmEmail" value={formData.confirmEmail} onChange={handleChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 focus:ring-red-500 focus:border-red-500" />
                                <FieldError error={errors.confirmEmail} />
                            </div>
                        </div>
                        <div className="flex justify-end mt-8">
                            <button type="submit" disabled={isLoading} className="text-sm bg-red-800 text-white font-semibold py-2 px-8 rounded-md hover:bg-red-900 transition-colors disabled:bg-gray-400">
                                {isLoading ? 'Searching...' : 'Submit'}
                            </button>
                        </div>
                    </form>
                </div>

                {/* --- Results Section --- */}
                {noResult && (
                    <div className="bg-white rounded-lg shadow-xl p-8 mt-8 text-center">
                        <h2 className="text-xl font-bold text-gray-800">No Application Found</h2>
                        <p className="text-gray-600 mt-2">We could not find an application matching the details you provided. Please double-check the information and try again.</p>
                    </div>
                )}

                {searchResult && (
                    <div className="bg-white rounded-lg shadow-xl p-8 mt-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-4">Application Details</h2>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <span className="font-medium text-gray-600">Applicant Name:</span>
                                <span className="font-semibold text-gray-800">{searchResult.firstName} {searchResult.lastName}</span>
                            </div>
                             <div className="flex justify-between items-center">
                                <span className="font-medium text-gray-600">Application ID:</span>
                                <span className="font-mono text-gray-800 bg-gray-100 p-1 rounded">{searchResult.id}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="font-medium text-gray-600">Submission Date:</span>
                                <span className="font-semibold text-gray-800">{new Date(searchResult.createdAt.seconds * 1000).toLocaleDateString()}</span>
                            </div>
                            <div className="flex justify-between items-center mt-4 pt-4 border-t">
                                <span className="font-bold text-lg text-gray-600">Status:</span>
                                <StatusBadge status={searchResult.status} />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CheckStatusPage;

