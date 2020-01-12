const GameMessageKey = {
    'teleport': 0x0013,
    'dropClientLoot': 0x001e,
    'die': 0x0025,
    'requestDie': 0x0026,
    'playEmote': 0x0029,
    'preloadAnimation': 0x002a,
    'playAnimation': 0x002b,
    'controlBehaviors': 0x0030,
    'setName': 0x0048,
    'echoStartSkill': 0x0076,
    'startSkill': 0x0077,
    'casterDead': 0x0078,
    'verifyAck': 0x0079,
    'selectSkill': 0x007c,
    'addSkill': 0x007f,
    'setCurrency': 0x0085,
    'pickupCurrency': 0x0089,
    'pickupItem': 0x008b,
    'teamPickupItem': 0x008c,
    'playFXEffect': 0x009a,
    'stopFXEffect': 0x009b,
    'requestResurrect': 0x009f,
    'resurrect': 0x00a0,
    'popEquippedItemsState': 0x00c0,
    'setStunned': 0x00c6,
    'setStunImmunity': 0x00c8,
    'knockback': 0x00ca,
    'rebuildCancel': 0x00d1,
    'enableRebuild': 0x00d5,
    'moveItemInInventory': 0x00e0,
    'addItemToInventoryClientSync': 0x00e3,
    'removeItemFromInventory': 0x00e6,
    'equipInventory': 0x00e7,
    'unequipInventory': 0x00e9,
    'offerMission': 0x00f8,
    'respondToMission': 0x00f9,
    'notifyMission': 0x00fe,
    'notifyMissionTask': 0x00ff,
    'rebuildNotifyState': 0x0150,
    'toggleInteractionUpdates': 0x0164,
    'terminateInteraction': 0x0165,
    'serverTerminateInteraction': 0x0166,
    'requestUse': 0x016c,
    'vendorOpenWindow': 0x0171,
    'emotePlayed': 0x0173,
    'buyFromVendor': 0x0175,
    'sellToVendor': 0x0176,
    'cancelDonationOnPlayer': 0x017b,
    'teamSetOffWorldFlag': 0x017f,
    'setInventorySize': 0x0185,
    'acknowledgePossession': 0x0187,
    'requestActivityStartStop': 0x0192,
    'requestActivityEnter': 0x0193,
    'requestActivityExit': 0x0194,
    'activityEnter': 0x0195,
    'activityExit': 0x0196,
    'activityStart': 0x0197,
    'activityStop': 0x0198,
    'shootingGalleryFire': 0x019b,
    'requestVendorStatusUpdate': 0x01a0,
    'vendorStatusUpdate': 0x01a1,
    'cancelMission': 0x01a3,
    'resetMissions': 0x01a3,
    'notifyClientShootingGalleryScore': 0x01a9,
    'clientItemConsumed': 0x01ac,
    'updateShootingGalleryRotation': 0x01c0,
    'setUserCtrlCompPause': 0x001d2,
    'setTooltipFlag': 0x01d5,
    'setFlag': 0x01d7,
    'notifyClientFlagChange': 0x01d8,
    'help': 0x01db,
    'vendorTransactionResult': 0x01dc,
    'hasBeenCollected': 0x01e6,
    'hasBeenCollectedByClient': 0x01e7,
    'despawnPet': 0x01f3,
    'toggleFreeCamMode': 0x01f8,
    'playerLoaded': 0x01f9,
    'playerReady': 0x01fd,
    'requestLinkedMission': 0x0203,
    'transferToZone': 0x0204,
    'transferToZoneCheckedIM': 0x0205,
    'invalidZoneTransferList': 0x0207,
    'missionDialogueOK': 0x0208,
    'transferToLastNonInstance': 0x020f,
    'displayMessageBox': 0x0211,
    'messageBoxRespond': 0x0212,
    'choiceBoxRespond': 0x0213,
    'smash': 0x0219,
    'unSmash': 0x021a,
    'setGravityScale': 0x021d,
    'placeModelResponse': 0x0223,
    'setJetPackMod': 0x0231,
    'registerPetID': 0x0235,
    'registerPetDBID': 0x0236,
    'showActivityCountdown': 0x0238,
    'displayTooltip': 0x0239,
    'startActivityTime': 0x0240,
    'activityPause': 0x025a,
    'useNonEquipmentItem': 0x025b,
    'useItemResult': 0x025f,
    'fetchModelMetadataRequest': 0x027e,
    'commandPet': 0x0280,
    'petResponse': 0x0281,
    'requestActivitySummaryLeaderboardData': 0x0288,
    'sendActivitySummaryLeaderboardData': 0x0289,
    'clientNotifyPet': 0x0293,
    'notifyPet': 0x0294,
    'notifyPetTamingMinigame': 0x0295,
    'startServerPetMinigameTimer': 0x0296,
    'clientExitTamingMinigame': 0x0297,
    'petTamingMinigameResult': 0x029b,
    'petTamingTryBuildResult': 0x029c,
    'notifyTamingBuildSuccess': 0x02a1,
    'notifyTamingModelLoadedOnServer': 0x02a2,
    'addPetToPlayer': 0x02a9,
    'requestSetPetName': 0x02ab,
    'setPetName': 0x02ac,
    'petNameChanged': 0x02ae,
    'showPetActionButton': 0x02b4,
    'setEmoteLockState': 0x02b5,
    'useItemRequirementsResponse': 0x02bf,
    'playEmbeddedEffectOnAllClientsNearObject': 0x02c9,
    'queryPropertyData': 0x02cd,
    'propertyEditorBegin': 0x02d4,
    'propertyEditorEnd': 0x02d5,
    'notifyClientZoneObject': 0x02e1,
    'updateReputation': 0x02ea,
    'propertyRentalResponse': 0x02ee,
    'requestPlatformResync': 0x02f8,
    'platformResync': 0x02f9,
    'playCinematic': 0x02fa,
    'endCinematic': 0x02fb,
    'cinematicUpdate': 0x02fc,
    'toggleGhostReferenceOverride': 0x02ff,
    'setGhostReferencePosition': 0x0300,
    'fireEventServerSide': 0x0302,
    'scriptNetworkVarUpdate': 0x030d,
    'updateModelFromClient': 0x0319,
    'deleteModelFromClient': 0x031a,
    'playNDAudioEmitter': 0x0335,
    'stopNDAudioEmitter': 0x0336,
    'enterProperty': 0x0348,
    'propertyEntranceSync': 0x034a,
    'parseChatMessage': 0x0352,
    'setMissionTypeState': 0x0353,
    'broadcastTextToChatbox': 0x035a,
    'openPropertyVendor': 0x035d,
    'clientTradeRequest': 0x0364,
    'serverTradeInvite': 0x0366,
    'serverTradeInitialReply': 0x0369,
    'serverTradeFinalReply': 0x036a,
    'clientTradeCancel': 0x036e,
    'clientTradeAccept': 0x0370,
    'serverTradeAccept': 0x0374,
    'readyForUpdates': 0x0378,
    'setLastCustomBuild': 0x037a,
    'getLastCustomBuild': 0x037b,
    'setIgnoreProjectileCollision': 0x0387,
    'orientToObject': 0x0389,
    'orientToPosition': 0x038a,
    'orientToAngle': 0x038b,
    'propertyModerationAction': 0x0393,
    'propertyModerationStatusUpdate': 0x0395,
    'bounceNotification': 0x03a4,
    'requestClientBounce': 0x03a6,
    'bouncerActiveStatus': 0x03ae,
    'moveInventoryBatch': 0x03bd,
    'objectActivatedClient': 0x03d4,
    'setBBBAutosave': 0x03e4,
    'BBBLoadItemRequest': 0x03e8,
    'BBBSaveRequest': 0x03e9,
    'BBBResetMetadataSourceItem': 0x02ec,
    'notifyClientObject': 0x0412,
    'displayZoneSummary': 0x0413,
    'zoneSummaryDismissed': 0x0414,
    'modifyPlayerZoneStatistic': 0x0416,
    'activityStateChangeRequest': 0x041d,
    'startBuildingWithItem': 0x0421,
    'startArrangingWithItem': 0x0425,
    'finishArrangingWithItem': 0x0426,
    'doneArrangingWithItem': 0x0427,
    'setBuildMode': 0x042c,
    'buildModeSet': 0x042b,
    'buildExitConfirmation': 0x0430,
    'setBuildModeConfirmed': 0x0431,
    'buildModeNotificationReport': 0x0433,
    'setModelToBuild': 0x0435,
    'spawnModelBricks': 0x0436,
    'notifyClientFailedPrecondition': 0x0439,
    'moveItemBetweenInventoryTypes': 0x0445,
    'modularBuildMoveAndEquip': 0x0448,
    'modularBuildFinish': 0x0449,
    'moduleAssemblyDBDataForClient': 0x046b,
    'moduleAssemblyQueryData': 0x046c,
    'echoSyncSkill': 0x0478,
    'syncSkill': 0x0479,
    'requestServerProjectileImpact': 0x047c,
    'doClientProjectileImpact': 0x047f,
    'modularBuildConvertModel': 0x0483,
    'setPlayerAllowedRespawn': 0x048d,
    'toggleSendingPositionUpdates': 0x048e,
    'placePropertyModel': 0x0492,
    'UIMessageServerToSingleClient': 0x04a0,
    'petTamingTryBuild': 0x04ad,
    'reportBug': 0x04ae,
    'requestSmashPlayer': 0x04b2,
    'uncastSkill': 0x04b6,
    'fireEventClientSide': 0x04bd,
    'changeObjectWorldState': 0x04c7,
    'vehicleLockInput': 0x04ce,
    'vehicleUnlockInput': 0x04cf,
    'resyncEquipment': 0x04d6,
    'racingResetPlayerToLastReset': 0x04e4,
    'racingSetPlayerResetInfo': 0x04e6,
    'racingPlayerInfoResetFinished': 0x04e7,
    'lockNodeRotation': 0x04ec,
    'vehicleSetWheelLockState': 0x04f9,
    'notifyVehicleOfRacingObject': 0x04fc,
    'playerReachedRespawnCheckpoint': 0x0510,
    'handleUGCEquipPostDeleteBasedOnEditMode': 0x0514,
    'handleUGCEquipPreCreateBasedOnEditMode': 0x0515,
    'propertyContentFromClient': 0x0519,
    'matchResponse': 0x051d,
    'matchUpdate': 0x051e,
    'changeIdleFlags': 0x053a,
    'vehicleAddPassiveBoostAction': 0x053c,
    'vehicleRemovePassiveBoostAction': 0x053d,
    'vehicleNotifyServerAddPassiveBoostAction': 0x053e,
    'vehicleNotifyServerRemovePassiveBoostAction': 0x053f,
    'buybackFromVendor': 0x0546,
    'zonePropertyModelRotated': 0x055a,
    'zonePropertyModelRemovedWhileEquipped': 0x055b,
    'zonePropertyModelEquipped': 0x055c,
    'notifyRacingClient': 0x056e,
    'racingPlayerLoaded': 0x0570,
    'racingPlayerReady': 0x0571,
    'resetPropertyBehaviors': 0x057e,
    'setConsumableItem': 0x0581,
    'usedInformationPlaque': 0x058b,
    'setStatusImmunity': 0x059b,
    'activateBrickMode': 0x059e,
    'setPetNameModerated': 0x05a8,
    'cancelSkillCast': 0x05ab,
    'modifyLegoScore': 0x05b3,
    'restoreToPostLoadStats': 0x05bc,
    'setRailMovement': 0x05bf,
    'startRailMovement': 0x05c0,
    'cancelRailMovement': 0x05c2,
    'clientRailMovementReady': 0x05c4,
    'playerRailArrivedNotification': 0x05c5,
    'notifyRailActivatorStateChange': 0x05c6,
    'requestRailActivatorState': 0x05c7,
    'notifyRewardMailed': 0x05c8,
    'updatePlayerStatistic': 0x05c9,
    'modifyGhostingDistance': 0x05cd,
    'requeryPropertyModels': 0x05d3,
    'modularAssemblyNIFCompleted': 0x05da,
    'getHotPropertyData': 0x05e7,
    'notifyNotEnoughInventorySpace': 0x05ec,
    'notifyPropertyOfEditMode': 0x060a,
    'updatePropertyPerformanceCost': 0x060b,
    'propertyEntranceBegin': 0x0611,
    'teamSetLeader': 0x0615,
    'teamInviteConfirm': 0x0616,
    'teamGetStatusResponse': 0x0617,
    'teamAddPlayer': 0x061a,
    'teamRemovePlayer': 0x061b,
    'setEmotesEnabled': 0x0629,
    'setResurrectRestoreValues': 0x0637,
    'setPropertyModerationStatus': 0x063a,
    'updatePropertyModelCount': 0x063b,
    'vehicleNotifyHitImaginationServer': 0x0646,
    'vehicleStopBoost': 0x0651,
    'startCelebrationEffect': 0x0652,
    'celebrationCompleted': 0x0660,
    'setLocalTeam': 0x0664,
    'serverDoneLoadingAllObjects': 0x066a,
    'addBuff': 0x066f,
    'removeBuff': 0x0670,
    'playerSetCameraCyclingMode': 0x068c,
    'setMountInventoryID': 0x06be,
    'notifyServerLevelProcessingComplete': 0x06c6,
    'notifyLevelRewards': 0x06c7,
    'serverCancelMoveSkill': 0x06d2,
    'clientCancelMoveSkill': 0x06d3,
    'dismountComplete': 0x06dc,
    'markInventoryItemAsActive': 0x06e7,
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
    // Teleport
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
    // DropClientLoot
    0x001e: {
        usePosition: {
            type: 'bit',
            default: false
        },
        finalPosition: {
            type: 'NiPoint3',
            default: 'NiPoint3:ZERO'
        },
        currency: {
            type: 'long'
        },
        itemTemplate: {
            type: 'long'
        },
        lootID: {
            type: 'lwoobjid'
        },
        owner: {
            type: 'lwoobjid'
        },
        sourceObject: {
            type: 'lwoobjid'
        },
        spawnPosition: {
            type: 'NiPoint3',
            default: 'NiPoint3:ZERO'
        }
    },
    // Die
    0x0025: {
        clientDeath: {
            type: 'bit',
            default: false
        },
        spawnLoot: {
            type: 'bit',
            default: true
        },
        deathType: {
            type: 'wstring'
        },
        angleXZ: {
            type: 'float'
        },
        angleY: {
            type: 'float'
        },
        force: {
            type: 'float'
        },
        killType: {
            type: 'KillType',
            default: 'VIOLENT'
        },
        killerID: {
            type: 'lwoobjid'
        },
        lootOwnerID: {
            type: 'lwoobjid',
            default: 'LWOOBJID:EMPTY'
        }
    },
    // RequestDie
    0x0026: {
        dieAccepted: {
            type: 'bit'
        },
        deathType: {
            type: 'wstring'
        },
        angleXZ: {
            type: 'float'
        },
        angleY: {
            type: 'float'
        },
        force: {
            type: 'float'
        },
        killType: {
            type: 'KillType',
            default: 'VIOLENT'
        },
        killerID: {
            type: 'lwoobjid'
        },
        lootOwnerID: {
            type: 'lwoobjid',
            default: 'LWOOBJID:EMPTY'
        }
    },
    // PlayEmote
    0x0029: {
        emoteID: {
            type: 'long'
        },
        targetID: {
            type: 'lwoobjid'
        }
    },
    // PreloadAnimation
    0x002a: {
        animationID: {
            type: 'wstring'
        },
        handled: {
            type: 'bit',
            default: false
        },
        respondObjectID: {
            type: 'lwoobjid'
        },
        userData: {
            type: 'wstring'
        }
    },
    // PlayAnimation
    0x002b: {
        animationID: {
            type: 'wstring'
        },
        expectAnimationToExist: {
            type: 'bit',
            default: true
        },
        playImmediate: {
            type: 'bit'
        },
        triggerOnCompleteMessage: {
            type: 'bit',
            default: false
        },
        priority: {
            type: 'float',
            default: 0.4
        },
        scale: {
            type: 'float',
            default: 1
        }
    },
    // ControlBehaviors
    0x0030: {
        args: {
            type: 'amf3'
        },
        command: {
            type: 'string'
        }
    },
    // SetName
    0x0048: {
        name: {
            type: 'wstring'
        }
    },
    // EchoStartSkill
    0x0076: {
        usedMouse: {
            type: 'bit',
            default: false
        },
        casterLatency: {
            type: 'float',
            default: 0
        },
        castType: {
            type: 'long',
            default: 0
        },
        lastClickedPosition: {
            type: 'NiPoint3',
            default: 'NiPoint3:0'
        },
        optionalOriginatorID: {
            type: 'lwoobjid'
        },
        optionalTargetID: {
            type: 'lwoobjid',
            default: 'LWOOBJID:EMPTY'
        },
        originatorRotation: {
            type: 'NiQuaternion',
            default: 'NiQuaternion:IDENTITY'
        },
        bitstream: {
            type: 'string'
        },
        skillID: {
            type: 'long'
        },
        uiSkillHandle: {
            type: 'long',
            default: 0
        }
    },
    // StartSkill
    0x0077: {
        usedMouse: {
            type: 'bit',
            default: false
        },
        consumableItemID: {
            type: 'lwoobjid',
            default: 'LWOOBJID:EMPTY'
        },
        casterLatency: {
            type: 'float',
            default: 0
        },
        castType: {
            type: 'long',
            default: 0
        },
        lastClickedPosition: {
            type: 'NiPoint3',
            default: 'NiPoint3:0'
        },
        optionalOriginatorID: {
            type: 'lwoobjid'
        },
        optionalTargetID: {
            type: 'lwoobjid',
            default: 'LWOOBJID:EMPTY'
        },
        originatorRotation: {
            type: 'NiQuaternion',
            default: 'NiQuaternion:IDENTITY'
        },
        bitstream: {
            type: 'string'
        },
        skillID: {
            type: 'long'
        },
        uiSkillHandle: {
            type: 'long',
            default: 0
        }
    },
    // CasterDead
    0x0078: {
        caster: {
            type: 'lwoobjid',
            default: 'LWOOBJID:EMPTY'
        },
        skillHandle: {
            type: 'long'
        }
    },
    // VerifyAck
    0x0079: {
        different: {
            type: 'bit',
            default: false
        },
        bitStream: {
            type: 'string'
        },
        uiHandle: {
            type: 'long',
            default: 0
        }
    },
    // SelectSkill
    0x007c: {
        fromSkillSet: {
            type: 'bit',
            default: false
        },
        skillID: {
            type: 'long'
        }
    },
    // AddSkill
    0x007f: {
        AICombatWeight: {
            type: 'long',
            default: 0
        },
        fromSkillSet: {
            type: 'bit',
            default: false
        },
        castType: {
            type: 'long',
            default: 0
        },
        timeSecs: {
            type: 'float',
            default: -1
        },
        timeCanCast: {
            type: 'long',
            default: -1
        },
        skillID: {
            type: 'long'
        },
        slotID: {
            type: 'long',
            default: -1
        },
        temporary: {
            type: 'bit',
            default: true
        }

    },
    // RemoveSkill
    0x0080: {
        fromSkillSet: {
            type: 'bit',
            default: false
        },
        skillID: {
            type: 'long'
        }
    },
    // SetCurrency
    0x0085: {
        currency: {
            type: 'long long'
        },
        lootType: {
            type: 'long',
            default: 0
        },
        position: {
            type: 'NiPoint3'
        },
        lot: {
            type: 'long',
            default: 0
        },
        sourceObject: {
            type: 'lwoobjid',
            default: 'LWOOBJID:EMPTY'
        },
        sourceTradeID: {
            type: 'lwoobjid',
            default: 'LWOOBJID:EMPTY'
        },
        sourceType: {
            type: 'int',
            default: 0
        }
    },
    // PickupCurrency
    0x0089: {
        currency: {
            type: 'long'
        },
        position: {
            type: 'NiPoint3'
        }
    },
    // PickupItem
    0x008b: {
        lootID: {
            type: 'lwoobjid'
        },
        lootOwnerID: {
            type: 'lwoobjid'
        }
    },
    // TeamPickupItem
    0x008c: {
        lootID: {
            type: 'lwoobjid'
        },
        lootOwnerID: {
            type: 'lwoobjid'
        }
    },
    // PlayFXEffect
    0x009a: {
        effectID: {
            type: 'long',
            default: -1
        },
        effectType: {
            type: 'wstring'
        },
        scale: {
            type: 'float',
            default: 1
        },
        name: {
            type: 'string'
        },
        priority: {
            type: 'float',
            default: 1
        },
        secondary: {
            type: 'lwoobjid',
            default: 'LWOOBJID:EMPTY'
        },
        serialize: {
            type: 'bit',
            default: true
        }
    },
    // StopFXEffect
    0x009b: {
        killImmediate: {
            type: 'bit'
        },
        name: {
            type: 'string'
        }
    },
    // RequestResurrect
    0x009f: {
    },
    // Resurrect
    0x00a0: {
        resurrectImmediately: {
            type: 'bit',
            default: false
        }
    },
    // PopEquippedItemsState
    0x00c0: {
    },
    // SetStunned
    0x0c6: {
        originator: {
            type: 'lwoobjid',
            default: 'LWOOBJID:EMPTY'
        },
        stateChangeType: {
            type: 'StateChangeType'
        },
        cantAttack: {
            type: 'bit'
        },
        cantAttackOutChangeWasApplied: {
            type: 'bit',
            default: false
        },
        cantEquip: {
            type: 'bit'
        },
        cantEquipOutChangeWasApplied: {
            type: 'bit',
            default: false
        },
        cantInteract: {
            type: 'bit'
        },
        cantInteractOutChangeWasApplied: {
            type: 'bit',
            default: false
        },
        cantJump: {
            type: 'bit'
        },
        cantJumpOutChangeWasApplied: {
            type: 'bit',
            default: false
        },
        cantMove: {
            type: 'bit'
        },
        cantMoveOutChangeWasApplied: {
            type: 'bit',
            default: false
        },
        cantTurn: {
            type: 'bit'
        },
        cantTurnOutChangeWasApplied: {
            type: 'bit',
            default: false
        },
        cantUseItem: {
            type: 'bit',
            default: false
        },
        cantUseItemOutChangeApplied: {
            type: 'bit',
            default: false
        },
        dontTerminateInteract: {
            type: 'bit',
            default: false
        },
        ignoreImmunity: {
            type: 'bit',
            default: true
        }
    },
    // SetStunImmunity
    0x00c8: {
        caster: {
            type: 'lwoobjid',
            default: 'LWOOBJID:EMPTY'
        },
        stateChangeType: {
            type: 'StateChangeType'
        },
        immuneToStunAttack: {
            type: 'bit'
        },
        immuneToStunEquip: {
            type: 'bit'
        },
        immuneToStunInteract: {
            type: 'bit'
        },
        immuneToStunJump: {
            type: 'bit'
        },
        immuneToStunMove: {
            type: 'bit'
        },
        immuneToStunTurn: {
            type: 'bit'
        },
        immuneToStunUseItem: {
            type: 'bit'
        }
    },
    // Knockback
    0x00ca: {
        caster: {
            type: 'lwoobjid',
            default: 'LWOOBJID:EMPTY'
        },
        originator: {
            type: 'lwoobjid',
            default: 'LWOOBJID:EMPTY'
        },
        knockBackTimeMS: {
            type: 'long',
            default: 0
        },
        vector: {
            type: 'NiPoint3'
        }
    },
    // RebuildCancer
    0x00d1: {
        earlyRelease: {
            type: 'earlyRelease'
        },
        userID: {
            type: 'lwoobjid'
        }
    },
    // EnableRebuild
    0x00d5: {
        enable: {
            type: 'bit'
        },
        fail: {
            type: 'bit'
        },
        success: {
            type: 'bit'
        },
        failReason: {
            type: 'FailReason',
            default: 'NOT_GIVEN'
        },
        duration: {
            type: 'float'
        },
        user: {
            type: 'lwoobjid'
        }
    },
    // MoveItemInInventory
    0x0e0: {
        destinationInventoryType: {
            type: 'long',
            default: 0
        },
        objectID: {
            type: 'lwoobjid'
        },
        inventoryType: {
            type: 'long'
        },
        responseCode: {
            type: 'long'
        },
        slot: {
            type: 'long'
        }
    },
    // AddItemToInventoryClientSync
    0x00e3: {
        bound: {
            type: 'bit'
        },
        boe: {
            type: 'bit'
        },
        bop: {
            type: 'bit'
        },
        lootTypeSource: {
            type: 'long',
            default: 0
        },
        extraInfo: {
            type: 'wstring'
        },
        objectTemplate: {
            type: long
        },
        subkey: {
            type: 'lwoobjid',
            default: 'LWOOBJID:EMPTY'
        },
        inventoryType: {
            type: 'long',
            default: 0
        },
        itemCount: {
            type: 'long',
            default: 1
        },
        itemsTotal: {
            type: 'long',
            default: 0
        },
        newObjectID: {
            type: 'lwoobjid'
        },
        flyingLootPosition: {
            type: 'NiPoint3'
        },
        showFlyingLoot: {
            type: 'bit',
            default: true
        },
        slotID: {
            type: 'long'
        }
    },
    // PlayerLoaded
    0x01f9: {
        playerID: {
            type: 'lwoobjid'
        }
    },
    // PlayerReady
    0x01fd: {
    },
    // TransferToZone
    0x0204: {
        checkTransferAllowed: {
            type: 'bit',
            default: false
        },
        cloneID: {
            type: 'lwoobjid',
            default: 0
        },
        x: {
            type: 'float',
            default: 'MAX_FLOAT'
        },
        y: {
            type: 'float',
            default: 'MAX_FLOAT'
        },
        z: {
            type: 'float',
            default: 'MAX_FLOAT'
        },
        rotW: {
            type: 'float',
            default: 1
        },
        rotX: {
            type: 'float',
            default: 0
        },
        rotY: {
            type: 'float',
            default: 0
        },
        rotZ: {
            type: 'float',
            default: 0
        },
        spawnPoint: {
            type: 'wstring'
        },
        instanceType: {
            type: 'uchar'
        },
        zoneID: {
            type: 'short'
        }
    },
    // ParseChatMessage
    0x0352: {
        clientState: {
            type: 'int'
        },
        string: {
            type: 'wstring'
        }
    },
    // serverDoneLoadingAllObjects
    0x066a: {
    }
};

module.exports = {GameMessages, GameMessageKey};