/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    globals: {
        'ts-jest': {
            tsconfig: './tsconfig.json',
        },
    },
    moduleNameMapper: {
        '^.+\\.(css|less|scss)$': 'babel-jest',
    },
    setupFilesAfterEnv: ['./jest.setup.ts']
};