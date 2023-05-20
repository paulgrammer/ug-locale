# UG-Locale

UG-Locale is a simple utility library that provides structured data about the administrative divisions in Uganda. It contains information about districts, counties, sub-counties, parishes, and villages. The data used in this library was collected from the official [Ugandan Passport website](https://passports.go.ug).

## Installation

To install the `ug-locale` library, use npm:

```bash
npm install ug-locale
```

## Usage

First, import the `UgaLocale` from `ug-locale`.

```javascript
const UgaLocale = require("ug-locale")();
```

Then, you can use the provided methods to access information about different administrative divisions.

```javascript
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

## Available Methods

- `districts()`: Returns an array of all districts.
- `counties(districtId)`: Returns an array of all counties in the specified district.
- `subCounties(countyId)`: Returns an array of all sub-counties in the specified county.
- `parishes(subCountyId)`: Returns an array of all parishes in the specified sub-county.
- `villages(parishId)`: Returns an array of all villages in the specified parish.

Each of these methods returns an array of objects, where each object has an `id` and `name`.

## Contributing

If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.

## License

The code in this project is licensed under the MIT license. For more information, refer to the [LICENSE](LICENSE) file.
