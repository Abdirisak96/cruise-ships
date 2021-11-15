class Port {
  constructor(portName) {
    this.name = portName;
    this.ships = [];
  }

  addShip(ship) {
    this.ships.push(ship);
  }

  removeShip(ship) {
    this.ships.pop(ship);
  }
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = Port;
} else {
  window, (Port = Port);
}

module.exports = Port;
