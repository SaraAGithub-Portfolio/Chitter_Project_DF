import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import matchers from '@testing-library/jest-dom/matchers';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.test' });
expect.extend(matchers);

afterEach(() => {
    cleanup();
});