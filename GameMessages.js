const GameMessageKey = {
    'teleport': 0x0013,
    'playerLoaded': 0x01f9,
    'playerReady': 0x01fd,
    'parseChatMessage': 0x0352,
    'serverDoneLoadingAllObjects': 0x066a
};

GameMessageKey.key = function(value) {
    for( let prop in this ) {
        if( this.hasOwnProperty( prop ) ) {
            if( this[ prop ] === value )
                return prop;
        }
    }
};

const GameMessages = {
    0x0013: {
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
    0x01f9: {
        playerID: {
            type: 'lwoobjid'
        }
    },
    0x01fd: {
    },
    0x0352: {
        clientState: {
            type: 'int'
        },
        string: {
            type: 'wstring'
        }
    },
    0x066a: {
    }
};

module.exports = {GameMessages, GameMessageKey};