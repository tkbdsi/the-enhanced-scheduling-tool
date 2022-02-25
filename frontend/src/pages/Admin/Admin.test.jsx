import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import App from '../../App';

describe('testing the Administration on the /admin route', () => {

  const setup = () => {
    render(
        <MemoryRouter initialEntries={['/admin']} initialIndex={1}>
            <Routes>
                <Route path="/admin" element={<App />} />
            </Routes>
        </MemoryRouter>    
    );
  };

  it('should have the option to add a new member displayed', async () => {
    setup();
    const textToFind = "+ Add New Member";
    const findText = await screen.findByText(textToFind);
    expect(findText).toBeInTheDocument();
  });

  it('should have a button to represent uploading new data', async () => {
    setup();
    const foundButton = await screen.findByRole('button', {name: /Upload Data/i});
    expect(foundButton).toBeInTheDocument();
  });

  it('should have a button to represent exporting current data', async () => {
    setup();
    const foundButton = await screen.findByRole('button', {name: /Export Data/i});
    expect(foundButton).toBeInTheDocument();
  });

  it('should have a button to represent removing a user', async () => {
    setup();
    const foundButton = await screen.findByRole('button', {name: /Remove User/i});
    expect(foundButton).toBeInTheDocument();
  });

});