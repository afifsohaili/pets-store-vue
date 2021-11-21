import {Ref, watch} from "vue";

// Watches the value of the given ref and saves the value.
// Uses localStorage in this case but could easily be anything (e.g. calls an API to save it on the backend)
export const savePreferences = (value: Ref, key: string) => {
  watch(value, newValue => {
    localStorage.setItem(key, JSON.stringify(newValue))
  }, {deep: true})
}

export const loadPreference = (key: string) => {
  return JSON.parse(window.localStorage.getItem(key) || 'null')
}