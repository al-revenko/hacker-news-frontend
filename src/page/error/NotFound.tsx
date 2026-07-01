"use client";

import { Container, Title } from "./ui";

export default function NotFound() {
  return (
    <Container>
      <Title>Not Found</Title>
      <p className="text-center">Could not find requested resource</p>
    </Container>
  );
}
