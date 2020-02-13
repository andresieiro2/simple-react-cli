var createStyled = function (name) {
  return "import styled from 'styled-components';\n\n" +
    "const " + name + "Styled = styled.div`\n\n\n`\n\n" +
    "export default " + name + "Styled ;";
};

module.exports = createStyled;
