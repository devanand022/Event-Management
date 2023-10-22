import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import Toogle from "../Toggle/Toggle";

test("testing the app launch", () => {
    render(<Toogle />)
    const text = screen.queryByTestId("Signupbutton");
    expect(text).toBeInTheDocument();
});