import React from "react";

interface IStatComponentProps {
  statName?: string;
  baseStat?: string;
}

enum MinOrMax {
  Min,
  Max,
}

// Source: https://pokemon.fandom.com/wiki/Statistics#:~:text=From%20Generation%20III%20onward%2C%20a,Level)%20%2B%205)%20x%20Nature
const calculateHP = (
  base_stat: number,
  IV: number,
  EV: number,
  level: number
) => {
  return (
    Math.floor(0.01 * (2 * base_stat + IV + Math.floor(0.25 * EV)) * level) +
    level +
    10
  );
};

const calculateMinOrMaxHP = (
  min_or_max: MinOrMax,
  base_stat: number,
  IV: number = min_or_max === MinOrMax.Min ? 0 : 31,
  EV: number = min_or_max === MinOrMax.Min ? 0 : 252,
  level: number = 100
) => {
  return calculateHP(base_stat, IV, EV, level);
};

const caculateOtherStats = (
  base_stat: number,
  IV: number,
  EV: number,
  level: number,
  natureModifier: number
) => {
  return (
    (Math.floor(0.01 * (2 * base_stat + IV + Math.floor(0.25 * EV)) * level) +
      5) *
    natureModifier
  );
};

const calculateMinOrMaxOtherStats = (
  min_or_max: MinOrMax,
  base_stat: number,
  IV: number = min_or_max === MinOrMax.Min ? 0 : 31,
  EV: number = min_or_max === MinOrMax.Min ? 0 : 252,
  level: number = 100
) => {
  let natureModifier = 0;
  if (min_or_max === MinOrMax.Max) {
    natureModifier = 1.1;
  } else {
    natureModifier = 0.9;
  }

  return caculateOtherStats(base_stat, IV, EV, level, natureModifier);
};

const StatComponent = (props: IStatComponentProps) => {
  return <div>StatComponent</div>;
};

export default StatComponent;
