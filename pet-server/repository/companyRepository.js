const Company = require('../models/companyModel');

const CompanyRrepository = {
  createCompany: async (companyData) => {
    try {
      const company = await Company.create(companyData);
      return company;
    } catch (error) {
      throw error;
    }
  },
};

module.exports = CompanyRrepository;
