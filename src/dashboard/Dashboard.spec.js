import React from "react";
import { render } from "@testing-library/react";
import Dashboard from './Dashboard';

test('Does Dashboard render?', ()=> {
    render(<Dashboard/>);
});

test('Does this contain Dashboard stuff?', ()=> {
    const {getByText} = render(<Dashboard/>);
    getByText(/unlocked/i);
    getByText(/open/i);
})