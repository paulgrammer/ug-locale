import { districts } from "./districts.js";
import { counties } from "./counties.js";
import { subcounties } from "./subcounties.js";
import { parishes } from "./parishes.js";
import { villages } from "./villages.js";

class UgaLocale {
  getDistricts() {
    return districts;
  }
  getCounties(districtId) {
    return counties.filter((c) => c.district === districtId);
  }
  getSubCounties(countyId) {
    return subcounties.filter((sc) => sc.county === countyId);
  }
  getParishes(subCountyId) {
    return parishes.filter((p) => p.subcounty === subCountyId);
  }
  getVillages(parishId) {
    return villages.filter((v) => v.parish === parishId);
  }
}

export { UgaLocale };
