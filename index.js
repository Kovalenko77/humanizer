const OBJ_OF_dIGIT = {
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
  },
};

const ORDINALS = {
  0: ' hundred',
  1: ' thousand',
  2: ' million',
};

function getValue(id) {
  const val = document.getElementById(id).value;
  return val;
}

function getArray(str) {
  let result = [];
  for (let i = str.length; i > 0; i = i - 3) {
    result.push(`${!!str[i - 3] ? str[i - 3] : ''}${!!str[i - 2] ? str[i - 2] : ''}${!!str[i - 1] ? str[i - 1] : ''}`);
  }
  return result;
}

function humanizeOnePiece(string, obj) {
  let finalArr = [];
  string = string.padStart(3, 0);
  for (let placeNum = string.length - 1; placeNum >= 0; placeNum--) {
    switch (placeNum) {
      case 2: {
        const noTens = string[placeNum - 1] === '0';
        const moreThan19 = string[placeNum - 1] > '1';
        if (noTens || moreThan19) {
          finalArr.push(obj[1][string[placeNum]]);
        }
        break;
      }
      case 1: {
        if (string[placeNum] === '1' && string[placeNum + 1] > '0') {
          finalArr.push(obj[11][string[placeNum + 1]]);
        } else {
          finalArr.push(obj[2][string[placeNum]]);
        }
        break;
      }
      case 0: {
        if (string[placeNum] > '0') {
          finalArr.push(obj[1][string[placeNum]] + ORDINALS[0]);
        } else {
          finalArr.push(obj[1][string[placeNum]]);
        }
        break;
      }
    }
  }
  let result = finalArr.reverse().join(' ');
  return result; 
}

function humanizer(value) {
  let arrOfStr = getArray(value);
  let result = [];
  for (let i = 0; i < arrOfStr.length; i++) {
    if (i > 0) {
      result.push(humanizeOnePiece(arrOfStr[i], OBJ_OF_dIGIT) + ORDINALS[i]);
    } else {
      result.push(humanizeOnePiece(arrOfStr[i], OBJ_OF_dIGIT));
    }
  }
  let resultString = result.reverse().join(' ');
  return resultString;
}

function showResultingString(id, string) {
  document.getElementById(id).textContent = string;
}

function humanizeValue(inputId) {
  let value = getValue(inputId);
  let humanizedString = humanizer(value);
  showResultingString(inputId + '-output', humanizedString);
}
