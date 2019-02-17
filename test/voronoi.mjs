import * as V from '../src/tools/voronoi'


var voronoi = new V.VoronoiBase();

var web = voronoi.createWeb({ level: 10 });
console.log(web.diagram.cells.length);

// console.log(web.faces.length);
// console.log(web.diagram.cells[0]);
// console.log(web.diagram.cells[0].halfedges);
console.log(web);
// var web = V.VoronoiWeb.run({ height: 10, width: 10 });

// console.log(web.faces[0]);