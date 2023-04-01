var distArray=[], maleArray=[], femaleArray = [];
let maleCountEl = document.getElementById("maleCount");
let femaleCountEl = document.getElementById("femaleCount");
let malePercentEl = document.getElementById("malepercent");
let femalePercentEl = document.getElementById("femalepercent");


let ctx = document.getElementById('myChart');

//new chart creation
async function literacyDataChart(){
  //waiting for chart creation by getting data from the function
  await getData();
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: distArray,
      //datasets for display
      datasets: [
        {
          label: 'Male Literacy Rate',
          data: maleArray,
          borderWidth: 1,
          borderColor:"white",
          backgroundColor:"#EB455F",
        },
        {
          label: 'Female Literacy Rate',
          data: femaleArray,
          borderWidth: 1,
          borderColor:"white",
          backgroundColor:"#FFACAC",
        }
      ]
    },
    //configuration options
      options: {
          tooltips: {
              mode: 'index'
          }
      }
  })
};



//calling the function
literacyDataChart();



async function getData(){   
    //fetching data from JSON file
    const url= "literacyData.json"
    const response= await fetch(url)
    const chartData= await response.json()

    //storing chart data into arrays
    distArray= chartData.Districts
    maleArray = chartData.LiteracyRateMales
    femaleArray = chartData.LiteracyRateFemales

    //dashboard values for MaleCount
    total = 0
    value = chartData.Males 
    for (let i = 0; i < value.length; i++) { 
           total += value[i]; 
    }
    maleCountEl.textContent=total;
   
     //dashboard values for FemaleCount
     total = 0
     value = chartData.Females 
     for (let i = 0; i < value.length; i++) { 
            total += value[i]; 
     }
     femaleCountEl.textContent=total;

      //dashboard values for MaleCount Percentage
    total = 0
    value = chartData.LiteracyRateMales 
    for (let i = 0; i < value.length; i++) { 
           total += value[i]; 
    }
    total=parseInt(total/value.length)
    malePercentEl.textContent=total;
   
     //dashboard values for FemaleCount Percentage
     total = 0
     value = chartData.LiteracyRateFemales 
     for (let i = 0; i < value.length; i++) { 
            total += value[i]; 
     }
     total=parseInt(total/value.length)
     femalePercentEl.textContent=total;
    
    
}