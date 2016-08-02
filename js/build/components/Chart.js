'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var d3 = require('d3');

var Chart = function (_React$Component) {
	_inherits(Chart, _React$Component);

	function Chart() {
		_classCallCheck(this, Chart);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Chart).apply(this, arguments));
	}

	_createClass(Chart, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'Chart' },
				_react2.default.createElement('svg', { id: 'chart', height: '400', width: '600' })
			);
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			{
				this._renderChart();
			}
		}
	}, {
		key: '_renderChart',
		value: function _renderChart() {

			"use strict";

			var width = 500,
			    height = 300;
			var data = [{ 'name': 'a', 'radius': 30, 'cx': 30, 'cy': 30 }, { 'name': 'b', 'radius': 30, 'cx': 60, 'cy': 60 }, { 'name': 'c', 'radius': 30, 'cx': 90, 'cy': 90 }];

			function chart(theSelection) {

				var color = ['red', 'yellow', 'blue', 'orange', 'purple', 'black'];
				console.log(theSelection);
				theSelection.each(function (datum, i) {
					// console.log(datum);
					var circle = d3.select(this).attr('class', 'data-item').attr('cx', datum.cx).attr('cy', datum.cy).attr('r', datum.radius).attr('fill', function () {
						return color[i];
					}).attr('stroke', 'black').attr('stroke-width', 1),
					    svg = circle.selectAll('svg').data([data]),
					    svgEnter = svg.enter();
					console.log('got this far');
					var drag = d3.drag().on('drag', dragListener);
					circle.call(drag);
					console.log('got this far too');
				});

				function dragListener(d) {
					var cx = +d3.select(this).attr('cx'),
					    cy = +d3.select(this).attr('cy');
					d3.select(this).attr('cx', cx + d3.event.dx).attr('cy', cy + d3.event.dy);
					circlePosition.html('x: ' + cx.toString() + ' y: ' + cy.toString());
				}
			}

			var chartEl = d3.select('#chart').selectAll('circle.data-item');
			console.log(chartEl);
			if (chartEl.empty()) {
				console.log('selection is empty');
			} else {
				console.log('there is something.');
			}
			/*
   d3.select('#chart').selectAll('circle.data-item')
   	.data(data)
   	.enter()
   	.append('circle')
   	.attr('class', 'data-item')
   	.call(chart);
   */

			var div = d3.select('body').append('div', ":first-child");
			div.insert('input').attr('id', 'numberCircles').attr('type', 'number').attr('min', '1').attr('max', '6');

			var circlePosition = div.append('p').attr('id', 'circlePosition').html('Enter a number from 1 to 6.');

			var input = d3.select('#numberCircles').on('blur', function () {
				//console.log(input);
				var numberOfCircles = input._groups[0][0].value;

				var newData = [];
				for (var i = 0; i < numberOfCircles; i++) {
					newData.push({ 'name': 'b', 'radius': 30, 'cx': parseInt(Math.random() * 400 + 30), 'cy': parseInt(Math.random() * 400 + 30) });
				}
				console.log(newData);
				console.log('call chart');
				chartEl.data(newData).enter().append('circle').attr('class', 'data-item').call(chart);

				console.log('sent new data');
			});
		}
	}]);

	return Chart;
}(_react2.default.Component);

exports.default = Chart;