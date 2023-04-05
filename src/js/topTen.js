import { loadHeaderFooter } from "./utils.mjs";
import { topTenTemplate } from "./utils.mjs";

loadHeaderFooter();

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
export const entertainment = urlParams.get('entertainment');

topTenTemplate(entertainment);

