import { Copy, Link } from 'lucide-react'
import { IconButton } from '../componentes/icon-buttom'
import { InputField, InputIcon, InputRoot } from '../componentes/input'

export function InviteLinkInput() {
  return (
    <InputRoot>
      <InputIcon>
        <Link className="size-5" />
      </InputIcon>
      <InputField
        readOnly
        defaultValue="http://localhost:3000/invite/defalt1"
      />

      <IconButton className="-mr-2">
        <Copy className="size-5" />
      </IconButton>
    </InputRoot>
  )
}
