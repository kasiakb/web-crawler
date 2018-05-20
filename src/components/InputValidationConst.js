export const required = value => (value ? undefined : "Required");

export const notTooLong = value => (value.length <= 10 ? undefined : "Too long title");

export const properUrl = value =>
(value.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g) == null ? "Wrong url format" : undefined)

export const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined);

export const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export const onSubmit = async values => {
  await sleep(300);
  window.alert(JSON.stringify(values, 0, 2));
};

export const properEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export const properPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/

export const registerValidation = values => {
  const errors = {};
  if (!values.email) {
    errors.email = "Required";
  } else if(values.email.match(properEmail) == null) {
    errors.email = "Wrong e-mail format"
  }
  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.match(properPassword) == null) {
    errors.password = "Wrong password format"
  }
  if (!values.confirm) {
    errors.confirm = "Required";
  } else if (values.confirm !== values.password) {
    errors.confirm = "Does not match";
  }
  return  errors;
}

export const signValidation = values => {
  const errors = {};
  if (!values.email) {
    errors.email = "Required";
  } else if(values.email.match(properEmail) == null) {
    errors.email = "Wrong e-mail format"
  }
  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.match(properPassword) == null) {
    errors.password = "Wrong password"
  }
  return  errors;
}
