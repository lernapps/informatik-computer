import { expect, test } from "vite-plus/test";
import { boxes } from "./EvaBild.ts";

test("the three boxes come in the order of the arrows, each with its letter and item", () => {
  const props = {
    boxes: ["Eingabe", "Verarbeitung", "Ausgabe"],
    letters: ["E", "V", "A"],
    items: ["Tasten", "Prozessor, Arbeitsspeicher", ""],
    drawer: "Speicher – hebt auf",
    drawerItem: "Festspeicher",
  };
  expect(boxes(props)).toEqual([
    { name: "Eingabe", letter: "E", item: "Tasten" },
    { name: "Verarbeitung", letter: "V", item: "Prozessor, Arbeitsspeicher" },
    { name: "Ausgabe", letter: "A", item: "" },
  ]);
});

test("missing texts stay empty", () => {
  const props = { boxes: ["Input"], letters: [], items: [], drawer: "storage – keeps", drawerItem: "" };
  expect(boxes(props).map((b) => b.name)).toEqual(["Input", "", ""]);
});
