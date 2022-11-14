// function buttonClick() {
// 	var input = document.getElementById('input');
// 	input.value = '!!!';
// }
// function buttonClick() {
//     var in1 = input1.value;
//     var in2 = input2.value;
//     input1.value = in2;
//     input2.value = in1;
// }
// function buttonClick() {
//     inp.value = 'нет 22';
// }
// function buttonClick() {
//     var inp = document.getElementById('input')
//     inp.style.color = 'red'
// }
// function button1Click() {
//     x = document.getElementById('input')
//     x.disabled = false;
// }
// function button2Click() {
//     x = document.getElementById('input')
//     x.disabled = true;
// }
// function buttonClick() {
//     input.value = 'о, я поменял свой текст!'
// }
//monkey1 function go(){
//     elem = document.getElementById("elem")
//     elem.src = './assets/img/monkey1.jpg';
// }

//this1 function go() {
//     alert('Нажми на меня')
// }
//this2  function go() {
//         change.value = 'Я поменял свой текст!'
//     }
//this3 function go() {
//     change.value = 'Я поменял свой текст!'
//     }
// function no() {
//     change.value = 'Снова поменял!'
// }
//this4 function go() {
//     change.value = 'ку-ку'
// }
//this5 function go() {
//     document.getElementById('change').disabled = 'true'
//     change.value = 'теперь не нажать!'
// }
//this6 function go() {
//     element = document.getElementById('elem')
//     element.src = './assets/img/monkey2.jpg'
// }
// function no() {
//     element = document.getElementById('elem')
//     element.src = './assets/img/monkey1.jpg'
// }
//css1 function go() {
//     let btn = document.getElementById('elem')
//     btn.style.color = 'red'
//     btn.style.width = '30px'
// }
//css2 function hide() {
//     let btn = document.getElementById('elem')
//     btn.style.display = 'none'
// }
// function show() {
//     let btn = document.getElementById('elem')
//     btn.style.display = 'block'
// }
//css3 function go() {
//     elem.value = 'я поменял свой текст и css'
//     let go = document.getElementById('elem')
//     go.style.color = 'red'
//     go.style.height = '100px'
// }
//css4 function go() {
//     input = document.getElementById('change');
//     let blo = document.getElementById('unblock');
//     blo.style.display = 'block';
//     input.value = 'я заблокирован';
//     input.disabled = true;
// }
// function unblock1() {
//     let alo = document.getElementById('unblock');
//     alo.style.display = 'none';
//     input.value = 'нажми на меня снова';
//     document.getElementById('change').disabled = false;
// }
//css5 function goal() {
//     let count = counter.value;
//     counter.value = ++count;
// }
//css6 function go(){
//     elem = document.getElementById('elem');
//     elem.value = 'Теперь я плаваю справа!';
//     elem.style.cssFloat = 'right';
// }
//css7 function go(){
//     elem = document.getElementById('elem');
//     elem.value = 'Мои css классы: ' + elem.className;
// }
//1 function buttonClick() {
//     var in1 = input1.value;
//     var in2 = input2.value;
//     input1.value = in2;
//     input2.value = in1;
// }
//2 function go() {
//     let count = elem.value * elem.value;
//     result.value = count;
// }
//3 function go() {
//     document.getElementById('change').disabled = 'true'
//     change.style.cursor = 'not-allowed'
// }
//4 function add(text){
//     var input = document.getElementById('input');
//     input.value = input.value + text;
// }


// 2)


//1 function go() {
//     elem.innerHTML = "Ку-ку! я <b> жирный </b>"
// }
//2 function go() {
//     outerHTML = "<h3>теперь это h3</h3>"
// }
//3 function go() {
//     let elem = document.getElementById('elem')
//     elem.outerHTML = '<h3>'+elem.innerHTML+'</h3>'
// }
//4 function go() {
//     let elem = document.getElementsByTagName('p');
//     for (let al = 0; al < elem.length; al++) {
//         elem[al].innerHTML = 'ку-ку';
//     }
// }
//4 function go(){
//     var input1 = +document.getElementById('input1').value;
//     var input2 = +document.getElementById('input2').value;
//     var result = document.getElementById('result');
//     result.innerHTML = input1 + input2;
// }
//5 function go() {
//     let elem = document.getElementsByTagName('p');
//     for (let al = 0; al < elem.length; al++) {
//         elem[al].innerHTML = 'ку-ку';
//     }
// }
//6 function go() {
//     elem = document.getElementsByClassName('www')
//     for (let i = 0; i < elem.length; i++) {
//         elem[i].innerHTML = [i]
//     }
// }
//7 function go() {
//     elem = document.querySelectorAll('.www')
//     for (let i = 1; i < elem.length; i++) {
//         elem[i].innerHTML = [i]
//     }
// }
//8 function go(){
//     var elem = document.getElementById('elem');
//     alert(elem.getAttribute('class'));
// }
//9 function show(){
//     var elem = document.getElementById('elem');
//     alert(elem.getAttribute('class'));
// }
// function del(){
//     var elem = document.getElementById('elem');
//     elem.removeAttribute('class');
//     alert('Класс удален')
// }
//10 function show(){
//     var elem = document.getElementById('elem');
//     alert(elem.getAttribute('class'));
// }
// function del(){
//     var elem = document.getElementById('elem');
//     elem.setAttribute('class', 'new-class');
//     alert('Клсс изменен')
// }
//11 function go(elem){
//     var text = document.getElementById('text');
//     text.innerHTML = elem.value;
// }
//12 function go(){
//     var elements = document.getElementsByTagName('a');
//     for (var i = 0; i < elements.length; i++){
//         elements[i].innerHTML = elements[i].innerHTML+' ('+elements[i].getAttribute('href')+')';
//     }
// }
//13 function go(elem){
//     elem.disabled  =  true;
//     elem.value  =  'на меня нельзя больше нажать!';
//     var elem = document.getElementById('elem');
//     elem.innerHTML = 'hello privet!';
//     elem.style.color  =  'red';
// }
//14 function go(){
//     var elements = document.getElementsByTagName('p');
//     for (var i = 0; i < elements.length; i++){
//         elements[i].innerHTML = i;
//     }
// }
//15 function go(){
//     var elements = document.getElementsByTagName('p');
//     for (var i = 0; i < elements.length; i++){
//         elements[i].innerHTML = i + '. ' + elements[i].innerHTML;
//     }
// }