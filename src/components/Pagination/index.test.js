import React from 'react';
import Pagination from './index';
import { render, waitForElement } from '@testing-library/react';

describe('comportamento', () => {
  it('renderiza marcador corretamentem na página selecionada', async() => {
    const {container} = render(
      <Pagination max={2} currentPage={1} onChange={(page) => {}}></Pagination>
    );
    const el = await waitForElement(() => container);
    expect(el.querySelector('a.active').innerText).toEqual("1");
  });
});