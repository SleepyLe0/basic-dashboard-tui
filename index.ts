import blessed from "blessed";

const screen = blessed.screen({
  smartCSR: true,
  title: "My TUI App",
});

const box = blessed.box({
  top: "center",
  left: "center",
  width: "50%",
  height: "50%",
  content: "Hello, Terminal!",
  border: { type: "line" },
  style: {
    border: { fg: "blue" },
    fg: "white",
    bg: "black",
  },
});

screen.append(box);

screen.key(["q"], () => process.exit(0));

screen.render();