/*let a = 9;
if (a != 9) {
    console.log("TRUE");
}
else {
    console.log("FaLSE");
}*/

const button = document.querySelector('button');
const input = document.querySelector('.age');

button.onclick = () => {
    let num = +input.value;
    if (num >= 16 && num < 60) {
        console.log("Welcome");
    }
    else if (num > 60) {
        console.log("Don't normally age");
    }
    else {
        console.log("Don't entry");
    }
    switch (num) {
        case 15:
            console.log('NOT AGE');
            break;
        case 16:
            console.log('YEP AGE');
            break;
        default:
            console.log("OK");

    }
}

let a = 5;
console.log(a > 3 || a < 7);
//1
let b = 4;
if (b == 7) {
    console.log("OK");
} else {
    console.log("NOT");
}

//2
let c = 10;
let d = 12;
if (c > d) {
    console.log("C больше D");
} else if (c == d) {
    console.log("D равен C");
} else {
    console.log("D больше C");
}
//4
let inEvent1 = document.querySelector('.in-event1');
let inEvent2 = document.querySelector('.in-event2');
const button1 = document.querySelector('.comparis');
const disPlay = document.querySelector('.out');

button1.onclick = () => {

    let a = inEvent1.value;
    let b = inEvent2.value;

    if (a == b) {
        disPlay.innerHTML = 'Они равны';
        console.log('Они равны');
    } else {
        disPlay.innerHTML = 'Они не равны';
        console.log("ОНи не равны");
    }
}
//5
let inEvent3 = document.querySelector('.in-event3');
const button2 = document.querySelector('.button');
const disPlay2 = document.querySelector('.out2');
button2.onclick = () => {
    let c = inEvent3.value;
    let year = 2019;
    let age = year - c;
    let comp = 2000;
    if (c >= comp) {
        console.log("Years old = " + age);
        //disPlay2.innerHTML += age;
    } else
        disPlay2.innerHTML += age;
    //console.log("Years old = " + age);
}
//7
let inputNull = document.querySelector('.nul');
let button3 = document.querySelector('.button3');
const disPlay3 = document.querySelector('.out3');

button3.onclick = () => {
    let f = inputNull.value;
    if (f >= 0) {
        disPlay3.innerHTML = 'Число большe или равно 0';
    } else {
        disPlay3.innerHTML = 'Число меньше 0';
    }

}
//8
let button4 = document.querySelector('.button4');
let inputIn = document.querySelector('.in-event4');
let out4 = document.querySelector('.out4');
button4.onclick = () => {
    let g = inputIn.value;
    let h = 2;
    let j = g % h;
    if (j == 0) {
        out4.innerHTML += 'Число четное';
    } else {
        out4.innerHTML += 'Число нечетное';
    }
}
//10
let butname = document.querySelector('.butname');
let inputIn5 = document.querySelector('.in-event5');
let out5 = document.querySelector('.out5');
butname.onclick = () => {
    let k = inputIn5.value;
    console.log("Name" + k);
    if (k == '' || k == ' ') {
        alert("ВВедите имя");
        out5.innerHTML = "ВВедите имя";
    } else {
        out5.innerHTML = "hello " + " " + k;
        alert("hello " + " " + k);
    }

}

//11
let button6 = document.querySelector('.button6');
let inputIn6 = document.querySelector('.in-event6');
let out6 = document.querySelector('.out6');
button6.onclick = () => {
    let l = inputIn6.value;
    l = l.trim();
    if (l == "") {
        out6.innerHTML = "Ошибка пустой строки";
    } else {
        out6.innerHTML = "hello " + " " + l;
    }
}
//13
let inputIn7 = document.querySelector('.in-event7');
let eButton = document.querySelector('.button7');
let out7 = document.querySelector('.out7');

eButton.onclick = () => {
    let i7 = inputIn7.value;
    console.log("#" + i7);
    if (i7 > 0 && i7 <= 5) {
        out7.innerHTML = "Улица №1";
    } else if (i7 > 5 && i7 <= 12) {
        out7.innerHTML = "Улица №2";
    } else if (i7 > 12 && i7 <= 20) {
        out7.innerHTML = "Улица №3";
    } else {
        console.log(" Not a number ");
    }

}


let out8 = document.querySelector('.out8');
let inputIn8 = document.querySelector('.in-event8');
let button8 = document.querySelector('.button8');

button8.onclick = () => {
    let i8 = inputIn8.value;
    console.log("Rentgen= " + i8);
    if (i8 > 0 && i8 < 25) {
        out8.innerHTML = "All right";
    } else if (i8 >= 25 && i8 < 50) {
        out8.innerHTML = "decrease in the number of lymphocytes";
    } else if (i8 >= 50 && i8 <= 100) {
        out8.innerHTML = "lethargy, vomiting";
    } else if (i8 >= 100 && i8 < 150) {
        out8.innerHTML = "mortality 5%";
    } else if (i8 >= 150 && i8 < 350) {
        out8.innerHTML = "mortality of 50% for 30 days";
    } else if (i8 >= 350 && i8 < 600) {
        out8.innerHTML = "90% mortality in 2 weeks";
    } else if (i8 >= 600) {
        out8.innerHTML = "mortality rate 100%";
    }
}

let out9 = document.querySelector('.out9');
let inInput9 = document.querySelector('.in-event9');
let button9 = document.querySelector('.button9');

button9.onclick = () => {
    let i9 = inInput9.value;
    console.log(" Result" + i9);

    if (i9 > 0 && i9 < 499) {
        out9.innerHTML = "2525 тенге"
    } else if (i9 >= 500 && i9 < 1199) {
        out9.innerHTML = "5050 тенге"
    } else if (i9 >= 1200 && i9 < 1599) {
        out9.innerHTML = "8275 тенге"
    } else if (i9 >= 1609 && i9 < 1899) {
        out9.innerHTML = "9675 тенге"
    } else if (i9 >= 1900 && i9 < 1999) {
        out9.innerHTML = "11075 тенге"
    } else if (i9 >= 2000) {
        out9.innerHTML = "15000 тенге"
    }
}