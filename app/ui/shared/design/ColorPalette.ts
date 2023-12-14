export type Colors = 'blue' | 'green' | 'red' | 'orange' | 'yellow' | 'main' | 'secondary' | 'gray';
export type Shade = 'xx-light' | 'x-light' | 'light' | 'DEFAULT';

export type ColorPaletteShade = {
    [shade in Shade]: string;
};

export type ColorPaletteConfig = {
    [key in Colors]: ColorPaletteShade
};
export const BackgroundColors: { [key: string]: string } = {
    'blue-xx-light': 'bg-blue-xx-light',
    'blue-x-light': 'bg-blue-x-light',
    'blue-light': 'bg-blue-light',
    'blue': 'bg-blue',
    'green-xx-light': 'bg-green-xx-light',
    'green-x-light': 'bg-green-x-light',
    'green-light': 'bg-green-light',
    'green': 'bg-green',
    'red-xx-light': 'bg-red-xx-light',
    'red-x-light': 'bg-red-x-light',
    'red-light': 'bg-red-light',
    'red': 'bg-red',
    'orange-xx-light': 'bg-orange-xx-light',
    'orange-x-light': 'bg-orange-x-light',
    'orange-light': 'bg-orange-light',
    'orange': 'bg-orange',
    'yellow-xx-light': 'bg-yellow-xx-light',
    'yellow-x-light': 'bg-yellow-x-light',
    'yellow-light': 'bg-yellow-light',
    'yellow': 'bg-yellow',
    'main-xx-light': 'bg-main-xx-light',
    'main-x-light': 'bg-main-x-light',
    'main-light': 'bg-main-light',
    'main': 'bg-main',
    'secondary-xx-light': 'bg-secondary-xx-light',
    'secondary-x-light': 'bg-secondary-x-light',
    'secondary-light': 'bg-secondary-light',
    'secondary': 'bg-secondary',
    'gray-xx-light': 'bg-gray-xx-light',
    'gray-x-light': 'bg-gray-x-light',
    'gray-light': 'bg-gray-light',
    'gray': 'bg-gray',
};

export const BackgroundColorPalette = {
    'blue': {
        'xx-light': 'bg-blue-xx-light',
        'x-light': 'bg-blue-x-light',
        'light': 'bg-blue-light',
        'DEFAULT': 'bg-blue',
    },
    'green': {
        'xx-light': 'bg-green-xx-light',
        'x-light': 'bg-green-x-light',
        'light': 'bg-green-light',
        'DEFAULT': 'bg-green',
    },
    'red': {
        'xx-light': 'bg-red-xx-light',
        'x-light': 'bg-red-x-light',
        'light': 'bg-red-light',
        'DEFAULT': 'bg-red',
    },
    'orange': {
        'xx-light': 'bg-orange-xx-light',
        'x-light': 'bg-orange-x-light',
        'light': 'bg-orange-light',
        'DEFAULT': 'bg-orange',
    },
    'yellow': {
        'xx-light': 'bg-yellow-xx-light',
        'x-light': 'bg-yellow-x-light',
        'light': 'bg-yellow-light',
        'DEFAULT': 'bg-yellow',
    },
    'main': {
        'xx-light': 'bg-main-xx-light',
        'x-light': 'bg-main-x-light',
        'light': 'bg-main-light',
        'DEFAULT': 'bg-main',
    },
    'secondary': {
        'xx-light': 'bg-secondary-xx-light',
        'x-light': 'bg-secondary-x-light',
        'light': 'bg-secondary-light',
        'DEFAULT': 'bg-secondary',
    },
    'gray': {
        'xx-light': 'bg-gray-xx-light',
        'x-light': 'bg-gray-x-light',
        'light': 'bg-gray-light',
        'DEFAULT': 'bg-gray',
    },
}

