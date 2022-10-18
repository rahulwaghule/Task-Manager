const N = 32;
let BinaryFormat = N.toString(2)
let BinaryGap = 0;
let tempCount = 0;
for (let i = 0; i < BinaryFormat.length; i++) {
    console.log(' i => ', i, ' BinaryGap => ', BinaryGap,' tempCount => ', tempCount,' BinaryFormat.charAt(i) => ', BinaryFormat.charAt(i));
    if (BinaryFormat.charAt(i) === '1') {
        if (BinaryGap < tempCount) {
            BinaryGap = tempCount;
        }
        tempCount = 0;
    }
    if (BinaryFormat.charAt(i) === '0') {
        tempCount++;
    }
}
console.log(BinaryFormat);
console.log(BinaryGap);