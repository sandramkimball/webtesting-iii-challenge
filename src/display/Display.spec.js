import React from "react";
import { render, fireEvent, getByText } from "@testing-library/react";
import Display from './Display';

test('Does Display render?', ()=> {
    render(<Display />);
});