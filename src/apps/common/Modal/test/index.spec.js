
import React, { Fragment } from 'react';
import { shallow } from 'enzyme';
import Modal from '../index';

const mockModal = (
  <Fragment>
    <div className="shroud" />
    <div className="modal-content-wrapper">
    </div>
  </Fragment>
);

describe('Modal', () => {

  document.body.innerHTML =
    '<div id="modalshell" class="modal-wrapper"></div>';

  const modalRoot = document.getElementById('modalshell');

  it('should render correctly', () => {
    expect(shallow(
      <div id="modalshell" class="modal-wrapper">
        <Modal />
      </div>
    ).exists(mockModal)).toBe(true);
  });
});
