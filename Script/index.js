var tempid = 1;
var total = 0;

function result(){
    let divRes = document.getElementById("resultado");
    divRes.innerHTML = `<p>O resultado é ${total}</p>`
}
  
function calcAll(){
    let valores = [];
    for (let i = 0; i < tempid; i++){
        let input = document.getElementById(i);
        valores.push(Number(input.value));
    }
    console.log(valores)
    for (let j = 0; j < valores.length; j++){
        let h = j + 1
        if (h < valores.length) {
        if(j == 0){
        total = valores[j] + valores[h]
        }else{
            total = total + valores[h]
        }}
    }
    console.log(total)
    result();
}
function askBill(){
    let nb = document.getElementById("newBill")
    nb.style.display = "block";
}

function addBill(){
        let nome = document.getElementById("nome").value;
        
        let input = document.createElement("input");
        input.setAttribute("type", "number");
        input.setAttribute("name", nome);
        input.setAttribute("id", tempid++);

        let label = document.createElement("label");
        label.textContent = input.name;
        label.setAttribute("for", input.id);

        
        let contas  = document.getElementById("bills");

        contas.appendChild(label);
        contas.appendChild(input);
        input.parentNode.insertBefore(label, input);


        let nb = document.getElementById("newBill");
        nb.style.display = "none";
      
}
