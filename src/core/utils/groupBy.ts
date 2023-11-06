function groupBy<T, K extends keyof T>(arr: T[], key: K) {
    const result: { [key: string]: T[] } = {};

    for (const item of arr) {
        const keyValue = item[key];

        if (result[keyValue as string]) {
            result[keyValue as string].push(item);
        } else {
            result[keyValue as string] = [item];
        }
    }

    return result;
}


export default groupBy;