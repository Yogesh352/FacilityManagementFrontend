export const metricsData = ["Energy Consumption", "Energy Cost", "Occupancy"];
export const energyConsumptionDataM = new Map();
energyConsumptionDataM.set("SOB", {
  consumption: {
    label: "SOB",
    data: [100.96, 106.06, 125.46, 150.46, 180.55, 190.52, 181.24, 195.1],
    borderColor: "#2e6689",
    lineTension: 0.5,
    backgroundColor: "#2e6689",
    // look at this setting
    fill: "origin",
  },
  cost: {
    label: "SOB",
    data: [1000, 1100, 1150.12, 1230.46, 1210.55, 400.52, 1000.24, 900.1],
    borderColor: "#2e6689",
    lineTension: 0.5,
    backgroundColor: "#2e6689",
    // look at this setting
    fill: "origin",
  },
  occupancy: {
    label: "SOB",
    data: [74, 84, 25.46, 45.46, 59.55, 94.52, 31.24, 79.1],
    borderColor: "#2e6689",
    lineTension: 0.5,
    backgroundColor: "#2e6689",
    // look at this setting
    fill: "origin",
  },
});

energyConsumptionDataM.set("SCIS1", {
  consumption: {
    label: "SCIS1",
    lineTension: 0.5,
    data: [100.96, 106.06, 125.46, 150.46, 180.55, 190.52, 181.24, 195.1],
    borderColor: "#8EDCE6",
    backgroundColor: "#8EDCE6",
    fill: "origin",
  },
  cost: {
    label: "SCIS1",
    data: [1000, 1100, 1150.12, 1230.46, 1210.55, 400.52, 1000.24, 900.1],
    
    lineTension: 0.5,
    borderColor: "#8EDCE6",
    backgroundColor: "#8EDCE6",
    // look at this setting
    fill: "origin",
  },
  occupancy: {
    label: "SCIS1",
    data: [74, 84, 25.46, 45.46, 59.55, 94.52, 31.24, 79.1],
    
    lineTension: 0.5,
    borderColor: "#8EDCE6",
    backgroundColor: "#8EDCE6",
    // look at this setting
    fill: "origin",
  },
});

energyConsumptionDataM.set("LKS", {
  consumption: {
    label: "LKS",
    lineTension: 0.5,
    data: [100.96, 106.06, 125.46, 150.46, 180.55, 190.52, 181.24, 195.1],
    borderColor: "#D5DCF9",
    backgroundColor: "#D5DCF9",
    fill: "origin",
  },
  cost: {
    label: "LKS",
    data: [1000, 1100, 1150.12, 1230.46, 1210.55, 400.52, 1000.24, 900.1],
    
    lineTension: 0.5,
    borderColor: "#D5DCF9",
    backgroundColor: "#D5DCF9",
    // look at this setting
    fill: "origin",
  },
  occupancy: {
    label: "LKS",
    data: [74, 84, 25.46, 45.46, 59.55, 94.52, 31.24, 79.1],
    
    lineTension: 0.5,
    borderColor: "#D5DCF9",
    backgroundColor: "#D5DCF9",
    // look at this setting
    fill: "origin",
  },
});

energyConsumptionDataM.set("SOA", {
  consumption: {
    label: "SOA",
    lineTension: 0.5,
    data: [100.96, 106.06, 125.46, 150.46, 180.55, 190.52, 181.24, 195.1],
    borderColor: "#A7B0CA",
    backgroundColor: "#A7B0CA",
    fill: "origin",
  },
  cost: {
    label: "SOA",
    data: [1000, 1100, 1150.12, 1230.46, 1210.55, 400.52, 1000.24, 900.1],
    
    lineTension: 0.5,
    borderColor: "#A7B0CA",
    backgroundColor: "#A7B0CA",
    // look at this setting
    fill: "origin",
  },
  occupancy: {
    label: "SOA",
    data: [74, 84, 25.46, 45.46, 59.55, 94.52, 31.24, 79.1],
    
    lineTension: 0.5,
    borderColor: "#A7B0CA",
    backgroundColor: "#A7B0CA",
    // look at this setting
    fill: "origin",
  },

});

energyConsumptionDataM.set("SOE", {
  consumption: {
    label: "SOE",
    lineTension: 0.5,
    data: [100.96, 106.06, 125.46, 150.46, 180.55, 190.52, 181.24, 195.1],
    borderColor: "#443627",
    backgroundColor: "#443627",
    fill: "origin",
  },
  cost: {
    label: "SOE",
    data: [1000, 1100, 1150.12, 1230.46, 1210.55, 400.52, 1000.24, 900.1],
    
    lineTension: 0.5,
    borderColor: "#443627",
    backgroundColor: "#443627",
    fill: "origin",
  },
  occupancy: {
    label: "SOE",
    data: [74, 84, 25.46, 45.46, 59.55, 94.52, 31.24, 79.1],
    
    lineTension: 0.5,
    borderColor: "#443627",
    backgroundColor: "#443627",
    fill: "origin",
  },

});
