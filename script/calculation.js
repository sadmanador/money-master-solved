document.getElementById('calculate').addEventListener('click', function(){
    
    const totalExpanse = calculateExpanse('food', 'rent', 'clothes');
    
    const newTotalExpanse =  setValueToId('total-expanse', totalExpanse);
    
    const incomeField = getValueInputID('income')
    
    const calculationBalance = incomeField - totalExpanse;
    const newBalance = setValueToId('balance', calculationBalance);
});

document.getElementById('save-btn').addEventListener('click', function(){
    const saveField = document.getElementById('save-input');
    const saveFieldString = saveField.value;
    const saveInt = parseInt(saveFieldString);
    
    const incomeField = getValueInputID('income');

    const saving = incomeField * (saveInt / 100);
    const setSaving = setValueToId('saving-amount', saving);

    const balance = getValueFromTextField('balance')
    const remaining = balance - saving;
    const setRemaining = setValueToId('remaining-balance', remaining);
});