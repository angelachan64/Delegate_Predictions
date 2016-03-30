console.log("begin");

var count = 0;
var class_count = 0;

d3.select("#chart")
  .selectAll("div")
  .data(data)
  .enter().append("div")
    .text(function(d){
      while(count<11){
        if(count==0){
          count++;
          return d["state"];
        } else if(count==1) {
          count++;
          console.log(d["state"]);
          return d["trump_p"];
        } else if(count==2){
          count++;
          return d["trump_a"];
        } else if(count==3){
          count++;
          return d["cruz_p"];
        } else if (count == 4) {
          count++;
          return d["cruz_a"];
        } else if(count==5){
          count++;
          return d["kasich_p"];
        } else if (count == 6) {
          count++;
          return d["kasich_a"];
        } else if(count==7){
          count++;
          return d["clinton_p"];
        } else if (count == 8) {
          count++;
          return d["clinton_a"];
        } else if(count==9){
          count++;
          return d["sanders_p"];
        } else if (count == 10) {
          count++;
          return d["sanders_a"];
        }
      } count=0;
    })
    .attr("class", function(){
      if(class_count<11){
        console.log(class_count);
        if(class_count==0){
          class_count++;
          return "state";
        } else if(class_count==10){
          class_count=0;
          return "results";
        } else{
          class_count++;
          return "results";
        }
      }
    });

console.log("end");