import { render, asFragment, fireEvent, wait } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';

test('renders without crashing', () => {
  render(<MemoryRouter><App /></MemoryRouter>);
});

test("if matches snapshot", () => {
  const {asFragment} = render(<MemoryRouter><App /></MemoryRouter>);
  expect(asFragment()).toMatchSnapshot();
})

test("if home renders", async () => {
  const { getByText, debug } = render(<MemoryRouter><App /></MemoryRouter>);
  expect(getByText(`Loading`, {exact: false})).toBeInTheDocument();

  await wait(() => expect(getByText(`Welcome to Silicon Valley's premier dive cafe!`)).toBeInTheDocument());
})

test("if navbar works", async () => {
  const { getByText, debug } = render(<MemoryRouter><App /></MemoryRouter>);
  expect(getByText(`Loading`, {exact: false})).toBeInTheDocument();

  await wait(() => expect(getByText(`Welcome to Silicon Valley's premier dive cafe!`)).toBeInTheDocument());

  const link1 = getByText("Snacks");
  fireEvent.click(link1);
  expect(getByText(`Snack Menu`)).toBeInTheDocument();
  expect(getByText(`A variety of delicious snacks`)).toBeInTheDocument();

  const link2 = getByText("Snack or Booze");
  fireEvent.click(link2);
  await wait(() => expect(getByText(`Welcome to Silicon Valley's premier dive cafe!`)).toBeInTheDocument());
})

test("if menu links work", async () => {
  const { getByText, debug } = render(<MemoryRouter initialEntries={['/snacks']}><App /></MemoryRouter>);

  await wait(() => expect(getByText(`Snack Menu`)).toBeInTheDocument());

  expect(getByText(`A variety of delicious snacks`)).toBeInTheDocument();
  expect(getByText(`Nachos`)).toBeInTheDocument();

  const link = getByText("Nachos");
  fireEvent.click(link);

  expect(getByText(`An American classic!`)).toBeInTheDocument();
})

test("if add form works", async () => {
  const { getByText, getByLabelText, debug } = render(<MemoryRouter initialEntries={['/snacks']}><App /></MemoryRouter>);
  expect(getByText(`Loading`, {exact: false})).toBeInTheDocument();

  await wait(() => expect(getByText(`Snack Menu`)).toBeInTheDocument());

  const link = getByText("Add a new item");
  fireEvent.click(link);

  const input1 = getByLabelText("Name");
  const input2 = getByLabelText("Description");
  const input3 = getByLabelText("Recipe");
  const input4 = getByLabelText("Serving Instructions");

  const button = getByText("Submit");

  fireEvent.change(input1, {target: {value: "Popcorn"}});
  fireEvent.change(input2, {target: {value: "Buttery and delicious"}});
  fireEvent.change(input3, {target: {value: "Pop and salt"}});
  fireEvent.change(input4, {target: {value: "Serve in a blue bowl"}});

  fireEvent.click(button);

  expect(getByText(`Snack Menu`)).toBeInTheDocument();
  await wait(() => expect(getByText(`Popcorn`)).toBeInTheDocument());

  debug();
})