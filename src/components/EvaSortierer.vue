<script setup lang="ts">
// Five devices, each with three buttons, one per box of the IPO model; the learner presses the box each device belongs
// in, and the device then shows in that box below. Its logic is in EvaSortierer.ts. It is the input of the task: it emits
// the box of each device (-1 for none yet) with answer, and the explainer draws "Prüfen", checks, gives the feedback,
// the task number and "Neue Aufgabe". Written for lernapps/informatik-computer (#490).
import { computed, ref } from "vue";
import { generate } from "./EvaSortierer.ts";

const props = defineProps<{
  /** The task above the devices. */
  task: string;
  /** Every device of the data file eva-geraete. */
  devices: { name: string; phase: number; grund: string }[];
  /** The names of the three boxes: input, process, output. */
  boxes: string[];
  /** The letter of each box, shown beside its name: E, V, A (en I, P, O). */
  letters: string[];
  /** The text in a box with no device yet. */
  empty: string;
  /** The label of the reset button. */
  reset: string;
  /** The message when a device is not placed yet. */
  unplaced: string;
  /** The message for one device in a wrong box, with {name} and {grund}. */
  wrong: string;
  /** The message for several devices in a wrong box, with {count}, and {name} and {grund} of the first. */
  wrongMany: string;
  /** The task number, which the explainer gives. */
  seed: number;
  /** Whether the explainer checked the answer shown now. */
  checked?: boolean;
}>();
const emit = defineEmits<{ answer: [number[] | undefined] }>();

const current = computed(() => generate(props.seed, props));
const placed = ref<number[]>(current.value.devices.map(() => -1));

function place(device: number, box: number): void {
  placed.value[device] = box;
  emit("answer", [...placed.value]);
}

function clear(): void {
  placed.value = current.value.devices.map(() => -1);
  emit("answer", undefined);
}

const inBox = (box: number) => current.value.devices.filter((_, i) => placed.value[i] === box);
</script>

<template>
  <div class="eva-sortierer">
    <p>{{ task }}</p>
    <ul class="eva-sortierer-devices">
      <li v-for="(device, i) in current.devices" :key="device.name">
        <span class="eva-sortierer-name">{{ device.name }}</span>
        <span class="eva-sortierer-choices" role="group" :aria-label="device.name">
          <button
            v-for="(box, b) in boxes"
            :key="box"
            type="button"
            :class="`eva-sortierer-box-${b}`"
            :aria-pressed="placed[i] === b"
            @click="place(i, b)"
          >
            <span aria-hidden="true" class="eva-sortierer-letter">{{ letters[b] }}</span> {{ box }}
          </button>
        </span>
      </li>
    </ul>
    <div class="eva-sortierer-boxes" :class="{ 'eva-sortierer-checked': checked }" aria-hidden="true">
      <div v-for="(box, b) in boxes" :key="box" :class="['eva-sortierer-target', `eva-sortierer-box-${b}`]">
        <strong
          ><span class="eva-sortierer-letter">{{ letters[b] }}</span> {{ box }}</strong
        >
        <span v-for="device in inBox(b)" :key="device.name" class="eva-sortierer-chip">{{ device.name }}</span>
        <span v-if="inBox(b).length === 0" class="eva-sortierer-empty">{{ empty }}</span>
      </div>
    </div>
    <p class="eva-sortierer-reset">
      <button type="button" @click="clear">{{ reset }}</button>
    </p>
  </div>
</template>

<style scoped>
.eva-sortierer-devices {
  list-style: none;
  padding: 0;
  margin: 0 0 1rem;
}

.eva-sortierer-devices li {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0;
  border-bottom: 1px solid var(--page-border);
}

.eva-sortierer-name {
  flex: 1 1 8rem;
  font-weight: bold;
}

.eva-sortierer-choices {
  display: flex;
  flex: 1 1 18rem;
  gap: 0.25rem;
}

.eva-sortierer-choices button {
  flex: 1 1 auto;
  min-width: 0;
  min-height: 44px;
  padding: 0.25rem;
  font-size: 0.95em;
  line-height: 1.2;
  hyphens: auto;
  border: 2px solid var(--box);
  border-radius: 0.5rem;
  background: var(--page-surface);
  color: var(--page-text);
  font: inherit;
  cursor: pointer;
}

.eva-sortierer button:focus-visible {
  outline: 3px solid var(--page-text);
  outline-offset: 2px;
}

.eva-sortierer-choices button[aria-pressed="true"] {
  background: var(--box);
  color: #fff;
}

.eva-sortierer-choices button[aria-pressed="true"] .eva-sortierer-letter {
  background: #fff;
  color: var(--box);
}

.eva-sortierer-letter {
  display: inline-block;
  min-width: 1.4em;
  border-radius: 0.3em;
  background: var(--box);
  color: #fff;
  font-weight: bold;
  text-align: center;
}

.eva-sortierer-box-0 {
  --box: #2f5fb3;
}

.eva-sortierer-box-1 {
  --box: #23704a;
}

.eva-sortierer-box-2 {
  --box: #a4500f;
}

.eva-sortierer-boxes {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
  hyphens: auto;
}

.eva-sortierer-target {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  min-height: 6rem;
  padding: 0.5rem;
  border: 3px solid var(--box);
  border-radius: 0.5rem;
  background: var(--page-surface);
}

.eva-sortierer-chip {
  padding: 0.1rem 0.4rem;
  border: 1px solid var(--page-border);
  border-radius: 0.3rem;
  background: var(--page-background);
}

.eva-sortierer-checked .eva-sortierer-chip {
  border-style: dashed;
}

.eva-sortierer-empty {
  color: var(--page-muted);
}

.eva-sortierer-reset button {
  min-height: 44px;
  padding: 0 0.75rem;
  border: 1px solid var(--page-border);
  border-radius: 0.5rem;
  background: var(--page-surface);
  color: var(--page-text);
  font: inherit;
  cursor: pointer;
}
@media (max-width: 30rem) {
  .eva-sortierer-boxes {
    grid-template-columns: 1fr;
  }

  .eva-sortierer-target {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    min-height: 3rem;
  }

  .eva-sortierer-target strong {
    flex: 1 1 100%;
  }
}
</style>
