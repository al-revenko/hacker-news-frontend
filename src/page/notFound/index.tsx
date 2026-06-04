"use client";
import { ContentLayout } from "@shared/ui";
import { styled } from "@mui/material";

export default function NotFoundPage() {
  return (
    <ContentLayout>
      <Container>
        <Title>Not Found</Title>
        <SubTitle>Could not find requested resource</SubTitle>
      </Container>
    </ContentLayout>
  );
}

const Container = styled("div")`
  width: 100%;
  height: 80dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.palette.primary.main};
`;

const Title = styled("h1")`
  font-size: 60px;
`;

const SubTitle = styled("h2")`
  font-size: 20px;
`;
