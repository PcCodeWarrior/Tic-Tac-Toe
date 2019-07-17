const isWinner = (myArray, currentCell) => {

    if (myArray[0].cellValue !==''&&(myArray[0].cellValue === myArray[1].cellValue && myArray[0].cellValue === myArray[2].cellValue));
    else if (myArray[3].cellValue !==''&&(myArray[3].cellValue === myArray[4].cellValue && myArray[3].cellValue === myArray[5].cellValue));
    else if (myArray[6].cellValue !==''&&(myArray[6].cellValue === myArray[7].cellValue && myArray[6].cellValue === myArray[8].cellValue));
    else if (myArray[0].cellValue !==''&&(myArray[0].cellValue === myArray[3].cellValue && myArray[0].cellValue === myArray[6].cellValue));
    else if (myArray[1].cellValue !==''&&(myArray[1].cellValue === myArray[4].cellValue && myArray[1].cellValue === myArray[7].cellValue));
    else if (myArray[2].cellValue !==''&&(myArray[2].cellValue === myArray[5].cellValue && myArray[2].cellValue === myArray[8].cellValue));
    else if (myArray[0].cellValue !==''&&(myArray[0].cellValue === myArray[4].cellValue && myArray[0].cellValue === myArray[8].cellValue));
    else if (myArray[2].cellValue !==''&&(myArray[2].cellValue === myArray[4].cellValue && myArray[2].cellValue === myArray[6].cellValue));
    else
        return false;

    return true
};

export default isWinner;
