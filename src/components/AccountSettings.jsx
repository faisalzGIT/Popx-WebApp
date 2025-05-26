import React, { useState } from 'react';
import { Camera, Edit3, Trash2, Save, X, User, Phone, Mail, Lock, Building, Shield } from 'lucide-react';

const AccountSettings = () => {
    // Get data from localStorage on component mount
    
    const [userData, setUserData] = useState(() => {
      const saved = localStorage.getItem('userData');
      return saved ? JSON.parse(saved) : {
        fullName: '',
        phoneNumber: '',
        email: '',
        password: '',
        companyName: '',
        isAgency: true,
        profileImage: null,
        bio: ''
      };
    });
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState(userData);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setEditData(prev => ({
          ...prev,
          profileImage: e.target.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setEditData(prev => ({
      ...prev,
      profileImage: null
    }));
  };

  const handleInputChange = (field, value) => {
    setEditData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    setUserData(editData);
    localStorage.setItem('userData', JSON.stringify(editData));
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditData(userData);
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-2 sm:p-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 mb-4 sm:mb-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-6 gap-4">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Account Settings</h1>
            {isEditing ?  (
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full sm:w-auto">
                <button
                  onClick={handleCancel}
                  className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <X size={16} />
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="flex items-center justify-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  <Save size={16} />
                  Save Changes
                </button>
              </div>
            ): (
              <button
                onClick={() => setIsEditing(true)}
                className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                <Edit3 size={16} />
                Edit Profile
              </button>
            )}
          </div>

          {/* Profile Section */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
            {/* Profile Image */}
            <div className="relative flex-shrink-0">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                {(isEditing ? editData.profileImage : userData.profileImage) ? (
                  <img
                    src={isEditing ? editData.profileImage : userData.profileImage}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <User size={28} className="text-gray-400 sm:w-8 sm:h-8" />
                )}
              </div>
              
              {isEditing && (
                <div className="absolute -bottom-2 -right-2 flex gap-1">
                  <label className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-purple-700 transition-colors">
                    <Camera size={14} className="text-white" />
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </label>
                  {editData.profileImage && (
                    <button
                      onClick={removeImage}
                      className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                    >
                      <Trash2 size={14} className="text-white" />
                    </button>
                  )}
                </div>
              )}
            </div>

            {/* Basic Info */}
            <div className="flex-1 text-center sm:text-left w-full">
              <div className="mb-3 sm:mb-4">
                {isEditing ? (
                  <input
                    type="text"
                    value={editData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    className="text-lg sm:text-xl font-semibold text-gray-900 bg-transparent border-b-2 border-purple-200 focus:border-purple-500 outline-none w-full text-center sm:text-left"
                  />
                ) : (
                  <h2 className="text-lg sm:text-xl font-semibold text-gray-900">{userData.fullName}</h2>
                )}
              </div>
              
              <div className="mb-3 sm:mb-4">
                {isEditing ? (
                  <input
                    type="email"
                    value={editData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="text-gray-600 bg-transparent border-b border-gray-200 focus:border-purple-500 outline-none w-full text-center sm:text-left"
                  />
                ) : (
                  <p className="text-gray-600 break-all">{userData.email}</p>
                )}
              </div>

              {/* Account Type Badge */}
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <span className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${
                  (isEditing ? editData.isAgency : userData.isAgency) 
                    ? 'bg-blue-100 text-blue-800' 
                    : 'bg-green-100 text-green-800'
                }`}>
                  {(isEditing ? editData.isAgency : userData.isAgency) ? 'Agency Account' : 'Individual Account'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bio Section */}
        <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 mb-4 sm:mb-6">
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">About</h3>
          {isEditing ? (
            <textarea
              value={editData.bio}
              onChange={(e) => handleInputChange('bio', e.target.value)}
              placeholder="Tell us about yourself..."
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none resize-none"
              rows={4}
            />
          ) : (
            <p className="text-gray-600 leading-relaxed">{userData.bio ? userData.bio : "No bio added!!"}</p>
          )}
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 mb-4 sm:mb-6">
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4 sm:mb-6">Contact Information</h3>
          
          <div className="space-y-4 sm:space-y-4">
            {/* Phone */}
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone size={16} className="text-purple-600 sm:w-[18px] sm:h-[18px]" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs sm:text-sm text-gray-500">Phone Number</p>
                {isEditing ? (
                  <input
                    type="tel"
                    value={editData.phoneNumber}
                    onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                    className="text-gray-900 bg-transparent border-b border-gray-200 focus:border-purple-500 outline-none w-full text-sm sm:text-base"
                  />
                ) : (
                  <p className="text-gray-900 text-sm sm:text-base break-all">{userData.phoneNumber}</p>
                )}
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail size={16} className="text-purple-600 sm:w-[18px] sm:h-[18px]" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs sm:text-sm text-gray-500">Email Address</p>
                {isEditing ? (
                  <input
                    type="email"
                    value={editData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="text-gray-900 bg-transparent border-b border-gray-200 focus:border-purple-500 outline-none w-full text-sm sm:text-base"
                  />
                ) : (
                  <p className="text-gray-900 text-sm sm:text-base break-all">{userData.email}</p>
                )}
              </div>
            </div>

            {/* Company */}
            {((isEditing ? editData.companyName : userData.companyName) && (
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Building size={16} className="text-purple-600 sm:w-[18px] sm:h-[18px]" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs sm:text-sm text-gray-500">Company</p>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editData.companyName}
                      onChange={(e) => handleInputChange('companyName', e.target.value)}
                      className="text-gray-900 bg-transparent border-b border-gray-200 focus:border-purple-500 outline-none w-full text-sm sm:text-base"
                    />
                  ) : (
                    <p className="text-gray-900 text-sm sm:text-base break-all">{userData.companyName}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Account Type Settings */}
        {isEditing && (
          <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Account Type</h3>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="accountType"
                  checked={editData.isAgency === true}
                  onChange={() => handleInputChange('isAgency', true)}
                  className="sr-only"
                />
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                  editData.isAgency === true 
                    ? 'border-purple-600 bg-purple-600' 
                    : 'border-gray-300'
                }`}>
                  {editData.isAgency === true && (
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  )}
                </div>
                <span className="ml-2 text-sm sm:text-base text-gray-700">Agency Account</span>
              </label>
              
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="accountType"
                  checked={editData.isAgency === false}
                  onChange={() => handleInputChange('isAgency', false)}
                  className="sr-only"
                />
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                  editData.isAgency === false 
                    ? 'border-purple-600 bg-purple-600' 
                    : 'border-gray-300'
                }`}>
                  {editData.isAgency === false && (
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  )}
                </div>
                <span className="ml-2 text-sm sm:text-base text-gray-700">Individual Account</span>
              </label>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AccountSettings;