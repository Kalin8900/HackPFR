import mainTheme from "./theme";
const mt = mainTheme;

const btnStyle = {
    background: mt.colors.white,
    borderRadius: '2%',
    border: 0,
    color: mt.colors.black,
    fontWeight: 600,
    fontSize: mt.font.size.buttonSize,
    boxShadow: '10px 10px ' + mt.colors.buttonShadow
}

const coloredBtnStyle = {
    ...btnStyle,
    marginBottom: '1vw'
};
coloredBtnStyle.background = mt.colors.accent;
coloredBtnStyle.color = mt.colors.white;

export {btnStyle, coloredBtnStyle}