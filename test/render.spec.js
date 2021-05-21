import React from 'react';
import { expect } from 'chai';

import { render, Mjml, MjmlHead, MjmlTitle, MjmlBody, MjmlRaw } from '../src';

describe('render()', () => {
  it('should render the HTML', async () => {
    const email = (
      <Mjml>
        <MjmlHead>
          <MjmlTitle>Title</MjmlTitle>
        </MjmlHead>
        <MjmlBody>
          <MjmlRaw>
            <p>Paragraph</p>
          </MjmlRaw>
        </MjmlBody>
      </Mjml>
    );
    const { html } = await render(email);
    expect(html).to.not.be.undefined;
    expect(html).to.contain('<!doctype html>');
    expect(html).to.contain('<title>Title</title>');
    expect(html).to.contain('<p>Paragraph</p>');
  });

  it('should throw an error if invalid markup is given', async () => {
    const email = (
      <Mjml>
        <MjmlBody>
          <div>Ooops!</div>
        </MjmlBody>
      </Mjml>
    );
    try {
      await render(email);
      expect(true, 'Promise should fail').eq(false);
    } catch (e) {
      expect(e.message.match(/Element div doesn't exist or is not registered/))
        .to.be.ok;
    }
  });

  it('should not throw an error if soft validation level is passed', async () => {
    const email = (
      <Mjml>
        <MjmlBody>
          <div>Ooops!</div>
        </MjmlBody>
      </Mjml>
    );
    const { errors } = await render(email, {
      validationLevel: 'soft',
      minify: false,
    });
    expect(errors.length).to.equal(1);
    expect(errors[0].message).to.contain(
      "Element div doesn't exist or is not registered",
    );
  });
});
