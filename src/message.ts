import { getData, setData } from './data';

export function messageSend(message: string) {
    if (message.length < 1) {
        return { error: "message too short"};
    }
    const store = getData();
    store.messages.push(message);
    setData(store);
    return { currentTime: Math.floor(Date.now()/1000) };
}
