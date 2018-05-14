/* eslint-disable no-undef */
export const flagWidth = 190;
export const flagHeight = 128;

export const teams = {
    ru: {
        name: "Russia",
        flagOffsets: {
            x: flagWidth * 2,
            y: flagHeight * 2
        }
    },
    sa: {
        name: "S. Arabia",
        flagOffsets: {
            x: flagWidth * 1,
            y: flagHeight * 3
        }
    },
    eg: {
        name: "Egypt",
        flagOffsets: {
            x: flagWidth * 0,
            y: flagHeight * 4
        }
    },
    uy: {
        name: "Uruguay",
        flagOffsets: {
            x: flagWidth * 5,
            y: flagHeight * 3
        }
    },
    pt: {
        name: "Portugal",
        flagOffsets: {
            x: flagWidth * 3,
            y: flagHeight * 2
        }
    },
    es: {
        name: "Spain",
        flagOffsets: {
            x: flagWidth * 2,
            y: flagHeight * 1
        }
    },
    ir: {
        name: "Iran",
        flagOffsets: {
            x: flagWidth * 3,
            y: flagHeight * 1
        }
    },
    fr: {
        name: "France",
        flagOffsets: {
            x: flagWidth * 2,
            y: flagHeight * 0
        }
    },
    au: {
        name: "Australia",
        flagOffsets: {
            x: flagWidth * 5,
            y: flagHeight * 0
        }
    },
    pe: {
        name: "Peru",
        flagOffsets: {
            x: flagWidth * 6,
            y: flagHeight * 2
        }
    },
    dk: {
        name: "Denmark",
        flagOffsets: {
            x: flagWidth * 1,
            y: flagHeight * 4
        }
    },
    ar: {
        name: "Argentina",
        flagOffsets: {
            x: flagWidth * 6,
            y: flagHeight * 3
        }
    },
    is: {
        name: "Iceland",
        flagOffsets: {
            x: flagWidth * 1,
            y: flagHeight * 1
        }
    },
    hr: {
        name: "Croatia",
        flagOffsets: {
            x: flagWidth * 1,
            y: flagHeight * 0
        }
    },
    ng: {
        name: "Nigeria",
        flagOffsets: {
            x: flagWidth * 6,
            y: flagHeight * 0
        }
    },
    br: {
        name: "Brazil",
        flagOffsets: {
            x: flagWidth * 3,
            y: flagHeight * 0
        }
    },
    ch: {
        name: "Switzld",
        flagOffsets: {
            x: flagWidth * 4,
            y: flagHeight * 3
        }
    },
    cr: {
        name: "C. Rica",
        flagOffsets: {
            x: flagWidth * 0,
            y: flagHeight * 0
        }
    },
    rs: {
        name: "Serbia",
        flagOffsets: {
            x: flagWidth * 4,
            y: flagHeight * 2
        }
    },
    ge: {
        name: "Germany",
        flagOffsets: {
            x: flagWidth * 2,
            y: flagHeight * 1
        }
    },
    mx: {
        name: "Mexico",
        flagOffsets: {
            x: flagWidth * 5,
            y: flagHeight * 1
        }
    },
    se: {
        name: "Sweden",
        flagOffsets: {
            x: flagWidth * 0,
            y: flagHeight * 2
        }
    },
    sk: {
        name: "S. Korea",
        flagOffsets: {
            x: flagWidth * 6,
            y: flagHeight * 1
        }
    },
    be: {
        name: "Belgium",
        flagOffsets: {
            x: flagWidth * 2,
            y: flagHeight * 4
        }
    },
    pa: {
        name: "Panama",
        flagOffsets: {
            x: flagWidth * 3,
            y: flagHeight * 4
        }
    },
    tn: {
        name: "Tunisia",
        flagOffsets: {
            x: flagWidth * 2,
            y: flagHeight * 3
        }
    },
    gb: {
        name: "England",
        flagOffsets: {
            x: flagWidth * 3,
            y: flagHeight * 3
        }
    },
    pl: {
        name: "Poland",
        flagOffsets: {
            x: flagWidth * 5,
            y: flagHeight * 2
        }
    },
    sn: {
        name: "Senegal",
        flagOffsets: {
            x: flagWidth * 0,
            y: flagHeight * 3
        }
    },
    co: {
        name: "Colombia",
        flagOffsets: {
            x: flagWidth * 0,
            y: flagHeight * 1
        }
    },
    jp: {
        name: "Japan",
        flagOffsets: {
            x: flagWidth * 4,
            y: flagHeight * 1
        }
    },
    ma: {
        name: "Morocco",
        flagOffsets: {
            x: flagWidth * 4,
            y: flagHeight * 0
        }
    }
};

/**
 * Get the team info as name from the team code and an array of teams data
 *
 * @param teamCode
 */
export default function getTeamInfos(teamCode) {
    return teams[teamCode];
}

/**
 * Validates a phase given its array
 *
 * @param phase
 * @returns {boolean}
 */
export function validatePhase(phase) {
    for(let i = 0; i<phase.length; i++) {
        if(phase[i].winner ==='') return false
    }
    return true;
}


/**
 * Generates the proper html code from the bracket
 *
 * @returns {string}
 */
export function renderBracket() {
    let $groupstage= $("#group-stage");
    let $sixteenround= $("#sixteen-round");
    let $quarterround= $("#quarter-round");
    let $semiround= $("#semi-round");
    let $finalround= $("#final-round");

    return [$groupstage, $sixteenround, $quarterround, $semiround, $finalround];
}

/**
 * checks if the round name is valid
 *
 * @param round
 */
export function validateRoundName(round) {
    if(['groupStage', 'sixteen', 'quarter', 'semi', 'final'].indexOf(round) === -1) {
        throw "Error: Incorrect round String";
    }
}

/**
 * return the next phases after a given phase
 *
 * @param round
 * @returns {array}
 */
export function getNextPhases(round) {
    if(round !== 'final') {
        validateRoundName(round);

        let rounds = ['groupStage', 'sixteen', 'quarter', 'semi', 'final'];
        return rounds.splice(rounds.indexOf(round) + 1);
    }
}