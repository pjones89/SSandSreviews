// wrapper for querySelector...returns matching element
export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}
// or a more concise version if you are into that sort of thing:
// export const qs = (selector, parent = document) => parent.querySelector(selector);

// retrieve data from localstorage
export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
// save data to local storage
export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

export function renderSeasonTemplate(title, season){
  let template = ``;
  for (let i = 0; i < title.seasons.length; i++){
    if (title.seasons[i].season == season) {
      template += `<h1>${title.ranking} - ${title.title}</h1>
  <h2>Season ${title.seasons[i].season}</h2>
  <div class="hero bannerImg">
    <img id="bannerImg" src="${title.seasons[i].seasonImage}" alt="${title.title} Season ${title.seasons[i].season} Banner"/>
  </div>
  <section class="mission">
    <h3>My Review</h3>
    <h4 style="color:red">*Spoiler Warning*</h4>
    <p>${title.seasons[i].review}</p>
  </section>`;
template += `<h3>Episodes</h3>
<table style="width:50%;margin-left:25%">
<tr>
  <th></th>
  <th></th>
  <th></th>
</tr>`
for (let x = 0; x < title.seasons[i].episodes.length; x++){
template += `
<tr>
  <td>${title.seasons[i].episodes[x].episode}</td>
  <td>${title.seasons[i].episodes[x].epTitle}</td>
  <td>${title.seasons[i].episodes[x].rating}</td>
</tr>`;
}
template += `</table>`;

template += `<h3>My Rating</h3>
  <div class="rating">${title.seasons[i].rating}</div>`;
    }
  }
  
return template;
}

export function renderTitleTemplate(title){
let template = ``;
template += `<h1>${title.ranking} - ${title.title}</h1>
      <div class="hero bannerImg">
        <img id="bannerImg" src="${title.wideImage}" alt="${title.title} Banner"/>
      </div>
      <section class="mission">
        <h3>My Review</h3>
        <p>${title.review}</p>
      </section>`;
if (title.seasons) {
  template += `<h3>Seasons</h3>
      <ul>`;
  for (let i = 0; i < title.seasons.length; i++){
    template += `<li><a href="../season/index.html?season=${title.seasons[i].season}&titleId=${title.id}">${title.seasons[i].season}</a></li>`;
  }
  template += `</ul>`;
}
template += `<h3>My Rating</h3>
      <div class="rating">${title.rating}</div>
      <div class="wishlistAdd">
      <button id="addToCart" data-id="${title.id}">Add to Watch List</button>
      <div id="resultMessage"></div>
    </div>`;
return template;
}

export function topTenTemplate(type){
  let template = ``;
  if (type == "movies") {
    template += `<h1>My Top 10 Movies</h1>
    <ul>
        <li><a href="">10</a></li>
        <li><a href="#tenthMovie">9</a></li>
        <li><a href="#ninthMovie">8</a></li>
        <li><a href="#eighthMovie">7</a></li>
        <li><a href="#seventhMovie">6</a></li>
        <li><a href="#sixthMovie">5</a></li>
        <li><a href="#fifthMovie">4</a></li>
        <li><a href="#fourthMovie">3</a></li>
        <li><a href="#thirdMovie">2</a></li>
        <li><a href="#firstMovie">1</a></li>
    </ul>
    <table style="width:100%">
        <tr>
          <th>Ranking</th>
          <th>Title</th>
          <th>Poster</th>
        </tr>
        <tr>
            <td>10</td>
            <td><a id="tenthMovie" class="font-effect-outline" href="../specificTitle/index.html?titleId=11MO42">Megamind</a></td>
            <td><img src="../images/movies/Me/Me Poster.jpg" alt="Megamind" style="width:200px"></td>
        </tr>
        <tr>
            <td>9</td>
            <td><a id="ninthMovie" class="font-effect-outline" href="../specificTitle/index.html?titleId=11MO41">Dan in Real Life</a></td>
            <td><img src="../images/movies/DIRL/DIRL Poster.jpg" alt="Dan in Real Life" style="width:200px"></td>
        </tr>
        <tr>
            <td>8</td>
            <td><a id="eighthMovie" class="font-effect-outline" href="../specificTitle/index.html?titleId=11MO40">Remember the Titans</a></td>
            <td><img src="../images/movies/RTT/RTT Poster.jpg" alt="Remember the Titans" style="width:200px"></td>
        </tr>
        <tr>
            <td>7</td>
            <td><a id="seventhMovie" class="font-effect-outline" href="../specificTitle/index.html?titleId=11MO39">Hot Rod</a></td>
            <td><img src="../images/movies/HR/HR Poster.jpg" alt="Hot Rod" style="width:200px"></td>
        </tr>
        <tr>
            <td>6</td>
            <td><a id="sixthMovie" class="font-effect-outline" href="../specificTitle/index.html?titleId=11MO38">Mission Impossible: Fallout</a></td>
            <td><img src="../images/movies/MIF/MIF Poster.jpg" alt="Mission Impossible: Fallout" style="width:200px"></td>
        </tr>
        <tr>
            <td>5</td>
            <td><a id="fifthMovie" class="font-effect-outline" href="../specificTitle/index.html?titleId=11MO37">Inception</a></td>
            <td><img src="../images/movies/In/In Poster.jpg" alt="Inception" style="width:200px"></td>
        </tr>
        <tr>
            <td>4</td>
            <td><a id="fourthMovie" class="font-effect-outline" href="../specificTitle/index.html?titleId=11MO36">Get Out</a></td>
            <td><img src="../images/movies/GO/GO Poster.jpg" alt="Get Out" style="width:200px"></td>
        </tr>
        <tr>
            <td>3</td>
            <td><a id="thirdMovie" class="font-effect-outline" href="../specificTitle/index.html?titleId=11MO35">Knives Out</a></td>
            <td><img src="../images/movies/KO/KO Poster.jpg" alt="Knives Out" style="width:200px"></td>
        </tr>
        <tr>
            <td>2</td>
            <td><a id="secondMovie" class="font-effect-outline" href="../specificTitle/index.html?titleId=11MO34">The Dark Knight</a></td>
            <td><img src="../images/movies/TDK/TDK Poster.jpg" alt="The Dark Knight" style="width:200px"></td>
        </tr>
        <tr>
            <td>1</td>
            <td><a id="firstMovie" class="font-effect-outline" href="../specificTitle/index.html?titleId=11MO33">The Other Guys</a></td>
            <td><img src="../images/movies/TOG/TOG Poster.jpg" alt="The Other Guys" style="width:200px"></td>
        </tr>
      </table>`;
  } else if (type == "shows") {
    template += `<h1>My Top 10 Shows</h1>
    <ul>
        <li><a href="">10</a></li>
        <li><a href="#tenthShow">9</a></li>
        <li><a href="#ninthShow">8</a></li>
        <li><a href="#eighthShow">7</a></li>
        <li><a href="#seventhShow">6</a></li>
        <li><a href="#sixthShow">5</a></li>
        <li><a href="#fifthShow">4</a></li>
        <li><a href="#fourthShow">3</a></li>
        <li><a href="#thirdShow">2</a></li>
        <li><a href="#firstShow">1</a></li>
    </ul>
    <table style="width:100%">
        <tr>
          <th>Ranking</th>
          <th>Title</th>
          <th>Poster</th>
        </tr>
        <tr>
            <td>10</td>
            <td><a id="tenthShow" class="font-effect-outline" href="../specificTitle/index.html?titleId=00TV31">Sherlock</a></td>
            <td><img src="../images/shows/Sh/Sh.jpg" alt="Sherlock" style="width:200px"></td>
        </tr>
        <tr>
            <td>9</td>
            <td><a id="ninthShow" class="font-effect-outline" href="../specificTitle/index.html?titleId=00TV30">Daredevil</a></td>
            <td><img src="../images/shows/DD/DD.jpg" alt="Daredevil" style="width:200px"></td>
        </tr>
        <tr>
            <td>8</td>
            <td><a id="eighthShow" class="font-effect-outline" href="../specificTitle/index.html?titleId=00TV29">Ted Lasso</a></td>
            <td><img src="../images/shows/TL/TL.jpg" alt="Ted Lasso" style="width:200px"></td>
        </tr>
        <tr>
            <td>7</td>
            <td><a id="seventhShow" class="font-effect-outline" href="../specificTitle/index.html?titleId=00TV28">Lost</a></td>
            <td><img src="../images/shows/Lo/Lo.jpg" alt="Lost" style="width:200px"></td>
        </tr>
        <tr>
            <td>6</td>
            <td><a id="sixthShow" class="font-effect-outline" href="../specificTitle/index.html?titleId=00TV27">Stranger Things</a></td>
            <td><img src="../images/shows/ST/ST.jpg" alt="Stranger Things" style="width:200px"></td>
        </tr>
        <tr>
            <td>5</td>
            <td><a id="fifthShow" class="font-effect-outline" href="../specificTitle/index.html?titleId=00TV26">The Office</a></td>
            <td><img src="../images/shows/TO/TO.jpg" alt="The Office" style="width:200px"></td>
        </tr>
        <tr>
            <td>4</td>
            <td><a id="fourthShow" class="font-effect-outline" href="../specificTitle/index.html?titleId=00TV25">I Think You Should Leave</a></td>
            <td><img src="../images/shows/ITYSL/ITYSL.jpg" alt="I Think You Should Leave" style="width:200px"></td>
        </tr>
        <tr>
            <td>3</td>
            <td><a id="thirdShow" class="font-effect-outline" href="../specificTitle/index.html?titleId=00TV24">Mr. Robot</a></td>
            <td><img src="../images/shows/MR/MR.jpg" alt="Mr. Robot" style="width:200px"></td>
        </tr>
        <tr>
            <td>2</td>
            <td><a id="secondShow" class="font-effect-outline" href="../specificTitle/index.html?titleId=00TV23">Breaking Bad</a></td>
            <td><img src="../images/shows/BB/BB.jpg" alt="Breaking Bad" style="width:200px"></td>
        </tr>
        <tr>
            <td>1</td>
            <td><a id="firstShow" class="font-effect-outline" href="../specificTitle/index.html?titleId=00TV22">Better Call Saul</a></td>
            <td><img src="../images/shows/BCS/BCS.jpg" alt="Better Call Saul" style="width:200px"></td>
        </tr>
      </table>`;
  }
  const htmlItems = [];
  htmlItems.push(template);
  document.querySelector(".topTenList").innerHTML = htmlItems.join("");
}
// set a listener for both touchend and click
export function setClick(selector, callback) {
  qs(selector).addEventListener("touchend", (event) => {
    event.preventDefault();
    callback();
  });
  qs(selector).addEventListener("click", callback);
}

export function renderWithTemplate(
  template,
  parentElement,
  data,
  callback) { parentElement.insertAdjacentHTML("afterbegin", template);
  if (callback) {
    callback(data);
  }
}

async function loadTemplate(path){
  let response = await fetch(path);
  let text = await response.text();
  return text;
}

export async function loadHeaderFooter() {
  let header_temp = await loadTemplate("../partials/header.html");
  let header_id = document.getElementById("main-header");

  let footer_temp = await loadTemplate("../partials/footer.html");
  let footer_id = document.getElementById("main-footer");

  renderWithTemplate(header_temp, header_id);
  renderWithTemplate(footer_temp, footer_id);
}
