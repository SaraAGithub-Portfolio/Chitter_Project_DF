import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import PeepList from '../src/components/Homepage/Peeps/PeepList';
import { describe, expect, test } from 'vitest';

describe('Peeplist Component Tests', () => {
    test('should display a peep on the page', () => {
        const mockDataArray = [
            {
                _id: "64d27867132dbbdfe8ecb001",
                name: "Eleven Hopper",
                username: "ElevenisCool",
                message: "Friends don't lie",
                timestamp: '2023-08-08T17:16:23.832+00:00'
            }
        ];

        render(
            <MemoryRouter>
                <PeepList dataObj={mockDataArray} />
            </MemoryRouter>
        );

        expect(screen.getByText("Friends don't lie")).toBeInTheDocument();
    });
});
