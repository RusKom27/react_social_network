
export function useDebounce(callback: any, timeoutMs: number, immediate: boolean) {
    let timeout: number | undefined;

    return function(): any {
        // @ts-ignore
        const context: any = this;
        const args = arguments;

        const later = function() {
            timeout = undefined;
            if (!immediate) callback.apply(context, args);
        };

        const callNow = immediate && !timeout;

        clearTimeout(timeout);

        timeout = setTimeout(later, timeoutMs)[Symbol.toPrimitive]();

        if (callNow) callback.apply(context, args);
    };
}