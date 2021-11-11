const districts = require("./districts.json");
const counties = require("./counties.json");
const subCounties = require("./subcounties.json");
const parishes = require("./parishes.json");
const villages = require("./villages.json");

module.exports = () => {
  return {
    districts: (id) => {
      return districts;
    },

    counties: (district) => {
      return counties.filter((c) => c.district === district);
    },

    subCounties: (county) => {
      return subCounties.filter((c) => c.county === county);
    },

    parishes: (subCounty) => {
      return parishes.filter((c) => c.subcounty === subCounty);
    },

    villages: (parish) => {
      return villages.filter((c) => c.parish === parish);
    },
  };
};
