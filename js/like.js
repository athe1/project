function f() {
    /*document.write("hello");*/
    document.getElementById('at').innerHTML = "����һ������";
}
function add(a, b) {
        return a + b;
}
function print() {
    /*document.write("document.write");
    window.alert("window.alert");*/
    console.log("console1");
}
var love = 0;
function like() {   
    love++;
    console.log(love);
    /*window.alert(love);
    document.write(love);    
    document.getElementsByClassName("sum").innerHTML = love;*/
    document.getElementById('at').innerHTML = love;
    
}
