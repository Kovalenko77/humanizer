

const objOfNumbers = {
    0: 'ноль',
    1: 'один',
    2: 'два',
    3: 'три'
    }
    
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
            9: 'девять'
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
            9: 'девятьнадцать'
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
            9: 'девяносто'
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
            9: 'девятьсот'
         },
    }
    
    function getValue() {
        const val = document.querySelector('input').value;
        return val;
    }
    
    function changeNumToString(numb){
     return numb.toString();
    }
    
    
    function humanizeNum(string) {
      let finalString = '';
      let obj = ''; 
      for(let i = string.length; i > 0; i--) {
        if (i===2 && string[i-1]==='1') {
            obj = objOfDigit[11]; 
            finalString+=obj[string[string.length-1]]+ ' ';
            return alert(finalString);  
        } else { 
            obj = objOfDigit[i];
        }
      finalString+=obj[string[string.length-i]]+ ' ';
      }
      return alert(finalString);
    }
    
    function getAndChangeUsersNumToHumanizeString() {
      let value = getValue();
      let stringOfUser = changeNumToString(value);
      humanizeNum(stringOfUser);
    }
    
    getAndChangeUsersNumToHumanizeString();