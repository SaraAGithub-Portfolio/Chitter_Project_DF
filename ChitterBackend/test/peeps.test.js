import Peep from '../src/models/peep.model.js';
import chai from 'chai';
import { expect } from 'chai';
import server from "../server.js";
import testPeeps from "./mockPeep.js";
import chaiHttp from "chai-http";

chai.use(chaiHttp);

const testPeepArray = testPeeps.peeps;

describe(' Peep Database tests', () => {
    const testServer = chai.request(server).keepOpen();
    beforeEach(async () => {
        try {
            await Peep.deleteMany();
            console.log('Database has been cleared');
        } catch (error) {
            console.log('Error clearing database:', error.message);
            throw new Error();
        };
        try {
            await Peep.insertMany(testPeepArray);
            console.log('Peeps added to database');
        } catch (error) {
            console.log('Problem inserting peeps:', error.message);
            throw new Error();
        };
    });
    describe('Get request Peeps Tests', () => {
        it('should return status 200', async () => {
            const res = await testServer
                .get('/peeps')
                .send();
            expect(res).to.have.status(200);
            expect(res.body).to.be.an('array');
        });

        describe('Post request Peep Tests', () => {
            it('should return status 201 when people successfully added ', async () => {
                let mockPeep = {
                    "peepDescription": "Stranger Things",
                    "peepMessage": "Friends don't lie",
                    "peepUser": "Eleven",
                    "peepDateCreated": "2023-08-08T17:16:23.832+00:00"
                }
                const res = await testServer
                    .post('/peeps')
                    .send(mockPeep);
                expect(res).to.have.status(201);
                expect(res.body).to.be.an('object');
            });
            it('should return a status of 400 if message is blank', async () => {
                let mockPeep = {
                    "peepDescription": "Stranger Things",
                    "peepMessage": "",
                    "peepUser": "Eleven",
                    "peepDateCreated": "2023-08-08T17:16:23.832+00:00"
                }
                const res = await testServer
                    .post('/peeps')
                    .send(mockPeep)
                expect(res).to.have.status(400)
                expect(res.body).to.include({ message: 'Peep message cannot be empty' });
            });
            it('should return a status of 400 if message is longer than 280 characters', async () => {
                const longMessage = "Friends don't lie".repeat(18);

                let mockPeep = {
                    "peepDescription": "Stranger Things",
                    "peepMessage": longMessage,
                    "peepUser": "Eleven",
                    "peepDateCreated": "2023-08-08T17:16:23.832+00:00"
                };
                const res = await testServer
                    .post('/peeps')
                    .send(mockPeep);
                expect(res).to.have.status(400);
            });
        })
    });
});