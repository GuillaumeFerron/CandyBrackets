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