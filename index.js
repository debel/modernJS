import reveal from 'reveal.js';
import 'reveal.js/plugin/highlight/highlight.js';

import 'reveal.js/css/reveal.css';
import 'reveal.js/css/theme/black.css';
import 'reveal.js/lib/css/zenburn.css';

import * as d3 from 'd3';

reveal.initialize({
  width: 1024,
  height: 768,
  margin: 0.1,
  minScale: 0.1,
  maxScale: 1.3,
  transition: 'fade',
  transitionSpeed: 'fast',
  controls: true,
  history: true
});

hljs.initHighlightingOnLoad();

var w = 1280,
  h = 800,
  node,
  link,
  root;

const topics = [{
    name: "javascript"
  }, {
    name: "arrays"
  },
  {
    name: "front_end_frameworks"
  },
  {
    name: "linting"
  },
  {
    name: "observables"
  },
  {
    name: "scopes"
  },
  {
    name: "variables"
  },
  {
    name: "backend_frameworks"
  },
  {
    name: "functions"
  },
  {
    name: "loops"
  },
  {
    name: "operators"
  },
  {
    name: "security"
  },
  {
    name: "browser_apis"
  },
  {
    name: "gaming"
  },
  {
    name: "modules"
  },
  {
    name: "primitives"
  },
  {
    name: "source_maps"
  },
  {
    name: "conditionals"
  },
  {
    name: "hardware"
  },
  {
    name: "node_js_apis"
  },
  {
    name: "promises"
  },
  {
    name: "statements_and_expressions"
  },
  {
    name: "debugging"
  },
  {
    name: "history"
  },
  {
    name: "numbers-and-math"
  },
  {
    name: "prototypes"
  },
  {
    name: "testing"
  },
  {
    name: "event_loop"
  },
  {
    name: "language-structure"
  },
  {
    name: "objects"
  },
  {
    name: "resolving_and_loading"
  },
  {
    name: "transpilers"
  }
];


var links = topics
  .filter(topic => topic.name !== 'javascript')
  .map(topic => ({
    source: topic.name,
    target: "javascript"
  }));

var link_force = d3.forceLink(links)
  .id(function(d) {
    return d.name;
  })

function tick() {
  node
    .attr("cx", function(d) {
      return d.x;
    })
    .attr("cy", function(d) {
      return d.y;
    });

  link
    .attr("x1", function(d) {
      return d.source.x;
    })
    .attr("y1", function(d) {
      return d.source.y;
    })
    .attr("x2", function(d) {
      return d.target.x;
    })
    .attr("y2", function(d) {
      return d.target.y;
    });
}

var force = d3.forceSimulation(topics)
  .force("charge_force", d3.forceManyBody())
  .force("center_force", d3.forceCenter(w / 2, h / 2))
  .force("links", link_force)
  .on("tick", tick);

var vis = d3.select("#content_map")
  .append("svg:svg")
  .attr("width", w)
  .attr("height", h);

var node = vis.append("g")
  .attr("class", "nodes")
  .selectAll("circle")
  .data(topics)
  .enter()
  .append("circle")
  .attr("r", () => 30 + Math.floor(Math.random() * 15))
  .attr("fill", () => `#${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`);

node.append("text")
  .text((node) => node.name);


var link = vis.append("g")
  .attr("class", "links")
  .selectAll("line")
  .data(links)
  .enter()
  .append("line")
  .attr("stroke-width", 2);
