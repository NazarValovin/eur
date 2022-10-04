
"use strict";


document.addEventListener('DOMContentLoaded', () => {

    function questionItemClick() {
        const items = document.querySelectorAll('.questions__item-header');
        const bodyItems = document.querySelectorAll('.questions__item-body');
        const bodyItemsText = document.querySelectorAll('.questions__item-text');

        if (items.length > 0) {
            items.forEach((item, index) => {
                const textHeight = bodyItemsText[index].clientHeight;
                bodyItemsText[index].style.height = '0px';

                item.addEventListener('click', () => {
                    if (item.classList.contains('_active')) {
                        item.classList.remove('_active');
                        bodyItems[index].classList.remove('_active');
                        bodyItemsText[index].style.height = '0px';
                    } else {
                        item.classList.add('_active');
                        bodyItems[index].classList.add('_active');
                        bodyItemsText[index].style.height = `${textHeight}px`;
                    }
                });
            });
        }
    }
    questionItemClick();

    function resultInputs(outputs, result) {
        const resultNumber = Number(outputs[0].textContent) * Number(outputs[1].textContent);
        const res = resultNumber * 0.1;
        const num = Math.floor(res * 100) / 100;
        const str = String(num).replace('.', ',');
        if (Number.isInteger(num)) {
            result.textContent = str + ' тыс.';
        } else {
            result.textContent = str + '00 тыс.';
        }

    }


    function inputsRange() {
        const inputs = document.querySelectorAll('.calculating__inputs-item input');
        const outputs = document.querySelectorAll('.calculating__inputs-item output span');
        const result = document.querySelector('.calculating__result-number span');

        if (inputs.length > 0) {
            for (let index = 0; index < inputs.length; index++) {
                const input = inputs[index];
                outputs[index].textContent = input.value;
                resultInputs(outputs, result);

                input.addEventListener('input', () => {
                    outputs[index].textContent = input.value;
                    resultInputs(outputs, result);
                });
            }
        }
    }
    inputsRange();













});