export type TypographyVariant =
    'h1' |
    'h2' |
    'h3' |
    'h4' |
    'h5' |
    'h6' |
    'subtitle1' |
    'subtitle2' |
    'body1' |
    'body2' |
    'buttonTxt' |
    'caption' |
    'overline';



export const Definitions: { [variant in TypographyVariant]?: { sizeClass: string, colorClass: string } } = {
    h1: {
        sizeClass: 'text-6xl',
        colorClass: 'text-main',
    },
    h2: {
        sizeClass: 'text-5xl',
        colorClass: 'text-main',
    },
    h3: {
        sizeClass: 'text-4xl',
        colorClass: 'text-main',
    },
    h4: {
        sizeClass: 'text-3xl',
        colorClass: 'text-main',
    },
    h5: {
        sizeClass: 'text-2xl',
        colorClass: 'text-main',
    },
    h6: {
        sizeClass: 'text-xl',
        colorClass: 'text-main',
    },
    subtitle1: {
        sizeClass: 'text-sm',
        colorClass: 'text-main',
    },
    subtitle2: {
        sizeClass: 'text-sm',
        colorClass: 'text-main font-semibold',
    },
    body1: {
        sizeClass: 'text-base',
        colorClass: 'text-main'
    },
    body2: {
        sizeClass: 'text-sm',
        colorClass: 'text-main'
    },
    buttonTxt: {
        sizeClass: 'text-lg',
        colorClass: 'text-main'
    },
    caption: {
        sizeClass: 'text-xs',
        colorClass: 'text-gray'
    },
    overline: {
        sizeClass: 'text-sm',
        colorClass: 'text-main'
    },
}