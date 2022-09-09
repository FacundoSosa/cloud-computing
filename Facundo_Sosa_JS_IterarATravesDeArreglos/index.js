let arr1 = [8, 6, 7, 5, 3, 0, 9];
let arr2 = [4, 7, 13, 13, 19, 37, -2];
let arr3 = [6, 2, 12, 14, -24, 5, 0];

//arr1
for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
}

//arr2
for (let i = 0; i < arr2.length; i++) {
    console.log(arr2[i] + i);
}

//arr3 y bonus ninja
for (let i = 0; i < arr3.length; i++) {
    if (arr3[i] > 5) {
        console.log(arr3[i]);
    } else {
        arr3[i] = "No hay dados"
    }
}


