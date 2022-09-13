import styled from "styled-components";

// Long Way
// color: ${function (props) {
//     return props.theme.primaryColour;
//   }};

//Best and fastest way to write it
const PageHeading = styled.h2`
  color: ${(props) => props.theme.primaryColour};
`;

export default PageHeading;
