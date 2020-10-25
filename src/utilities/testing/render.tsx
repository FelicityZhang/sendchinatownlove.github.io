jest.mock("../../utilities/api/interactionManager");

import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter, Route } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import { ModalPaymentProvider } from '../../utilities/hooks/ModalPaymentContext';
import i18n from '../../i18n';
import "../../../__mocks__/matchMedia.mock";

const renderIntegration = (initialPage = '', component: React.ReactNode, route?: any) => {
  return render(
    <MemoryRouter initialEntries={[initialPage]}>
      <I18nextProvider i18n={i18n}>
        <Route path={route}>
          <ModalPaymentProvider>{component}</ModalPaymentProvider>
        </Route>
      </I18nextProvider>
    </MemoryRouter>
  );
};

const renderUnit = (component: React.ReactNode) => {
  return render(<I18nextProvider i18n={i18n}>{component}</I18nextProvider>);
};

export { renderIntegration, renderUnit };
