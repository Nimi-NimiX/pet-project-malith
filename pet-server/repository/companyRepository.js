const Company = require('../models/companyModel');

const createCompany = async (companyData) => {
  try {
    const company = await Company.create(companyData);
    return company;
  } catch (error) {
    throw error;
  }
};

const CompanyRrepository = { createCompany };
module.exports = CompanyRrepository;
