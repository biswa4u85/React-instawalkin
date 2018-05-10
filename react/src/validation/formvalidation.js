
export const validate = (email, password) => {
  // true means invalid, so our conditions got reversed
  console.log('in here');
  return {
    'No {email} entered': email.length === 0,
    password: password.length === 0,
  };
}

const validateEmail = (email) => {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  console.log(re.test(email));
  return re.test(email);
};

const validatePhone = (phone) => {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  console.log(re.test(phone));
  return re.test(phone);
};


export const validatePartnerFrom = (businessname, contactname, contactphone, contactemail, city) => {

  // true means invalid, so our conditions got reversed
  return {
    businessname: businessname.length === 0,
    contactname: contactname.length === 0,
    contactphone: contactphone.length === 0,
    contactemail: contactemail.length === 0,
    city: city.length === 0,
    contactemail: !validateEmail(contactemail)
  };
}
export const validateContactFrom = (contactname, contactphone, contactemail, comments) => {

  // true means invalid, so our conditions got reversed
  return {
    contactname: contactname.length === 0,
    contactphone: contactphone.length === 0,
    contactemail: contactemail.length === 0,
    comments: comments.length === 0,
    contactemail: !validateEmail(contactemail)
  };
}

export const validateRegister = (email, password, confirmpassword) => {
  // we are going to store errors for all fields
  // in a signle array
  const errors = [];

  console.log('validating');
  if (password != confirmpassword) {
    console.log('not equal');
    errors.push("Please ensure passwords are same.");
  }
  if (email.length < 5) {
    errors.push("Email should be at least 5 charcters long");
  }
  if (!validateEmail(email)) {
    errors.push("Not a valid email");
  }
  if (password.length < 6) {
    errors.push("Password should be at least 6 characters long");
  }
  console.log('done');
  return errors;
}



// export const validateUsersProfile = (firstname, lastname, phone) => {
//   // we are going to store errors for all fields
//   // in a signle array
//   const errors = [];
//   if (!checked) {
//     error.push('Please accept our terms and conditions');
//   }
//   if (firstname.length < 1) {
//     errors.push("Not a valid firstname.");
//   }
//   if (lastname.length < 1) {
//     errors.push("Not a valid lastname.");
//   }
//   if (!validatePhone(phone)) {
//     errors.push("Not a valid phone number");
//   }

//   return errors;
// }