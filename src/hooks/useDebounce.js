
export function useDebounce(callback, timeoutMs, immediate) {
    let timeout;

    return function executedFunction() {
        const context = this;
        const args = arguments;

        const later = function() {
            timeout = null;
            if (!immediate) callback.apply(context, args);
        };

        const callNow = immediate && !timeout;

        clearTimeout(timeout);

        timeout = setTimeout(later, timeoutMs);

        if (callNow) callback.apply(context, args);
    };
}