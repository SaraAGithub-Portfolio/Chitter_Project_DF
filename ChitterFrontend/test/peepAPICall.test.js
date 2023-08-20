import axios from 'axios';
import { describe, test, expect } from 'vitest';
import { getPeepDataAsync, sendPeepDataAsync } from '../util/peepAPICall.js';
import mockData from './mockData.json'
import { vi } from 'vitest';

vi.mock('axios');

describe('Peep Call Tests', () => {
    test('should make an external call', async () => {
        const nestedMockData = {
            data: {
                data: mockData.data
            }
        };

        axios.get.mockResolvedValueOnce(nestedMockData);
        const data = await getPeepDataAsync();

        expect(axios.get).toHaveBeenCalledWith(`http://localhost:4000/peeps`);
        expect(data).toEqual(nestedMockData);
    });
    test('should post a peep with sendPeepDataAsync', async () => {
        axios.post.mockResolvedValueOnce({ data: mockData });
        const mockNewPeep = {
            message: "This is a peep test",
        };
        const response = await sendPeepDataAsync(mockNewPeep);

        expect(axios.post).toHaveBeenCalledWith(`http://localhost:4000/peeps`, mockNewPeep);
        expect(response).toEqual(mockData);
    });
    test('should return an error if getPeepsDataAsync not returned', async () => {
        const error = { error: 'Error' };
        axios.get.mockRejectedValueOnce(error)
        const result = await getPeepDataAsync([]);
        expect(result).toEqual({ error: 'Error' });

    })
});