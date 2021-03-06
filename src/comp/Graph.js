import React from 'react';
import { scaleLinear, line } from 'd3';

import '../css/Graph.css';

class Graph extends React.Component {
    // TODO function (elsewhere) to create data structure from MortageComparison functions
    // Probably keep this component as a 'graph it'
    // Add multiple lines at once functionality
    // Make SVG size responsive

    drawGraphSVG(width, height, data){
        const margin = {top: 20, right: 20, bottom: 30, left: 50};
        const plotWidth = width - margin.left - margin.right;
        const plotHeight = height - margin.top - margin.bottom;

        const xScale = scaleLinear()
            .rangeRound([0, plotWidth])
            .domain([0,4]);
            // TODO: Reconfigure domain so it adapts to arbitrary data

        const yScale = scaleLinear()
            .rangeRound([plotHeight, 0])
            .domain([0,5]);
            // TODO: Reconfigure domain so it adapts to arbitrary data

        const path = line()
            .x(function(d) { return xScale(d.x); })
            .y(function(d) { return yScale(d.y); });

        return (
            <svg width={this.props.width} height={this.props.height}>
                <g
                    className="plot"
                    transform={`translate(${this.props.margin.left},${this.props.margin.right})`}
                >
                    <path className='graph-line' d={path(data)} />
                    <g className='graph-axis x'>
                        <line x1={0} y1={plotHeight} x2={plotWidth} y2={plotHeight}/>
                    </g>
                    <g className='graph-axis y'>
                        <line x1={0} y1={0} x2={0} y2={plotHeight}/>
                    </g>
                </g>
            </svg>
        );
    }

    render(){
        return(
            <div className='conclusionSection' >
                <div className="section-header">{this.props.title}</div>
                <div className="graph">
                    {this.drawGraphSVG(this.props.width, this.props.height, this.props.dummyData)}
                </div>
            </div>
        )
    }
}

export default Graph;
