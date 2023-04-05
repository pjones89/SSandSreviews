import { loadHeaderFooter, renderSeasonTemplate} from "./utils.mjs";
import showTitles from "../json/shows.json" assert {type: "json"};

loadHeaderFooter();
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const titleId = urlParams.get('titleId');
const season = urlParams.get('season');
//let entertainment = `movies`;
//const data = getJSON(entertainment);
let product = showTitles.find((item) => item.id === titleId);


//const dataSource = new ProductData("movies");
//const product = dataSource.findProductById(titleId);
const seasonTemplate = renderSeasonTemplate(product, season);
document.getElementById("season").innerHTML = seasonTemplate;