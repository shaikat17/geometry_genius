const btns = document.getElementsByTagName('button')
const showArea = document.getElementById('calculation-area')
const cards = document.querySelectorAll('.card')
let serial = 1

// will show the result on the area calculation section
const showBox = (id, result, validationValue) => {
    if(validationValue) {
      let div = document.createElement("div");
      div.innerHTML = `<span>${serial}</span><span class='capitalize'>${id}</span><span>${result} cm<sup>2</sup></sub></sub></span><span class="bg-sky-500 w-30 h-8 text-white p-2 rounded text-xs">Convert to m<sup>2</sup></span>`;
      div.classList.add("py-3", "flex", "justify-evenly");
      showArea.appendChild(div);

      serial += 1;
    }
};

// will clear the input box when the result is calculated
const clearInput = (id) => {
    let input_1 = document.getElementById(`${id}-input1`).value = '';
    let input_2 = document.getElementById(`${id}-input2`).value = '';
}

// will check the user input wheather is it valid or not
const validationFn = (id, input_1, input_2) => {
    if(Number.isInteger(input_1) && Number.isInteger(input_2)) return true;
    else {
        document.getElementById(`${id}-input1`).value = 'Please Enter Valid Number';
        document.getElementById(`${id}-input2`).value =
          "Please Enter Valid Number";

        return false;
    }
}

// this will check the geometry type and return the valid result
const geometryCalculation = (id, mulValue) => {
    let result = 0;
    switch(id) {
        case 'triangle':
            result = 0.5 * mulValue;
            break;
        case 'rectangle':
            result = mulValue;
            break;
        case 'parallelogram':
            result = mulValue;
            break;
        case 'rhombus':
            result = 0.5 * mulValue;
            break;
        case 'pentagon':
            result = 0.5 * mulValue;
            break;
            case 'ellipse':
                result = Math.PI * mulValue;
                break;
    }

    return result.toFixed(2);
}

// this the common multiply function
const multiply = (input_1, input_2) => {
    return input_1*input_2;
}

// this function will get the user input 
const getInput = (id) => {
    // console.log(id);
    let input_1 = parseInt(document.getElementById(`${id}-input1`).value);
    let input_2 = parseInt(document.getElementById(`${id}-input2`).value);
    clearInput(id);
    const validationValue = validationFn(id, input_1, input_2)
    
    return [input_1, input_2, validationValue];
}

// will tigger when user click the calculate btn
for(btn of btns){
    btn.addEventListener('click', (e) => {
        e.preventDefault()
        let attrValue = e.target.getAttribute('id')
        // console.log(attrValue);
        const [input_1, input_2, validationValue] = getInput(attrValue)
        const result = geometryCalculation(attrValue, multiply(input_1, input_2))

        showBox(attrValue, result, validationValue);
        // console.log(result);
    })
}

// console.log(btns)

// card background color

const getRandomColor = () => {
    var letters = "0123456789ABCDEF";

    // html color code starts with #
    var color = "#";

    // generating 6 times as HTML color code consist
    // of 6 letter or digits
    for (var i = 0; i < 6; i++)
      color += letters[Math.floor(Math.random() * 16)];

    return color;
}

// console.log(cards)
for(let i=0; i<cards.length; i++) {
    cards[i].addEventListener('mouseover', (e) => {
        e.stopImmediatePropagation();
        // if(e.target.classList.contains('card')) {
        //     let color = getRandomColor()
        //     cards[i].style.backgroundColor = color;
        // }
        let color = getRandomColor()
            cards[i].style.backgroundColor = color;
    })
}