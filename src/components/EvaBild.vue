<script setup lang="ts">
// The recurring picture of this explainer: three boxes Eingabe → Verarbeitung → Ausgabe with arrows, and under the box
// Verarbeitung the drawer "Speicher – hebt auf". Side by side on a wide page, one under the other on a narrow one, the
// arrows then pointing down. All words come from the props, so the picture is the same in every language.
// Written for lernapps/informatik-computer (#490); other explainers of the epic may copy it, naming this origin.
import { computed } from "vue";
import { boxes } from "./EvaBild.ts";

defineOptions({ nojs: "caption" });

const props = defineProps<{
  /** The names of the three boxes: input, process, output. */
  boxes: string[];
  /** The letter of each box: E, V, A (en I, P, O). */
  letters: string[];
  /** What each box holds as an example, one text per box; an empty text shows nothing. */
  items: string[];
  /** The label of the drawer under the box Verarbeitung. */
  drawer: string;
  /** What lies in the drawer. */
  drawerItem: string;
}>();

const shown = computed(() => boxes(props));
</script>

<template>
  <div class="eva-bild" aria-hidden="true">
    <template v-for="(box, i) in shown" :key="i">
      <span v-if="i > 0" class="eva-bild-arrow"></span>
      <div class="eva-bild-column">
        <div :class="['eva-bild-box', `eva-bild-box-${i}`]">
          <span class="eva-bild-letter">{{ box.letter }}</span>
          <strong>{{ box.name }}</strong>
          <span v-if="box.item" class="eva-bild-item">{{ box.item }}</span>
        </div>
        <div v-if="i === 1" class="eva-bild-drawer">
          <strong>{{ drawer }}</strong>
          <span v-if="drawerItem" class="eva-bild-item">{{ drawerItem }}</span>
        </div>
      </div>
    </template>
  </div>
</template>

<style scoped>
.eva-bild {
  display: flex;
  align-items: flex-start;
  gap: 0.25rem;
  margin: 1rem 0;
}

.eva-bild-column {
  display: flex;
  flex: 1 1 0;
  flex-direction: column;
  align-items: stretch;
  gap: 0.25rem;
}

.eva-bild-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  min-height: 6.5rem;
  padding: 0.5rem;
  border: 3px solid var(--box);
  border-radius: 0.6rem;
  background: var(--page-surface);
  color: var(--page-text);
  text-align: center;
}

.eva-bild-box-0 {
  --box: #2f5fb3;
}

.eva-bild-box-1 {
  --box: #23704a;
}

.eva-bild-box-2 {
  --box: #a4500f;
}

.eva-bild-letter {
  display: inline-block;
  min-width: 1.8em;
  border-radius: 0.3em;
  background: var(--box);
  color: #fff;
  font-size: 1.2em;
  font-weight: bold;
}

.eva-bild-item {
  color: var(--page-muted);
  font-size: 0.9em;
}

/* the drawer hangs under the box Verarbeitung: dashed, as a part that keeps, not a fourth step */
.eva-bild-drawer {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 0.75rem;
  padding: 0.4rem;
  border: 2px dashed #23704a;
  border-top: 0;
  border-radius: 0 0 0.6rem 0.6rem;
  background: var(--page-background);
  color: var(--page-text);
  text-align: center;
}

.eva-bild-arrow {
  flex: 0 0 1.5rem;
  align-self: center;
  margin-top: -2rem;
  height: 1.5rem;
  background: var(--page-text);
  clip-path: polygon(0 35%, 55% 35%, 55% 0, 100% 50%, 55% 100%, 55% 65%, 0 65%);
}

@media (max-width: 30rem) {
  .eva-bild {
    flex-direction: column;
    align-items: stretch;
  }

  .eva-bild-box {
    min-height: 0;
  }

  .eva-bild-arrow {
    align-self: center;
    margin-top: 0;
    width: 1.5rem;
    clip-path: polygon(35% 0, 65% 0, 65% 55%, 100% 55%, 50% 100%, 0 55%, 35% 55%);
  }
}
</style>
