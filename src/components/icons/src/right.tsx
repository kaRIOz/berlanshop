import BaseIcon from "../base-icon";
import type { SvgICON } from "../icon.types";


export default function SvgIcon(props:SvgICON) {
  return (
    <BaseIcon {...props}>
      <path d="M7.505 3L16.5 12.027L7.5 21"/>
    </BaseIcon>
  )
}