const request = require("supertest");
const app = require("../../src/app");
const mongoose = require("mongoose")
import config from '../src/config'
// connect to mongodb before running a test
beforeEach((done) => {
    mongoose.connect(config.MONGO_URI,
      { useNewUrlParser: true, useUnifiedTopology: true },
      () => done());
  });
  
  //drop the test data after a test case
  afterEach((done) => {
    mongoose.connection.db.dropDatabase(() => {
      mongoose.connection.close(() => done())
    });
  });

describe("Test the root path", () => {
  test("It should response the GET method", done => {
    request(app)
      .get("/")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});