import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import Controls from './Controls';

test('Does Controls render?', ()=> {
    render(<Controls />)
});

//Test if Default Open
test('Is door default open?', async ()=>{
    const{findByText} = render(<Controls/>);
    const defaultOpen = findByText(/open gate/i)
    expect(defaultOpen).toBeTruthy();
});



