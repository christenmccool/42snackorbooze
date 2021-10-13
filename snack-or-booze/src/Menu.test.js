import { render, asFragment, fireEvent, waitFor } from '@testing-library/react';
import Menu from './Menu';
import { MemoryRouter } from 'react-router-dom';
import {snacks} from './mockTestDb';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';


test('renders without crashing', () => {
    render(<MemoryRouter><Menu items={snacks} type='snacks' title='Snack Menu' description='Tasty Snacks' /></MemoryRouter>);
});

test("if matches snapshot", () => {
    const {asFragment} = render(<MemoryRouter><Menu items={snacks} type='snacks' title='Snack Menu' description='Tasty Snacks' /></MemoryRouter>);
    expect(asFragment()).toMatchSnapshot();
})

test("if NavBar renders", async () => {
    const { getByText, debug } = render(<MemoryRouter><Menu items={snacks} type='snacks' title='Snack Menu' description='Tasty Snacks' /></MemoryRouter>);

    expect(getByText(`Snack Menu`)).toBeInTheDocument();
    expect(getByText(`Tasty Snacks`)).toBeInTheDocument();
    expect(getByText(`Nachos`)).toBeInTheDocument();
    expect(getByText(`Hummus`)).toBeInTheDocument();
    expect(getByText(`Arugula and Walnut Salad`)).toBeInTheDocument();

})