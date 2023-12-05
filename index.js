const OBJ_OF_DIGIT = {
  0: 'zero',
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
  0: '',
  1: 'thousand',
  2: 'million',
};

const HUNDREDS = ' hundred';

const inputId = 'users-value';
const inputEl = document.getElementById(inputId);
inputEl.addEventListener('input', humanizeValue);

function getArray(str) {
  const result = [];
  for (let i = str.length; i > 0; i = i - 3) {
    result.push(
      [3, 2, 1].reduce(function (acc, n) {
        acc += str[i - n] || '';
        return acc;
      }, '')
    );
  }
  return result;
}

function humanizeOnePiece(stringOfNum, obj) {
  const finalArr = [];
  const string = stringOfNum.padStart(3, 0);
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
        const hundreds = string[placeNum] > '0' ? HUNDREDS : '';
        finalArr.push(obj[1][string[placeNum]] + hundreds);
        break;
      }
    }
  }
  return finalArr
    .reverse()
    .filter((num) => num !== '')
    .join(' ');
}

function humanize(value) {
  if (value === '0') {
    return OBJ_OF_DIGIT[0];
  }
  const arrOfStr = getArray(value);
  const result = [];
  for (let i = arrOfStr.length - 1; i >= 0; i--) {
    const humanizedPieceOfValue = humanizeOnePiece(arrOfStr[i], OBJ_OF_DIGIT);
    if (humanizedPieceOfValue !== '') {
      result.push(humanizedPieceOfValue);
      result.push(ORDINALS[i]);
    }
  }
  return result.join(' ');
}

function showResultingString(id, string) {
  document.getElementById(id).textContent = string;
}

function humanizeValue(event) {
  const value = event.target.value;
  const humanizedString = humanize(value);
  showResultingString(inputId + '-output', humanizedString);
}
