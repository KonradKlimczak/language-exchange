export const classNameBuilder = ([...options]: string[]) => {
    const PREFIX = 'lele';

    return `${PREFIX}--${options.join('-')}`;
};
