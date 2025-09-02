import React, { useState } from 'react';
import { countries, thailandProvinces, travelPurposes } from '../ApplyForm/FormData';

const FieldError = ({ error }) => {
  if (!error) return null;
  return <p className="text-xs text-red-500 mt-1">{error}</p>;
};

const Step2_TravelInfo = ({ formData, updateFormData, onNext, onBack }) => {
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    updateFormData({ [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors(prev => ({ ...prev, [e.target.name]: null }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.departureCountry) newErrors.departureCountry = 'Departure country is required.';
    if (!formData.purposeOfVisit) newErrors.purposeOfVisit = 'Purpose of visit is required.';
    if (!formData.flightNumber) newErrors.flightNumber = 'Flight number is required.';
    if (!formData.provinceOfStay) newErrors.provinceOfStay = 'Province of stay is required.';
    if (!formData.addressInThailand) newErrors.addressInThailand = 'Address in Thailand is required.';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateForm()) {
      onNext();
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-8">Travel Information</h2>
      
      {/* Arrival Information Section */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-700 mb-4 border-b pb-2">Arrival Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="departureCountry" className="block text-sm font-medium text-gray-700">Departure Country/Territory where you Boarded</label>
            <select id="departureCountry" name="departureCountry" value={formData.departureCountry} onChange={handleChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 focus:ring-red-500 focus:border-red-500">
              <option value="">Select Country</option>
              {countries.map(country => <option key={country.code} value={country.name}>{`${country.code} : ${country.name.toUpperCase()}`}</option>)}
            </select>
            <FieldError error={errors.departureCountry} />
          </div>
          <div>
            <label htmlFor="purposeOfVisit" className="block text-sm font-medium text-gray-700">Purpose</label>
            <select id="purposeOfVisit" name="purposeOfVisit" value={formData.purposeOfVisit} onChange={handleChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 focus:ring-red-500 focus:border-red-500">
              {travelPurposes.map(purpose => <option key={purpose} value={purpose}>{purpose}</option>)}
            </select>
            <FieldError error={errors.purposeOfVisit} />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="flightNumber" className="block text-sm font-medium text-gray-700">Flight Number</label>
            <input type="text" id="flightNumber" name="flightNumber" value={formData.flightNumber} onChange={handleChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 focus:ring-red-500 focus:border-red-500" />
            <FieldError error={errors.flightNumber} />
          </div>
        </div>
      </div>

      {/* Accommodation Information Section */}
      <div>
        <h3 className="text-lg font-semibold text-gray-700 mb-4 border-b pb-2">Accommodation Information</h3>
        <div className="grid grid-cols-1 gap-6">
          <div>
            <label htmlFor="provinceOfStay" className="block text-sm font-medium text-gray-700">Province of Hotel/Accommodation</label>
            <select id="provinceOfStay" name="provinceOfStay" value={formData.provinceOfStay} onChange={handleChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 focus:ring-red-500 focus:border-red-500">
              <option value="">Select Province</option>
              {thailandProvinces.map(province => <option key={province} value={province}>{province.toUpperCase()}</option>)}
            </select>
            <FieldError error={errors.provinceOfStay} />
          </div>
          <div>
            <label htmlFor="addressInThailand" className="block text-sm font-medium text-gray-700">Address or name of Hotel/Accommodation</label>
            <textarea id="addressInThailand" name="addressInThailand" value={formData.addressInThailand} onChange={handleChange} rows="4" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 focus:ring-red-500 focus:border-red-500" placeholder="Insert the address of the hotel or accommodation where you will be staying in Thailand."></textarea>
            <FieldError error={errors.addressInThailand} />
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="mt-8 pt-5 border-t border-gray-200 flex justify-between items-center">
        <button type="button" onClick={onBack} className="text-sm bg-gray-200 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-300 transition-colors">Previous</button>
        <button type="button" onClick={handleNext} className="text-sm bg-red-800 text-white py-2 px-4 rounded-md hover:bg-red-900 transition-colors">Next</button>
      </div>
    </div>
  );
};

export default Step2_TravelInfo;

