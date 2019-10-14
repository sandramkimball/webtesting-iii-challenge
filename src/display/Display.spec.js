import React from "react";
import { render, fireEvent, getByText } from "@testing-library/react";
import Display from './Display';

test('Display renders fantastically', ()=> {
    render(<Display/>);
});


test ('It renders className locked', async ()=> {
    const {queryByText} = render(<Display/>);

    const gateIsLocked = queryByText(/locked/i);
    expect (gateIsLocked).toBeFalsy();

    const button = getByText(/locked/i);
    await fireEvent.click(button);
    expect(queryByText(/locked/i));
})