/* 
    • Accepts HTML element or id element
    • If doesn't exists container, per default get page
*/

export function scrollTo(target: HTMLElement | string, _container: HTMLElement | string | null | undefined = 'page') {
    let targetElment: HTMLElement | null = typeof (target) == 'string'
                        ? document.getElementById(target.replace("#", ""))
                        : target as HTMLElement;

    if (targetElment && targetElment.offsetTop) {
        let container = _container
                        ? (typeof (_container) == 'string'
                            ? document.getElementById(_container)
                            : _container as HTMLElement)
                        : window;

        container &&
            container.scroll({
                top: targetElment.offsetTop - 30,
                behavior: 'smooth'
            });
    }
}