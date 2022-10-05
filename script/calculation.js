document.getElementById('calculate').addEventListener('click', function(){
    
    const totalExpanse = calculateExpanse('food', 'rent', 'clothes');
    
    const newTotalExpanse =  setValueToId('total-expanse', totalExpanse);
    
    const incomeField = getValueInputID('income')
    
    const calculationBalance = incomeField - totalExpanse;
    const newBalance = setValueToId('balance', calculationBalance);
    
});

