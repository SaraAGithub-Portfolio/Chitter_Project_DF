import { beforeEach, describe, test, expect, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AddPeep from '../src/components/Homepage/Peeps/AddPeep';

describe('Add Peep Component Tests', () => {
    const mockUser = { name: "Eleven Hopper", username: "ElevenisCool" };
    const mockPeep = { message: "Friend's don't lie" };

    test('should render a login prompt when the user is not logged in if they want to peep', async () => {

        localStorage.removeItem('user');

        await render(
            <MemoryRouter>
                <AddPeep addPeep={mockPeep} user={mockUser} />
            </MemoryRouter>
        );

        expect(screen.getByText(/Sign up or log in to peep!/i)).toBeInTheDocument();
    });

    describe('Peep form tests', () => {
        beforeEach(() => {

            localStorage.setItem('user', JSON.stringify(mockUser));

            render(
                <MemoryRouter>
                    <AddPeep addPeep={vi.fn()} user={mockUser} />
                </MemoryRouter>
            );
        });

        test('should render add peep input and label', () => {
            expect(screen.getByPlaceholderText(/write your peep here/i)).toBeInTheDocument();
        });

        test('should render submit button', () => {
            expect(screen.getByText('Peep')).toBeInTheDocument();
        });

        test('should enable submit button when text has been inserted', async () => {
            const mockPeepMessage = "I'm a peep";
            const peepInput = screen.getByPlaceholderText(/write your peep here/i);
            const submitButton = screen.getByRole('button', { name: /peep/i });


            expect(submitButton).toBeDisabled();


            await userEvent.type(peepInput, mockPeepMessage);


            expect(submitButton).toBeEnabled();
        });
    });
});
