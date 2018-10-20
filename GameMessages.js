const GameMessages = {
    teleport: {
        id: 0x0013,
        noGravTeleport: {
            type: 'bit'
        },
        ignoreY: {
            type: 'bit',
            default: true
        },
        setRotation: {
            type: 'bit',
            default: false
        },
        skipAllChecks: {
            type: 'bit',
            default: false
        },
        pos: {
            type: 'NiPoint3',
        },
        useNavmesh: {
            type: 'bit',
            default: false
        },
        w: {
            type: 'float',
            default: 1.0
        },
        x: {
            type: 'float'
        },
        y: {
            type: 'float'
        },
        z: {
            type: 'float'
        }
    },
    playerReady: {
        id: 0x01fd
    },
    serverDoneLoadingAllObjects: {
        id: 0x066a
    }
};