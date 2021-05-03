// REGEX

// password validation
// atleast 5chr with atleast 1number and without special characters
let pwValid=/(?=[a-zA-Z0-9]{5})(?=[a-zA-Z0-9]*\d{1})/

// remove whitespace at the star and at the end of the string
"     my stri ng     ".replace(/^\s+|\s+$/g,"")