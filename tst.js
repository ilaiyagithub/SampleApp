var validCharsNoSpaceRegex = /^[0-9a-z!@#\$%'\(\)\*\+,\-\.\/:;<=>\?\[\\\]\^_`\{\|}~]+$/i;
var validCharsWithSpaceRegex = /^[ 0-9a-z!@#\$%'\(\)\*\+,\-\.\/:;<=>\?\[\\\]\^_`\{\|}~]+$/i;


var text = {
  max: function max(length) {
    return function (value) {
      return value !== '' && value.length > Number(length) ? 'error':'';
    };
  },
  min: function min(length) {
    return function (value) {
      return value !== '' && value.length < Number(length) ? [{ error: i18n('fieldWarnings:valueShort') }] : [];
    };
  },
  noDigits: function noDigits(value) {
    return (/\d/.test(value) ? [{ error: i18n('fieldWarnings:noDigits') }] : []
    );
  },
  validChars: function validChars(allowSpaces) {
    return function (value) {
      var regex = allowSpaces === 'true' ? validCharsWithSpaceRegex : validCharsNoSpaceRegex;
      return !regex.test(value) ? [{ error: i18n('fieldWarnings:invalidChars') }] : [];
    };
  },
  max1: length => value => value !== '' && value.length > Number(length) ?
    'Valdiation fails!': ''
};

console.log(text.max(3)('ddsssd'));
console.log(text.max1(3)('ddsssd'));
