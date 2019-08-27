d3.csv("indicator_4-1-1.csv").then(function(data) {
  createYearsArray(data);
});

var yearsArray = [];
var thirdGrade = [];
var sixthGrade = [];
var eleventhGrade = [];
var male = [];
var female = [];
var econDisadvantaged = [];
var notEconDisadvantaged = [];

createYearsArray = data => {
  for (let i = 0; i < data.length; i++) {
    yearsArray.push(data[i].Year++);
  }
  var years = [...new Set(yearsArray)];
  createValuesData(data, years);
};

createValuesData = (data, years) => {
  for (let i in data) {
    if (data[i].Grade == "Grade 3") {
      thirdGrade.push(data[i].Value);
    } else if (data[i].Grade == "Grade 6") {
      sixthGrade.push(data[i].Value);
    } else if (data[i].Grade == "Grade 11") {
      eleventhGrade.push(data[i].Value);
    } else if (data[i].Gender == "Male") {
      male.push(data[i].Value);
    } else if (data[i].Gender == "Famale") {
      female.push(data[i].Value);
    } else if (data[i].Poverty == "Economically Disadvantaged") {
      econDisadvantaged.push(data[i].Value);
    } else if (data[i].Poverty == "Not Economically Disadvantaged") {
      notEconDisadvantaged.push(data[i].Value);
    }
  }
  createChart(years, thirdGrade);
};

createChart = (years, thirdGrade) => {
  var ctx = document.getElementById("myChart");
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: years,
      datasets: [
        {
          data: thirdGrade,
          label: "3rd Grade",
          backgroundColor: "#3e95cd",
          fill: false
        },
        {
          data: sixthGrade,
          label: "6th Grade",
          backgroundColor: "#8e5ea2",
          fill: false
        },
        {
          data: eleventhGrade,
          label: "11th Grade",
          backgroundColor: "#3cba9f",
          fill: false
        },
        {
          data: male,
          label: "Male",
          backgroundColor: "#e8c3b9",
          fill: false
        },
        {
          data: female,
          label: "Female",
          backgroundColor: "#c45850",
          fill: false
        },
        {
          data: econDisadvantaged,
          label: "Economically Disadvantaged",
          backgroundColor: "#00FFFF",
          fill: false
        },
        {
          data: notEconDisadvantaged,
          label: "Not Economically Disadvantaged",
          backgroundColor: "#2F4F4F",
          fill: false
        }
      ]
    }
  });
};
