// "use client"
// import React, { useState } from 'react';
// import 'intl-tel-input/build/css/intlTelInput.css';
// import IntlTelInput from 'intl-tel-input/react';

// const PhoneInput: React.FC = () => {
//   const [phone, setPhone] = useState<string>('');

//   const handlePhoneChange = (
//     isValid: boolean,
//     value: string,
//     countryData: Record<string, any>,
//     number: string
//   ) => {
//     setPhone(value);
//   };

//   return (
//     <div className="outline-none py-3 px-3 rounded-xl">
//       <IntlTelInput
//         preferredCountries={[ 'uk']}
//         fieldId="phone"
//         fieldName="phone"
//         aria-label="phone"
//         onPhoneNumberChange={handlePhoneChange}
//         formatOnInit={true}
//         placeholder="enter number"
//         inputProps={{
//           className: "outline-none"
//         }}
//       />
//     </div>
//   );
// };

// export default PhoneInput;
