var dataSet = [
  {
    candidate: "Kamala Harris",
    endorsementsCount: 21
  },
  {
    candidate: "Joe Biden",
    endorsementsCount: 3
  },
  {
    candidate: "Julian Castro",
    endorsementsCount: 5
  },
  {
    candidate: "Bernie Sanders",
    endorsementsCount: 8
  },
  {
    candidate: "Cory Booker",
    endorsementsCount: 18
  },
  {
    candidate: "Elizabeth Warren",
    endorsementsCount: 5
  },
  {
    candidate: "John Delaney",
    endorsementsCount: 2
  },
  {
    candidate: "Beto O'Rourke",
    endorsementsCount: 5
  },
  {
    candidate: "Jay Inslee",
    endorsementsCount: 2
  },
  {
    candidate: "Amy Klobuchar",
    endorsementsCount: 10
  },
  {
    candidate: "John Hickenlooper",
    endorsementsCount: 1
  }
];

// select your svg element from the dom and add size attributes to define height and width
const svg = d3
  .select("svg")
  .attr("width", 200)
  .attr("height", 300);

const barPadding = 5;
const barWidth = 200 / dataSet.length;

// scale your chart to fit the data better

const endorsementsArray = dataSet.map(item => {
  return item.endorsementsCount;
});

const yScale = d3
  .scaleLinear()
  .domain([0, d3.max(endorsementsArray)])
  .range([0, 300]);

// create bar chart by appending svg shapes into the element. Define the placement and attributes for each data item
const barChart = svg
  .selectAll("rect")
  .data(dataSet)
  .enter()
  .append("rect")
  .attr("y", d => {
    return 300 - yScale(d.endorsementsCount);
  })
  .attr("height", d => {
    return yScale(d.endorsementsCount);
  })
  .attr("width", barWidth - barPadding)
  .attr("transform", (d, i) => {
    var translate = [barWidth * i, 0];
    return `translate(${translate})`;
  });
