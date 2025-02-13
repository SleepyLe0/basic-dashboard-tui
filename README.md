# Terminal Dashboard TUI

An interactive **Terminal User Interface (TUI)** built with **TypeScript** and **Bun**, displaying real-time **system stats, network activity, and live logs** using `blessed` and `blessed-contrib`.

## 🚀 Features

- **System Stats:** Real-time CPU, Memory, and Disk Usage monitoring.
- **Network Activity:** Track incoming & outgoing network traffic.
- **Live Logs:** Simulated log stream with automatic updates.
- **Keyboard Navigation:** Switch widgets and exit easily.
- **Real-Time Updates:** Auto-refresh every second.
- **Extensible:** Supports Docker monitoring, API calls, and log file tracking.

## 📦 Installation

1. Install [Bun](https://bun.sh/):

   ```sh
   curl -fsSL https://bun.sh/install | bash
   ```

2. Clone this repository:

   ```sh
   git clone https://github.com/yourusername/terminal-dashboard-tui.git
   cd terminal-dashboard-tui
   ```

3. Install dependencies:

   ```sh
   bun install
   ```

## ▶️ Running the Dashboard

Start the dashboard with:

```sh
bun index.ts
```

Press `q` to exit.

## 🔧 Configuration

- **Update intervals**: Modify `setInterval` in `index.ts` to change refresh rates.
- **Customize Widgets**: Change widget positions, colors, and sizes inside `grid.set(...)`.
- **Log Source**: Replace the simulated log stream with a real log file reader.

## 🎯 Future Enhancements

- Docker Stats
- API integration (fetch stock prices, weather, etc.)
- Log file tracking with `tail -f` behavior
- Custom UI themes (light/dark mode toggle)
- Enhanced keyboard navigation for better user experience

---

Made with ❤️ using TypeScript & Bun.
