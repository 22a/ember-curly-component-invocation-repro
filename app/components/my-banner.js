import Component from "@ember/component";
import { computed } from "@ember/object";

export default Component.extend({
  text: computed("rawText", function() {
    return this.rawText.toUpperCase();
  })
});
