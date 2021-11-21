import {Ref, watch} from "vue";

export const savePreferences = (value: Ref, key: string) => {
  watch(value, newValue => {
    localStorage.setItem(key, JSON.stringify(newValue))
  }, {deep: true})
}

export const loadPreference = (key: string) => {
  return JSON.parse(localStorage.getItem(key) || 'null')
}