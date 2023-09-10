const UserRrepository = require('../repository/userRepository');
const Validation = require('../utils/validation');
const CompanyRepository = require('../repository/companyRepository');
const CompanyPaySlipRrepository = require('../repository/companyPaySlipInfoRepository');

const ProfileService = {
  getUserProfile: async (userId) => {
    try {
      const user = await UserRrepository.findById(userId);

      if (!user) {
        throw new Error('User not found');
      }

      return user;
    } catch (error) {
      throw new Error(`Failed to fetch user profile: ${error.message}`);
    }
  },

  updateUserProfile: async (userId, updatedProfile) => {
    try {
      const { error } = Validation.validateUserProfileUpdate(updatedProfile);
      if (error) {
        throw new Error(error.details[0].message);
      }

      const user = await UserRrepository.findById(userId);

      if (!user) {
        throw new Error('User not found');
      }

      // Update user-specific fields
      if (updatedProfile.username) user.username = updatedProfile.username;
      if (updatedProfile.email) user.email = updatedProfile.email;
      if (updatedProfile.mobileNumber)
        user.mobileNumber = updatedProfile.mobileNumber;

      // Save the updated user profile using the repository
      const result = await UserRrepository.updateUserProfile(user);

      return result;
    } catch (error) {
      throw new Error(`Profile update failed: ${error.message}`);
    }
  },
  getCompanyProfile: async (userId) => {
    try {
      const company = await CompanyRepository.findByUserId(userId);
      return company;
    } catch (error) {
      throw new Error(`Failed to fetch company profile: ${error.message}`);
    }
  },
  getPaySlipProfile: async (companyId) => {
    try {
      const companyPaySlip = await CompanyPaySlipRrepository.findByCompanyId(
        companyId
      );

      return companyPaySlip;
    } catch (error) {
      throw new Error(`Failed to fetch company profile: ${error.message}`);
    }
  },

  updateCompanyProfile: async (userId, updatedComProfile) => {
    try {
      const { error } =
        Validation.validateCompanyProfileUpdate(updatedComProfile);
      if (error) {
        throw new Error(error.details[0].message);
      }

      const company = await CompanyRepository.findByUserId(userId);

      if (!company) {
        throw new Error('company  not found');
      }

      // Update company-specific fields
      if (updatedComProfile.companyName)
        company.companyName = updatedComProfile.companyName;
      if (updatedComProfile.companyEmail)
        company.companyEmail = updatedComProfile.companyEmail;
      if (updatedComProfile.contactNumber)
        company.contactNumber = updatedComProfile.contactNumber;
      if (updatedComProfile.field) company.field = updatedComProfile.field;
      if (updatedComProfile.addressLine1)
        company.addressLine1 = updatedComProfile.addressLine1;
      if (updatedComProfile.addressLine2)
        company.addressLine2 = updatedComProfile.addressLine2;
      if (updatedComProfile.mobileNumber)
        company.mobileNumber = updatedComProfile.mobileNumber;
      if (updatedComProfile.city) company.city = updatedComProfile.city;
      if (updatedComProfile.country)
        company.country = updatedComProfile.country;

      const updatedCompany = await CompanyRepository.updateCompanyProfile(
        company
      );

      const companyPaySlip = await CompanyPaySlipRrepository.findByCompanyId(
        company.id
      );

      if (!companyPaySlip) {
        throw new Error('Pay slip details not found');
      }

      if (updatedComProfile.currency)
        companyPaySlip.currency = updatedComProfile.currency;
      if (updatedComProfile.payday)
        companyPaySlip.payday = updatedComProfile.payday;

      const updatedPaySlip =
        await CompanyPaySlipRrepository.updatePaySlipDetails(companyPaySlip);

      return {
        company: updatedCompany,
        paySlip: updatedPaySlip,
      };
    } catch (error) {
      throw new Error(`Company profile update failed: ${error.message}`);
    }
  },
};

module.exports = ProfileService;
