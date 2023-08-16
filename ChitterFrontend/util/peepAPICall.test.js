import axios from 'axios';
import { describe, test, expect } from 'vitest';
import { getPeepsData, addPeepData } from './peepAPICall.js';
import mockData from '../mockPeepData.json';
import { vi } from 'vitest';

vi.mock('axios');

describe('Peep Call Tests', () => {
    test('should make an external call', async () => {
        axios.get.mockResolvedValueOnce({ data: mockData });
        const data = await getPeepsData();

        expect(axios.get).toHaveBeenCalledWith(`${import.meta.env.VITE_API_ENDPOINT}/peeps`);
        expect(data).toEqual(mockData);
    });
    test('should post a peep with addPeepData', async () => {
        axios.post.mockResolvedValueOnce({ data: mockData });
        const mockNewPeep = {
            message: "This is a peep test",
        };
        const response = await addPeepData(mockNewPeep);

        expect(axios.post).toHaveBeenCalledWith(`${import.meta.env.VITE_API_ENDPOINT}/peeps`, mockNewPeep);
        expect(response).toEqual(mockData);
    });
    test('should return an error if getPeepsData not returned', async () => {
        const error = { error: 'Error' };
        axios.get.mockRejectedValueOnce(error)
        const result = await getPeepsData([]);
        expect(result).toEqual([]);
    })
});