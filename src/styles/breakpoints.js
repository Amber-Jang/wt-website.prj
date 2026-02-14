/**
 * Responsive Breakpoints
 * 반응형 브레이크포인트 정의
 */

export const breakpoints = {
    xs: 480,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1440,
};

/**
 * Ant Design Grid의 반응형 설정과 매핑
 * Col의 xs, sm, md, lg, xl, xxl에 대응
 */
export const gridConfig = {
    maxWidth: 1200,
    gutter: [24, 24],
    columns: 24,
};

/**
 * 미디어 쿼리 헬퍼 - CSS-in-JS에서 사용
 * 예: media.md → '@media (min-width: 768px)'
 */
export const media = Object.entries(breakpoints).reduce(
    (acc, [key, value]) => ({
        ...acc,
        [key]: `@media (min-width: ${value}px)`,
    }),
    {}
);

export default breakpoints;
