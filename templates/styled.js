var createStyled = function (name) {
  return "import styled from 'styled-components';\n\n`" + "const " + name + " = styled.div`\n\n\n`";
};

module.exports = createStyled;
