import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import server from '../server.js';
import User from '../src/models/user.model.js';
import testUsers from './mockUsers.js';

const testArray = testUsers.users;

chai.use(chaiHttp);

describe('Signup tests', () => {
    const testServer = chai.request(server).keepOpen();

    beforeEach(async () => {
        try {
            await User.deleteMany();
            console.log('Database cleared');
        } catch (error) {
            console.log('Error clearing:', error);
            throw new Error();
        };
        try {
            await User.insertMany(testArray);
            console.log('Database filled')
        } catch (error) {
            console.log('Error filling');
            throw new Error();
        };
    });

    describe('post request sent to add user', () => {
        it('should return a status of 201 when trying to register a New user with valid data', async () => {
            let mockUser = {
                name: {
                    firstName: 'Eleven',
                    lastName: 'Hopper'
                },
                username: 'Eleven1234',
                email: 'elevenstrangerthings22@email.com',
                password: 'Ihavepsychicpowers'
            };
            const res = await testServer
                .post('/auth/signup')
                .send(mockUser);
            console.log(res.body);

            expect(res).to.have.status(201)
            expect(res.body).to.be.an('object');
            expect(res.body).to.include({ message: 'User successfully registered' })
        });
        it('should return a status of 422 when input is missing when registering a user', async () => {
            let mockUser = {
                name: {
                    firstName: 'Eleven',
                    lastName: ''
                },
                username: 'Eleven123',
                email: 'elevenstrangerthings@email.com',
                password: 'Ihavepsychicpowers'
            };
            const res = await testServer
                .post('/auth/signup')
                .send(mockUser)
            expect(res).to.have.status(422);
            expect(res.body).to.include({ message: 'Last name should be at least 2 characters long.' })
        });

        it('should return a status of 422 if user is already registered', async () => {
            let mockUser = {
                name: {
                    firstName: 'Eleven',
                    lastName: 'Hopper'
                },
                username: 'Eleven123',
                email: 'elevenstrangerthings@email.com',
                password: 'Ihavepsychicpowers'
            };

            // First signup attempt to initially register the user
            await testServer.post('/auth/signup').send(mockUser);

            // Second signup attempt with same user data (should fail due to duplication)
            const res = await testServer.post('/auth/signup').send(mockUser);

            expect(res).to.have.status(422);
            expect(res.body).to.include({ message: 'User already exists' });
        });
        describe('Login tests', () => {
            it('should return a status of 200 when trying to login with valid data', async () => {
                let mockUser = {
                    username: 'Eleven123',
                    email: 'elevenstrangerthings@email.com',
                    password: 'Ihavepsychicpowers'
                };
                const res = await testServer
                    .post('/auth/login')
                    .send(mockUser)
                expect(res).to.have.status(200);
                expect(res.body).to.include({ message: 'Login successful' });
            });
            it('should return status of 401 when user tries to log in with incorrect password', async () => {
                let mockUser = {
                    username: 'Eleven123',
                    email: 'elevenstrangerthings@email.com',
                    password: 'wrong'
                };
                const res = await testServer
                    .post('/auth/login')
                    .send(mockUser)
                expect(res).to.have.status(401);
                expect(res.body).to.include({ message: 'Incorrect password' });
            });
            it('should return a status of 404 when user tries to log in with incorrect username', async () => {
                let mockUser = {
                    username: 'eleven1',
                    email: 'elevenstrangerthings@email.com',
                    password: 'Ihavepsychicpowers'
                };
                const res = await testServer
                    .post('/auth/login')
                    .send(mockUser)
                    .send(mockUser)
                expect(res).to.have.status(404)
                expect(res.body).to.include({ message: 'User not found' });
            });
        });
    });
});
