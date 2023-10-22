import { render, screen } from "@testing-library/react";
import Signup from "./Signup";

test("testing the app launch", () => {
    render(<Signup />)
    const text = screen.getByText('Signup')
    expect(text).toBeInTheDocument()
})