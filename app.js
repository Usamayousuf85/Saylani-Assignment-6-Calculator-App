function getnum(num){
    var result = document.getElementById('text')
    result.value += num

}
function clearnum(){
    var result = document.getElementById('text')
    result.value = " "
}
function calnum(){
    var result = document.getElementById('text')
    result.value = eval(result.value)
}