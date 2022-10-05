function getValueInputID(id){
    const fieldID = document.getElementById(id);
    const fieldIDString = fieldID.value;
    const fieldIDValue = parseInt(fieldIDString);
    return fieldIDValue;
}


function calculateExpanse(foodId, rentId, clothesId){
    const foodExpanse = document.getElementById(foodId);
    const foodString = foodExpanse.value;
    const foodExpanseInt = parseInt(foodString);


    const rentExpanse = document.getElementById(rentId);
    const rentString = rentExpanse.value;
    const rentInt = parseInt(rentString);

    const clothesExpanse = document.getElementById(clothesId);
    const clothesString = clothesExpanse.value;
    const clothesInt = parseInt(clothesString);

    const totalExpanse = foodExpanseInt + rentInt + clothesInt;
    return totalExpanse;
}

function setValueToId(id, calculation){
    const totalExpanseField = document.getElementById(id);
    totalExpanseField.innerText = calculation;
}

function getValueFromTextField(id){
    const textField = document.getElementById(id);
    const textFieldString = textField.innerText
    const textFieldInt = parseInt(textFieldString)
    return textFieldInt
}


