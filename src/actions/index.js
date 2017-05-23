export const selectControl = (control) => {
    console.log(control)
    return {
        type: 'CONTROL_CLICKED',
        payload: control
    }
};

