import axios from 'axios';
import { describe, test, expect } from 'vitest';
import { getPeepsData } from './peepAPICall.js';
import mockData from '../mockPeepData.json';
import { vi } from 'vitest';

vi.mock('axios');

describe('peepData tests', () => {
    test('should make an external call', async () => {
        axios.get.mockResolvedValueOnce({ data: mockData });
        const data = await getPeepsData();

        expect(axios.get).toHaveBeenCalledWith(`${import.meta.env.VITE_API_ENDPOINT_TEST}/peeps`);
        expect(data).toEqual(mockData);
    });
});