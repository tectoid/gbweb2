import ol from 'openlayers'

const initialState = [
    {
        id: 'zoomOut',
        active: false,
        type:'tool',
        onClick: function () {
            console.log('heya')
        }
    },
    {
        id: 'zoomBox',
        active: false,
        type:'tool',
        objects:{
            interaction: null,
        },
        onClick: function () {
            console.log('heya')
        },
    },
    {
        id: 'dragPan',
        type:'tool',
        active: false,
        onClick: function () {
            console.log('heya')
        },
    },
]


export default function (state = initialState, action) {
    switch (action.type) {
        case 'CONTROL_CLICKED':
            var newa = []
            state.map(function (control) {
                if (control.id === action.payload.id) {
                    if(control.type === 'tool'){

                    }
                    control.active = true
                    control.onClick()
                }
                newa.push(control)
            });
            return newa
        default:
            return state
    }
    return state
}