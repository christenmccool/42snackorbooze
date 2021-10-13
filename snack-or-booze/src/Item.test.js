import { render, asFragment, fireEvent, waitFor } from '@testing-library/react';
import Item from './Item';
import { MemoryRouter } from 'react-router-dom';
import {snacks} from './mockTestDb';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';


test('renders without crashing', () => {
    render(<MemoryRouter initialEntries={['/snacks/hummus']}><Item items={snacks} cantFind="/snacks" params="hummus"/></MemoryRouter>);
});

test("if matches snapshot", () => {
    const {asFragment, debug} = render(<MemoryRouter initialEntries={['/snacks/hummus']}><Item items={snacks} cantFind="/snacks" params="hummus"/></MemoryRouter>);
    expect(asFragment()).toMatchSnapshot();
    debug();
})

