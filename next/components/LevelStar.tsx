import React, { ReactNode } from "react";
import StarPurple500Icon from "@mui/icons-material/StarPurple500";
import StarRateIcon from "@mui/icons-material/StarRate";

type Props = {
  level: number;
};

const For = <T,>({
  v,
  children,
}: {
  v: [T, (v: T) => unknown, (v: T) => T];
  children: (v: T, index: number) => ReactNode;
}) => {
  let index = 0;
  const value: ReactNode[] = [];
  for (let i = v[0]; v[1](i); i = v[2](i)) {
    value.push(children(i, index++));
  }
  return <>{value}</>;
};

const LevelStar = ({ level }: Props) => {
  return (
    <div>
      <For v={[0, (i) => i < level, (i) => i + 1]}>
        {(i, index) => <StarRateIcon fontSize="small" />}
      </For>
      <For v={[0, (i) => i < 5 - level, (i) => i + 1]}>
        {(i, index) => <StarPurple500Icon fontSize="small" />}
      </For>
    </div>
  );
};

export default LevelStar;
