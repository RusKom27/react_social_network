import { render, screen } from '@testing-library/react';
import {Loader} from "./Loader";

test('component rendering', () => {
    render(<Loader />);
    const component = document.getElementsByClassName("loader")[0]
    expect(component).toBeInTheDocument();
});
