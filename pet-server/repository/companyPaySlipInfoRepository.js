const CompanyPaySlipInfo = require('../models/companyPaySlipInfoModel');

const createCompanyPaySlipInfo = async (paySlipData) => {
  try {
    const companyPaySlipInfo = await CompanyPaySlipInfo.create(paySlipData);
    return companyPaySlipInfo;
  } catch (error) {
    return error;
  }
};

const CompanyPaySlipRrepository = { createCompanyPaySlipInfo };
module.exports = CompanyPaySlipRrepository;
