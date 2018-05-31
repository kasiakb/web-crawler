import _ from 'lodash'
import { debuglog } from 'util';

const properUrl = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g

export const addWebValidation = websData => values => {
  const errors = {}
  if (!values.title) {
    errors.title = "Required";
  } else if (values.title.length >= 10) {
    console.log('data', websData)
    errors.title = "Too long title"
  }
  if(!values.url) {
    errors.url = "Required";
  } else if (values.url.match(properUrl) == null) {
    errors.url = "Wrong url format"
  } else if (_.includes(checkIfNew(websData, values.url), true) == true) {
    errors.url = "This page is already analyzed"
  }
  return errors
}

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export const onSubmit = async values => {
  await sleep(300);
  window.alert(JSON.stringify(values, 0, 2));
};

const properEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const properPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/

const validators = (errors, values) => {
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
}

export const registerValidation = values => {
  const errors = {};
  validators(errors, values)
  if (!values.confirm) {
    errors.confirm = "Required";
  } else if (values.confirm !== values.password) {
    errors.confirm = "Does not match";
  }
  return  errors;
}

export const signValidation = values => {
  const errors = {};
  validators(errors, values)
  return  errors;
}

const addHttp = (values) => {
  if (!values.match(/^[a-zA-Z]+:\/\//)) {
    return 'http://' + values;
  }
  return values
}

const urlParser = (values) => {
  const parser = document.createElement('a');
  parser.href = addHttp(values)
  console.log('parser', parser.protocol, parser.hostname, parser.pathname)
  return (parser.protocol + parser.hostname.replace(/^(?:www\.)?/i, "").split('/')[0] + parser.pathname)
}

const checkIfNew = (siteanalisis, values) => {
  const check = siteanalisis.reduce((acc, curr) => {
    acc.push(_.includes(curr.attributes, urlParser(values)))
    return acc
  }, [])
  return check
}
