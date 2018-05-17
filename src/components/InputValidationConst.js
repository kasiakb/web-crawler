export const required = value => (value ? undefined : "Required");

export const notTooLong = value => (value.length <= 30 ? undefined : "Too long title");

export const properUrl = value =>
(value.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g) == null ? "Wrong url format" : undefined)

export const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined);