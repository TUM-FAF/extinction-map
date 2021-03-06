const extinctMammalsUrl =
  "https://en.wikipedia.org/w/api.php?origin=*&action=parse&page=List%20of%20recently%20extinct%20mammals&format=json";


async function getDummyHtml() {
  const res = await fetch(extinctMammalsUrl);
  const result = await res.json();
  const stringHtml = result["parse"]["text"]["*"];
  const dummyHtml = document.createElement("html");
  dummyHtml.innerHTML = stringHtml;

  return dummyHtml;
}

export async function parser() {
  const dummyHtml = await getDummyHtml();
  const table = dummyHtml.getElementsByClassName("wikitable sortable")[0];
  const tableBody = table.getElementsByTagName("tbody")[0];
  const rows = tableBody.getElementsByTagName("tr");

  const newRows = [...rows];
  newRows.shift();

  const formatedData = newRows
    .filter(currRow => {
      const cols = currRow.getElementsByTagName("td");
      if (cols.length === 6 && cols[5].getElementsByTagName("img").length > 0) {
        return true;
      }
      return false;
    })
    .map(currRow => {
      const cols = currRow.getElementsByTagName("td");
      const img = cols[5].getElementsByTagName("img")[0];

      const name = cols[0].innerText.replace(/(\r\n|\n|\r)/gm, "");
      const country = cols[4].innerText.replace(/(\r\n|\n|\r)/gm, "");
      const year = cols[3].innerText.replace(/(\r\n|\n|\r)/gm, "");
      const imgUrl = img.getAttribute("src");



      return {
        name,
        country,
        year: parseInt(year),
        imgUrl
      };
    })
    .filter(el => el.country);

  return formatedData;
}
