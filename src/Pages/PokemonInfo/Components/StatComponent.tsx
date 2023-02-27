import React from "react";
import StatComponentCss from "./StatComponent.module.css";

interface IStatComponentProps {
  statName: string | undefined;
  baseStat: number | undefined;
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
  base_stat: number | undefined,
  IV: number = min_or_max === MinOrMax.Min ? 0 : 31,
  EV: number = min_or_max === MinOrMax.Min ? 0 : 252,
  level: number = 100
): number => {
  if (base_stat !== undefined) {
    return calculateHP(base_stat, IV, EV, level);
  } else {
    return 0;
  }
};

const caculateOtherStats = (
  base_stat: number,
  IV: number,
  EV: number,
  level: number,
  natureModifier: number
) => {
  return Math.floor(
    (0.01 * (2 * base_stat + IV + Math.floor(0.25 * EV)) * level + 5) *
      natureModifier
  );
};

const calculateMinOrMaxOtherStats = (
  min_or_max: MinOrMax,
  base_stat: number | undefined,
  IV: number = min_or_max === MinOrMax.Min ? 0 : 31,
  EV: number = min_or_max === MinOrMax.Min ? 0 : 252,
  level: number = 100
): number => {
  let natureModifier = 0;
  if (min_or_max === MinOrMax.Max) {
    natureModifier = 1.1;
  } else {
    natureModifier = 0.9;
  }
  if (base_stat !== undefined) {
    return caculateOtherStats(base_stat, IV, EV, level, natureModifier);
  } else {
    return 0;
  }
};

const calculateBarWidth = (baseStat: number | undefined): string => {
  if (baseStat !== undefined) {
    const calcVal = Math.min((baseStat / 255) * 100);
    console.log(`${calcVal}% logged `);
    return `${calcVal}%`;
  } else {
    return "0%";
  }
};

const StatComponent = (props: IStatComponentProps) => {
  return (
    <div className={StatComponentCss.overall_container}>
      <h6 className={StatComponentCss.stat_item}>{props.statName}</h6>
      <h6 className={StatComponentCss.stat_item}>{props.baseStat}</h6>
      <div className={StatComponentCss.stat_bar_container}>
        <div
          // style={{ maxWidth: calculateBarWidth(props.baseStat) }}
          style={{ maxWidth: calculateBarWidth(props.baseStat) }}
          className={`${StatComponentCss.stat_bar} ${StatComponentCss.stat_item} ${StatComponentCss.third}`}
        ></div>
      </div>
      {props.statName?.toLocaleLowerCase() === "hp" ? (
        <h6 className={StatComponentCss.stat_item}>
          {calculateMinOrMaxHP(MinOrMax.Min, props.baseStat)}
        </h6>
      ) : (
        <h6 className={StatComponentCss.stat_item}>
          {calculateMinOrMaxOtherStats(MinOrMax.Min, props.baseStat)}
        </h6>
      )}
      {props.statName?.toLocaleLowerCase() === "hp" ? (
        <h6 className={StatComponentCss.stat_item}>
          {calculateMinOrMaxHP(MinOrMax.Max, props.baseStat)}
        </h6>
      ) : (
        <h6 className={StatComponentCss.stat_item}>
          {calculateMinOrMaxOtherStats(MinOrMax.Max, props.baseStat)}
        </h6>
      )}
    </div>
  );
};

export default StatComponent;
