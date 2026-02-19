/**
 * Design Token Configuration
 * ===========================
 * 이 파일은 전체 디자인 시스템의 단일 진실 소스(Single Source of Truth)입니다.
 * 향후 Figma MCP에서 자동 생성되는 토큰으로 교체하면 전체 사이트 스타일이 업데이트됩니다.
 *
 * 사용법:
 * - Ant Design: antTheme을 ConfigProvider에 주입
 * - CSS: global.css에서 CSS Variables로 재선언
 * - Components: designTokens를 직접 import하여 사용
 */

export const designTokens = {
    // ─── Colors ──────────────────────────────────────────
    colors: {
        primary: '#1A1A1A',        // 메인 다크
        primaryLight: '#333333',   // 밝은 다크
        primaryDark: '#111111',    // 어두운 다크
        secondary: '#2BC48B',      // 그린 포인트
        secondaryLight: '#4CD9A4', // 밝은 그린
        accent: '#2BC48B',         // 포인트 그린

        // Neutrals
        white: '#FFFFFF',
        gray50: '#F8F9FA',
        gray100: '#F1F3F5',
        gray200: '#E9ECEF',
        gray300: '#DEE2E6',
        gray400: '#ADB5BD',
        gray500: '#868E96',
        gray600: '#495057',
        gray700: '#343A40',
        gray800: '#212529',
        black: '#0D0D0D',

        // Semantic
        success: '#2BC48B',
        warning: '#F2994A',
        error: '#EB5757',
        info: '#2BC48B',

        // Background
        bgPrimary: '#FFFFFF',
        bgSecondary: '#F8F9FA',
        bgDark: '#111111',
        bgOverlay: 'rgba(17, 17, 17, 0.85)',
    },

    // ─── Typography ──────────────────────────────────────
    typography: {
        fontFamily: "'Pretendard Variable', 'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        fontFamilyHeading: "'Pretendard Variable', 'Pretendard', -apple-system, BlinkMacSystemFont, sans-serif",

        // Font Sizes (px)
        fontSize: {
            xs: 12,
            sm: 14,
            md: 16,
            lg: 18,
            xl: 20,
            '2xl': 24,
            '3xl': 30,
            '4xl': 36,
            '5xl': 48,
            '6xl': 60,
            '7xl': 72,
        },

        // Font Weights
        fontWeight: {
            light: 300,
            regular: 400,
            medium: 500,
            semibold: 600,
            bold: 700,
            extrabold: 800,
        },

        // Line Heights
        lineHeight: {
            tight: 1.2,
            normal: 1.5,
            relaxed: 1.75,
        },

        // Letter Spacing
        letterSpacing: {
            tight: '-0.02em',
            normal: '0',
            wide: '0.05em',
            wider: '0.1em',
        },
    },

    // ─── Spacing ─────────────────────────────────────────
    spacing: {
        xs: 4,
        sm: 8,
        md: 16,
        lg: 24,
        xl: 32,
        '2xl': 48,
        '3xl': 64,
        '4xl': 80,
        '5xl': 120,
    },

    // ─── Border Radius ──────────────────────────────────
    borderRadius: {
        none: 0,
        sm: 4,
        md: 8,
        lg: 12,
        xl: 16,
        '2xl': 24,
        full: 9999,
    },

    // ─── Shadows ─────────────────────────────────────────
    shadows: {
        sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
        md: '0 4px 6px rgba(0, 0, 0, 0.07)',
        lg: '0 10px 25px rgba(0, 0, 0, 0.1)',
        xl: '0 20px 50px rgba(0, 0, 0, 0.15)',
        glow: '0 0 30px rgba(43, 196, 139, 0.3)',
    },

    // ─── Transitions ─────────────────────────────────────
    transitions: {
        fast: '0.15s ease',
        normal: '0.3s ease',
        slow: '0.5s ease',
        bounce: '0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
    },

    // ─── Z-Index ─────────────────────────────────────────
    zIndex: {
        dropdown: 100,
        sticky: 200,
        fixed: 300,
        overlay: 400,
        modal: 500,
        popover: 600,
        tooltip: 700,
    },
};

/**
 * Ant Design Theme Configuration
 * ConfigProvider의 theme prop에 전달할 객체
 */
export const antTheme = {
    token: {
        // Colors
        colorPrimary: designTokens.colors.primary,
        colorSuccess: designTokens.colors.success,
        colorWarning: designTokens.colors.warning,
        colorError: designTokens.colors.error,
        colorInfo: designTokens.colors.info,
        colorLink: designTokens.colors.accent,

        // Typography
        fontFamily: designTokens.typography.fontFamily,
        fontSize: designTokens.typography.fontSize.md,
        fontSizeHeading1: designTokens.typography.fontSize['6xl'],
        fontSizeHeading2: designTokens.typography.fontSize['4xl'],
        fontSizeHeading3: designTokens.typography.fontSize['3xl'],
        fontSizeHeading4: designTokens.typography.fontSize['2xl'],
        fontSizeHeading5: designTokens.typography.fontSize.xl,
        fontSizeLG: designTokens.typography.fontSize.lg,
        fontSizeSM: designTokens.typography.fontSize.sm,
        fontSizeXL: designTokens.typography.fontSize.xl,
        lineHeight: designTokens.typography.lineHeight.normal,

        // Border Radius
        borderRadius: designTokens.borderRadius.md,
        borderRadiusLG: designTokens.borderRadius.lg,
        borderRadiusSM: designTokens.borderRadius.sm,

        // Spacing / Sizing
        controlHeight: 40,
        controlHeightLG: 48,
        controlHeightSM: 32,
        padding: designTokens.spacing.md,
        paddingLG: designTokens.spacing.lg,
        paddingSM: designTokens.spacing.sm,
        paddingXS: designTokens.spacing.xs,
        margin: designTokens.spacing.md,
        marginLG: designTokens.spacing.lg,
        marginSM: designTokens.spacing.sm,
        marginXS: designTokens.spacing.xs,

        // Motion
        motionDurationFast: '0.15s',
        motionDurationMid: '0.3s',
        motionDurationSlow: '0.5s',
    },
    components: {
        Button: {
            borderRadius: designTokens.borderRadius.md,
            controlHeight: 44,
            fontSize: designTokens.typography.fontSize.md,
            fontWeight: designTokens.typography.fontWeight.semibold,
        },
        Menu: {
            fontSize: designTokens.typography.fontSize.md,
            fontWeight: designTokens.typography.fontWeight.medium,
        },
        Card: {
            borderRadiusLG: designTokens.borderRadius.lg,
        },
    },
};

export default designTokens;
