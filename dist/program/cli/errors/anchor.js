"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountSysvarMismatch = exports.AccountNotAssociatedTokenAccount = exports.AccountNotProgramData = exports.AccountNotInitialized = exports.AccountNotSystemOwned = exports.AccountNotSigner = exports.InvalidProgramExecutable = exports.InvalidProgramId = exports.AccountOwnedByWrongProgram = exports.AccountNotMutable = exports.AccountNotEnoughKeys = exports.AccountDidNotSerialize = exports.AccountDidNotDeserialize = exports.AccountDiscriminatorMismatch = exports.AccountDiscriminatorNotFound = exports.AccountDiscriminatorAlreadySet = exports.RequireGteViolated = exports.RequireGtViolated = exports.RequireKeysNeqViolated = exports.RequireNeqViolated = exports.RequireKeysEqViolated = exports.RequireEqViolated = exports.RequireViolated = exports.ConstraintAccountIsNone = exports.ConstraintSpace = exports.ConstraintMintDecimals = exports.ConstraintMintFreezeAuthority = exports.ConstraintMintMintAuthority = exports.ConstraintTokenOwner = exports.ConstraintTokenMint = exports.ConstraintZero = exports.ConstraintAddress = exports.ConstraintClose = exports.ConstraintAssociatedInit = exports.ConstraintAssociated = exports.ConstraintState = exports.ConstraintExecutable = exports.ConstraintSeeds = exports.ConstraintRentExempt = exports.ConstraintOwner = exports.ConstraintRaw = exports.ConstraintSigner = exports.ConstraintHasOne = exports.ConstraintMut = exports.IdlInstructionInvalidProgram = exports.IdlInstructionStub = exports.InstructionDidNotSerialize = exports.InstructionDidNotDeserialize = exports.InstructionFallbackNotFound = exports.InstructionMissing = void 0;
exports.fromCode = exports.Deprecated = exports.DeclaredProgramIdMismatch = exports.AccountDuplicateReallocs = exports.AccountReallocExceedsLimit = void 0;
class InstructionMissing extends Error {
    logs;
    static code = 100;
    code = 100;
    name = "InstructionMissing";
    msg = "8 byte instruction identifier not provided";
    constructor(logs) {
        super("100: 8 byte instruction identifier not provided");
        this.logs = logs;
    }
}
exports.InstructionMissing = InstructionMissing;
class InstructionFallbackNotFound extends Error {
    logs;
    static code = 101;
    code = 101;
    name = "InstructionFallbackNotFound";
    msg = "Fallback functions are not supported";
    constructor(logs) {
        super("101: Fallback functions are not supported");
        this.logs = logs;
    }
}
exports.InstructionFallbackNotFound = InstructionFallbackNotFound;
class InstructionDidNotDeserialize extends Error {
    logs;
    static code = 102;
    code = 102;
    name = "InstructionDidNotDeserialize";
    msg = "The program could not deserialize the given instruction";
    constructor(logs) {
        super("102: The program could not deserialize the given instruction");
        this.logs = logs;
    }
}
exports.InstructionDidNotDeserialize = InstructionDidNotDeserialize;
class InstructionDidNotSerialize extends Error {
    logs;
    static code = 103;
    code = 103;
    name = "InstructionDidNotSerialize";
    msg = "The program could not serialize the given instruction";
    constructor(logs) {
        super("103: The program could not serialize the given instruction");
        this.logs = logs;
    }
}
exports.InstructionDidNotSerialize = InstructionDidNotSerialize;
class IdlInstructionStub extends Error {
    logs;
    static code = 1000;
    code = 1000;
    name = "IdlInstructionStub";
    msg = "The program was compiled without idl instructions";
    constructor(logs) {
        super("1000: The program was compiled without idl instructions");
        this.logs = logs;
    }
}
exports.IdlInstructionStub = IdlInstructionStub;
class IdlInstructionInvalidProgram extends Error {
    logs;
    static code = 1001;
    code = 1001;
    name = "IdlInstructionInvalidProgram";
    msg = "The transaction was given an invalid program for the IDL instruction";
    constructor(logs) {
        super("1001: The transaction was given an invalid program for the IDL instruction");
        this.logs = logs;
    }
}
exports.IdlInstructionInvalidProgram = IdlInstructionInvalidProgram;
class ConstraintMut extends Error {
    logs;
    static code = 2000;
    code = 2000;
    name = "ConstraintMut";
    msg = "A mut constraint was violated";
    constructor(logs) {
        super("2000: A mut constraint was violated");
        this.logs = logs;
    }
}
exports.ConstraintMut = ConstraintMut;
class ConstraintHasOne extends Error {
    logs;
    static code = 2001;
    code = 2001;
    name = "ConstraintHasOne";
    msg = "A has one constraint was violated";
    constructor(logs) {
        super("2001: A has one constraint was violated");
        this.logs = logs;
    }
}
exports.ConstraintHasOne = ConstraintHasOne;
class ConstraintSigner extends Error {
    logs;
    static code = 2002;
    code = 2002;
    name = "ConstraintSigner";
    msg = "A signer constraint was violated";
    constructor(logs) {
        super("2002: A signer constraint was violated");
        this.logs = logs;
    }
}
exports.ConstraintSigner = ConstraintSigner;
class ConstraintRaw extends Error {
    logs;
    static code = 2003;
    code = 2003;
    name = "ConstraintRaw";
    msg = "A raw constraint was violated";
    constructor(logs) {
        super("2003: A raw constraint was violated");
        this.logs = logs;
    }
}
exports.ConstraintRaw = ConstraintRaw;
class ConstraintOwner extends Error {
    logs;
    static code = 2004;
    code = 2004;
    name = "ConstraintOwner";
    msg = "An owner constraint was violated";
    constructor(logs) {
        super("2004: An owner constraint was violated");
        this.logs = logs;
    }
}
exports.ConstraintOwner = ConstraintOwner;
class ConstraintRentExempt extends Error {
    logs;
    static code = 2005;
    code = 2005;
    name = "ConstraintRentExempt";
    msg = "A rent exemption constraint was violated";
    constructor(logs) {
        super("2005: A rent exemption constraint was violated");
        this.logs = logs;
    }
}
exports.ConstraintRentExempt = ConstraintRentExempt;
class ConstraintSeeds extends Error {
    logs;
    static code = 2006;
    code = 2006;
    name = "ConstraintSeeds";
    msg = "A seeds constraint was violated";
    constructor(logs) {
        super("2006: A seeds constraint was violated");
        this.logs = logs;
    }
}
exports.ConstraintSeeds = ConstraintSeeds;
class ConstraintExecutable extends Error {
    logs;
    static code = 2007;
    code = 2007;
    name = "ConstraintExecutable";
    msg = "An executable constraint was violated";
    constructor(logs) {
        super("2007: An executable constraint was violated");
        this.logs = logs;
    }
}
exports.ConstraintExecutable = ConstraintExecutable;
class ConstraintState extends Error {
    logs;
    static code = 2008;
    code = 2008;
    name = "ConstraintState";
    msg = "Deprecated Error, feel free to replace with something else";
    constructor(logs) {
        super("2008: Deprecated Error, feel free to replace with something else");
        this.logs = logs;
    }
}
exports.ConstraintState = ConstraintState;
class ConstraintAssociated extends Error {
    logs;
    static code = 2009;
    code = 2009;
    name = "ConstraintAssociated";
    msg = "An associated constraint was violated";
    constructor(logs) {
        super("2009: An associated constraint was violated");
        this.logs = logs;
    }
}
exports.ConstraintAssociated = ConstraintAssociated;
class ConstraintAssociatedInit extends Error {
    logs;
    static code = 2010;
    code = 2010;
    name = "ConstraintAssociatedInit";
    msg = "An associated init constraint was violated";
    constructor(logs) {
        super("2010: An associated init constraint was violated");
        this.logs = logs;
    }
}
exports.ConstraintAssociatedInit = ConstraintAssociatedInit;
class ConstraintClose extends Error {
    logs;
    static code = 2011;
    code = 2011;
    name = "ConstraintClose";
    msg = "A close constraint was violated";
    constructor(logs) {
        super("2011: A close constraint was violated");
        this.logs = logs;
    }
}
exports.ConstraintClose = ConstraintClose;
class ConstraintAddress extends Error {
    logs;
    static code = 2012;
    code = 2012;
    name = "ConstraintAddress";
    msg = "An address constraint was violated";
    constructor(logs) {
        super("2012: An address constraint was violated");
        this.logs = logs;
    }
}
exports.ConstraintAddress = ConstraintAddress;
class ConstraintZero extends Error {
    logs;
    static code = 2013;
    code = 2013;
    name = "ConstraintZero";
    msg = "Expected zero account discriminant";
    constructor(logs) {
        super("2013: Expected zero account discriminant");
        this.logs = logs;
    }
}
exports.ConstraintZero = ConstraintZero;
class ConstraintTokenMint extends Error {
    logs;
    static code = 2014;
    code = 2014;
    name = "ConstraintTokenMint";
    msg = "A token mint constraint was violated";
    constructor(logs) {
        super("2014: A token mint constraint was violated");
        this.logs = logs;
    }
}
exports.ConstraintTokenMint = ConstraintTokenMint;
class ConstraintTokenOwner extends Error {
    logs;
    static code = 2015;
    code = 2015;
    name = "ConstraintTokenOwner";
    msg = "A token owner constraint was violated";
    constructor(logs) {
        super("2015: A token owner constraint was violated");
        this.logs = logs;
    }
}
exports.ConstraintTokenOwner = ConstraintTokenOwner;
class ConstraintMintMintAuthority extends Error {
    logs;
    static code = 2016;
    code = 2016;
    name = "ConstraintMintMintAuthority";
    msg = "A mint mint authority constraint was violated";
    constructor(logs) {
        super("2016: A mint mint authority constraint was violated");
        this.logs = logs;
    }
}
exports.ConstraintMintMintAuthority = ConstraintMintMintAuthority;
class ConstraintMintFreezeAuthority extends Error {
    logs;
    static code = 2017;
    code = 2017;
    name = "ConstraintMintFreezeAuthority";
    msg = "A mint freeze authority constraint was violated";
    constructor(logs) {
        super("2017: A mint freeze authority constraint was violated");
        this.logs = logs;
    }
}
exports.ConstraintMintFreezeAuthority = ConstraintMintFreezeAuthority;
class ConstraintMintDecimals extends Error {
    logs;
    static code = 2018;
    code = 2018;
    name = "ConstraintMintDecimals";
    msg = "A mint decimals constraint was violated";
    constructor(logs) {
        super("2018: A mint decimals constraint was violated");
        this.logs = logs;
    }
}
exports.ConstraintMintDecimals = ConstraintMintDecimals;
class ConstraintSpace extends Error {
    logs;
    static code = 2019;
    code = 2019;
    name = "ConstraintSpace";
    msg = "A space constraint was violated";
    constructor(logs) {
        super("2019: A space constraint was violated");
        this.logs = logs;
    }
}
exports.ConstraintSpace = ConstraintSpace;
class ConstraintAccountIsNone extends Error {
    logs;
    static code = 2020;
    code = 2020;
    name = "ConstraintAccountIsNone";
    msg = "A required account for the constraint is None";
    constructor(logs) {
        super("2020: A required account for the constraint is None");
        this.logs = logs;
    }
}
exports.ConstraintAccountIsNone = ConstraintAccountIsNone;
class RequireViolated extends Error {
    logs;
    static code = 2500;
    code = 2500;
    name = "RequireViolated";
    msg = "A require expression was violated";
    constructor(logs) {
        super("2500: A require expression was violated");
        this.logs = logs;
    }
}
exports.RequireViolated = RequireViolated;
class RequireEqViolated extends Error {
    logs;
    static code = 2501;
    code = 2501;
    name = "RequireEqViolated";
    msg = "A require_eq expression was violated";
    constructor(logs) {
        super("2501: A require_eq expression was violated");
        this.logs = logs;
    }
}
exports.RequireEqViolated = RequireEqViolated;
class RequireKeysEqViolated extends Error {
    logs;
    static code = 2502;
    code = 2502;
    name = "RequireKeysEqViolated";
    msg = "A require_keys_eq expression was violated";
    constructor(logs) {
        super("2502: A require_keys_eq expression was violated");
        this.logs = logs;
    }
}
exports.RequireKeysEqViolated = RequireKeysEqViolated;
class RequireNeqViolated extends Error {
    logs;
    static code = 2503;
    code = 2503;
    name = "RequireNeqViolated";
    msg = "A require_neq expression was violated";
    constructor(logs) {
        super("2503: A require_neq expression was violated");
        this.logs = logs;
    }
}
exports.RequireNeqViolated = RequireNeqViolated;
class RequireKeysNeqViolated extends Error {
    logs;
    static code = 2504;
    code = 2504;
    name = "RequireKeysNeqViolated";
    msg = "A require_keys_neq expression was violated";
    constructor(logs) {
        super("2504: A require_keys_neq expression was violated");
        this.logs = logs;
    }
}
exports.RequireKeysNeqViolated = RequireKeysNeqViolated;
class RequireGtViolated extends Error {
    logs;
    static code = 2505;
    code = 2505;
    name = "RequireGtViolated";
    msg = "A require_gt expression was violated";
    constructor(logs) {
        super("2505: A require_gt expression was violated");
        this.logs = logs;
    }
}
exports.RequireGtViolated = RequireGtViolated;
class RequireGteViolated extends Error {
    logs;
    static code = 2506;
    code = 2506;
    name = "RequireGteViolated";
    msg = "A require_gte expression was violated";
    constructor(logs) {
        super("2506: A require_gte expression was violated");
        this.logs = logs;
    }
}
exports.RequireGteViolated = RequireGteViolated;
class AccountDiscriminatorAlreadySet extends Error {
    logs;
    static code = 3000;
    code = 3000;
    name = "AccountDiscriminatorAlreadySet";
    msg = "The account discriminator was already set on this account";
    constructor(logs) {
        super("3000: The account discriminator was already set on this account");
        this.logs = logs;
    }
}
exports.AccountDiscriminatorAlreadySet = AccountDiscriminatorAlreadySet;
class AccountDiscriminatorNotFound extends Error {
    logs;
    static code = 3001;
    code = 3001;
    name = "AccountDiscriminatorNotFound";
    msg = "No 8 byte discriminator was found on the account";
    constructor(logs) {
        super("3001: No 8 byte discriminator was found on the account");
        this.logs = logs;
    }
}
exports.AccountDiscriminatorNotFound = AccountDiscriminatorNotFound;
class AccountDiscriminatorMismatch extends Error {
    logs;
    static code = 3002;
    code = 3002;
    name = "AccountDiscriminatorMismatch";
    msg = "8 byte discriminator did not match what was expected";
    constructor(logs) {
        super("3002: 8 byte discriminator did not match what was expected");
        this.logs = logs;
    }
}
exports.AccountDiscriminatorMismatch = AccountDiscriminatorMismatch;
class AccountDidNotDeserialize extends Error {
    logs;
    static code = 3003;
    code = 3003;
    name = "AccountDidNotDeserialize";
    msg = "Failed to deserialize the account";
    constructor(logs) {
        super("3003: Failed to deserialize the account");
        this.logs = logs;
    }
}
exports.AccountDidNotDeserialize = AccountDidNotDeserialize;
class AccountDidNotSerialize extends Error {
    logs;
    static code = 3004;
    code = 3004;
    name = "AccountDidNotSerialize";
    msg = "Failed to serialize the account";
    constructor(logs) {
        super("3004: Failed to serialize the account");
        this.logs = logs;
    }
}
exports.AccountDidNotSerialize = AccountDidNotSerialize;
class AccountNotEnoughKeys extends Error {
    logs;
    static code = 3005;
    code = 3005;
    name = "AccountNotEnoughKeys";
    msg = "Not enough account keys given to the instruction";
    constructor(logs) {
        super("3005: Not enough account keys given to the instruction");
        this.logs = logs;
    }
}
exports.AccountNotEnoughKeys = AccountNotEnoughKeys;
class AccountNotMutable extends Error {
    logs;
    static code = 3006;
    code = 3006;
    name = "AccountNotMutable";
    msg = "The given account is not mutable";
    constructor(logs) {
        super("3006: The given account is not mutable");
        this.logs = logs;
    }
}
exports.AccountNotMutable = AccountNotMutable;
class AccountOwnedByWrongProgram extends Error {
    logs;
    static code = 3007;
    code = 3007;
    name = "AccountOwnedByWrongProgram";
    msg = "The given account is owned by a different program than expected";
    constructor(logs) {
        super("3007: The given account is owned by a different program than expected");
        this.logs = logs;
    }
}
exports.AccountOwnedByWrongProgram = AccountOwnedByWrongProgram;
class InvalidProgramId extends Error {
    logs;
    static code = 3008;
    code = 3008;
    name = "InvalidProgramId";
    msg = "Program ID was not as expected";
    constructor(logs) {
        super("3008: Program ID was not as expected");
        this.logs = logs;
    }
}
exports.InvalidProgramId = InvalidProgramId;
class InvalidProgramExecutable extends Error {
    logs;
    static code = 3009;
    code = 3009;
    name = "InvalidProgramExecutable";
    msg = "Program account is not executable";
    constructor(logs) {
        super("3009: Program account is not executable");
        this.logs = logs;
    }
}
exports.InvalidProgramExecutable = InvalidProgramExecutable;
class AccountNotSigner extends Error {
    logs;
    static code = 3010;
    code = 3010;
    name = "AccountNotSigner";
    msg = "The given account did not sign";
    constructor(logs) {
        super("3010: The given account did not sign");
        this.logs = logs;
    }
}
exports.AccountNotSigner = AccountNotSigner;
class AccountNotSystemOwned extends Error {
    logs;
    static code = 3011;
    code = 3011;
    name = "AccountNotSystemOwned";
    msg = "The given account is not owned by the system program";
    constructor(logs) {
        super("3011: The given account is not owned by the system program");
        this.logs = logs;
    }
}
exports.AccountNotSystemOwned = AccountNotSystemOwned;
class AccountNotInitialized extends Error {
    logs;
    static code = 3012;
    code = 3012;
    name = "AccountNotInitialized";
    msg = "The program expected this account to be already initialized";
    constructor(logs) {
        super("3012: The program expected this account to be already initialized");
        this.logs = logs;
    }
}
exports.AccountNotInitialized = AccountNotInitialized;
class AccountNotProgramData extends Error {
    logs;
    static code = 3013;
    code = 3013;
    name = "AccountNotProgramData";
    msg = "The given account is not a program data account";
    constructor(logs) {
        super("3013: The given account is not a program data account");
        this.logs = logs;
    }
}
exports.AccountNotProgramData = AccountNotProgramData;
class AccountNotAssociatedTokenAccount extends Error {
    logs;
    static code = 3014;
    code = 3014;
    name = "AccountNotAssociatedTokenAccount";
    msg = "The given account is not the associated token account";
    constructor(logs) {
        super("3014: The given account is not the associated token account");
        this.logs = logs;
    }
}
exports.AccountNotAssociatedTokenAccount = AccountNotAssociatedTokenAccount;
class AccountSysvarMismatch extends Error {
    logs;
    static code = 3015;
    code = 3015;
    name = "AccountSysvarMismatch";
    msg = "The given public key does not match the required sysvar";
    constructor(logs) {
        super("3015: The given public key does not match the required sysvar");
        this.logs = logs;
    }
}
exports.AccountSysvarMismatch = AccountSysvarMismatch;
class AccountReallocExceedsLimit extends Error {
    logs;
    static code = 3016;
    code = 3016;
    name = "AccountReallocExceedsLimit";
    msg = "The account reallocation exceeds the MAX_PERMITTED_DATA_INCREASE limit";
    constructor(logs) {
        super("3016: The account reallocation exceeds the MAX_PERMITTED_DATA_INCREASE limit");
        this.logs = logs;
    }
}
exports.AccountReallocExceedsLimit = AccountReallocExceedsLimit;
class AccountDuplicateReallocs extends Error {
    logs;
    static code = 3017;
    code = 3017;
    name = "AccountDuplicateReallocs";
    msg = "The account was duplicated for more than one reallocation";
    constructor(logs) {
        super("3017: The account was duplicated for more than one reallocation");
        this.logs = logs;
    }
}
exports.AccountDuplicateReallocs = AccountDuplicateReallocs;
class DeclaredProgramIdMismatch extends Error {
    logs;
    static code = 4100;
    code = 4100;
    name = "DeclaredProgramIdMismatch";
    msg = "The declared program id does not match the actual program id";
    constructor(logs) {
        super("4100: The declared program id does not match the actual program id");
        this.logs = logs;
    }
}
exports.DeclaredProgramIdMismatch = DeclaredProgramIdMismatch;
class Deprecated extends Error {
    logs;
    static code = 5000;
    code = 5000;
    name = "Deprecated";
    msg = "The API being used is deprecated and should no longer be used";
    constructor(logs) {
        super("5000: The API being used is deprecated and should no longer be used");
        this.logs = logs;
    }
}
exports.Deprecated = Deprecated;
function fromCode(code, logs) {
    switch (code) {
        case 100:
            return new InstructionMissing(logs);
        case 101:
            return new InstructionFallbackNotFound(logs);
        case 102:
            return new InstructionDidNotDeserialize(logs);
        case 103:
            return new InstructionDidNotSerialize(logs);
        case 1000:
            return new IdlInstructionStub(logs);
        case 1001:
            return new IdlInstructionInvalidProgram(logs);
        case 2000:
            return new ConstraintMut(logs);
        case 2001:
            return new ConstraintHasOne(logs);
        case 2002:
            return new ConstraintSigner(logs);
        case 2003:
            return new ConstraintRaw(logs);
        case 2004:
            return new ConstraintOwner(logs);
        case 2005:
            return new ConstraintRentExempt(logs);
        case 2006:
            return new ConstraintSeeds(logs);
        case 2007:
            return new ConstraintExecutable(logs);
        case 2008:
            return new ConstraintState(logs);
        case 2009:
            return new ConstraintAssociated(logs);
        case 2010:
            return new ConstraintAssociatedInit(logs);
        case 2011:
            return new ConstraintClose(logs);
        case 2012:
            return new ConstraintAddress(logs);
        case 2013:
            return new ConstraintZero(logs);
        case 2014:
            return new ConstraintTokenMint(logs);
        case 2015:
            return new ConstraintTokenOwner(logs);
        case 2016:
            return new ConstraintMintMintAuthority(logs);
        case 2017:
            return new ConstraintMintFreezeAuthority(logs);
        case 2018:
            return new ConstraintMintDecimals(logs);
        case 2019:
            return new ConstraintSpace(logs);
        case 2020:
            return new ConstraintAccountIsNone(logs);
        case 2500:
            return new RequireViolated(logs);
        case 2501:
            return new RequireEqViolated(logs);
        case 2502:
            return new RequireKeysEqViolated(logs);
        case 2503:
            return new RequireNeqViolated(logs);
        case 2504:
            return new RequireKeysNeqViolated(logs);
        case 2505:
            return new RequireGtViolated(logs);
        case 2506:
            return new RequireGteViolated(logs);
        case 3000:
            return new AccountDiscriminatorAlreadySet(logs);
        case 3001:
            return new AccountDiscriminatorNotFound(logs);
        case 3002:
            return new AccountDiscriminatorMismatch(logs);
        case 3003:
            return new AccountDidNotDeserialize(logs);
        case 3004:
            return new AccountDidNotSerialize(logs);
        case 3005:
            return new AccountNotEnoughKeys(logs);
        case 3006:
            return new AccountNotMutable(logs);
        case 3007:
            return new AccountOwnedByWrongProgram(logs);
        case 3008:
            return new InvalidProgramId(logs);
        case 3009:
            return new InvalidProgramExecutable(logs);
        case 3010:
            return new AccountNotSigner(logs);
        case 3011:
            return new AccountNotSystemOwned(logs);
        case 3012:
            return new AccountNotInitialized(logs);
        case 3013:
            return new AccountNotProgramData(logs);
        case 3014:
            return new AccountNotAssociatedTokenAccount(logs);
        case 3015:
            return new AccountSysvarMismatch(logs);
        case 3016:
            return new AccountReallocExceedsLimit(logs);
        case 3017:
            return new AccountDuplicateReallocs(logs);
        case 4100:
            return new DeclaredProgramIdMismatch(logs);
        case 5000:
            return new Deprecated(logs);
    }
    return null;
}
exports.fromCode = fromCode;
