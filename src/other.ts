// clearing store
import { setData } from "./data";

export function clearData() {
    let data = {
        projects: [],
        counter:
        {
            project: 0,
            checklist: 0,
            todo: 0,
        },
    }
    setData(data);
    return {};
}