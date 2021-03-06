"use strict";

angular.module("cdsApp").constant("LANGUAGES", {
    "available" : [{
        name: "Deutsch",
        key : "de_DE"
    }, {
        name: "English",
        key : "en_GB"
    }, {
        name: "English (Canadian)",
        key : "en_CA"
    }, {
        name: "English (United States)",
        key : "en_US"
    }, {
        name: "Español",
        key : "es_ES"
    }, {
        name: "Français",
        key : "fr_FR"
    }, {
        name: "Français (Canadien)",
        key : "fr_CA"
    },  {
        name: "Italiano",
        key : "it_IT"
    }, {
        name: "Lietuviškai",
        key : "lt_LT"
    }, {
        name: "Nederlands",
        key : "nl_NL"
    }, {
        name: "Polski",
        key : "pl_PL"
    }, {
        name: "Português",
        key : "pt_PT"
    }, {
        name: "Suomi",
        key : "fi_FI"
    }, {
        name: "Česky",
        key : "cs_CZ"
    }],
    "default"   : "en_US",
    "fallback"  : "en_US"
});
