import axios from 'axios';
import { describe, test, expect, beforeEach } from 'vitest';
import { addUserAsync, checkLoginAsync, getCurrentUser, logOut } from '../util/userAPICall.js';
import { vi } from 'vitest';

vi.mock('axios');

describe('User Call Tests', () => {
    const mockUser = { name: "testUser", email: "user@email", password: "password" };

    test('should make an external call', async () => {
        axios.post.mockResolvedValueOnce({ data: mockUser });

        await addUserAsync(mockUser);

        expect(axios.post).toHaveBeenCalledWith(`http://localhost:4000/auth/signup`, mockUser);
    });

    test('should return error if user did not signup successfully', async () => {
        const errorMessage = "Signup failed!";
        const error = {
            status: undefined,
            error: {
                type: 'post',
                message: errorMessage
            }
        };

        axios.post.mockRejectedValueOnce(new Error(errorMessage));

        expect(await addUserAsync(mockUser)).toEqual(error);
    });

    describe('Log in tests', () => {
        const mockUser = { username: "testUsername", password: "password" };

        test('should make an external call', async () => {
            axios.post.mockResolvedValueOnce({ data: mockUser });

            await checkLoginAsync(mockUser);

            expect(axios.post).toHaveBeenCalledWith(`http://localhost:4000/auth/login`, mockUser);
        });

        test('should send back error if user did not log in successfully', async () => {
            const errorMessage = "Login failed!";
            const error = {
                status: undefined,
                error: {
                    type: 'post',
                    message: errorMessage
                }
            };

            axios.post.mockRejectedValueOnce(new Error(errorMessage));

            expect(await checkLoginAsync(mockUser)).toEqual(error);
        });

        describe('Logout tests', () => {
            const mockUser = { username: "testUsername" };

            test('should log out user successfully', async () => {
                const mockResponse = { success: true, message: "Logged out successfully" };
                axios.post.mockResolvedValueOnce({ data: mockResponse });

                logOut(mockUser);

                expect(localStorage.getItem('user')).toBeNull();
            });

            describe('getCurrent user tests', () => {
                beforeEach(async () => {
                    const mockUser = { "username": "MikeheartofGroup", "password": "Birds123" };
                    window.localStorage.clear();
                    localStorage.setItem('user', JSON.stringify(mockUser));
                });

                test('should have getCurrentUser return json object', async () => {
                    expect(await getCurrentUser()).toEqual({ "username": "MikeheartofGroup", "password": "Birds123" });
                });

                test('should remove user details from local storage when logout activated', () => {
                    localStorage.setItem('user', JSON.stringify(mockUser));
                    logOut();
                    expect(localStorage.getItem('user')).toBeNull();
                });
            });
        });
    });
});
