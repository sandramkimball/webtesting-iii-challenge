import React from "react";
import { render} from "@testing-library/react";
import Display from './Display';
import { getByTitle } from "react-testing-library";

test('Does Display render?', ()=> {
    render(<Display />);
});


// Contains Display Items
test('Contains Display components?', ()=> {
    const {getByTitle} = render(<Display/>);
    getByTitle(/lockedClass/i);
});