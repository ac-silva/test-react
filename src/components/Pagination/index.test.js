import React from 'react';
import Pagination from './index';
import { render } from '@testing-library/react';

describe('comportamento', () => {
  it('renderiza marcador corretamentem na página selecionada', async() => {
    const {container} = render(
      <Pagination max={2} currentPage={1} onChange={(page) => {}}></Pagination>
    );
    
    const marker = await waitForElement(() => container.querySelector('a.active'));
    expect(marker.innerText).toEqual("1");
  });
});