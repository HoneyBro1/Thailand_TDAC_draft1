import React, { useState } from 'react';
import { countries, phoneCodes } from './FormData';

// A helper component for displaying validation errors
const FieldError = ({ error }) => {
  if (!error) return null;
  return <p className="text-xs text-red-500 mt-1">{error}</p>;
};

// Sub-component for each additional traveler's form
const AdditionalTravelerForm = ({ traveler, index, onChange, onRemove, countries, errors }) => {
    return (
        <div className="mt-6 pt-6 border-t border-dashed border-gray-300">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-700">Additional Traveler #{index + 1}</h3>
                <button
                    type="button"
                    onClick={() => onRemove(index)}
                    className="text-sm bg-red-600 text-white py-1 px-3 rounded-md hover:bg-red-700 transition-colors"
                >
                    Remove Traveler
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                <div>
                    <label htmlFor={`firstName_${index}`} className="block text-sm font-medium text-gray-700">Name</label>
                    <input type="text" id={`firstName_${index}`} name="firstName" value={traveler.firstName} onChange={(e) => onChange(index, e)} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 focus:ring-red-500 focus:border-red-500" />
                    <FieldError error={errors?.firstName} />
                </div>
                <div>
                    <label htmlFor={`lastName_${index}`} className="block text-sm font-medium text-gray-700">Last Name</label>
                    <input type="text" id={`lastName_${index}`} name="lastName" value={traveler.lastName} onChange={(e) => onChange(index, e)} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 focus:ring-red-500 focus:border-red-500" />
                    <FieldError error={errors?.lastName} />
                </div>
                 <div>
                    <label htmlFor={`dateOfBirth_${index}`} className="block text-sm font-medium text-gray-700">Birth Date</label>
                    <input type="date" id={`dateOfBirth_${index}`} name="dateOfBirth" value={traveler.dateOfBirth} onChange={(e) => onChange(index, e)} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 focus:ring-red-500 focus:border-red-500" />
                    <FieldError error={errors?.dateOfBirth} />
                </div>
                <div>
                    <label htmlFor={`nationality_${index}`} className="block text-sm font-medium text-gray-700">Nationality</label>
                    <select id={`nationality_${index}`} name="nationality" value={traveler.nationality} onChange={(e) => onChange(index, e)} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 focus:ring-red-500 focus:border-red-500">
                         <option value="">Select one</option>
                         {countries.map(country => <option key={`${country.code}-${index}`} value={country.name}>{country.name}</option>)}
                    </select>
                    <FieldError error={errors?.nationality} />
                </div>
                <div className="md:col-span-2">
                    <label htmlFor={`passportNumber_${index}`} className="block text-sm font-medium text-gray-700">Passport</label>
                    <input type="text" id={`passportNumber_${index}`} name="passportNumber" value={traveler.passportNumber} onChange={(e) => onChange(index, e)} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 focus:ring-red-500 focus:border-red-500" />
                    <FieldError error={errors?.passportNumber} />
                </div>
                <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
                    <div className="flex space-x-4">
                         <button type="button" onClick={() => onChange(index, { target: { name: 'gender', value: 'Male' }})} className={`flex-1 p-3 rounded-md text-center font-semibold transition-colors ${traveler.gender === 'Male' ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}>Male</button>
                         <button type="button" onClick={() => onChange(index, { target: { name: 'gender', value: 'Female' }})} className={`flex-1 p-3 rounded-md text-center font-semibold transition-colors ${traveler.gender === 'Female' ? 'bg-pink-500 text-white shadow-md' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}>Female</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Step1_Prerequisite = ({ formData, updateFormData, onNext }) => {
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    updateFormData({ [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors(prev => ({ ...prev, [e.target.name]: null }));
    }
  };

  const handleGenderChange = (gender) => {
    updateFormData({ gender });
  };

  const handleAddTraveler = () => {
    const newTravelers = [...formData.additionalTravelers, {
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        nationality: '',
        passportNumber: '',
        gender: 'Male',
    }];
    updateFormData({ additionalTravelers: newTravelers });
  };

  const handleRemoveTraveler = (indexToRemove) => {
    const newTravelers = formData.additionalTravelers.filter((_, index) => index !== indexToRemove);
    updateFormData({ additionalTravelers: newTravelers });
  };

  const handleAdditionalTravelerChange = (index, e) => {
      const { name, value } = e.target;
      const newTravelers = [...formData.additionalTravelers];
      newTravelers[index] = { ...newTravelers[index], [name]: value };
      updateFormData({ additionalTravelers: newTravelers });

      // Clear validation error on change
      if(errors.additionalTravelers && errors.additionalTravelers[index] && errors.additionalTravelers[index][name]) {
        const newErrors = {...errors};
        delete newErrors.additionalTravelers[index][name];
        if(Object.keys(newErrors.additionalTravelers[index]).length === 0) {
            delete newErrors.additionalTravelers[index];
        }
        if(Object.keys(newErrors.additionalTravelers).length === 0) {
            delete newErrors.additionalTravelers;
        }
        setErrors(newErrors);
      }
  };

  const validateForm = () => {
    const newErrors = {};
    // Primary traveler validation
    if (!formData.arrivalDate) newErrors.arrivalDate = 'Arrival date is required.';
    if (!formData.passportNumber) newErrors.passportNumber = 'Passport number is required.';
    if (!formData.firstName) newErrors.firstName = 'First name is required.';
    if (!formData.lastName) newErrors.lastName = 'Last name is required.';
    if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of birth is required.';
    if (!formData.nationality) newErrors.nationality = 'Nationality is required.';
    if (!formData.countryOfResidence) newErrors.countryOfResidence = 'Country of residence is required.';
    if (!formData.email) {
        newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Email address is invalid.';
    }
    if (formData.email !== formData.confirmEmail) newErrors.confirmEmail = 'Emails do not match.';
    if (!formData.phoneNumber) newErrors.phoneNumber = 'Phone number is required.';

    // Validate additional travelers
    const additionalErrors = [];
    formData.additionalTravelers.forEach((traveler, index) => {
        const travelerErrors = {};
        if (!traveler.firstName) travelerErrors.firstName = 'First name is required.';
        if (!traveler.lastName) travelerErrors.lastName = 'Last name is required.';
        if (!traveler.dateOfBirth) travelerErrors.dateOfBirth = 'Date of birth is required.';
        if (!traveler.nationality) travelerErrors.nationality = 'Nationality is required.';
        if (!traveler.passportNumber) travelerErrors.passportNumber = 'Passport is required.';
        if (Object.keys(travelerErrors).length > 0) {
            additionalErrors[index] = travelerErrors;
        }
    });

    if (additionalErrors.length > 0) {
        newErrors.additionalTravelers = additionalErrors;
    }

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
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Primary Traveler Information</h2>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4" noValidate>
        {/* Primary traveler fields... */}
        <div>
            <label htmlFor="arrivalDate" className="block text-sm font-medium text-gray-700">Arrival Date</label>
            <input type="date" id="arrivalDate" name="arrivalDate" value={formData.arrivalDate} onChange={handleChange} required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 focus:ring-red-500 focus:border-red-500" />
            <FieldError error={errors.arrivalDate} />
        </div>
        <div>
            <label htmlFor="passportNumber" className="block text-sm font-medium text-gray-700">Passport</label>
            <input type="text" id="passportNumber" name="passportNumber" value={formData.passportNumber} onChange={handleChange} required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 focus:ring-red-500 focus:border-red-500" />
            <FieldError error={errors.passportNumber} />
        </div>
        <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 focus:ring-red-500 focus:border-red-500" />
            <FieldError error={errors.firstName} />
        </div>
        <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
            <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 focus:ring-red-500 focus:border-red-500" />
            <FieldError error={errors.lastName} />
        </div>
        <div>
            <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700">Birth Date</label>
            <input type="date" id="dateOfBirth" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 focus:ring-red-500 focus:border-red-500" />
            <FieldError error={errors.dateOfBirth} />
        </div>
        <div>
            <label htmlFor="nationality" className="block text-sm font-medium text-gray-700">Nationality</label>
             <select id="nationality" name="nationality" value={formData.nationality} onChange={handleChange} required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 focus:ring-red-500 focus:border-red-500">
                <option value="">Select Nationality</option>
                {countries.map(country => <option key={country.code} value={country.name}>{`${country.code} : ${country.name.toUpperCase()}`}</option>)}
            </select>
            <FieldError error={errors.nationality} />
        </div>
        <div className="md:col-span-2">
            <label htmlFor="countryOfResidence" className="block text-sm font-medium text-gray-700">Country/Territory of Residence</label>
             <select id="countryOfResidence" name="countryOfResidence" value={formData.countryOfResidence} onChange={handleChange} required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 focus:ring-red-500 focus:border-red-500">
                <option value="">Select Country</option>
                 {countries.map(country => <option key={country.code} value={country.name}>{`${country.code} : ${country.name.toUpperCase()}`}</option>)}
            </select>
            <FieldError error={errors.countryOfResidence} />
        </div>
        <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 focus:ring-red-500 focus:border-red-500" />
            <FieldError error={errors.email} />
        </div>
        <div>
            <label htmlFor="confirmEmail" className="block text-sm font-medium text-gray-700">Confirm Email</label>
            <input type="email" id="confirmEmail" name="confirmEmail" value={formData.confirmEmail} onChange={handleChange} required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 focus:ring-red-500 focus:border-red-500" />
            <FieldError error={errors.confirmEmail} />
        </div>
        <div>
            <label htmlFor="phoneCode" className="block text-sm font-medium text-gray-700">Phone Code</label>
             <select id="phoneCode" name="phoneCode" value={formData.phoneCode} onChange={handleChange} required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 focus:ring-red-500 focus:border-red-500">
                {phoneCodes.map(pc => <option key={pc.name} value={pc.code}>{pc.name}</option>)}
            </select>
        </div>
        <div>
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone</label>
            <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 focus:ring-red-500 focus:border-red-500" />
            <FieldError error={errors.phoneNumber} />
        </div>
        <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
            <div className="flex space-x-4">
                <button type="button" onClick={() => handleGenderChange('Male')} className={`flex-1 p-3 rounded-md text-center font-semibold transition-colors ${formData.gender === 'Male' ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}>Male</button>
                <button type="button" onClick={() => handleGenderChange('Female')} className={`flex-1 p-3 rounded-md text-center font-semibold transition-colors ${formData.gender === 'Female' ? 'bg-pink-500 text-white shadow-md' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}>Female</button>
            </div>
        </div>
      </form>

      {/* Render additional traveler forms */}
      {formData.additionalTravelers.map((traveler, index) => (
          <AdditionalTravelerForm
              key={index}
              index={index}
              traveler={traveler}
              onChange={handleAdditionalTravelerChange}
              onRemove={handleRemoveTraveler}
              countries={countries}
              errors={errors.additionalTravelers?.[index] || {}}
          />
      ))}

       <div className="mt-8 pt-5 border-t border-gray-200 flex justify-between items-center">
            <button
                type="button"
                onClick={handleAddTraveler}
                className="text-sm font-semibold bg-red-800 text-white py-2 px-4 rounded-md hover:bg-red-900 transition-colors"
            >
                Add Other Traveler
            </button>
            <div>
                 <button type="button" className="text-sm bg-gray-200 text-gray-700 py-2 px-4 rounded-md mr-4 cursor-not-allowed" disabled>Previous</button>
                 <button type="button" onClick={handleNext} className="text-sm bg-red-800 text-white py-2 px-4 rounded-md hover:bg-red-900 transition-colors">Next</button>
            </div>
       </div>
    </div>
  );
};

export default Step1_Prerequisite;

