import { describe, test, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from '../src/components/Homepage/Login/login';
import { MemoryRouter } from 'react-router-dom';

describe('Login Component Tests', () => {

    const mockLogin = vi.fn();

    test('should call checkLogin function when login is clicked', async () => {
        await render(
            <MemoryRouter>
                (<Login checkLogin={mockLogin} />);
            </MemoryRouter>
        );

        const mockUser = {
            username: "ElevenisCool",
            password: "Birds123"
        };


        const usernameInput = screen.getByLabelText(/username/i);
        const passwordInput = screen.getByLabelText(/password/i);

        await userEvent.type(usernameInput, mockUser.username);
        await userEvent.type(passwordInput, mockUser.password);


        const loginButton = screen.getByRole('button', { name: /login/i });
        await userEvent.click(loginButton);

        expect(mockLogin).toHaveBeenCalledTimes(1);
    });
});
