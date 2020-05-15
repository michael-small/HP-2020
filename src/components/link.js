import { Link } from "gatsby"
import styled from "styled-components"

const StyledLink = styled(Link)`
  && {
    text-decoration: none;
    color: inherit;
    &:hover {
      text-decoration: underline;
    }
  }
`

export { StyledLink }
