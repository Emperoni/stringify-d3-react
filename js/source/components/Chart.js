import React from 'react';
var d3 = require('d3');

class Chart extends React.Component{
  render() {
    return (
      <div className="Chart">
        <svg id="chart" height="400" width="600"></svg>
      </div>
    );
  }
  componentDidMount(){
  	{this._renderChart()}
  }
  _renderChart(){

	"use strict";
    
	var width = 500, height = 300;
	var data = [{'name': 'a', 'radius': 30, 'cx': 30, 'cy': 30}, 
		{'name': 'b', 'radius': 30, 'cx': 60, 'cy': 60}, {'name': 'c', 'radius': 30, 'cx': 90, 'cy': 90}];

	function chart(theSelection){

		var color = ['red', 'yellow', 'blue', 'orange', 'purple', 'black'];
		console.log(theSelection);
		theSelection.each(function(datum, i){
			// console.log(datum);
			var circle = d3.select(this).attr('class', 'data-item')
			    .attr('cx', datum.cx)
		        .attr('cy', datum.cy)
		        .attr('r', datum.radius)
		        .attr('fill',function(){ return color[i];})
		        .attr('stroke', 'black')
		        .attr('stroke-width', 1),

				svg = circle.selectAll('svg').data([data]),
				svgEnter = svg.enter();
				console.log('got this far');
				var drag = d3.drag().on('drag', dragListener); 
				circle.call(drag);
				console.log('got this far too');
		});

		function dragListener(d){
			var cx = +d3.select(this).attr('cx'),
			    cy = +d3.select(this).attr('cy');
			d3.select(this)
				.attr('cx', cx + d3.event.dx)
				.attr('cy', cy + d3.event.dy);
			circlePosition.html('x: ' + cx.toString() + ' y: ' + cy.toString());
			
		}

	}

	var chartEl = d3.select('#chart').selectAll('circle.data-item');
	console.log(chartEl);
	if(chartEl.empty()){
		console.log('selection is empty')
	} else {
		console.log('there is something.')
	}
	/*
	d3.select('#chart').selectAll('circle.data-item')
		.data(data)
		.enter()
		.append('circle')
		.attr('class', 'data-item')
		.call(chart);
	*/

	var div = d3.select('body').append('div',":first-child");
	div.insert('input')
		.attr('id', 'numberCircles')
		.attr('type', 'number')
		.attr('min', '1')
		.attr('max', '6');

	var circlePosition = div.append('p')
		.attr('id', 'circlePosition')
		.html('Enter a number from 1 to 6.')

	var input = d3.select('#numberCircles')
		.on('blur', function(){
			//console.log(input);
			let numberOfCircles = input._groups[0][0].value;
			
			let newData = [];
			for(let i = 0; i < numberOfCircles; i++){
					newData.push({'name': 'b', 'radius': 30, 'cx': parseInt(Math.random() * 400 + 30 ), 'cy': parseInt(Math.random() * 400 + 30)})
			}
			console.log(newData);
            console.log('call chart')
			chartEl
				.data(newData)
				.enter()
				.append('circle')
				.attr('class', 'data-item')
				.call(chart);

			console.log('sent new data')	
			
		})





  }
}

export default Chart