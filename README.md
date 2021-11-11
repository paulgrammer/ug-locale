# ug-locale

> Data was collected from https://passports.go.ug

```javascript
const UgaLocale = require("ug-locale")();

const district = UgaLocale.districts().find((d) => d.id === "42");
console.log("district", district);

const county = UgaLocale.counties(district.id);
console.log("county", county);

const subCounty = UgaLocale.subCounties(county[3].id);
console.log("subCounty", subCounty);

const parish = UgaLocale.parishes(subCounty[0].id);
console.log("parish", parish);

const village = UgaLocale.villages(parish[0].id);
console.log("village", village);
```
