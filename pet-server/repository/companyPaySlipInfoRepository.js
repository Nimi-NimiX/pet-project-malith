const CompanyPaySlipInfo = require('../models/companyPaySlipInfoModel');

const CompanyPaySlipRrepository = {
  createCompanyPaySlipInfo: async (paySlipData) => {
    try {
      const companyPaySlipInfo = await CompanyPaySlipInfo.create(paySlipData);
      return companyPaySlipInfo;
    } catch (error) {
      return error;
    }
  },
  findByUserId: async (userId) => {
    try {
      const company = await Company.findOne({ where: { userId } });
      return company;
    } catch (error) {
      throw error;
    }
  },
  findByCompanyId: async (companyId) => {
    try {
      console.log(`pay slip companyid: ${companyId}`);
      const companyPaySlip = await CompanyPaySlipInfo.findOne({
        where: { companyId },
      });
      console.log(`pay slip ${companyPaySlip}`);
      return companyPaySlip;
    } catch (error) {
      throw error;
    }
  },
  updatePaySlipDetails: async (updatedPaySlipDetails) => {
    try {
      // Save the updated user data
      await updatedPaySlipDetails.save();
      return updatedPaySlipDetails;
    } catch (error) {
      throw error;
    }
  },
};

module.exports = CompanyPaySlipRrepository;
