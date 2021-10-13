import { render, asFragment, fireEvent, waitFor } from '@testing-library/react';
import Home from './Home';
import {drinks, snacks} from './mockTestDb';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';


test('renders without crashing', () => {
    render(<Home snacks={snacks} drinks={drinks}/>);
});

test("if matches snapshot", () => {
    const {asFragment} = render(<Home snacks={snacks} drinks={drinks}/>);
    expect(asFragment()).toMatchSnapshot();
})

test("if home renders", async () => {
    const { getByText, debug } = render(<Home snacks={snacks} drinks={drinks}/>);
    debug();

    expect(getByText(`Welcome to Silicon Valley's premier dive cafe!`)).toBeInTheDocument();
    expect(getByText(`Serving 3 Different Snacks and 4 Different Drinks`)).toBeInTheDocument();
})