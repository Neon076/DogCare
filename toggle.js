let dg = document.getElementById('dogGadget');
let food = document.getElementById('food');
let toy = document.getElementById('toys');
let acc = document.getElementById('acc');
let belt = document.getElementById('belt');

function toggleHide(){
    if(dg.style.display=='none'){
        dg.style.display = 'block';
        location.href = '#dogGadget';
        console.log("Hello");
    }
    else{
        dg.style.display = 'none';
        food.style.display = 'none';
        belt.style.display = 'none';
        acc.style.display = 'none';
        toy.style.display = 'none';
    }
}
function toggleFood(){
    belt.style.display = 'none';
    acc.style.display = 'none';
    toy.style.display = 'none';
    
    if(food.style.display =='none'){
        food.style.display = 'block';
    }
    else{
        food.style.display = 'none';
    }
}
function toggleBelt(){
    // dg.style.display = 'none';
    food.style.display = 'none';
    acc.style.display = 'none';
    toy.style.display = 'none';
    if(belt.style.display =='none'){
        belt.style.display = 'block';
    }
    else{
        belt.style.display = 'none';
    }
}
function toggleToy(){
    // dg.style.display = 'none';
    food.style.display = 'none';
    acc.style.display = 'none';
    belt.style.display = 'none';
    if(toy.style.display =='none'){
        toy.style.display = 'block';
    }
    else{
        toy.style.display = 'none';
    }
}
function toggleAcc(){
    // dg.style.display = 'none';
    food.style.display = 'none';
    belt.style.display = 'none';
    toy.style.display = 'none';
    if(acc.style.display =='none'){
        acc.style.display = 'block';
    }
    else{
        acc.style.display = 'none';
    }
}
