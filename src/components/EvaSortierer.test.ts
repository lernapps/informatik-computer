import { expect, test } from "vite-plus/test";
import { check, describe, generate, mistakes, params, reason, show, solution, wrong } from "./EvaSortierer.ts";

const devices = [
  { name: "Tastatur", phase: 0, grund: "Mit der Tastatur tippst du." },
  { name: "Maus", phase: 0, grund: "Mit der Maus klickst du." },
  { name: "Mikrofon", phase: 0, grund: "Das Mikrofon nimmt auf." },
  { name: "Prozessor", phase: 1, grund: "Der Prozessor rechnet." },
  { name: "Arbeitsspeicher", phase: 1, grund: "Im Arbeitsspeicher liegt, woran er arbeitet." },
  { name: "Lautsprecher", phase: 2, grund: "Der Lautsprecher macht Töne." },
  { name: "Drucker", phase: 2, grund: "Der Drucker druckt." },
  { name: "Beamer", phase: 2, grund: "Der Beamer wirft ein Bild an die Wand." },
];
const props = {
  task: "Lege jedes Gerät in seinen Kasten:",
  devices,
  boxes: ["Eingabe", "Verarbeitung", "Ausgabe"],
  unplaced: "Lege erst jedes Gerät in einen Kasten.",
  wrong: "Schau noch einmal auf {name}: {grund}",
};

test("each task has two inputs, one part that processes and two outputs, all different", () => {
  for (let seed = 1; seed <= 50; seed++) {
    const task = generate(seed, props);
    expect(task.devices).toHaveLength(5);
    expect(new Set(task.devices.map((d) => d.name)).size).toBe(5);
    expect(task.devices.filter((d) => d.phase === 0)).toHaveLength(2);
    expect(task.devices.filter((d) => d.phase === 1)).toHaveLength(1);
    expect(task.devices.filter((d) => d.phase === 2)).toHaveLength(2);
    expect(generate(seed, props)).toEqual(task);
  }
});

test("the solution is right; swapped boxes, a missing device and each mistake are wrong", () => {
  for (let seed = 1; seed <= 50; seed++) {
    const task = generate(seed, props);
    expect(check(task, solution(task))).toBe(true);
    expect(check(task, wrong(task))).toBe(false);
    expect(check(task, [...solution(task).slice(0, 4), -1])).toBe(false);
    for (const answer of mistakes(task)) if (answer !== undefined) expect(check(task, answer)).toBe(false);
  }
});

test("the reason names a device not placed, or the first device in a wrong box, never the box", () => {
  const task = { devices: [devices[0]!, devices[3]!, devices[5]!] };
  expect(reason(task, [0, -1, 2], props)).toBe("Lege erst jedes Gerät in einen Kasten.");
  expect(reason(task, [0, 2, 2], props)).toBe("Schau noch einmal auf Prozessor: Der Prozessor rechnet.");
  expect(reason(task, [2, 1, 0], props)).toBe("Schau noch einmal auf Tastatur: Mit der Tastatur tippst du.");
  expect(reason(task, [0, 1, 2], props)).toBeUndefined();
});

test("describe, show and params name the devices of the task", () => {
  const task = { devices: [devices[0]!, devices[3]!, devices[5]!] };
  expect(describe(task, props, "de")).toEqual({
    task: "Lege jedes Gerät in seinen Kasten: Tastatur, Prozessor, Lautsprecher",
    solution: "Tastatur → Eingabe, Prozessor → Verarbeitung, Lautsprecher → Ausgabe",
  });
  expect(show([2, -1, 0], task, props)).toBe("Tastatur → Ausgabe, Prozessor → –, Lautsprecher → Eingabe");
  expect(params(task, props, "de")).toEqual({ Geraete: "Tastatur, Prozessor, Lautsprecher" });
});
