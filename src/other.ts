// clearing store
import { setData, Data } from "./data";

export function clearData() {
  let data: Data = {
    projects: [],
    counter:
    {
      project: 0,
      checklist: 0,
      todo: 0,
    },
    messages: [],
  }
  setData(data);
  return {};
}