const BuildType = {
    NOWHERE: 0,
    IN_WORLD: 1,
    ON_PROPERTY: 2
};

const CinematicEvent = {
    STARTED: 0,
    WAYPOINT: 1,
    ENDED: 2
};

const CyclingMode = {
    ALLOW_CYCLE_TEAMMATES: 0,
    DISALLOW_CYCLING: 1
};

const DeleteReason = {
    PICKING_MODEL_UP: 0,
    RETURNING_MODEL_TO_INVENTORY: 1,
    BREAKING_MODEL_APART: 2
};

const endBehavior = {
    RETURN: 0,
    WAIT: 1
};

const FailReason = {
    NOT_GIVEN: 0,
    OUT_OF_IMAGINATION: 1,
    CANCELED_EARLY: 2,
    BUILD_ENDED: 3
};

const ImmunityState = {
    PUSH: 0,
    POP: 1
};

const KillType = {
    VIOLENT: 0,
    SILENT: 1
};

const MissionLockState = {
    LOCKED: 0,
    NEW: 1,
    UNLOCKED: 2
};

const NotifyType = {
    SUCCESS: 0,
    QUIT: 1,
    FAILED: 2,
    BEGIN: 3,
    READY: 4,
    NAMING_PET: 5
};

const ObjectWorldState = {
    IN_WORLD: 0,
    ATTACHED: 1,
    INVENTORY: 2
};

const RacingClientNotificationType = {
    INVALID: 0,
    ACTIVITY_START: 1,
    REWARD_PLAYER: 2,
    EXIT: 3,
    REPLAY: 4,
    REMOVE_PLAYER: 5,
    LEADERBOARD_UPDATED: 6
};

const ResultType = {
    NOT_FOUND: 0,
    INVITE_SENT: 1,
    OUT_OF_RANGE: 2,
    ALREADY_TRADING: 3,
    GENERAL_ERROR: 4
};

const StunState = {
    PUSH: 0,
    POP: 1
};

const TerminateType = {
    RANGE: 0,
    USER: 1,
    FROM_INTERACTION: 2
};

const TriggerOperator = {
    INVALID_OPERATOR: 0,
    EQUAL: 1,
    NOT_EQUAL: 2,
    GREATER: 3,
    GREATER_EQUAL: 4,
    LESS: 5,
    LESS_EQUAL: 6
};

const TriggerStat = {
    INVALID_STAT: 0,
    HEALTH: 1,
    ARMOR: 2,
    IMAGINATION: 3
};