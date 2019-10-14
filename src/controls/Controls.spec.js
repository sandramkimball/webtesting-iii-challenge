import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Controls from './Controls';

//Text Render
test('Controls render correctly:', ()=> {
    expect(render(<Controls />)).toMatchSnapshot();
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

