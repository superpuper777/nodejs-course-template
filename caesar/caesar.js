// const alphabetLength = 26;
// exports.caesarShift = (str, shift) => {
//   let output = '';
//   for (let i = 0; i < str.length; i++) {
//     let c = str[i];
//     if (c.match(/[a-z]/i)) {
//       const code = str.charCodeAt(i);
//       if (code >= 65 && code <= 90) {
//         c = String.fromCharCode(((code - 65 + shift) % alphabetLength) + 65);
//       } else if (code >= 97 && code <= 122) {
//         c = String.fromCharCode(((code - 97 + shift) % alphabetLength) + 97);
//       }
//     }
//     output += c;
//   }
//   return output;
// };

const abc = 'abcdefghijklmnopqrstuvwxyz';
const abcUpper = abc.toUpperCase();

exports.caesarShift = (text, shift) => {
  const map = Array.prototype.map;
  return map
    .call(text, char => {
      if (abc.includes(char)) {
        let position = (abc.indexOf(char) + shift) % abc.length;
        position = position < 0 ? abc.length + position : position;
        return abc[position];
      }
      if (abcUpper.includes(char)) {
        let position = (abcUpper.indexOf(char) + shift) % abcUpper.length;
        position = position < 0 ? abcUpper.length + position : position;
        return abcUpper[position];
      }
      return char;
    })
    .join('');
};
