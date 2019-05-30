window.onload = function(){
    comprobar();
}
var array=[];
const k=[5,2,3,8,9,10,1,11,6];
function comprobar(){
    for(m of k){
        let primo=true;
        for(i of k){
            if(i!=m && m%i==0 && i!=1){
                primo=false;
            }
        }

        if(primo==true){
            array.push(m);
        }
    }
    console.log(array);
}

