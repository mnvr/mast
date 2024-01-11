function generatePrefix({ baseColor }) {
    return `/* Add this to Server settings > Appearance > Custom CSS */

:root {
    --mast-x1: ${baseColor ?? "red"};
}
`;
}
