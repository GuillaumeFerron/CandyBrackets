/* eslint-disable no-undef */
export const teams = {
    ru: {
        name: "Russia",
    },
    sa: {
        name: "S. Arabia",
    },
    eg: {
        name: "Egypt",
    },
    uy: {
        name: "Uruguay",
    },
    pt: {
        name: "Portugal",
    },
    es: {
        name: "Spain",
    },
    ir: {
        name: "Iran",
    },
    fr: {
        name: "France",
    },
    au: {
        name: "Australia",
    },
    pe: {
        name: "Peru",
    },
    dk: {
        name: "Denmark",
    },
    ar: {
        name: "Argentina",
    },
    is: {
        name: "Iceland",
    },
    hr: {
        name: "Croatia",
    },
    ng: {
        name: "Nigeria",
    },
    br: {
        name: "Brazil",
    },
    ch: {
        name: "Switzld",
    },
    cr: {
        name: "C. Rica",
    },
    rs: {
        name: "Serbia",
    },
    ge: {
        name: "Germany",
    },
    mx: {
        name: "Mexico",
    },
    se: {
        name: "Sweden",
    },
    sk: {
        name: "S. Korea",
    },
    be: {
        name: "Belgium",
    },
    pa: {
        name: "Panama",
    },
    tn: {
        name: "Tunisia",
    },
    gb: {
        name: "England",
    },
    pl: {
        name: "Poland",
    },
    sn: {
        name: "Senegal",
    },
    co: {
        name: "Colombia",
    },
    jp: {
        name: "Japan",
    },
    ma: {
        name: "Morocco",
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
    let bracketHTML = ``;
    let $groupstage= $("#group-stage");
    let $sixteenround= $("#sixteen-round");
    let $quarterround= $("#quarter-round");
    let $semiround= $("#semi-round");
    let $finalround= $("#final-round");
    let header = "<!DOCTYPE html>\n" +
        "<html>\n" +
        "<head>\n" +
        "<meta charset=\"utf-8\"/>\n" +
        "</head>\n" +
        "<body>";
    let footer = "</body></html>";
    let reg = /\[data-v-[a-z, 0-9]{8}\]/g;

    bracketHTML = header + $groupstage.html() + $sixteenround.html() + $quarterround.html() + $semiround.html() + $finalround.html() + footer;
    return bracketHTML.replace(reg, '');
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