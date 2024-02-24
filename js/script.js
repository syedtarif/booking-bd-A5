// getting all seat button
const seatButton = document.querySelectorAll('.seat-button');
let btnArray = [];

for (const button of seatButton) {
    button.addEventListener('click', function () {

        // validation for max seat select 4
        btnArray.push(button);

        if (btnArray.length > 4) {
            return alert('Maximum 4 seats you can select');
        }
        // clicked button style
        this.setAttribute('data-clicked', true);
        this.style.backgroundColor = '#1DD100';
        this.style.color = 'white';
        button.disabled = true;

        // seat left reduction
        const seatLeft = typeStringToNumber('seat-left');
        const remainSeat = seatLeft - 1;
        setInnerText('seat-left', remainSeat);

        // increase total seat cart
        const currentSeat = typeStringToNumber('seat-add');
        const totalSeat = currentSeat + 1;
        setInnerText('seat-add', totalSeat);

        // dynamically adding seats info
        const container = document.getElementById('seats-container');

        const div = document.createElement('div');
        const p1 = document.createElement('p');
        p1.innerText = button.innerText;

        const p2 = document.createElement('p');
        p2.innerText = 'economy';

        const p3 = document.createElement('p');
        p3.innerText = 550;

        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);
        container.appendChild(div);
        div.classList.add('flex', 'justify-between');

        // total price and grand price update
        const previousTotalSeat = totalSeat;
        const newTotalSeatPrice = previousTotalSeat * 550;

        setInnerText('total-price', newTotalSeatPrice);
        setInnerText('grand-total', newTotalSeatPrice);

    })
}


// coupon for get discount
const applyButton = document.getElementById('button-apply');
applyButton.addEventListener('click', function () {

    const inputValue = getInputValue('input-field');

    if (inputValue === 'NEW15') {
        const couponElement = document.getElementById('coupon-part');
        couponElement.classList.add('hidden');

        const totalPrice = typeStringToNumber('total-price');
        const discountedPrice = totalPrice * 15 / 100;
        const grandPrice = totalPrice - discountedPrice;
        setInnerText('grand-total', grandPrice);

    } else if (inputValue === 'Couple 20') {
        const couponElement = document.getElementById('coupon-part');
        couponElement.classList.add('hidden');

        const totalPrice = typeStringToNumber('total-price');
        const discountedPrice = totalPrice * 20 / 100;
        const grandPrice = totalPrice - discountedPrice;

        setInnerText('grand-total', grandPrice);
    } else {
        const inputField = document.getElementById('input-field');
        inputField.value = '';
        return alert('Your Coupon Code is incorrect');
    }
});

// next button for complete booking
const nextButton = document.getElementById('next-button');
nextButton.addEventListener('click', function () {

    const phoneNumberElement = document.getElementById('phone-number');
    const phoneNumber = parseInt(phoneNumberElement.value);
    phoneNumberElement.value = '';

    if (typeof phoneNumber != 'number' || isNaN(phoneNumber)) {
        alert('Put an valid phone number');
    }
    else {
        my_modal_5.showModal();
    }
})

// function for take the website reload and reset
function reload() {
    window.location.reload()
}


// -----------------------common function--------------------------------------------
function typeStringToNumber(id) {
    const elementString = document.getElementById(id);
    const element = parseInt(elementString.innerText);
    return element;
}

function setInnerText(id, value) {
    const getElement = document.getElementById(id);
    getElement.innerText = value;
}

function getInputValue(id) {
    const getInputElement = document.getElementById(id);
    const inputValue = getInputElement.value;
    return inputValue;
}




