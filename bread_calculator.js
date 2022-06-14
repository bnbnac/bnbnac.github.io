const reset = document.getElementById("reset");
const complete = document.getElementById("complete");
const calPi = document.getElementById("calPi");
const calThick = document.getElementById("calThick");

const samPi = document.getElementById("samPi");
const samThick = document.getElementById("samThick");
const samWeight = document.getElementById("samWeight");
const proWeight = document.getElementById("proWeight");
const proPi = document.getElementById("proPi");
const proThick = document.getElementById("proThick");

// // const density = samWeight / (((samPi / 2) ** 2) * samThick);
// const calThick = (proWeight.value / ((proPi.value / 2) ** 2)) / (samWeight.value / (((samPi.value / 2) ** 2) * samThick.value));
// const calPi = (proWeight.value / proThick.value) / (samWeight.value / (((samPi.value / 2) ** 2) * samThick.value));

function initiate(event){
    if(samPi.value * samThick.value * samWeight.value * proWeight.value > 0) {
        event.preventDefault();
        samPi.disabled=true;
        samThick.disabled=true;
        samWeight.disabled=true;
        proWeight.disabled=true;
        inputPro();
    } else {
        event.preventDefault(); 
        alert("<샘플>의 [파이,두께,무게], <공정>의 [무게]를 입력하세요");
    }
}

function inputPro(){
    proThick.disabled=false;
    proThick.placeholder="두께 입력"
    calThick.style="position:absolute;top: 330px;left: 1080px;width: 100px;height: 20px;"
    proPi.disabled=false;
    proPi.placeholder="파이 입력"
    calPi.style="position:absolute;top: 250px;left: 720px;width: 100px;height: 20px;"

}

function lastPi(event) {
    event.preventDefault();
    proThick.value = (proWeight.value / ((proPi.value / 2) ** 2)) / (samWeight.value / (((samPi.value / 2) ** 2) * samThick.value));
}

function lastThick(event) {
    event.preventDefault();
    proPi.value = Math.sqrt(4 * ((proWeight.value / proThick.value) / (samWeight.value / (((samPi.value / 2) ** 2) * samThick.value))));
}

complete.addEventListener("click", initiate);
calPi.addEventListener("click", lastPi);
calThick.addEventListener("click", lastThick);