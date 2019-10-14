import React from "react";
import { render } from "@testing-library/react";
import Dashboard from './Dashboard';

test('Dashboard renders awesomely', ()=> {
    render(<Dashboard/>);
});

// test('Contains, um, does this contain Dashboard stuff?', ()=> {
//     const {getByText} = render(<Dashboard/>);

//     getByText(/unlocked/i);
//     getByText(/open/i);
// })