const objOfDigit = {
  0: '',
  1: {
    0: '',
    1: 'один',
    2: 'два',
    3: 'три',
    4: 'четыре',
    5: 'пять',
    6: 'шесть',
    7: 'семь',
    8: 'восемь',
    9: 'девять',
  },
  11: {
    0: '',
    1: 'одинадцать',
    2: 'двенадцать',
    3: 'тринадцать',
    4: 'четырнадцать',
    5: 'пятнадцать',
    6: 'шестнадцать',
    7: 'семьнадцать',
    8: 'восемьнадцать',
    9: 'девятьнадцать',
  },
  2: {
    0: '',
    1: 'десять',
    2: 'двадцать',
    3: 'тридцать',
    4: 'сорок',
    5: 'пятьдесят',
    6: 'шестьдесят',
    7: 'семьдесят',
    8: 'восемьдесят',
    9: 'девяносто',
  },
  3: {
    0: '',
    1: 'сто',
    2: 'двести',
    3: 'триста',
    4: 'четыреста',
    5: 'пятьсот',
    6: 'шестьсот',
    7: 'семьсот',
    8: 'восемьсот',
    9: 'девятьсот',
  },
  4: {
    0: 'тысяч',
    1: 'одна тысяча',
    2: 'две тысячи',
    3: 'три тысячи',
    4: 'четыре тысячи',
    5: 'пять тысяч',
    6: 'шесть тысяч',
    7: 'семь тысяч',
    8: 'восемь тысяч',
    9: 'девять тысяч',
  },
  5: {
    0: '',
    1: 'десять',
    2: 'двадцать',
    3: 'тридцать',
    4: 'сорок',
    5: 'пятьдесят',
    6: 'шестьдесят',
    7: 'семьдесят',
    8: 'восемьдесят',
    9: 'девяносто',
  },
  6: {
    0: '',
    1: 'сто',
    2: 'двести',
    3: 'триста',
    4: 'четыреста',
    5: 'пятьсот',
    6: 'шестьсот',
    7: 'семьсот',
    8: 'восемьсот',
    9: 'девятьсот',
  },
  7: {
    0: 'миллионов',
    1: 'один миллион',
    2: 'два миллиона',
    3: 'три миллиона',
    4: 'четыре миллиона',
    5: 'пять миллионов',
    6: 'шесть миллионов',
    7: 'семь миллионов',
    8: 'восемь миллионов',
    9: 'девять миллионов',
  },
  8: {
    0: '',
    1: 'десять',
    2: 'двадцать',
    3: 'тридцать',
    4: 'сорок',
    5: 'пятьдесят',
    6: 'шестьдесят',
    7: 'семьдесят',
    8: 'восемьдесят',
    9: 'девяносто',
  },
  9: {
    0: '',
    1: 'сто',
    2: 'двести',
    3: 'триста',
    4: 'четыреста',
    5: 'пятьсот',
    6: 'шестьсот',
    7: 'семьсот',
    8: 'восемьсот',
    9: 'девятьсот',
  },
};

function getAndChangeUsersNumToHumanizeString() {
  let value = getValue();
  let stringOfUser = changeNumToString(value);
  alert(humanizeNum(stringOfUser));
}

function getValue() {
  const val = document.querySelector('input').value;
  return val;
}

function changeNumToString(numb) {
  return numb.toString();
}

function humanizeNum(string) {
  let finalString = '';
  let obj = '';
  for (let i = string.length; i > 0; i--) {
    switch (i) {
      case 9: {
        obj = objOfDigit[i];
        finalString += obj[string[string.length - i]] + ' ';
        break;
      }
      case 8: {
        if (string[string.length - i] === '1' && string[string.length - i + 1] !== '0') {
          obj = objOfDigit[11];
          finalString += obj[string[string.length - i + 1]] + ' миллионов';
        } else {
          obj = objOfDigit[i];
          finalString += obj[string[string.length - i]] + ' ';
        }
        break;
      }
      case 7: {
        if (string[string.length - [i + 1]] === '1' && string[string.length - i] !== '0') {
          break;
        } else if (string[string.length - i] === '0') {
          finalString += ' ' + obj[string[string.length - i]] + 'миллионов';
        } else {
          obj = objOfDigit[i];
          finalString += obj[string[string.length - i]] + ' ';
        }
        break;
      }
      case 6: {
        obj = objOfDigit[i];
        finalString += ' ' + obj[string[string.length - i]] + ' ';
        break;
      }
      case 5: {
        if (string[string.length - i] === '1' && string[string.length - i + 1] !== '0') {
          obj = objOfDigit[11];
          finalString += obj[string[string.length - i + 1]] + ' тысяч';
        } else {
          obj = objOfDigit[i];
          finalString += obj[string[string.length - i]] + ' ';
        }
        break;
      }
      case 4: {
        if (string[string.length - [i + 1]] === '1' && string[string.length - i] !== '0') {
          break;
        } else if (string[string.length - i] === '0') {
          finalString += ' ' + obj[string[string.length - i]] + 'тысяч';
        } else {
          obj = objOfDigit[i];
          finalString += obj[string[string.length - i]] + '';
        }
        break;
      }
      case 3: {
        obj = objOfDigit[i];
        finalString += ' ' + obj[string[string.length - i]] + ' ';
        break;
      }
      case 2: {
        if (string[string.length - i] === '1') {
          obj = objOfDigit[11];
          finalString += obj[string[string.length - 1]] + ' ';
        } else {
          obj = objOfDigit[i];
          finalString += obj[string[string.length - i]] + ' ';
        }
        break;
      }
      case 1: {
        if (string[string.length - [i + 1]] === '1') {
          break;
        } else if (string.length === 1 && string[string.length - 1] === '0') {
          finalString += 'ноль';
        } else {
          obj = objOfDigit[i];
          finalString += obj[string[string.length - i]] + '';
        }
        break;
      }
    }
  }
  return finalString;
}
