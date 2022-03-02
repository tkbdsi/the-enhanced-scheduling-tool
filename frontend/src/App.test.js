import { render } from '@testing-library/react';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

test('renders learn react link', () => {


  describe('testing the Developers on the /about route', () => {  const setup = () => {
    render(
      <Router>
        <App />
      </Router>
    )}
  });

  it('should have a button to represent removing a user', async () => {
    setup();
    const foundButton = await screen.findByTestId('data-testid-download');
    expect(foundButton).toBeInTheDocument();
  });

})