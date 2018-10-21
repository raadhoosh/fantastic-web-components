// tslint:disable-next-line:no-namespace
declare namespace Variables {

    /**
     * @description it is props for button component
     */
    interface Color {
        /** Description of prop "primary". */
        primary?: boolean;
        /** Description of prop "secondary". */
        secondary?: boolean;
        /** Description of prop "success". */
        success?: boolean;
        /** Description of prop "info". */
        info?: boolean;
        /** Description of prop "warning". */
        warning?: boolean;
        /** Description of prop "danger". */
        danger?: boolean;
        /** Description of prop "light". */
        light?: boolean;
        /** Description of prop "dark". */
        dark?: boolean;
    }

    /**
     * @description it is props for button component
     */
    interface Base {
        bgColor: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark',
        borderColor: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark',
    }

}
export default Variables;
