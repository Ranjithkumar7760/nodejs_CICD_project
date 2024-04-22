import chai from 'chai';
import chaiHttp from 'chai-http';
import cheerio from 'cheerio';
import request from 'supertest';
import app from '../app.js';

chai.use(chaiHttp);
const { expect } = chai;

describe('GET /', () => {
  let res, $;

  before(async () => {
    res = await request(app).get('/');
    $ = cheerio.load(res.text);
  });

  it('should return page heading', () => {
    const headingText = $('h1').text();
    expect(headingText).to.include('This website runs by using node js and is hosted in an AWS beanstalk ');
  });

  it('should return my portfolio link', () => {
    const linkHref = $('a').attr('href');
    expect(linkHref).to.equal('https://drive.google.com/file/d/1LrTlxBXRH_ligoubac6JY1F0Bx1mxcNw/view?usp=drive_link');
  });
});
