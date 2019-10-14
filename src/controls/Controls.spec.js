import React from "react";
import { render } from "@testing-library/react";
import Controls from './Controls';

test('Does Controls render?', ()=> {
    render(<Controls />)
});

//Test if Default Open
// test('Is door default open?', async ()=>{
//     const{getByText} = render(<Controls/>);
//     const defaultOpen = getByText(/open gate/i)
//     expect(defaultOpen).toBeTruthy();

//     const button = getByText(/close gate/i);
//     await fireEvent.click(button);
//     expect(getByText)(/open gate/i)
// })

