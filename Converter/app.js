function Convert(){
    let m  = document.getElementById('meterinput')
    let cm = m.value * 100;
    let result = document.getElementById('result')
    let finalresult = m.value + "M is " + cm + "CM"
    result.innerText = finalresult 
    // To Make The Input Field Blank
    m.value = ''
}