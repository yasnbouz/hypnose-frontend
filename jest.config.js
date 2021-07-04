module.exports = {
    roots: ['<rootDir>'],
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['./jest-setup.ts'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'jsx'],
    testPathIgnorePatterns: ['<rootDir>[/\\\\](node_modules|.next)[/\\\\]'],
    transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
    transform: {
        '^.+\\.(ts|tsx)$': 'babel-jest',
    },
    moduleNameMapper: {
        '^@/(.*)': '<rootDir>/src/$1',
    },
};
