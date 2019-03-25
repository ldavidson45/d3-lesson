# Learning D3.js

D3.js is an opensource JavaScript library for creating data visualizations.

We have access to ridiculous amounts of data today, but massive repositories of data aren't really user-friendly. Data visualizations make this data easy to read and understand for the average person. D3.js allows web developers to implement highly custom and interactive data visualizations.

WHile there are many data visualization tools out there, D3 is a great choice for design-savvy people who want to set the look and feel of a visualization from scratch. It is also a great interactive tool because you can bind data values to objects, allowing for easy transformation of data, such as sorting or displaying additional information on a click.

## Getting Started

First, create a new project folder with an index.html. I've also added a script.js file and imported it for organization purposes.

In your index.html, add the following script tag in your head:

```
    <script src="https://d3js.org/d3.v5.min.js"></script>
```

Because D3 is an open source JavaScript library, we do not have to install it, we can just include the script tag. You can install it with:

```
npm install d3
```

Additional documentation for setup:

https://github.com/d3/d3/wiki#supported-environments

## Using D3

After you've set up your index.html, you can test out how D3 can modify dom elements. Try this:

1. Add this to your html file:

```
<h1>Hello World</h1>
```

2. Select and update the text by adding this to your .js file:

```
d3.select('h1').style("color", "red")
```

## Incorporate Data

In this example, I hardcoded presidential candidate endorsement data from [FiveThirtyEight](https://projects.fivethirtyeight.com/2020-endorsements/democratic-primary/ "data source") straight into my script.js file.

## Add An SVG

In your html file, add an empty svg element:

```
<svg> </svg>
```

Use D3 to select the svg element and set its height and width. We are going to make a simple bar chart, so you will also want to define the bar width and padding as well.

```
const height = 500;
const width = 800;
const barPadding = 5;
const barWidth = width / dataSet.length;

const svg = d3
  .select("svg")
  .attr("width", width)
  .attr("height", height);
```

To render your bar chart, add the following:

```
const barChart = svg
  .selectAll("rect")
  .data(dataSet)
  .enter()
  .append("rect")
  .attr("y", d => {
    return height - yScale(d.endorsementsCount);
  })
  .attr("height", d => {
    return yScale(d.endorsementsCount);
  })
  .attr("width", barWidth - barPadding)
  .attr("transform", (d, i) => {
    var translate = [barWidth * i, 0];
    return `translate(${translate})`;
  });
```

Explained in steps:

1. Select all rectangles in your svg (there aren't any right now)
2. Bind the data set you defined in your .js file to the chart.
3. The enter() method will take each data item and perform the following actions on each one
4. Append a rectangle for the bar
5. set the y-position (I've defined a yScale to fit the chart to my data)
6. Set the height
7. Set the width
8. Translate the bars so that they are spaced out properly

This is how you render elements that are connected to data points using D3!

## Additional Resources

- [Let's learn D3.js - D3 for data visualization (YouTube)](https://www.youtube.com/watch?v=C4t6qfHZ6Tw "D3 tutorial for beginners")
- [SVG text element (Jenkov.com)](http://tutorials.jenkov.com/svg/text-element.html "how to style svg text elements")
