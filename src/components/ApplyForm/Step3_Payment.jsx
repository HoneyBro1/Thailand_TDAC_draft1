import React, { useState, useMemo } from 'react';
import { db } from '../../firebase.js';
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { Link } from 'react-router-dom';

const Step3_Payment = ({ formData, updateFormData, onBack }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState(null); // { success: boolean, applicationId?: string, error?: string }

  const handleSpeedChange = (speed) => {
    updateFormData({ processingSpeed: speed });
  };

  const numberOfTravelers = 1 + formData.additionalTravelers.length;
  const baseCost = 49.99;
  const fastFee = 20.00;

  // useMemo will recalculate the total cost only when the dependencies change
  const totalCost = useMemo(() => {
    let cost = baseCost * numberOfTravelers;
    if (formData.processingSpeed === 'fast') {
      cost += fastFee;
    }
    return cost.toFixed(2);
  }, [numberOfTravelers, formData.processingSpeed]);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setSubmissionResult(null);

    try {
      // Create a clean data object to submit, excluding temporary fields like 'confirmEmail'
      const { confirmEmail, ...dataToSubmit } = formData;
      
      const docRef = await addDoc(collection(db, "applications"), {
        ...dataToSubmit,
        totalCost: parseFloat(totalCost),
        numberOfTravelers,
        status: 'Submitted', // Initial status
        createdAt: serverTimestamp() // Add a server-side timestamp
      });
      
      setSubmissionResult({ success: true, applicationId: docRef.id });

    } catch (e) {
      console.error("Error adding document: ", e);
      setSubmissionResult({ success: false, error: "An error occurred while submitting. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  // If the form is successfully submitted, show the confirmation message
  if (submissionResult?.success) {
    return (
      <div className="text-center py-10">
          <h2 className="text-2xl font-bold text-green-600 mb-4">Application Submitted Successfully!</h2>
          <p className="text-gray-700 mb-2">Your application has been received.</p>
          <p className="text-gray-700 mb-6">Please save your unique Application ID for future reference:</p>
          <div className="bg-gray-100 text-gray-800 font-mono text-lg p-4 rounded-md inline-block mb-8">
            {submissionResult.applicationId}
          </div>
          <p className="text-gray-600">
            You can check the status of your application at any time using this ID.
          </p>
          <Link to="/check-status" className="mt-6 inline-block bg-red-800 text-white font-semibold py-2 px-6 rounded-md hover:bg-red-900 transition-colors">
            Go to Check Status Page
          </Link>
      </div>
    );
  }

  // Otherwise, show the payment form
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Payment and Submission</h2>
      
      <div className="bg-gray-100 p-4 rounded-md text-center text-gray-700 mb-6">
        This document has a cost of <span className="font-bold">${baseCost.toFixed(2)}</span> by traveler - Estimated delivery time ~ 1 day.
      </div>

      <div 
        onClick={() => handleSpeedChange('fast')}
        className={`border rounded-lg p-4 flex justify-between items-center cursor-pointer transition-all ${formData.processingSpeed === 'fast' ? 'border-blue-500 bg-blue-50 ring-2 ring-blue-200' : 'border-gray-300 bg-white'}`}
      >
        <div className="flex items-center">
           {/* Custom Radio Button */}
          <div className="w-5 h-5 border-2 border-gray-300 rounded-full flex items-center justify-center mr-4">
            {formData.processingSpeed === 'fast' && <div className="w-2.5 h-2.5 bg-blue-500 rounded-full"></div>}
          </div>
          <div>
            <div className="font-bold text-gray-800">Ultra fast</div>
            <div className="text-xs bg-blue-100 text-blue-700 font-semibold px-2 py-0.5 rounded-full inline-block mt-1">Processed in less than one hour</div>
          </div>
        </div>
        <div className="text-right">
          <div className="font-bold text-lg text-gray-800">+ ${fastFee.toFixed(2)}</div>
          <div className="text-sm text-gray-500">Additional fee</div>
        </div>
      </div>
      
      <div className="text-center text-sm text-gray-500 mt-4">
        * The price to be paid is multiplied by the number of travelers ({numberOfTravelers}).
        <br/>
        <span className="font-bold text-lg text-gray-800">Total: ${totalCost}</span>
      </div>

      {submissionResult?.error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-md mt-6 text-center">
          {submissionResult.error}
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="mt-8 pt-5 border-t border-gray-200 flex justify-between items-center">
        <button type="button" onClick={onBack} className="text-sm bg-gray-200 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-300 transition-colors">Previous</button>
        <button 
          type="button" 
          onClick={handleSubmit} 
          disabled={isSubmitting}
          className="text-sm bg-red-800 text-white font-semibold py-2 px-6 rounded-md hover:bg-red-900 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </div>
    </div>
  );
};

export default Step3_Payment;

