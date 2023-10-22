import { render, screen } from "@testing-library/react";
import Signup from "./Signup";

test("testing the app launch", () => {
    render(<Signup />)
    expect(screen.getByPlaceholderText("Enter Your Department Name")).toBe();

});