console.log("begin");

var count = 0;
var marginc = 1;

d3.select("#chart")
  .selectAll("div")
  .data(data)
  .enter().append("div")
    .text(function(data){
      if(data!=-1){
        return data;
      } else{
        return "";
      }
    })
    .style("display", function(data){
      if(data==-1){
        return "block";
      } else{
        return "";
      }
    })
    .style("height", function(data){
      if(data==-1){
        return "10px";
      }
    })
    .style("background-color", function(data){
      if(data==-1 || isNaN(data)){
        return "rgba(0, 0, 0, 0)";
      } else{
        if(count%2==0){
          count++;
          return "#C999FF";
        } else if (count%10==1){
          count++;
          return "#B23535";
        } else if (count%10==3){
          count++;
          return "#D86161";
        } else if (count%10==5){
          count++;
          return "#FE9898";
        } else if (count%10==7){
          count++;
          return "#4C88FF";
        } else if (count%10==9){
          count++;
          return "#98BAFF";
        }
        else {
          count++;
          return "#262626";
        }
      }
    })
    .style("color", function(data){
      if(isNaN(data)){
        return "#262626";
      } else{
        if(data==0){
          return "#262626"
        } else{
          return "#FFFFFF";
        }
      }
    })
    .style("text-align", function(data){
      if(isNaN(data)){
        return "left";
      } else{
        return "right";
      }
    })
    .style("font", function(data){
      if(isNaN(data)){
        return "10px sans-serif bold";
      } else{
        return "12px sans-serif";
      }
    })
    .style("font-weight", function(data){
      if(isNaN(data)){
        return "bold";
      }
    })
    .style("margin-top", function(data){
      if(!isNaN(data) && data>-1){
        if(marginc%2==0){
          marginc++;
          return "-px";
        } else{
          marginc++;
          return "0px";
        }
      } else{
        return "0px";
      }
    })
    .style("width", function(data){
      if(isNaN(data)){
        var width="150px";
        return width;
      } else if(data==-1 || data==0){
        width="0px";
        return width;
      } else {
        console.log(data);
        width = data * 5.2;
        return width +"px";
      }
    });

/*
d3.select("#chart")
  .data(data)
  .text(function(){
      while(count < 56) {
        var tmp = [];
        state_array.push(data[count]["state"]);
        tmp = [
            data[count]["trump_p"], data[count]["trump_a"], data[count]["cruz_p"], data[count]["cruz_a"], data[count]["kasich_p"], data[count]["kasich_a"], data[count]["clinton_p"], data[count]["clinton_a"], data[count]["sanders_p"], data[count]["sanders_a"]
          ];
        result_array.push(tmp);
        count++;
      }
      count = 0;
      return null;
    });

d3.select("#chart")
  .selectAll("div")
  /*.data(result_array)
  .data(function(d){
    data_count++;
    var arr = d[data_count-1];
    return arr;
  })
  .enter().append("div")
    .text(function() {
      /*if (total_count<672){
        console.log(total_count);
        console.log(state_count);
        if (total_count%12==0){
          total_count++;
          state_count++;
          return state_array[state_count-1];
        } else{
          total_count++;
        }
      }
      if(total_count<672){
        if(total_count%12==0){
          total_count++;
          return arr["state"];
        } else{
          total_count++;
          return arr[(total_count--)%12]
        }
      }
    });
      /*
      while(count<11){
        if(count==0){
          count++;
          return d["state"];
        } if(count==1) {
            count++;
            console.log(d["state"]);
            return d["trump_p"];
        } if(count==2){
          count++;
          return d["trump_a"];
        } if(count==3){
          count++;
          return d["cruz_p"];
        }
        if (count == 4) {
          count++;
          return d["cruz_a"];
        }
        if(count==5){
          count++;
          return d["kasich_p"];
        } if (count == 6) {
          count++;
          return d["kasich_a"];
        } if(count==7){
          count++;
          return d["clinton_p"];
        } if (count == 8) {
          count++;
          return d["clinton_a"];
        } if(count==9){
          count++;
          return d["sanders_p"];
        } if (count == 10) {
          count++;
          return d["sanders_a"];
        }
      } count=0;
      */
    /*
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
    */

console.log("end");