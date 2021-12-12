const readlineSync = require('readline-sync');
MasterMind();
function NumberTester(genNumber, userNum, exist, matched)
{
    exist = 0;
    matched = 0;
    for(i=0; i< genNumber.length; i++)
    {
        for(j=0; j < userNum.length; j++) 
        {
            if (userNum[j] == genNumber[i])
            {
                exist++;
                if (i == j)
                {
                    matched++;
                    break;
                }
            }
        }
    }
    console.log(`${usernum} (${exist} - ${matched})`)
}

function SecureInput()
{
    let wrongDigit = true;
    while(wrongDigit = true)
    {   
        //checking if number starts with 0
        userNum = Input();
        console.log(userNum);
        if(userNum[0] == 0)
        {
            console.log("please input a correct number");
            wrongDigit = true;
        }
        // checking if the number is 4 digit
        else if(userNum > 999 && userNum < 9999)
        {
            for( i = 0; i < userNum.length-1; i++)
            {
                for(j = i+1; userNum.length; j++)
                {
                    if(userNum[i] == userNum[j])
                    {
                        wrongDigit = true;
                    }
                }
            }
        }
        else if(userNum < 999 && userNum > 9999)
        {   
            wrongDigit = true;
        }
        else
        {
            wrongDigit = false;
        }
    }
}

function Input()
{
    return readlineSync.question(`Please input a number with four unique digits which does't start with 0 and belongs to the range 0-9. \n`);
}

function MasterMind()
{
    let genNumber = Math.floor(Math.random()*8999 + 1000)
    let exist = 0;
    let matched = 0;
    while(exist != 4 && matched != 4)
    {    
        NumberTester(genNumber,SecureInput(), exist, matched);
        console.log("finally");
    }
    console.log("we have a winner!!!!");
    console.log("WOOOOOOW, Nice game");
}