const Company = require('../models/companyModel');
const CompanyPaySlipInfo = require('../models/companyPaySlipInfoModel');

const CompanyRrepository = {
  createCompany: async (companyData) => {
    try {
      const company = await Company.create(companyData);
      return company;
    } catch (error) {
      throw error;
    }
  },
  findById: async (companyId) => {
    const company = await Company.findByPk(companyId, {
      include: CompanyPaySlipInfo, // Include the associated CompanyPaySlipInfo
    });

    if (!company) {
      throw new Error('Company not found');
    }

    return company;
  },

  findByUserId: async (userId) => {
    try {
      const company = await Company.findOne({ where: { userId } });
      return company;
    } catch (error) {
      throw error;
    }
  },

  updateCompanyProfile: async (updatedCompanyProfile) => {
    try {
      // Save the updated user data
      await updatedCompanyProfile.save();
      return updatedCompanyProfile;
    } catch (error) {
      throw error;
    }
  },
};

module.exports = CompanyRrepository;
