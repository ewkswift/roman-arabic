function arabicToRoman() {
    let arabicNum = prompt('Arabic Number')
    let arabic = [1, 5, 10, 50, 100, 500, 1000].reverse()
    let roman = ["I", 'V', "X", "L", "C", "D", "M"].reverse()
    let result = []
    for (let i = 0; i <= arabic.length; i++) {
        while (arabicNum >= arabic[i]) {
            result += roman[i]
            arabicNum -= arabic[i]
        }
    }
    alert(result)
}
arabicToRoman()
