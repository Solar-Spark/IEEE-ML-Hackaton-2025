import * as d3 from 'd3';
import PropTypes from 'prop-types';
import React, { useEffect, useRef } from 'react';
import './BarChart.css';

const BarChart = ({ data }) => {
  const chartRef = useRef();

  useEffect(() => {
    // Clear previous chart
    d3.select(chartRef.current).selectAll('*').remove();

    // Setup dimensions
    const width = 500;
    const height = 400;
    const margin = { top: 20, right: 30, bottom: 60, left: 40 };

    const svg = d3.select(chartRef.current)
      .attr('width', width)
      .attr('height', height);

    // Setup scales
    const x = d3.scaleBand()
      .domain(data.map(d => d.company))
      .range([margin.left, width - margin.right])
      .padding(0.1);

    const y = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.amount)]).nice()
      .range([height - margin.bottom, margin.top]);

    // Draw bars
    svg.append('g')
      .selectAll('rect')
      .data(data)
      .join('rect')
        .attr('x', d => x(d.company))
        .attr('y', d => y(d.amount))
        .attr('height', d => y(0) - y(d.amount))
        .attr('width', x.bandwidth())
        .attr('fill', 'steelblue');

    // Add x-axis
    svg.append('g')
      .attr('transform', `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(x))
      .selectAll('text')
        .attr('transform', 'rotate(-40)')
        .style('text-anchor', 'end');

    // Add y-axis
    svg.append('g')
      .attr('transform', `translate(${margin.left},0)`)
      .call(d3.axisLeft(y));
  }, [data]);

  return (
    <svg ref={chartRef}></svg>
  );
};

BarChart.propTypes= {
  data: PropTypes.arrayOf(PropTypes.shape({
    company: PropTypes.string,
    amount: PropTypes.number,
  })),
};

export default BarChart;
