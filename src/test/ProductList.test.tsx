import { describe, it, expect } from "vitest";
import ProductList from "../components/ProductList";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";

describe("ProductList component", () => {
    it("should render the component", () => {
        const { container } = render(
            <MemoryRouter>
                <ProductList />
            </MemoryRouter>
        );
        expect(container.firstChild).toBeInTheDocument();
    });

    it("should render all products", () => {
        const { getAllByRole } = render(
            <MemoryRouter>
                <ProductList />
            </MemoryRouter>
        );
        const headings = getAllByRole("heading", { level: 2 });
        expect(headings.length).toBe(10);
    });


});
