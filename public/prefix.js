function generatePrefix({ baseColor }) {
    return `/* Paste this as the Custom CSS in Server settings > Appearance */

:root {
    --mast-x1: ${baseColor ?? "red"};
}
`;
}
