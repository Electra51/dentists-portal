/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Briefcase,
  Award,
  Clock,
  FileText,
  Shield,
  X,
  Loader2,
} from "lucide-react";
import toast from "react-hot-toast";
import {
  useGetUserProfileQuery,
  useUpdateUserProfileMutation,
  useUploadUserImageMutation,
} from "../../redux/api/authApi";
import InfoItem from "./InfoItem";
import SelectField from "../../Components/SelectField";
import InputField from "../../Components/InputField";
import ProfileModal from "../../Components/ProfileModal";
import PrimaryButton from "../../Components/PrimaryButton";

export default function Profile() {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [formData, setFormData] = useState({});

  const {
    data: profileData,
    isLoading,
    isError,
    refetch,
  } = useGetUserProfileQuery();

  const [updateProfile, { isLoading: isUpdating }] =
    useUpdateUserProfileMutation();
  const [uploadImage, { isLoading: isUploadingImage }] =
    useUploadUserImageMutation();
  const currentUser = profileData?.user;

  const userType =
    currentUser?.role === 0
      ? "patient"
      : currentUser?.role === 1
      ? "dentist"
      : "admin";

  useEffect(() => {
    if (currentUser) {
      setFormData(currentUser);
    }
  }, [currentUser]);

  const handleEditClick = () => {
    setFormData(currentUser);
    setIsEditModalOpen(true);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSaveProfile = async (imageFile) => {
    try {
      let updatedFormData = { ...formData };

      if (imageFile) {
        const imageFormData = new FormData();
        imageFormData.append("profileImage", imageFile);

        const imageResult = await uploadImage({
          email: currentUser.email,
          formData: imageFormData,
        }).unwrap();

        console.log("Image uploaded:", imageResult);

        if (imageResult?.user?.profileImage) {
          updatedFormData = {
            ...updatedFormData,
            profileImage: imageResult.user.profileImage,
          };
        }
      }

      const res = await updateProfile(updatedFormData).unwrap();
      toast.success("Profile updated successfully!");
      setIsEditModalOpen(false);
      refetch();
    } catch (error) {
      console.error(error);
      toast.error(error?.data?.message || "Failed to update profile");
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="w-8 h-8 animate-spin text-cyan-500" />
      </div>
    );
  }

  if (isError || !currentUser) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-red-500">
          Failed to load profile. Please try again.
        </p>
      </div>
    );
  }
  const calculateAge = (dob) => {
    if (!dob) return null;
    const today = new Date();
    const birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age;
  };
  console.log("currentUser", currentUser);

  return (
    <div className="">
      <div className="max-w-7xl mx-auto mt-7">
        <div className="bg-white rounded-xl shadow-sm p-8 mb-6">
          <div className="flex items-start gap-6">
            <div className="w-32 h-32 bg-gradient-to-r from-secondary to-info hover:opacity-90 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-lg overflow-hidden">
              {currentUser.profileImage ? (
                <img
                  src={currentUser.profileImage}
                  alt={currentUser.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                currentUser.name?.charAt(0) || "U"
              )}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl font-bold text-gray-900">
                  {currentUser.name}
                </h1>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    userType === "patient"
                      ? "bg-blue-50 text-[#5ecdc9]"
                      : userType === "dentist"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-purple-100 text-purple-700"
                  }`}>
                  {userType.toUpperCase()}
                </span>
              </div>
              <div className="flex flex-col gap-2 text-gray-600">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>{currentUser.email}</span>
                </div>
                {currentUser.phone && (
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span>{currentUser.phone}</span>
                  </div>
                )}
                {currentUser.address && (
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{currentUser.address}</span>
                  </div>
                )}
              </div>
            </div>

            <PrimaryButton onClick={handleEditClick}>
              Edit Profile
            </PrimaryButton>
          </div>
        </div>

        {userType === "patient" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <User className="w-5 h-5 text-[#5ecdc9]" />
                Personal Information
              </h2>
              <div className="space-y-3">
                <InfoItem
                  label="Date of Birth"
                  value={
                    currentUser.dateOfBirth
                      ? new Date(currentUser.dateOfBirth).toLocaleDateString(
                          "en-GB",
                          { day: "numeric", month: "long", year: "numeric" }
                        )
                      : "Not provided"
                  }
                />

                <InfoItem
                  label="Date of Birth"
                  value={`${calculateAge(currentUser.dateOfBirth)} years`}
                />
                <InfoItem
                  label="Blood Group"
                  value={currentUser.bloodGroup || "Not provided"}
                />
                <InfoItem
                  label="Emergency Contact"
                  value={currentUser.emergencyContact || "Not provided"}
                />
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#5ecdc9]" />
                Medical History
              </h2>
              <div className="space-y-3">
                <InfoItem
                  label="Allergies"
                  value={currentUser.allergies || "None"}
                />
                <InfoItem
                  label="Chronic Conditions"
                  value={currentUser.chronicConditions || "None"}
                />
                <InfoItem
                  label="Current Medications"
                  value={currentUser.currentMedications || "None"}
                />
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 md:col-span-2 mt-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-[#5ecdc9]" />
                Appointment History
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-1">Last Visit</p>
                  <p className="text-lg font-semibold text-gray-900">
                    10 November, 2025
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-1">Next Appointment</p>
                  <p className="text-lg font-semibold text-[#5ecdc9]">
                    25 November, 2025
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-1">Total Visits</p>
                  <p className="text-lg font-semibold text-gray-900">12</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {userType === "dentist" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-cyan-500" />
                Professional Information
              </h2>
              <div className="space-y-3">
                <InfoItem
                  label="Specialization"
                  value={currentUser.specialization || "Not provided"}
                />
                <InfoItem
                  label="BMDC Number"
                  value={currentUser.bmdcNumber || "Not provided"}
                />
                <InfoItem
                  label="Experience"
                  value={currentUser.experience || "Not provided"}
                />
                <InfoItem
                  label="Qualification"
                  value={currentUser.qualification || "Not provided"}
                />
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-cyan-500" />
                Work Details
              </h2>
              <div className="space-y-3">
                <InfoItem
                  label="Department"
                  value={currentUser.department || "Not provided"}
                />
                <InfoItem
                  label="Schedule"
                  value={currentUser.schedule || "Not provided"}
                />
              </div>
            </div>
          </div>
        )}

        {userType === "admin" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-cyan-500" />
                Role Information
              </h2>
              <div className="space-y-3">
                <InfoItem label="Role" value="System Administrator" />
                <InfoItem
                  label="Employee ID"
                  value={currentUser.employeeId || "Not provided"}
                />
                <InfoItem
                  label="Department"
                  value={currentUser.department || "Not provided"}
                />
                <InfoItem
                  label="Join Date"
                  value={
                    currentUser.joinDate
                      ? new Date(currentUser.joinDate).toLocaleDateString(
                          "en-GB",
                          { day: "numeric", month: "long", year: "numeric" }
                        )
                      : "Not provided"
                  }
                />
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-cyan-500" />
                Access Information
              </h2>
              <div className="space-y-3">
                <InfoItem
                  label="Permissions"
                  value={currentUser.permissions || "Standard"}
                />
                <InfoItem
                  label="Access Level"
                  value={currentUser.accessLevel || "Level 1"}
                />
                <InfoItem
                  label="Last Login"
                  value={
                    currentUser.lastLogin
                      ? new Date(currentUser.lastLogin).toLocaleString()
                      : "N/A"
                  }
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {isEditModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Edit Profile</h2>
              <button
                onClick={() => setIsEditModalOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6">
              <div className="space-y-5">
                <InputField
                  label="Full Name"
                  name="name"
                  value={formData.name || ""}
                  onChange={handleInputChange}
                  icon={<User className="w-5 h-5" />}
                />
                <InputField
                  label="Phone Number"
                  name="phone"
                  value={formData.phone || ""}
                  onChange={handleInputChange}
                  icon={<Phone className="w-5 h-5" />}
                />
                <InputField
                  label="Address"
                  name="address"
                  value={formData.address || ""}
                  onChange={handleInputChange}
                  icon={<MapPin className="w-5 h-5" />}
                  textarea
                />

                {userType === "patient" && (
                  <>
                    <InputField
                      label="Date of Birth"
                      name="dateOfBirth"
                      type="date"
                      value={
                        formData.dateOfBirth
                          ? formData.dateOfBirth.split("T")[0]
                          : ""
                      }
                      onChange={handleInputChange}
                      icon={<Calendar className="w-5 h-5" />}
                    />
                    <SelectField
                      label="Blood Group"
                      name="bloodGroup"
                      value={formData.bloodGroup || ""}
                      onChange={handleInputChange}
                      options={[
                        "A+",
                        "A-",
                        "B+",
                        "B-",
                        "AB+",
                        "AB-",
                        "O+",
                        "O-",
                      ]}
                    />
                    <InputField
                      label="Emergency Contact"
                      name="emergencyContact"
                      value={formData.emergencyContact || ""}
                      onChange={handleInputChange}
                      icon={<Phone className="w-5 h-5" />}
                    />
                    <InputField
                      label="Allergies"
                      name="allergies"
                      placeholder="e.g., Penicillin, Latex"
                      value={formData.allergies || ""}
                      onChange={handleInputChange}
                      textarea
                    />
                    <InputField
                      label="Chronic Conditions"
                      name="chronicConditions"
                      placeholder="e.g., Diabetes, Hypertension"
                      value={formData.chronicConditions || ""}
                      onChange={handleInputChange}
                      textarea
                    />
                    <InputField
                      label="Current Medications"
                      name="currentMedications"
                      placeholder="e.g., Metformin 500mg"
                      value={formData.currentMedications || ""}
                      onChange={handleInputChange}
                      textarea
                    />
                  </>
                )}

                {userType === "dentist" && (
                  <>
                    <InputField
                      label="Specialization"
                      name="specialization"
                      value={formData.specialization || ""}
                      onChange={handleInputChange}
                    />
                    <InputField
                      label="BMDC Number"
                      name="bmdcNumber"
                      value={formData.bmdcNumber || ""}
                      onChange={handleInputChange}
                    />
                    <InputField
                      label="Experience"
                      name="experience"
                      placeholder="e.g., 5 Years"
                      value={formData.experience || ""}
                      onChange={handleInputChange}
                    />
                    <InputField
                      label="Qualification"
                      name="qualification"
                      placeholder="e.g., BDS, MDS"
                      value={formData.qualification || ""}
                      onChange={handleInputChange}
                    />
                    <InputField
                      label="Department"
                      name="department"
                      value={formData.department || ""}
                      onChange={handleInputChange}
                    />
                    <InputField
                      label="Schedule"
                      name="schedule"
                      placeholder="e.g., Sat-Thu: 9 AM - 5 PM"
                      value={formData.schedule || ""}
                      onChange={handleInputChange}
                    />
                  </>
                )}

                {userType === "admin" && (
                  <>
                    <InputField
                      label="Employee ID"
                      name="employeeId"
                      value={formData.employeeId || ""}
                      onChange={handleInputChange}
                    />
                    <InputField
                      label="Department"
                      name="department"
                      value={formData.department || ""}
                      onChange={handleInputChange}
                    />
                    <InputField
                      label="Join Date"
                      name="joinDate"
                      type="date"
                      value={
                        formData.joinDate ? formData.joinDate.split("T")[0] : ""
                      }
                      onChange={handleInputChange}
                      icon={<Calendar className="w-5 h-5" />}
                    />
                  </>
                )}
              </div>

              <div className="flex gap-3 mt-6">
                <button
                  onClick={() => setIsEditModalOpen(false)}
                  className="flex-1 px-4 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium transition-colors">
                  Cancel
                </button>
                <button
                  onClick={handleSaveProfile}
                  disabled={isUpdating}
                  className="flex-1 px-4 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 font-medium transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
                  {isUpdating ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Saving...
                    </>
                  ) : (
                    "Save Changes"
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {isEditModalOpen && (
        <ProfileModal
          setIsEditModalOpen={setIsEditModalOpen}
          isEditModalOpen={isEditModalOpen}
          formData={formData}
          handleInputChange={handleInputChange}
          userType={userType}
          handleSaveProfile={handleSaveProfile}
          isUpdating={isUpdating || isUploadingImage}
        />
      )}
    </div>
  );
}
