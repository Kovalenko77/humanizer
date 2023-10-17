
const objOfDigitEn = {
  0: '',
  1: {
    0: '',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
  },
  11: {
    0: '',
    1: 'eleven',
    2: 'twelve',
    3: 'thirteen',
    4: 'fourteen',
    5: 'fifteen',
    6: 'sixteen',
    7: 'seventeen',
    8: 'eighteen',
    9: 'nineteen',
  },
  2: {
    0: '',
    1: 'ten',
    2: 'twenty',
    3: 'thirty',
    4: 'fourty',
    5: 'fifty',
    6: 'sixty',
    7: 'seventy',
    8: 'eighty',
    9: 'ninety',
  }
};

const ordinals = {
  1: '',
  2: '',
  3: ' hundred',
  4: ' thousand',
  5: ' thousand',
  6: ' hundred',
  7: ' million',
  8: ' million',
  9: ' hundred'
}

function getAndChangeUsersNumToHumanizeString() {
  let value = getValue();
  let stringOfUser = changeNumToString(value);
  document.getElementById('result').textContent = humanizeNumEn(stringOfUser);
}

function getValue() {
  const val = document.querySelector('input').value;
  return val;
}

function changeNumToString(numb) {
  return numb.toString();
}

function humanizeNumEn(string) {
  let finalString = '';
  let obj = '';
  for (let i = string.length; i > 0; i--) {
    switch (i) {
      case 9: 
      case 6: 
      case 3: {
        obj = objOfDigitEn[1];
        if(string[string.length - i] === '0') { 
          finalString +=  ' ' + obj[string[string.length - i]] + ' ';
        } else {
          finalString +=  ' ' + obj[string[string.length - i]] + ' ' + ordinals[i];
        }
        break;
      }
      case 8: 
      case 5: 
      case 2: {
        if (string[string.length - i] === '1' && string[string.length - i + 1] !== '0') {
          obj = objOfDigitEn[11];
          finalString +=  ' ' + obj[string[string.length - i + 1]] + ordinals[i];
        } else if (
          string[string.length - i - 1] === '0' &&
          string[string.length - i] === '0' &&
          string[string.length - i + 1] === '0'
        ) {
          break;
        }  else if (string[string.length - i + 1] === '0') {
          obj = objOfDigitEn[2];
          finalString +=  ' ' + obj[string[string.length - i]] + ordinals[i];
        } else {
          obj = objOfDigitEn[2];
          finalString +=  ' ' + obj[string[string.length - i]];
        }
        break;
      }
      case 7: 
      case 4: 
      case 1: {
        if (string[string.length - [i + 1]] === '1' && string[string.length - i] !== '0') {
          break;
        } else if (string[string.length - i] === '0'){
          obj = objOfDigitEn[1];
          finalString +=  ' ' + obj[string[string.length - i]] ;
        } else {
          obj = objOfDigitEn[1];
          finalString += ' ' + obj[string[string.length - i]] + ordinals[i];
        }
        break;
      }
    }
  }
  return finalString;
}

// function humanizeNum(string) {
//   let finalString = '';
//   let obj = '';
//   for (let i = string.length; i > 0; i--) {
//     switch (i) {
//       case 9: {
//         obj = objOfDigit[i];
//         finalString += obj[string[string.length - i]] + ' ';
//         break;
//       }
//       case 8: {
//         if (string[string.length - i] === '1' && string[string.length - i + 1] !== '0') {
//           obj = objOfDigit[11];
//           finalString += obj[string[string.length - i + 1]] + ' миллионов';
//         } else {
//           obj = objOfDigit[i];
//           finalString += obj[string[string.length - i]] + ' ';
//         }
//         break;
//       }
//       case 7: {
//         if (string[string.length - [i + 1]] === '1' && string[string.length - i] !== '0') {
//           break;
//         } else if (string[string.length - i] === '0') {
//           finalString += ' ' + obj[string[string.length - i]] + 'миллионов';
//         } else {
//           obj = objOfDigit[i];
//           finalString += obj[string[string.length - i]] + ' ';
//         }
//         break;
//       }
//       case 6: {
//         obj = objOfDigit[i];
//         finalString += ' ' + obj[string[string.length - i]] + ' ';
//         break;
//       }
//       case 5: {
//         if (string[string.length - i] === '1' && string[string.length - i + 1] !== '0') {
//           obj = objOfDigit[11];
//           finalString += obj[string[string.length - i + 1]] + ' тысяч';
//         } else {
//           obj = objOfDigit[i];
//           finalString += obj[string[string.length - i]] + ' ';
//         }
//         break;
//       }
//       case 4: {
//         if (string[string.length - [i + 1]] === '1' && string[string.length - i] !== '0') {
//           break;
//         } else if (
//           string.length > 4 &&
//           ((string[string.length - i] === '0' && string[string.length - i - 1] !== '0') ||
//           string[string.length - i - 2] !== '0')
//         ) {
//           obj = objOfDigit[i];
//           finalString += ' ' + obj[string[string.length - i]] + 'тысяч';
//         } else {
//           obj = objOfDigit[i];
//           finalString += obj[string[string.length - i]] + '';
//         }
//         break;
//       }
//       case 3: {
//         obj = objOfDigit[i];
//         finalString += ' ' + obj[string[string.length - i]] + ' ';
//         break;
//       }
//       case 2: {
//         if (string[string.length - i] === '1' && string[string.length - i + 1] > 0) {
//           obj = objOfDigit[11];
//           finalString += obj[string[string.length - 1]] + ' ';
//         } else {
//           obj = objOfDigit[i];
//           finalString += obj[string[string.length - i]] + ' ';
//         }
//         break;
//       }
//       case 1: {
//         if (string[string.length - [i + 1]] === '1') {
//           break;
//         } else if (string.length === 1 && string[string.length - 1] === '0') {
//           finalString += 'ноль';
//         } else {
//           obj = objOfDigit[i];
//           finalString += obj[string[string.length - i]] + '';
//         }
//         break;
//       }
//     }
//   }
//   return finalString;
// }
    
// const objOfDigit = {
//   0: '',
//   1: {
//     0: '',
//     1: 'один',
//     2: 'два',
//     3: 'три',
//     4: 'четыре',
//     5: 'пять',
//     6: 'шесть',
//     7: 'семь',
//     8: 'восемь',
//     9: 'девять',
//   },
//   11: {
//     0: '',
//     1: 'одинадцать',
//     2: 'двенадцать',
//     3: 'тринадцать',
//     4: 'четырнадцать',
//     5: 'пятнадцать',
//     6: 'шестнадцать',
//     7: 'семьнадцать',
//     8: 'восемьнадцать',
//     9: 'девятьнадцать',
//   },
//   2: {
//     0: '',
//     1: 'десять',
//     2: 'двадцать',
//     3: 'тридцать',
//     4: 'сорок',
//     5: 'пятьдесят',
//     6: 'шестьдесят',
//     7: 'семьдесят',
//     8: 'восемьдесят',
//     9: 'девяносто',
//   },
//   3: {
//     0: '',
//     1: 'сто',
//     2: 'двести',
//     3: 'триста',
//     4: 'четыреста',
//     5: 'пятьсот',
//     6: 'шестьсот',
//     7: 'семьсот',
//     8: 'восемьсот',
//     9: 'девятьсот',
//   },
//   4: {
//     0: '',
//     1: 'одна тысяча',
//     2: 'две тысячи',
//     3: 'три тысячи',
//     4: 'четыре тысячи',
//     5: 'пять тысяч',
//     6: 'шесть тысяч',
//     7: 'семь тысяч',
//     8: 'восемь тысяч',
//     9: 'девять тысяч',
//   },
//   5: {
//     0: '',
//     1: 'десять',
//     2: 'двадцать',
//     3: 'тридцать',
//     4: 'сорок',
//     5: 'пятьдесят',
//     6: 'шестьдесят',
//     7: 'семьдесят',
//     8: 'восемьдесят',
//     9: 'девяносто',
//   },
//   6: {
//     0: '',
//     1: 'сто',
//     2: 'двести',
//     3: 'триста',
//     4: 'четыреста',
//     5: 'пятьсот',
//     6: 'шестьсот',
//     7: 'семьсот',
//     8: 'восемьсот',
//     9: 'девятьсот',
//   },
//   7: {
//     0: 'миллионов',
//     1: 'один миллион',
//     2: 'два миллиона',
//     3: 'три миллиона',
//     4: 'четыре миллиона',
//     5: 'пять миллионов',
//     6: 'шесть миллионов',
//     7: 'семь миллионов',
//     8: 'восемь миллионов',
//     9: 'девять миллионов',
//   },
//   8: {
//     0: '',
//     1: 'десять',
//     2: 'двадцать',
//     3: 'тридцать',
//     4: 'сорок',
//     5: 'пятьдесят',
//     6: 'шестьдесят',
//     7: 'семьдесят',
//     8: 'восемьдесят',
//     9: 'девяносто',
//   },
//   9: {
//     0: '',
//     1: 'сто',
//     2: 'двести',
//     3: 'триста',
//     4: 'четыреста',
//     5: 'пятьсот',
//     6: 'шестьсот',
//     7: 'семьсот',
//     8: 'восемьсот',
//     9: 'девятьсот',
//   },
// };