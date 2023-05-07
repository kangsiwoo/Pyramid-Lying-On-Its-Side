let char = prompt("문자를 입력 해 주세요(한글자)");
const numberMax = Number(prompt("숫자를 입력 해 주세요"));
number = 0;
let n = 0;
let temp = [];

while (number++ < numberMax) 
{
    while(n != number)
    {
        temp[n++] = char;
    }
    console.log(temp.join(' '));

}

number = n;
while (number-- !== 0) 
{
    while(n != number)
    {
        temp[--n] = '';
    }
    console.log(temp.join(' '));

}

