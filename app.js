var distArray=[], maleCountLit=[], femaleCountLit = [], malePerLit = [], femalePerLit = [], totalMale = [], totalFemale=[],
urbanArray = [], urbanPer=[],ruralArray = [], ruralPer=[];


// 1) FETCHING THE DATA FROM JSON FILE
    async function getChartData(){   
      const url= "literacyData.json"
      const response= await fetch(url)
      const chartData= await response.json()

      //storing chart data into arrays
      distArray= chartData.Districts

      maleCountLit=chartData.Males
      femaleCountLit=chartData.Females

      malePerLit = chartData.LiteracyRateMales
      femalePerLit = chartData.LiteracyRateFemales

      totalMale=chartData.TotalMales
      totalFemale=chartData.TotalFemales

      urbanArray=chartData.Urban
      urbanPer=chartData.UrbanPopulation

      ruralArray=chartData.Rural
      ruralPer=chartData.RuralPopulation
    }


// 2) CHARTS DEFINITION
  async function literacyDataChart(){
      await getChartData();


    //chart-1 creation
      var barChart = document.getElementById('myChartBar');
      myChart1=new Chart(barChart, {
        type: 'bar',
        data: {
          labels: distArray,
          //datasets for display
          datasets: [
            {
              label: 'Male Literates',
              data: maleCountLit,
              borderWidth: 1,
              borderColor:"white",
              backgroundColor:"#EB455F",
            },
            {
              label: 'Female Literates',
              data: femaleCountLit,
              borderWidth: 1,
              borderColor:"white",
              backgroundColor:"#FFACAC",
            }
          ]
        },
        //chart configuration options
          options: {
              tooltips: {
                  mode: 'index'
              },
              scales: {
                x: {
                    ticks: {
                        font: {
                            size: 4
                        }
                    }
                }
              },
              plugins:{
                legend: {
                  display: true
                }
            }  
          }         
      })
    
      
    //chart-2 creation
      var doughnutChart = document.getElementById('myChartDoughnut');
      myChart2=new Chart(doughnutChart, {
        type: 'doughnut',
        data: {
          labels: distArray,
          //datasets for display
          datasets: [
            {
              label: 'Male LiteracyRate',
              data: malePerLit,
              borderWidth: 1,
              borderColor:"white",
              backgroundColor:"#EB455F",
            },
            {
              label: 'Female LiteracyRate',
              data: femalePerLit,
              borderWidth: 1,
              borderColor:"white",
              backgroundColor:"#FFACAC",
            }
          ]
        },
        //chart configuration options
          options: {
              tooltips: {
                  mode: 'index'
              },
              plugins:{
                legend: {
                  display: false
                }
            }   
          }      
      })

      //chart-3 creation
      var lineChart = document.getElementById('myChartLine');
      myChart3=new Chart(lineChart, {
        type: 'line',
        data: {
          labels: distArray,
          //datasets for display
          datasets: [
            {
              label: 'Total Male Population',
              data: totalMale,
              borderWidth: 1,
              borderColor:"green",
              tension: 0.9
            },
            {
              label: 'Total Female Population',
              data: totalFemale,
              borderWidth: 1,
              borderColor:"red",
              tension: 0.1
            }
          ]
        },
        //chart configuration options
          options: {
              tooltips: {
                  mode: 'index'
              },
              scales: {
                x: {
                    ticks: {
                        font: {
                            size: 4
                        }
                    }
                }
              },
              plugins:{
                legend: {
                  display: true
                }
            }  
          }         
      })
      

      //chart-4 creation
      var barChart2 = document.getElementById('myChartBar2');
      myChart4=new Chart(barChart2, {
        type: 'bar',
        data: {
          labels: distArray,
          //datasets for display
          datasets: [
            {
              label: 'Urban Population',
              data: urbanArray,
              borderWidth: 1,
              borderColor:"white",
              backgroundColor:"#EB455F",
            },
            {
              label: 'Rural Population',
              data:ruralArray,
              borderWidth: 1,
              borderColor:"white",
              backgroundColor:"#FFACAC",
            }
          ]
        },
        //chart configuration options
          options: {
              tooltips: {
                  mode: 'index'
              },
              scales: {
                x: {
                    ticks: {
                        font: {
                            size: 4
                        }
                    }
                }
              },
              plugins:{
                legend: {
                  display: true
                }
            }  
          }         
      })
      

      //chart-5 creation
      var mixedChart = document.getElementById('myChartMixed');
      myChart5=new Chart(mixedChart, {
        data: {
          labels: distArray,
          //datasets for display
          datasets: [
            {
              label: 'Urban %',
              type: 'bar',
              data: urbanPer,
              borderWidth: 1,
              borderColor:"white",
              backgroundColor:"	#9683ec",
            },
            {
              label: 'Rural %',
              type: 'line',
              data: ruralPer,
              borderWidth: 1,
              borderColor:"white",
              backgroundColor:"red",
            }
          ]
        },
        //chart configuration options
          options: {
              tooltips: {
                  mode: 'index'
              },
              plugins:{
                legend: {
                  display: true
                }
            }  
          }         
      })
  };

//3) CHART FUNCTION CALLING
literacyDataChart();


//4) DROPDOWN FUNCTION
let optionElement = document.getElementById('mylist');
optionElement.addEventListener("change", tracker);
function tracker(){
    const label = optionElement.options[optionElement.selectedIndex].text;
    myChart1.data.datasets.label = label;
    if(label==="Male"){
      myChart1.data.datasets[0].data = maleCountLit;
      myChart1.data.datasets[1].data = [];
      myChart2.data.datasets[0].data = malePerLit;
      myChart2.data.datasets[1].data = [];
      myChart3.data.datasets[0].data = totalMale;
      myChart3.data.datasets[1].data = [];

    }
    else 
    if(label==="Female"){
      myChart1.data.datasets[1].data = femaleCountLit;
      myChart1.data.datasets[0].data = [];
      myChart2.data.datasets[1].data = femalePerLit;
      myChart2.data.datasets[0].data = [];
      myChart3.data.datasets[1].data = totalFemale;
      myChart3.data.datasets[0].data = [];
    }
    else{
      myChart1.data.datasets[0].data = maleCountLit;
      myChart1.data.datasets[1].data = femaleCountLit;
      myChart2.data.datasets[0].data = malePerLit;
      myChart2.data.datasets[1].data = femalePerLit;
      myChart3.data.datasets[0].data = totalMale;
      myChart3.data.datasets[1].data = totalFemale;
    }
    myChart1.update();
    myChart2.update();
    myChart3.update();
}

