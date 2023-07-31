var income = [];
function incoming(){    
    var sum = 0 ;
    let perticular = document.incomeForm.incomeItem.value;
    let amount = document.incomeForm.incomeAmt.value;
    let incomeData = {
        perticular : perticular,
        amount : amount
    }
    income.push(incomeData);
    console.log(income);
    var tab = "<table class='table'><tr><th style='width: 80%;'>Income</th><th style='width:20%'>Amount</th>";

    for (i=0 ; i<income.length ; i++){
        var details = income[i];
        tab += "<tr><td>" + details.perticular + "</td>" + "<td>" + details.amount + "</td></tr>";
        sum += Number(details.amount);
    }
    tab += "</table>"
    document.getElementById("sumIncome").innerHTML="Total income is ₹ " + sum +" only";
    document.getElementById('forTable').innerHTML=tab;
    localStorage.setItem('income',sum);
    update();
}
var expence = [];
function expencing(){    
    var sumExp = 0 ;
    let perticularExp = document.expenceForm.expenceItem.value;
    let amountExp = document.expenceForm.expenceAmt.value;
    let expenceData = {
        perticularExp : perticularExp,
        amountExp : amountExp
    }
    expence.push(expenceData);
    console.log(expence);
    var tabExp = "<table class='table' style = width:100%;><tr><th style='width: 80%;'>Expence</th><th style='width:20%'>Amount</th>";

    for (i=0 ; i<expence.length ; i++){
        var detailsExp = expence[i];
        tabExp += "<tr><td>" + detailsExp.perticularExp + "</td>" + "<td>" + detailsExp.amountExp + "</td></tr>";
        sumExp += Number(detailsExp.amountExp);
    }
    tabExp += "</table>"
    document.getElementById('forTable2').innerHTML=tabExp;
    document.getElementById("sumExpence").innerHTML="Total expence is ₹ " + sumExp +" only";
    localStorage.setItem('expence',sumExp);
    update();
}
function update(){
  var incomeSum=0;
  var expenceSum=0;
  if (localStorage.getItem("income")) {
      incomeSum = localStorage.getItem("income")
  }
  if (localStorage.getItem("expence")) {
      expenceSum = localStorage.getItem("expence")
  }
  
  var xValues = ["Income", "Expense"];
  var yValues = [incomeSum, expenceSum];
  var barColors = [
    "rgb(64, 220, 64)",
    "rgb(232, 83, 83)"
  ];
  
  new Chart("myChart", {
  
    type: "pie",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors,
        data: yValues
      }]
    },
  
  });
}
