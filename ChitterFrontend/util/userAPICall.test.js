import axios from 'axios';
import { describe, test, expect } from 'vitest';
import { addUser, userLogin, userLogout } from './userAPICall.js';
import { vi } from 'vitest';

vi.mock('axios');

describe('User Call Tests', () => {
    const mockUser = { name: "testUser", email: "user@email", password: "password" }
    test('should make an external call', async () => {
        axios.post.mockResolvedValueOnce({ data: mockUser });

        await addUser(mockUser);

        expect(axios.post).toHaveBeenCalledWith(`${import.meta.env.VITE_API_ENDPOINT}auth/signup`, mockUser)
    });
    test('should return error if user did not signup successfully', async () => {
        const error = {
            status: undefined,
            error: {
                type: 'post',
                message: 'Error adding new user'
            }
        };
        axios.post.mockRejectedValueOnce(error)
        expect(await addUser(mockUser)).toEqual(error);

    });
    describe('Log in tests', () => {
        const mockUser = { username: "testUsername", password: "password" }
        test('should make an external call', async () => {
            axios.post.mockResolvedValueOnce(mockUser);

            await userLogin(mockUser);

            expect(axios.post).toHaveBeenCalledWith(`${import.meta.env.VITE_API_ENDPOINT}auth/login`, mockUser)
        });
        test('should send back error if user did not log in successfully', async () => {
            const error = {
                status: undefined,
                error: {
                    type: 'login',
                    message: 'Error logging in'
                }
            };
            axios.post.mockRejectedValueOnce(new Error("Error logging in"));
            expect(await userLogin(mockUser)).toEqual(error);
        });
        describe('Logout tests', () => {
            const mockUser = { username: "testUsername" }
            test('should log out user successfully', async () => {
                const mockResponse = { success: true, message: "Logged out successfully" };
                axios.post.mockResolvedValueOnce({ data: mockResponse });

                const response = await userLogout(mockUser);
                expect(axios.post).toHaveBeenCalledWith(`${import.meta.env.VITE_API_ENDPOINT}auth/logout`, mockUser)
                expect(response).toEqual(mockResponse);
            });
            test('should return error if logout fails', async () => {
                const errorResponse = {
                    status: 500,
                    error: {
                        type: 'logout',
                        message: 'Error logging out'
                    }
                };
                axios.post.mockRejectedValueOnce(new Error("Error logging out"));
                const response = await userLogout(mockUser);
                expect(response).toEqual(errorResponse);
            });
        });
    });

});