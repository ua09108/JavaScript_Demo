let employees = ["Mary","Candy","Lili","Jane"];


for(let e of employees.entries()){
    console.log(e);
}

for(let e of employees.entries()){
    console.log(e[0] + "," + e[1]);
}