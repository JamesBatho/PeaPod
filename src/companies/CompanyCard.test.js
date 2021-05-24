import React from "react";
import { render } from "@testing-library/react";
import CompanyCard from "./CompanyCard";
import { MemoryRouter } from "react-router";

it("matches snapshot with logo", function () {
  const { asFragment } = render(
    <MemoryRouter>
      <CompanyCard
        handle="test"
        name="Test Company"
        description="a great company for you!"
      />
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});

it("matches snapshot without logo", function () {
  const { asFragment } = render(
    <MemoryRouter>
      <CompanyCard
        handle="test"
        name="Test Company2"
        description="greater company"
      />
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
