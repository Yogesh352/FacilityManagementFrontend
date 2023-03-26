export const metricsData = ["Energy Consumption", "Energy Cost", "Occupancy"];
export const energyConsumptionDataW = new Map();
energyConsumptionDataW.set("SOB", {
  consumption: {
    label: "SOB",
    data: [40.96, 89.06, 65.46, 45.46, 89.55, 54.52, 71.24, 89.1],
    borderColor: "#2e6689",
    lineTension: 0.5,
    backgroundColor: "#2e6689",
    // look at this setting
    fill: "origin",
  },
  cost: {
    label: "SOB",
    data: [100, 110, 110.12, 130.46, 120.55, 40.52, 100.24, 90.1],
    borderColor: "#2e6689",
    lineTension: 0.5,
    backgroundColor: "#2e6689",
    // look at this setting
    fill: "origin",
  },
  occupancy: {
    label: "SOB",
    data: [72, 80, 30.46, 40.46, 89.55, 90.52, 30.24, 79.1],
    borderColor: "#2e6689",
    lineTension: 0.5,
    backgroundColor: "#2e6689",
    // look at this setting
    fill: "origin",
  },
});

energyConsumptionDataW.set("SCIS1", {
  consumption: {
    label: "SCIS1",
    lineTension: 0.5,
    data: [20.96, 65.06, 15.46, 34.46, 53.55, 24.52, 31.24, 59.1],
    borderColor: "#8EDCE6",
    backgroundColor: "#8EDCE6",
    fill: "origin",
  },
  cost: {
    label: "SCIS1",
    data: [100, 110, 110.12, 130.46, 120.55, 40.52, 100.24, 90.1],
    borderColor: "#8EDCE6",
    backgroundColor: "#8EDCE6",
    lineTension: 0.5,
  
    fill: "origin",
  },
  occupancy: {
    label: "SCIS1",
    data: [72, 80, 30.46, 40.46, 89.55, 90.52, 30.24, 79.1],
    lineTension: 0.5,
    borderColor: "#8EDCE6",
    backgroundColor: "#8EDCE6",
    fill: "origin",
  },
});

energyConsumptionDataW.set("LKS", {
  consumption: {
    label: "LKS",
    lineTension: 0.5,
    data: [20.96, 65.06, 15.46, 34.46, 53.55, 24.52, 31.24, 59.1],
    borderColor: "#D5DCF9",
    backgroundColor: "#D5DCF9",
    fill: "origin",
  },
  cost: {
    label: "LKS",
    data: [100, 110, 110.12, 130.46, 120.55, 40.52, 100.24, 90.1],
    borderColor: "#D5DCF9",
    backgroundColor: "#D5DCF9",
    lineTension: 0.5,
  
    fill: "origin",
  },
  occupancy: {
    label: "LKS",
    data: [72, 80, 30.46, 40.46, 89.55, 90.52, 30.24, 79.1],
    lineTension: 0.5,
    borderColor: "#D5DCF9",
    backgroundColor: "#D5DCF9",
    fill: "origin",
  },
});

energyConsumptionDataW.set("SOA", {
  consumption: {
    label: "SOA",
    lineTension: 0.5,
    data: [20.96, 65.06, 15.46, 34.46, 53.55, 24.52, 31.24, 59.1],
    borderColor: "#A7B0CA",
    backgroundColor: "#A7B0CA",
    fill: "origin",
  },
  cost: {
    label: "SOA",
    data: [100, 110, 110.12, 130.46, 120.55, 40.52, 100.24, 90.1],
    borderColor: "#A7B0CA",
    backgroundColor: "#A7B0CA",
    lineTension: 0.5,
  
    fill: "origin",
  },
  occupancy: {
    label: "SOA",
    data: [72, 80, 30.46, 40.46, 89.55, 90.52, 30.24, 79.1],
    lineTension: 0.5,
    borderColor: "#A7B0CA",
    backgroundColor: "#A7B0CA",
    fill: "origin",
  },
});

energyConsumptionDataW.set("SOE", {
  consumption: {
    label: "SOE",
    lineTension: 0.5,
    data: [20.96, 65.06, 15.46, 34.46, 53.55, 24.52, 31.24, 59.1],
    borderColor: "#443627",
    backgroundColor: "#443627",
    fill: "origin",
  },
  cost: {
    label: "SOE",
    data: [100, 110, 110.12, 130.46, 120.55, 40.52, 100.24, 90.1],
    borderColor: "#443627",
    backgroundColor: "#443627",
    lineTension: 0.5,
  
    fill: "origin",
  },
  occupancy: {
    label: "SOE",
    data: [72, 80, 30.46, 40.46, 89.55, 90.52, 30.24, 79.1],
    lineTension: 0.5,
    borderColor: "#443627",
    backgroundColor: "#443627",
    fill: "origin",
  },
});
