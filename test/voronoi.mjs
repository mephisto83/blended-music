import * as V from '../src/tools/voronoi'


var voronoi = new V.VoronoiBase();

// var web = voronoi.createWeb();
// console.log(web.diagram.cells[0]);

var web = V.VoronoiWeb.run({ height: 10, width: 10 });

console.log(web.faces[0]);