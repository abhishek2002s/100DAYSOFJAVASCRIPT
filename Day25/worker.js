onmessage = function(data){
   const ans =  data.data.reduce((acc,items) => items+acc, 0);
   this.postMessage(ans);
}