import { render, asFragment, fireEvent, waitFor } from '@testing-library/react';
import NavBar from './NavBar';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';


test('renders without crashing', () => {
    render(<MemoryRouter><NavBar/></MemoryRouter>);
});

test("if matches snapshot", () => {
    const {asFragment} = render(<MemoryRouter><NavBar/></MemoryRouter>);
    expect(asFragment()).toMatchSnapshot();
})

test("if NavBar renders", async () => {
    const { getByText, debug } = render(<MemoryRouter><NavBar/></MemoryRouter>);

    expect(getByText(`Snack or Booze`)).toBeInTheDocument();
    expect(getByText(`Snacks`)).toBeInTheDocument();
    expect(getByText(`Drinks`)).toBeInTheDocument();
})