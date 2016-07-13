import './vendor.js';
import React from 'react';
import ReactDOM from 'react-dom';
import InputElement from './../InputElement.js';

function phone1() {
    ReactDOM.render(React.createElement(InputElement, {
        mask: "+4\\9 99 999 99",
        maskChar: null
    }), document.getElementById("phone1"));
}

function phone2() {
    ReactDOM.render(React.createElement(InputElement, {
        mask: "+7 (999) 999-99-99? x 9999",
        placeholder: '+7 (999) 999-99-99 x 9999',
        defaultValue: "(123) 123-3333",
        alwaysShowMask: false,
    }), document.getElementById("phone2"));
}

function date1() {
    const date = new Date();
    let defaultValue = date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear();
    defaultValue = defaultValue.replace(/^(\d)-/, "0$1-").replace(/-(\d)-/, "-0$1-");
    const date1 = document.getElementById("date1");
    const date1code = document.getElementById("date1-code");
    date1code.innerHTML = date1code.innerHTML.replace("01-01-2015", defaultValue);
    ReactDOM.render(React.createElement(InputElement, { mask: "99-99-9999", defaultValue: defaultValue }), date1);
}

function date2() {
    const date = new Date();
    let defaultValue = date.getMonth() + "/" + date.getDate() + "/" + date.getFullYear();
    defaultValue = defaultValue.replace(/^(\d)\//, "0$1/").replace(/\/(\d)\//, "/0$1/");
    const date2 = document.getElementById("date2");
    ReactDOM.render(React.createElement(InputElement, { mask: "99/99/9999", placeholder: "Enter birthdate" }), date2);
}

function card1() {
    let cardValue = "";
    let cardMask = "9999-9999-9999-9999";
    const onCardChange = function (event) {
        const val = event.target.value;
        if (/^3[47]/.test(val)) {
            cardMask = "9999-999999-99999";
        }
        else {
            cardMask = "9999-9999-9999-9999";
        }
        cardValue = val;
        const cardElement = React.createElement(InputElement, {
            mask: cardMask,
            onChange: onCardChange,
            value: cardValue
        });
        ReactDOM.render(cardElement, card1);
    };
    const card1 = document.getElementById("card1");
    const cardElement = React.createElement(InputElement, { mask: cardMask, onChange: onCardChange, value: cardValue });
    ReactDOM.render(cardElement, card1);
}

phone1();
phone2();
date1();
date2();
card1();

