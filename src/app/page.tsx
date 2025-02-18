import { ArrowRight, Copy, Mail } from 'lucide-react';
import { Button } from "./componentes/button";
import { IconButton } from './componentes/icon-buttom';
import { InputField, InputIcon, InputRoot } from './componentes/input';


export default function Home() {
  return (
    <main>
      <Button type='submit'>
        Enviar
        <ArrowRight/>
      </Button>

      <IconButton>
         <Copy/>
      </IconButton>

      <div>
        <InputRoot>
          <InputIcon>
            <Mail className='size-5'/>
          </InputIcon>

          <InputField />
        </InputRoot>
      </div>
    </main>
  );
}
