import Home from "../pages/index";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";





describe("Restaurant", () => {
    it("renders a Restaurant Home Page", () => {
      render(<Home />);
      // check if all components are rendered
      expect(screen.getByTestId("one")).toBeInTheDocument();
      expect(screen.getByTestId("two")).toBeInTheDocument();
      expect(screen.getByTestId("three")).toBeInTheDocument();
    //   expect(screen.getByTestId("add")).toBeInTheDocument();
    //   expect(screen.getByTestId("subtract")).toBeInTheDocument();
    //   expect(screen.getByTestId("multiply")).toBeInTheDocument();
    //   expect(screen.getByTestId("divide")).toBeInTheDocument();
    });
  });

  //These tests are generally human-readable. Let’s see what’s happening in the above cod