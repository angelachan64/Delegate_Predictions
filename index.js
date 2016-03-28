console.log("begin");

var count = 0;

d3.select(".asdf")
  d3.select(".state")
    .selectAll("div")
      .data(data)
    .enter().append("div")
      .text(function(d){
          return d["state"];
      });
    d3.select(".chart")
      .selectAll("div")
        .data(data)
      .enter().append("div")
        .text(function(d){
             return d["trump_p"];
        });

console.log("end");