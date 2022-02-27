function increaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
    UpdateCost();
}

function decreaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementById('number').value = value;
    UpdateCost();
}

function increaseValuesecond() {
    var value = parseInt(document.getElementById('numbersecond').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('numbersecond').value = value;
    UpdateCost();
}

function decreaseValuesecond() {
    var value = parseInt(document.getElementById('numbersecond').value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementById('numbersecond').value = value;
    UpdateCost();
}


function increaseValuethird() {
    var value = parseInt(document.getElementById('numberthird').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('numberthird').value = value;
    UpdateCost();
}

function decreaseValuethird() {
    var value = parseInt(document.getElementById('numberthird').value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementById('numberthird').value = value;
    UpdateCost();
}

function UpdateCost(){
    var value = parseInt(document.getElementById('cost').value, 10);
    var value1 = parseInt(document.getElementById('number').value, 10);
    var value2 = parseInt(document.getElementById('numbersecond').value, 10);
    var value3 = parseInt(document.getElementById('numberthird').value, 10);
    var cost = value1*50+value2*45+value3*30;
    
    document.getElementById('cost').value = cost;
        
}