export default {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/test/setup.jest.ts'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  testPathIgnorePatterns: ['/e2e/', '/cypress/'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
}