// ***** new input ended here *******
var dateFilterParams = {
    filters: [
      {
        filter: "agDateColumnFilter",
        filterParams: {
          comparator: (filterDate, cellValue) => {
            if (cellValue == null) return -1;
  
            return getDate(cellValue).getTime() - filterDate.getTime();
          },
        },
      },
      {
        filter: "agSetColumnFilter",
        filterParams: {
          comparator: (a, b) => {
            return getDate(a).getTime() - getDate(b).getTime();
          },
        },
      },
    ],
  };
  
  /*let gridApi;
  
  const gridOptions = {
    columnDefs: [
      // { field: "athlete", filter: "agMultiColumnFilter" },
      { field: "athlete edited", filter: "agMultiColumnFilter" },
      { field: "age", filter: "agMultiColumnFilter" },
      { field: "year", filter: "agMultiColumnFilter" },
      { field: "sport", filter: "agMultiColumnFilter" },
      { field: "silver", filter: "agMultiColumnFilter" },
      { field: "bronze", filter: "agMultiColumnFilter" },
      { field: "total", filter: "agMultiColumnFilter" },
      {
        field: "country",
        filter: "agMultiColumnFilter",
        filterParams: {
          filters: [
            {
              filter: "agTextColumnFilter",
              filterParams: {
                defaultOption: "startsWith",
              },
            },
            {
              filter: "agSetColumnFilter",
            },
          ],
        },
      },
      {
        field: "gold",
        filter: "agMultiColumnFilter",
        filterParams: {
          filters: [
            {
              filter: "agNumberColumnFilter",
            },
            {
              filter: "agSetColumnFilter",
            },
          ],
        }, 
      },
      {
        field: "date",
        filter: "agMultiColumnFilter",
        filterParams: dateFilterParams,
      },
    ],
    defaultColDef: {
      flex: 1,
      minWidth: 200,
      menuTabs: ["filterMenuTab"],
    },
    sideBar: {
      toolPanels: ["filters"],
    },
  };*/

  // testdata field

  let gridApi;
  
  const gridOptions = {
    columnDefs: [
      // { field: "athlete", filter: "agMultiColumnFilter" },
      { field: "AKASH LCN", filter: "agMultiColumnFilter", pinned: 'left', maxWidth:125 },
      { field: "TATA SKY LCN", filter: "agMultiColumnFilter", pinned: 'left', maxWidth:140 },
      { field: "UCS LCN", filter: "agMultiColumnFilter", pinned: 'left', maxWidth:110 },
      { field: "CHANNEL NAME", filter: "agMultiColumnFilter", pinned: 'left', maxWidth:160 },
      { field: "Active L-Band Splitter", filter: "agMultiColumnFilter" },
      { field: "Signal Input", filter: "agMultiColumnFilter" },
      { field: "SRT", filter: "agMultiColumnFilter" },
      { field: "SATELLITE", filter: "agMultiColumnFilter" },
      { field: "Orbital Location", filter: "agMultiColumnFilter" },
      { field: "POL", filter: "agMultiColumnFilter" },
      { field: "FREQ", filter: "agMultiColumnFilter" },
      { field: "SR", filter: "agMultiColumnFilter" },
      { field: "Source Resolution", filter: "agMultiColumnFilter" },
      { field: "Video Codec", filter: "agMultiColumnFilter" },
      { field: "Audio Codec", filter: "agMultiColumnFilter" },
      { field: "SID", filter: "agMultiColumnFilter" },
      { field: "V PID", filter: "agMultiColumnFilter" },
      { field: "A PID 1", filter: "agMultiColumnFilter" },
      { field: "A PID 2", filter: "agMultiColumnFilter" },
      
    ],
    defaultColDef: {
      flex: 1,
      minWidth: 200,
      menuTabs: ["filterMenuTab"],
    },
    sideBar: {
      toolPanels: ["filters"],
    },
  };
  
  function getDate(value) {
    var dateParts = value.split("/");
    return new Date(
      Number(dateParts[2]),
      Number(dateParts[1]) - 1,
      Number(dateParts[0]),
    );
  }
  
  // setup the grid after the page has finished loading
  document.addEventListener("DOMContentLoaded", function () {
    var gridDiv = document.querySelector("#myGrid");
    gridApi = agGrid.createGrid(gridDiv, gridOptions);
  
    // fetch("https://www.ag-grid.com/example-assets/olympic-winners.json")
    fetch("/Data/testData.json")
    // fetch("D:/web development/Xampp/htdocs/php applications/Dynamic Filter Templet/Custom/Data/testData.json")
      .then((response) => response.json())
      .then((data) => gridApi.setGridOption("rowData", data),
    );
  });

// ************** row count ********
async function readJSONFile(url) {
    const response = await fetch(url);
    if (!response.ok) {
      console.log('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } 


async function rowCount() {
    const jsonData = await readJSONFile('/Data/testData.json');
    console.log(jsonData);
    // gridApi.setGridOption("rowData", jsonData);
    let services = jsonData.length;
    document.querySelector("#currentRowCount").textContent = `${services}`;
    console.log("function executed!");
    console.log(services);
    // Work with the JSON data here
}
rowCount();


  
  