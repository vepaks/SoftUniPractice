// getString ('C:\\Internal\\training-internal\\Template.bat.pptx');
//
// function getString(string) {
//     let startIndex = string.lastIndexOf('\\') + 1;
//     let lastIndex = string.lastIndexOf('.');
//
//     let token = string.substring(startIndex, lastIndex);
//     let token2 = string.substring(lastIndex + 1 );
//     console.log(`File name: ${token}`);
//     console.log(`File extension: ${token2}`);
//
// }

getString('C:\\Internal\\training-internal\\Template.pptx');
function getString (string) {
  let startIndex = string.lastIndexOf('\\') + 1;
  let lastIndex = string.lastIndexOf('.');

let token  = string.substring(startIndex, lastIndex);

  console.log(token);

console.log('hello world');
}
