const UserRrepository = require('../repository/userRepository');
const Validation = require('../utils/validation');
const CompanyRepository = require('../repository/companyRepository');

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
      // Validate and sanitize input data
      const { error } = Validation.validateUserProfileUpdate(updatedProfile);
      if (error) {
        throw new Error(error.details[0].message);
      }

      const user = await UserRrepository.findById(userId);

      if (!user) {
        throw new Error('User not found');
      }

      // Update user profile
      const result = await UserRrepository.updateUserProfile(
        userId,
        updatedProfile
      );

      return result;
    } catch (error) {
      throw new Error(`Profile update failed: ${error.message}`);
    }
  },
  getCompanyProfile: async (companyId) => {
    try {
      const company = await CompanyRepository.findById(companyId);
      return company;
    } catch (error) {
      throw new Error(`Failed to fetch company profile: ${error.message}`);
    }
  },

  updateCompanyProfile: async (companyId, updatedProfile) => {
    try {
      // Validate and sanitize input data (use CompanyValidation)
      const { error } = Validation.validateCompanyProfileUpdate(updatedProfile);
      if (error) {
        throw new Error(error.details[0].message);
      }

      const company = await CompanyRepository.findById(companyId);

      // Update company profile using the repository method
      const result = await CompanyRepository.updateCompanyProfile(
        company,
        updatedProfile
      );

      return result;
    } catch (error) {
      throw new Error(`Company profile update failed: ${error.message}`);
    }
  },
};

module.exports = ProfileService;
