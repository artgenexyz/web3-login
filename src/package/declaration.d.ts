declare module "*.png"

declare module "*.module.css" {
    const classes: { [key: string]: string };
    export default classes;
}

declare module '@mui/material/styles' {
    interface TypographyVariants {
        description: React.CSSProperties;
    }

    // allow configuration using `createTheme`
    interface TypographyVariantsOptions {
        description?: React.CSSProperties;
    }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        description: true;
    }
}
