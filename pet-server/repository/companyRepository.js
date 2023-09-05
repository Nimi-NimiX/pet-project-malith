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

  updateCompanyProfile: async (companyId, updatedCompanyProfile) => {
    try {
      // Find the company by ID
      const company = await Company.findByPk(companyId, {
        include: CompanyPaySlipInfo, // Include the associated CompanyPaySlipInfo
      });

      if (!company) {
        throw new Error('Company not found');
      }
      // Update company profile
      if (updatedCompanyProfile.companyName)
        company.companyName = updatedCompanyProfile.companyName;
      if (updatedCompanyProfile.companyEmail)
        company.companyEmail = updatedCompanyProfile.companyEmail;
      if (updatedCompanyProfile.contactNumber)
        company.contactNumber = updatedCompanyProfile.contactNumber;
      if (updatedCompanyProfile.field)
        company.field = updatedCompanyProfile.field;
      if (updatedCompanyProfile.addressLine1)
        company.addressLine1 = updatedCompanyProfile.addressLine1;
      if (updatedCompanyProfile.addressLine2)
        company.addressLine2 = updatedCompanyProfile.addressLine2;
      if (updatedCompanyProfile.city) company.city = updatedCompanyProfile.city;
      if (updatedCompanyProfile.country)
        company.country = updatedCompanyProfile.country;

      // Update associated payslip information if it exists
      const payslipInfo = company.companyPaySlipInfo;
      if (payslipInfo) {
        if (updatedCompanyProfile.currency) {
          payslipInfo.currency = updatedCompanyProfile.currency;
        }
        if (updatedCompanyProfile.payday) {
          payslipInfo.payday = updatedCompanyProfile.payday;
        }
        // Save the updated payslip info
        await payslipInfo.save();
      }

      // Save the updated company data
      await company.save();

      return company;
    } catch (error) {
      throw new Error(`Company profile update failed: ${error.message}`);
    }
  },
};

module.exports = CompanyRrepository;
