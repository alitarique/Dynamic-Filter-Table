let savedFilterModel = null;
  
/*function clearFilter() {
  gridApi.setColumnFilterModel("AKASH LCN", null)
  .then(() => {
    gridApi.onFilterChanged();
  });
  gridApi.setColumnFilterModel("TATA SKY LCN", null)
  .then(() => {
    gridApi.onFilterChanged();
  });
  gridApi.setColumnFilterModel("UCS LCN", null)
  .then(() => {
    gridApi.onFilterChanged();
  });
  gridApi.setColumnFilterModel("CHANNEL NAME", null)
  .then(() => {
    gridApi.onFilterChanged();
  });
  gridApi.setColumnFilterModel("Active L-Band Splitter", null)
  .then(() => {
    gridApi.onFilterChanged();
  });
  gridApi.setColumnFilterModel("Signal Input", null)
  .then(() => {
    gridApi.onFilterChanged();
  });
  gridApi.setColumnFilterModel("SRT", null)
  .then(() => {
    gridApi.onFilterChanged();
  });
  gridApi.setColumnFilterModel("SATELLITE", null)
  .then(() => {
    gridApi.onFilterChanged();
  });
  gridApi.setColumnFilterModel("Orbital Location", null)
  .then(() => {
    gridApi.onFilterChanged();
  });
  gridApi.setColumnFilterModel("POL", null)
  .then(() => {
    gridApi.onFilterChanged();
  });
  gridApi.setColumnFilterModel("FREQ", null)
  .then(() => {
    gridApi.onFilterChanged();
  });
}*/

// reset button
function clearFilter(){ 
  gridApi.setFilterModel(null);
}
function saveFilterModel() {
  savedFilterModel = gridApi.getColumnFilterModel("athlete");

  const convertTextFilterModel = (model) => {
    return `${model.type} ${model.filter}`;
  };
  const convertCombinedFilterModel = (model) => {
    return model.conditions
      .map((condition) => convertTextFilterModel(condition))
      .join(` ${model.operator} `);
  };

  let savedFilterString;
  if (!savedFilterModel) {
    savedFilterString = "(none)";
  } else if (savedFilterModel.operator) {
    savedFilterString = convertCombinedFilterModel(savedFilterModel);
  } else {
    savedFilterString = convertTextFilterModel(savedFilterModel);
  }

  document.querySelector("#savedFilters").innerText = savedFilterString;
}

function restoreFilterModel() {
  gridApi.setColumnFilterModel("athlete", savedFilterModel).then(() => {
    gridApi.onFilterChanged();
  });
}

function restoreFromHardCoded() {
  const hardcodedFilter = { type: "startsWith", filter: "Mich" };
  gridApi.setColumnFilterModel("athlete", hardcodedFilter).then(() => {
    gridApi.onFilterChanged();
  });
}
