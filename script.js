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
