import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from "./Home";
import ExpenseForm from '../Expensees/ExpenseForm';
import { Provider } from 'react-redux';
import store from '../Store/Store';
import {userEvent} from '@testing-library/user-event';

describe('Home Component', () => {
  test('renders home component', () => {
    render(<MemoryRouter>
      <Provider store={store}><Home /></Provider>

    </MemoryRouter>
    );
    const welcomeText = screen.getByText('Welcome to Expense Tracker!!', { exact: false });
    expect(welcomeText).toBeInTheDocument();
  });

  test('Add Expense', () => {
    render(
      <MemoryRouter>
      <Provider store={store}><ExpenseForm /></Provider>
    </MemoryRouter>
    )
    const button = screen.getByText('Add Expense', {exact: false});
    fireEvent.click(button);
  })

  
  test('submitting the form', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <ExpenseForm />
        </Provider>
      </MemoryRouter>
    );

    // Simulate user input
    const descriptionInput = screen.getByLabelText('Description');
    const amountInput = screen.getByLabelText('Amount Spent');
    const categorySelect = screen.getByLabelText('Category');

    fireEvent.change(descriptionInput, { target: { value: 'Test Description' } });
    fireEvent.change(amountInput, { target: { value: '100' } });
    fireEvent.change(categorySelect, { target: { value: 'food' } });

   // Simulate form submission
   const submitButton = screen.getByText('Add Expense');
   fireEvent.click(submitButton);

 
  })
})
