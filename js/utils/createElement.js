export function createElement(tag, options = {}) {
    const element = document.createElement(tag);

    const {
        className,
        id,
        text,
        html,
    } = options;

    if (className) element.className = className;
    if (id) element.id = id;
    if (text) element.textContent = text;
    if (html) element.innerHTML = html;

    return element;
}