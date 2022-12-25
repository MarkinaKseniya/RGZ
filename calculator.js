

let output = document.getElementById('output');
let btn = document.getElementsByClassName('calculator-body-number');

for(let i = 0; i<btn.length; i++){
    btn[i].addEventListener('click', (item) => {
        
        let allowedPoins = ['+','-','*','/','%']

        if(item.target.id === 'C'){
            output.value = '';
            return;
        }
        if(item.target.id === '=' && output.value !== ''){
            let result = eval(output.value);
            output.value = '';
            output.value = result;
        }
        if(!isNaN(item.target.id)){
            output.value += item.target.id;
        } else if (!allowedPoins.includes(output.value[output.value.length-1]) && item.target.id !== '='){
            output.value += item.target.id;
        }
        
        
    })
    
}

output.addEventListener('change', (item) => {
    console.log(item)
})
