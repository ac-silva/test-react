import React from 'react';
import Pagination from './index';
import { render } from '@testing-library/react';

describe('comportamento', () => {
  it('renderiza corretamente o marcador corretamentem na página selecionada', () => {
    const {container} = render(
      <Pagination max={2} currentPage={1}></Pagination>
    );
    const marker = container.querySelector('a.active');
    expect(marker.innerText).toEqual(1);
  });
});