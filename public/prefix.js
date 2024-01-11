function generatePrefix({ baseColor }) {
    return `
:root {
    --mast-x1: ${baseColor ?? "red"};
}
`;
}
