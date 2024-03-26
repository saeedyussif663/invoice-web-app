export default function checkPasswordValidity(password) {
  let fields = {
    isMoreThanEightChars: false,
    includesUppercase: false,
    includesLowercase: false,
    includesDigit: false,
    includesSpecialCharcter: false,
  };

  console.log("checking");
  //   more than 8 characters
  if (password?.length >= 8) {
    fields = {
      ...fields,
      isMoreThanEightChars: true,
    };
  } else {
    fields = {
      ...fields,
      isMoreThanEightChars: false,
    };
  }

  //   includes at least one uppercase
  if (/[A-Z]/.test(password)) {
    fields = {
      ...fields,
      includesUppercase: true,
    };
  } else {
    fields = {
      ...fields,
      includesUppercase: false,
    };
  }

  //   check at least one lowercase
  if (/[a-z]/.test(password)) {
    fields = {
      ...fields,
      includesLowercase: true,
    };
  } else {
    fields = {
      ...fields,
      includesLowercase: false,
    };
  }

  //   includes digit
  if (/[0-9]/.test(password)) {
    fields = {
      ...fields,
      includesDigit: true,
    };
  } else {
    fields = {
      ...fields,
      includesDigit: false,
    };
  }

  //   includes special character
  if (/[^a-zA-Z0-9]/.test(password)) {
    fields = {
      ...fields,
      includesSpecialCharcter: true,
    };
  } else {
    fields = {
      ...fields,
      includesSpecialCharcter: false,
    };
  }

  return fields;
}
