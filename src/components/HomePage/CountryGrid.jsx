import React from 'react';
import { Link } from 'react-router-dom';

const CountryGrid = () => {
  // Your original list of countries is great, no changes needed here.
  const countries = [
    { name: "United States", code: "US" }, { name: "Canada", code: "CA" },
    { name: "United Kingdom", code: "GB" }, { name: "Netherlands", code: "NL" },
    { name: "Afghanistan", code: "AF" }, { name: "Albania", code: "AL" },
    { name: "Algeria", code: "DZ" }, { name: "Argentina", code: "AR" },
    { name: "Armenia", code: "AM" }, { name: "Australia", code: "AU" },
    { name: "Austria", code: "AT" }, { name: "Azerbaijan", code: "AZ" },
    { name: "Bahamas", code: "BS" }, { name: "Bahrain", code: "BH" },
    { name: "Bangladesh", code: "BD" }, { name: "Barbados", code: "BB" },
    { name: "Belarus", code: "BY" }, { name: "Belgium", code: "BE" },
    { name: "Belize", code: "BZ" }, { name: "Benin", code: "BJ" },
    { name: "Bhutan", code: "BT" }, { name: "Bolivia", code: "BO" },
    { name: "Bosnia And Herzegovina", code: "BA" }, { name: "Botswana", code: "BW" },
    { name: "Brazil", code: "BR" }, { name: "Brunei Darussalam", code: "BN" },
    { name: "Bulgaria", code: "BG" }, { name: "Burkina Faso", code: "BF" },
    { name: "Burundi", code: "BI" }, { name: "Cambodia", code: "KH" },
    { name: "Cameroon", code: "CM" }, { name: "Cape Verde", code: "CV" },
    { name: "Central African Republic", code: "CF" }, { name: "Chad", code: "TD" },
    { name: "Chile", code: "CL" }, { name: "China", code: "CN" },
    { name: "Colombia", code: "CO" }, { name: "Comoros", code: "KM" },
    { name: "Congo", code: "CG" }, { name: "Congo, Democratic Republic", code: "CD" },
    { name: "Costa Rica", code: "CR" }, { name: "Cote D'Ivoire", code: "CI" },
    { name: "Croatia", code: "HR" }, { name: "Cuba", code: "CU" },
    { name: "Cyprus", code: "CY" }, { name: "Czech Republic", code: "CZ" },
    { name: "Denmark", code: "DK" }, { name: "Djibouti", code: "DJ" },
    { name: "Dominica", code: "DM" }, { name: "Dominican Republic", code: "DO" },
    { name: "Ecuador", code: "EC" }, { name: "Egypt", code: "EG" },
    { name: "El Salvador", code: "SV" }, { name: "Equatorial Guinea", code: "GQ" },
    { name: "Eritrea", code: "ER" }, { name: "Estonia", code: "EE" },
    { name: "Ethiopia", code: "ET" }, { name: "Fiji", code: "FJ" },
    { name: "Finland", code: "FI" }, { name: "France", code: "FR" },
    { name: "Gabon", code: "GA" }, { name: "Gambia", code: "GM" },
    { name: "Georgia", code: "GE" }, { name: "Germany", code: "DE" },
    { name: "Ghana", code: "GH" }, { name: "Greece", code: "GR" },
    { name: "Grenada", code: "GD" }, { name: "Guatemala", code: "GT" },
    { name: "Guinea", code: "GN" }, { name: "Guinea-Bissau", code: "GW" },
    { name: "Guyana", code: "GY" }, { name: "Haiti", code: "HT" },
    { name: "Honduras", code: "HN" }, { name: "Hong Kong", code: "HK" },
    { name: "Hungary", code: "HU" }, { name: "Iceland", code: "IS" },
    { name: "India", code: "IN" }, { name: "Indonesia", code: "ID" },
    { name: "Iran, Islamic Republic Of", code: "IR" }, { name: "Iraq", code: "IQ" },
    { name: "Ireland", code: "IE" }, { name: "Israel", code: "IL" },
    { name: "Italy", code: "IT" }, { name: "Jamaica", code: "JM" },
    { name: "Japan", code: "JP" }, { name: "Jordan", code: "JO" },
    { name: "Kazakhstan", code: "KZ" }, { name: "Kenya", code: "KE" },
    { name: "Kiribati", code: "KI" }, { name: "Korea", code: "KR" },
    { name: "Kuwait", code: "KW" }, { name: "Kyrgyzstan", code: "KG" },
    { name: "Lao People's Democratic Republic", code: "LA" }, { name: "Latvia", code: "LV" },
    { name: "Lebanon", code: "LB" }, { name: "Lesotho", code: "LS" },
    { name: "Liberia", code: "LR" }, { name: "Libyan Arab Jamahiriya", code: "LY" },
    { name: "Liechtenstein", code: "LI" }, { name: "Lithuania", code: "LT" },
    { name: "Luxembourg", code: "LU" }, { name: "Macao", code: "MO" },
    { name: "Macedonia", code: "MK" }, { name: "Madagascar", code: "MG" },
    { name: "Malawi", code: "MW" }, { name: "Malaysia", code: "MY" },
    { name: "Maldives", code: "MV" }, { name: "Mali", code: "ML" },
    { name: "Malta", code: "MT" }, { name: "Marshall Islands", code: "MH" },
    { name: "Mauritania", code: "MR" }, { name: "Mauritius", code: "MU" },
    { name: "Mexico", code: "MX" }, { name: "Micronesia, Federated States Of", code: "FM" },
    { name: "Moldova", code: "MD" }, { name: "Monaco", code: "MC" },
    { name: "Mongolia", code: "MN" }, { name: "Montenegro", code: "ME" },
    { name: "Morocco", code: "MA" }, { name: "Mozambique", code: "MZ" },
    { name: "Myanmar", code: "MM" }, { name: "Namibia", code: "NA" },
    { name: "Nauru", code: "NR" }, { name: "Nepal", code: "NP" },
    { name: "New Zealand", code: "NZ" }, { name: "Nicaragua", code: "NI" },
    { name: "Niger", code: "NE" }, { name: "Nigeria", code: "NG" },
    { name: "Norway", code: "NO" }, { name: "Oman", code: "OM" },
    { name: "Pakistan", code: "PK" }, { name: "Palau", code: "PW" },
    { name: "Palestinian Territory, Occupied", code: "PS" }, { name: "Panama", code: "PA" },
    { name: "Papua New Guinea", code: "PG" }, { name: "Paraguay", code: "PY" },
    { name: "Peru", code: "PE" }, { name: "Philippines", code: "PH" },
    { name: "Poland", code: "PL" }, { name: "Portugal", code: "PT" },
    { name: "Puerto Rico", code: "PR" }, { name: "Qatar", code: "QA" },
    { name: "Reunion", code: "RE" }, { name: "Romania", code: "RO" },
    { name: "Rwanda", code: "RW" }, { name: "Saint Kitts And Nevis", code: "KN" },
    { name: "Saint Lucia", code: "LC" }, { name: "Saint Vincent And Grenadines", code: "VC" },
    { name: "Samoa", code: "WS" }, { name: "San Marino", code: "SM" },
    { name: "Sao Tome And Principe", code: "ST" }, { name: "Saudi Arabia", code: "SA" },
    { name: "Senegal", code: "SN" }, { name: "Serbia", code: "RS" },
    { name: "Seychelles", code: "SC" }, { name: "Sierra Leone", code: "SL" },
    { name: "Singapore", code: "SG" }, { name: "Slovakia", code: "SK" },
    { name: "Slovenia", code: "SI" }, { name: "Solomon Islands", code: "SB" },
    { name: "Somalia", code: "SO" }, { name: "South Africa", code: "ZA" },
    { name: "Spain", code: "ES" }, { name: "Sri Lanka", code: "LK" },
    { name: "Sudan", code: "SD" }, { name: "Suriname", code: "SR" },
    { name: "Swaziland", code: "SZ" }, { name: "Sweden", code: "SE" },
    { name: "Switzerland", code: "CH" }, { name: "Syrian Arab Republic", code: "SY" },
    { name: "Taiwan", code: "TW" }, { name: "Tajikistan", code: "TJ" },
    { name: "Tanzania", code: "TZ" }, { name: "Thailand", code: "TH" },
    { name: "Timor-Leste", code: "TL" }, { name: "Togo", code: "TG" },
    { name: "Tonga", code: "TO" }, { name: "Trinidad And Tobago", code: "TT" },
    { name: "Tunisia", code: "TN" }, { name: "Turkey", code: "TR" },
    { name: "Turkmenistan", code: "TM" }, { name: "Tuvalu", code: "TV" },
    { name: "Uganda", code: "UG" }, { name: "Ukraine", code: "UA" },
    { name: "United Arab Emirates", code: "AE" }, { name: "Uruguay", code: "UY" },
    { name: "Uzbekistan", code: "UZ" }, { name: "Vanuatu", code: "VU" },
    { name: "Venezuela", code: "VE" }, { name: "Vietnam", code: "VN" },
    { name: "Virgin Islands, British", code: "VG" }, { name: "Virgin Islands, U.S.", code: "VI" },
    { name: "Yemen", code: "YE" }, { name: "Zambia", code: "ZM" },
    { name: "Zimbabwe", code: "ZW" }
  ];

  // The internal path to your application form page
  const applicationPath = "/apply";

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Countries that need the Thailand Visa On Arrival
          </h2>
          <p className="text-lg text-gray-600">
            All passengers traveling to Thailand are required to apply online.
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-6 gap-y-4">
          {countries.map((country) => (
            <Link 
              key={country.code}
              to={`${applicationPath}?iso=${country.code}`}
              className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded-md transition-all duration-200"
            >
              <img
                src={`https://flagcdn.com/w40/${country.code.toLowerCase()}.png`}
                alt={`${country.name} flag`}
                className="w-7 h-auto rounded-sm shrink-0"
              />
              <span className="text-sm text-gray-800 font-medium">
                {country.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CountryGrid;