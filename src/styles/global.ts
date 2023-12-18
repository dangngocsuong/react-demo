import styled, { createGlobalStyle } from "styled-components";
import theme from "./theme";	

const GlobalStyle = createGlobalStyle`
/* Reset */
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
}

*,
*:before,
*:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
    display: block;
}

body {
    font-family: 'Poppins';
    font-size: 16px;
    line-height: 1.75;
    font-weight: 300;    
    box-sizing: border-box;
    color: ${theme.colors.dovegray};
}

ol,
ul {
    list-style: none;
}

blockquote,
q {
    quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
    content: '';
    content: none;
}

table {
    border-collapse: collapse;
    border-spacing: 0;
}

a {
    transition: all .2s;
    text-decoration: none;

    &:hover {
        color: ${theme.colors.monza};
    }
}

img {
    vertical-align: middle;
    max-width: 100%;
    height: auto;
    transition: all .2s;
}

input {
    outline: none;
}

h1,h2,h3,h4,h5,h6 {
    font-weight: 600;
}

.alert {
    color: ${theme.colors.monza};
    margin-top: 5px;
}

@keyframes left-to-right {
    from {
        transform: translateX(0);
        opacity: 1;
    }

    to {
        transform: translateX(10px);
        opacity: 0;
    }
}

@keyframes right-to-left {
    from {
        transform: rotate(180deg) translateX(0);
        opacity: 1;
    }

    to {
        transform: rotate(180deg) translateX(10px);
        opacity: 0;
    }
}

@keyframes zoom-in-out {
    from {
        transform: scale(1);
        opacity: 1;
    }

    to {
        transform: scale(1.4);
        opacity: 0;
    }
}
`;

export default GlobalStyle;

export const SiteWrap = styled.div`    
    color: ${props => props.theme.theme === 'light' ? theme.colors.dovegray : theme.colors.white};
    background-color: ${props => props.theme.theme === 'light' ? theme.colors.white : theme.colors.shark};
    .pagination a, 
    .pagination span {
        color: ${props => props.theme.theme === 'light' ? theme.colors.dovegray : theme.colors.white};
    }   
`