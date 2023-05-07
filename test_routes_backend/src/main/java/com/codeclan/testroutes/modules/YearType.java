package com.codeclan.testroutes.modules;

import com.fasterxml.jackson.annotation.JsonProperty;

public enum YearType {
    @JsonProperty("1") ONE,
    @JsonProperty("2") TWO,
    @JsonProperty("3") THREE,
    @JsonProperty("4") FOUR,
    @JsonProperty("5") FIVE,
    @JsonProperty("6") SIX
}
