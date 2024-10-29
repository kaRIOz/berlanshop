export const smoothScroll = (container: HTMLDivElement, targetPosition: number, duration: number) => {
    const start = container.scrollLeft;
    const change = targetPosition - start;
    const startTime = performance.now();

    const animateScroll = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        container.scrollTo({
            left: start + change * progress,
            behavior: "smooth",
        });
        if (progress < 1) {
            window.requestAnimationFrame(animateScroll);
        }
    };

    window.requestAnimationFrame(animateScroll);
};
