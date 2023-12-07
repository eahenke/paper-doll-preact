export const useExternalSettings = () => {
    if (!document.currentScript) return {};
    const scriptTag = document.currentScript;

    return {
        linkClass: scriptTag.getAttribute('data-link-class')
    };
};
