import blessed from "blessed";
import contrib from "blessed-contrib";
import os from "os";
import osu from "os-utils";
import si from "systeminformation";

// Create a screen object
const screen = blessed.screen({
  smartCSR: true,
  title: "Interactive Terminal Dashboard",
});

// Create a grid layout (12x12)
const grid = new contrib.grid({ rows: 12, cols: 12, screen });

// Create widgets
const cpuGauge = grid.set(0, 0, 4, 4, contrib.gauge, {
  label: " CPU Usage ",
  stroke: "green",
  percent: 0,
});

const memGauge = grid.set(0, 4, 4, 4, contrib.gauge, {
  label: " Memory Usage ",
  stroke: "cyan",
  percent: 0,
});

const netTable = grid.set(0, 8, 4, 4, contrib.table, {
    keys: true,
    label: " Network Stats ",
    columnSpacing: 4,
    columnWidth: [15, 15],
    headers: ["Metric", "Value"],
});

const logBox = grid.set(4, 0, 8, 12, blessed.log, {
  label: " Logs ",
  border: { type: "line" },
  style: { fg: "white", border: { fg: "yellow" } },
  scrollable: true,
  alwaysScroll: true,
});

// Append to screen
screen.append(cpuGauge);
screen.append(memGauge);
screen.append(netTable);
screen.append(logBox);

// Update System Stats Function
const updateSystemStats = () => {
    osu.cpuUsage((usage) => {
        cpuGauge.setPercent(Math.round(usage * 100));
        screen.render();
    });

    const freeMem = os.freemem();
    const totalMem = os.totalmem();
    const usedMem = ((totalMem - freeMem) / totalMem) * 100;
    memGauge.setPercent(Math.round(usedMem));

    screen.render();
}

// Update Network Stats Function
const updateNetworkStats = async () => {
    const netStats = await si.networkStats();
    const netData = [
        ["RX Speed", `${(netStats[0].rx_sec / 1024).toFixed(2)} KB/s`],
        ["TX Speed", `${(netStats[0].tx_sec / 1024).toFixed(2)} KB/s`],
    ];
    netTable.setData({ headers: ["Metric", "Value"], data: netData });

    screen.render();
}

// Update Mock Log every 2 sec - need to implement
setInterval(() => {
    const time = new Date().toLocaleString();
    logBox.log(`[${time}] Example log`);
    screen.render();
}, 2000);

setInterval(() => {
    updateSystemStats();
    updateNetworkStats();
}, 1000);

// Implement Docker Stats

// Keyboard Navigation
screen.key(["q"], () => process.exit(0));







